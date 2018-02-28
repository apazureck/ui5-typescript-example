import BaseController   from "typescript/example/ui5app/controller/BaseController";
import JSONModel        from "sap/ui/model/json/JSONModel";
import ODataModel from "sap/ui/model/odata/v2/ODataModel";
import SplitApp from "sap/m/SplitApp";

@UI5("typescript.example.ui5app.controller.App")
export default class App extends BaseController {

    public onInit(): void {
        var oViewModel: JSONModel,
            oComponent = this.getOwnerComponent(),
            oModel = oComponent.getModel<ODataModel>(),
            fnSetAppNotBusy: () => void,
            oListSelector = oComponent.oListSelector,
            iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();

        oViewModel = new JSONModel({
            busy : true,
            delay : 0
        }, true);
        this.setModel(oViewModel, "appView");

        fnSetAppNotBusy = () => {
            oViewModel.setProperty("/busy", false);
            oViewModel.setProperty("/delay", iOriginalBusyDelay);
        };

        oModel.metadataLoaded()
                .then(fnSetAppNotBusy);

        // Makes sure that master view is hidden in split app
        // after a new list entry has been selected.
        oListSelector.attachListSelectionChange(() => {
            this.byId<SplitApp>("idAppControl").hideMaster();
        }, this);

        // apply content density mode to root view
        this.getView().addStyleClass(oComponent.getContentDensityClass());
    }

}
