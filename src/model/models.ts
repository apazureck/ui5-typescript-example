import JSONModel from "sap/ui/model/json/JSONModel";
import * as Device from "sap/ui/Device";
import { BindingMode } from "sap/ui/model/BindingMode";

export default {
    createDeviceModel(): JSONModel {
        //TODO|ui5ts: generate constructors
        var oModel = new JSONModel(Device, false);
        oModel.setDefaultBindingMode(BindingMode.OneWay);
        return oModel;
    }
};
