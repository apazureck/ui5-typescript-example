declare module "sap/ui/commons/MenuItemBase" {
    import sap_ui_unified_MenuItemBase from "sap/ui/unified/MenuItemBase";

    import MenuItemBaseBase from 'sap/ui/unified/MenuItemBase'

    /**
    
    */
    export default abstract class MenuItemBase extends MenuItemBaseBase {


        /**
            * Abstract base class `MenuItemBase` for menu item elements. Please use concrete subclasses.
        */
        public constructor(sId?: string, mSettings?: any);


    }

}
