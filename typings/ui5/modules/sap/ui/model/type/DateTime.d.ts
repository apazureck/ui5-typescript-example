declare module "sap/ui/model/type/DateTime" {
    import Date from "sap/ui/model/type/Date";

    /**
    
    */
    export default class DateTime extends Date {


        /**
            * Constructor for a DateTime type.
        */
        public constructor(oFormatOptions?: { source?: any, }, oConstraints?: any);


        /**
            * Creates a new subclass of class sap.ui.model.type.DateTime with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.type.Date.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.model.type.DateTime.
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
