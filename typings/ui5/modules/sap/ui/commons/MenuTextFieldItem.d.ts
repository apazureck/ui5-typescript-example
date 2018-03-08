declare module "sap/ui/commons/MenuTextFieldItem" {
    import sap_ui_unified_MenuTextFieldItem from "sap/ui/unified/MenuTextFieldItem";

    export = MenuTextFieldItem;




    import MenuTextFieldItemBase from 'sap/ui/unified/MenuTextFieldItem'

    /**
    
    */
    class MenuTextFieldItem extends MenuTextFieldItemBase {

        /**
            * Constructor for a new MenuTextFieldItem element.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.commons.MenuTextFieldItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.MenuTextFieldItem.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.commons.MenuTextFieldItem.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

    }


}
