declare module "sap/ui/unified/DateTypeRange" {
    import DateRange from "sap/ui/unified/DateRange";
    import sapuiunifiedlibrary from "sap/ui/unified/library";
    type CalendarDayType = sapuiunifiedlibrary.CalendarDayType;

    export = DateTypeRange;




    /**
    
    */
    class DateTypeRange extends DateRange {

        /**
            * Constructor for a new DateTypeRange.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.unified.DateTypeRange with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.DateRange.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.unified.DateTypeRange.
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

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * Type of the date range.
         * 
         * Default value is `Type01`.
        */
        public getType(): CalendarDayType;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * Type of the date range.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Type01`.
        */
        public setType(sType: CalendarDayType): this;

    }


}
