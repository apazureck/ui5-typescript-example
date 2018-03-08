declare module "sap/ui/model/type/DateTimeInterval" {
    import DateInterval from "sap/ui/model/type/DateInterval";

    export = DateTimeInterval;




    /**
    
    */
    class DateTimeInterval extends DateInterval {

        /**
            * Constructor for a DateTime interval type.
        */
        public constructor(oFormatOptions?: { source?: any, }, oConstraints?: { minimum?: any | string, maximum?: any | string, });


        /**
            * Creates a new subclass of class sap.ui.model.type.DateTimeInterval with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.type.DateInterval.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.model.type.DateTimeInterval.
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
