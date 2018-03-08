declare module "sap/uxap/ObjectPageDynamicHeaderContent" {

    export = ObjectPageDynamicHeaderContent;




    /**
    
    */
    class ObjectPageDynamicHeaderContent {

        /**
            * Constructor for a new `ObjectPageDynamicHeaderContent`.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.uxap.ObjectPageDynamicHeaderContent with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.f.DynamicPageHeader.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.uxap.ObjectPageDynamicHeaderContent.
        */
        public static getMetadata(): sap.ui.base.Metadata;

    }


}
