import BaseController from "typescript/example/ui5app/controller/BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";
import formatter from "typescript/example/ui5app/model/formatter";
import ODataModel from "sap/ui/model/odata/v2/ODataModel";
import Event from "sap/ui/base/Event";
import ODataListBinding from "sap/ui/model/odata/v2/ODataListBinding";
import Table from "sap/m/Table";
import ODataContextBinding from "sap/ui/model/odata/v2/ODataContextBinding";
import { URLHelper } from "sap/m/library";

@UI5("typescript.example.ui5app.controller.Detail")
export default class Detail extends BaseController {
    public formatter = formatter;

    /* =========================================================== */
    /* lifecycle methods                                           */
    /* =========================================================== */

    onInit() {
        // Model used to manipulate control states. The chosen values make sure,
        // detail page is busy indication immediately so there is no break in
        // between the busy indication for loading the view's meta data
        var oViewModel = new JSONModel({
            busy: false,
            delay: 0,
            lineItemListTitle: this.getResourceBundle().getText("detailLineItemTableHeading")
        }, false);

        this.getRouter().getRoute("object").attachPatternMatched(this._onObjectMatched, this);

        this.setModel(oViewModel, "detailView");

        this.getOwnerComponent().getModel<ODataModel>().metadataLoaded().then(this._onMetadataLoaded.bind(this));
    }

    /* =========================================================== */
    /* event handlers                                              */
    /* =========================================================== */

    /**
     * Event handler when the share by E-Mail button has been clicked
     * @public
     */
    onShareEmailPress() {
        var oViewModel = this.getModel<JSONModel>("detailView");

        URLHelper.triggerEmail(
            <string><any>null,
            oViewModel.getProperty("/shareSendEmailSubject"),
            oViewModel.getProperty("/shareSendEmailMessage")
        );
    }


    /**
     * Updates the item count within the line item table's header
     * @param {object} oEvent an event containing the total number of items in the list
     * @private
     */
    onListUpdateFinished(oEvent: Event) {
        var sTitle,
            iTotalItems = oEvent.getParameter("total"),
            oViewModel = this.getModel<JSONModel>("detailView");

        // only update the counter if the length is final
        if ((<ODataListBinding>this.byId<Table>("lineItemsList").getBinding("items")).isLengthFinal()) {
            if (iTotalItems) {
                sTitle = this.getResourceBundle().getText("detailLineItemTableHeadingCount", [iTotalItems]);
            } else {
                //Display 'Line Items' instead of 'Line items (0)'
                sTitle = this.getResourceBundle().getText("detailLineItemTableHeading");
            }
            oViewModel.setProperty("/lineItemListTitle", sTitle);
        }
    }

    /* =========================================================== */
    /* begin: internal methods                                     */
    /* =========================================================== */

    /**
     * Binds the view to the object path and expands the aggregated line items.
     * @function
     * @param {sap.ui.base.Event} oEvent pattern match event in route 'object'
     * @private
     */
    private _onObjectMatched(oEvent: Event): void {
        var sObjectId = oEvent.getParameter("arguments").objectId;
        this.getModel<ODataModel>().metadataLoaded().then(() => {
            var sObjectPath = this.getModel<ODataModel>().createKey("Objects", {
                ObjectID: sObjectId
            });
            this._bindView("/" + sObjectPath);
        });
    }

    /**
     * Binds the view to the object path. Makes sure that detail view displays
     * a busy indicator while data for the corresponding element binding is loaded.
     * @function
     * @param {string} sObjectPath path to the object to be bound to the view.
     * @private
     */
    private _bindView(sObjectPath: string): void {
        // Set busy indicator during view binding
        var oViewModel = this.getModel<JSONModel>("detailView");

        // If the view was not bound yet its not busy, only if the binding requests data it is set to busy again
        oViewModel.setProperty("/busy", false);

        this.getView().bindElement({
            path: sObjectPath,
            events: {
                change: this._onBindingChange.bind(this),
                dataRequested: function () {
                    oViewModel.setProperty("/busy", true);
                },
                dataReceived: function () {
                    oViewModel.setProperty("/busy", false);
                }
            }
        });
    }

    private _onBindingChange(): void {
        var oView = this.getView(),
            oElementBinding = <ODataContextBinding>oView.getElementBinding(<string><any>undefined);

        // No data for the binding
        //TODO|openui5: method getBoundContext() doesn't exists on the docs, but it do exists on the ui5 library code.
        if (!(<any>oElementBinding).getBoundContext()) {
            this.getRouter().getTargets().display("detailObjectNotFound");
            // if object could not be found, the selection in the master list
            // does not make sense anymore.
            // Hack!
            (this.getOwnerComponent() as any).oListSelector.clearMasterListSelection();
            return;
        }

        //TODO|openui5: method getPath() doesn't exists on the docs, but it do exists on the ui5 library code.
        var sPath: string = (<any>oElementBinding).getPath(),
            oResourceBundle = this.getResourceBundle(),
            oObject = (<ODataModel>oView.getModel(undefined)).getObject(sPath),
            sObjectId = oObject.ObjectID,
            sObjectName = oObject.Name,
            oViewModel = this.getModel<JSONModel>("detailView");

        // Hack!
        (this.getOwnerComponent() as any).oListSelector.selectAListItem(sPath);

        oViewModel.setProperty("/shareSendEmailSubject",
            oResourceBundle.getText("shareSendEmailObjectSubject", [sObjectId]));
        oViewModel.setProperty("/shareSendEmailMessage",
            oResourceBundle.getText("shareSendEmailObjectMessage", [sObjectName, sObjectId, location.href]));
    }

    private _onMetadataLoaded(): void {
        // Store original busy indicator delay for the detail view
        var iOriginalViewBusyDelay = this.getView().getBusyIndicatorDelay(),
            oViewModel = this.getModel<JSONModel>("detailView"),
            oLineItemTable = this.byId<Table>("lineItemsList"),
            iOriginalLineItemTableBusyDelay = oLineItemTable.getBusyIndicatorDelay();

        // Make sure busy indicator is displayed immediately when
        // detail view is displayed for the first time
        oViewModel.setProperty("/delay", 0);
        oViewModel.setProperty("/lineItemTableDelay", 0);

        oLineItemTable.attachEventOnce("updateFinished", undefined, () => {
            // Restore original busy indicator delay for line item table
            oViewModel.setProperty("/lineItemTableDelay", iOriginalLineItemTableBusyDelay);
        });

        // Binding the view will set it to not busy - so the view is always busy if it is not bound
        oViewModel.setProperty("/busy", true);
        // Restore original busy indicator delay for the detail view
        oViewModel.setProperty("/delay", iOriginalViewBusyDelay);
    }
}
