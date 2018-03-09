import { support } from "sap/ui/Device";
import models from "typescript/example/ui5app/model/models";
import ListSelector from "typescript/example/ui5app/controller/ListSelector";
import ErrorHandler from "typescript/example/ui5app/controller/ErrorHandler";
import Model from "sap/ui/model/Model";

@UI5("typescript.example.ui5app.Component")
 export default class Component extends sap.ui.core.UIComponent {
    public static metadata: any = {
        manifest: "json"
    };

    private oListSelector: ListSelector = new ListSelector();
    private _oErrorHandler: ErrorHandler = new ErrorHandler(this);
    private _sContentDensityClass: string | undefined = undefined;

    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * In this method, the device models are set and the router is initialized.
     * @public
     * @override
     */
    public init(): void {
        // set the device model
        this.setModel(models.createDeviceModel(), "device");

        // call the base component's init function and create the App view
        super.init();

        // create the views based on the url/hash
        this.getRouter().initialize();
    }

    /**
     * The component is destroyed by UI5 automatically.
     * In this method, the ListSelector and ErrorHandler are destroyed.
     * @public
     * @override
     */
    public destroy(bSuppressInvalidate: boolean): void {
        this.oListSelector.destroy();
        this._oErrorHandler.destroy();

        // call the base component's destroy function
        super.destroy(bSuppressInvalidate);
    }

    /**
     * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
     * design mode class should be set, which influences the size appearance of some controls.
     * @public
     * @return {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
     */
    public getContentDensityClass(): string {
        if (this._sContentDensityClass === undefined) {
            // check whether FLP has already set the content density class; do nothing in this case
            if ($(document.body).hasClass("sapUiSizeCozy") || $(document.body).hasClass("sapUiSizeCompact")) {
                this._sContentDensityClass = "";
            } else if (!support.touch) { // apply "compact" mode if touch is not supported
                this._sContentDensityClass = "sapUiSizeCompact";
            } else {
                // "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
                this._sContentDensityClass = "sapUiSizeCozy";
            }
        }
        return this._sContentDensityClass;
    }

    /**
     * Convenience method for getting the model.
     * @public
     * @override
     * @returns the model of the component
     */
    public getModel<T extends Model>(sName?: string): T {
        return <T>super.getModel(sName);
    }
}
