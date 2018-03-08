declare module "sap/ui/model/type/Time" {
    import Date from "sap/ui/model/type/Date";

    export = Time;




    /**
    
    */
    class Time extends Date {

        /**
            * Constructor for a Time type.
        */
        public constructor(oFormatOptions?: { source?: any, }, oConstraints?: any);


        /**
            * Creates a new subclass of class sap.ui.model.type.Time with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.type.Date.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.model.type.Time.
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
