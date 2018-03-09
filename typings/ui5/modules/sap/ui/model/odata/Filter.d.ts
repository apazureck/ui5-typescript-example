declare module "sap/ui/model/odata/Filter" {

    /**
    
    */
    export default class Filter extends sap.ui.base.Object {


        /**
            * Constructor for Filter
        */
        public constructor(sPath: string, aValues: any[], bAND?: boolean);


        /**
            * Converts the `sap.ui.model.odata.Filter` into a `sap.ui.model.Filter`.
        */
        public convert(): sap.ui.model.Filter;

        /**
            * Creates a new subclass of class sap.ui.model.odata.Filter with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.model.odata.Filter.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

    }

}
