declare module "sap/ui/unified/calendar/DatesRow" {
    import Month from "sap/ui/unified/calendar/Month";

    export = DatesRow;




    /**
    
    */
    class DatesRow extends Month {

        /**
            * Constructor for a new calendar/DatesRow.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * displays the a given date without setting the focus
         * 
         * Property `date` date to be focused or displayed. It must be in the displayed date range beginning with `startDate` and `days` days So set this properties before setting the date.
        */
        public displayDate(oDate: any): this;

        /**
            * Creates a new subclass of class sap.ui.unified.calendar.DatesRow with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.calendar.Month.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getDays days}.
         * 
         * number of days displayed
         * 
         * Default value is `7`.
        */
        public getDays(): number;

        /**
            * Returns a metadata object for class sap.ui.unified.calendar.DatesRow.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Gets current value of property {@link #getShowDayNamesLine showDayNamesLine}.
         * 
         * If set the day names are shown in a separate line. If not set the day names are shown inside the single days.
         * 
         * Default value is `true`.
        */
        public getShowDayNamesLine(): boolean;

        /**
            * Gets current value of property {@link #getStartDate startDate}.
         * 
         * Start date of the row If in rendering phase the date property is not in the range startDate + days, it is set to the start date So after setting the start date the date should be set to be in the range of the start date
        */
        public getStartDate(): any;

        /**
            * Setter for property `date`.
         * 
         * Property `date` date to be focused or displayed. It must be in the displayed date range beginning with `startDate` and `days` days So set this properties before setting the date.
        */
        public setDate(oDate: any): this;

        /**
            * Sets a new value for property {@link #getDays days}.
         * 
         * number of days displayed
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `7`.
        */
        public setDays(iDays: number): this;

        /**
            * Setter for property `firstDayOfWeek`.
         * 
         * Property `firstDayOfWeek` is not supported in `sap.ui.unified.calendar.DatesRow` control.
        */
        public setFirstDayOfWeek(iFirstDayOfWeek: number): this;

        /**
            * Sets a new value for property {@link #getFirstDayOfWeek firstDayOfWeek}.
         * 
         * If set, the first day of the displayed week is this day. Valid values are 0 to 6. If not a valid value is set, the default of the used locale is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `-1`.
        */
        public setFirstDayOfWeek(iFirstDayOfWeek: number): this;

        /**
            * Sets a new value for property {@link #getShowDayNamesLine showDayNamesLine}.
         * 
         * If set the day names are shown in a separate line. If not set the day names are shown inside the single days.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowDayNamesLine(bShowDayNamesLine: boolean): this;

        /**
            * Sets a new value for property {@link #getStartDate startDate}.
         * 
         * Start date of the row If in rendering phase the date property is not in the range startDate + days, it is set to the start date So after setting the start date the date should be set to be in the range of the start date
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setStartDate(oStartDate: any): this;

    }


}
