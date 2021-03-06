declare module "sap/ui/unified/calendar/YearPicker" {

    /**
    
    */
    export default class YearPicker extends sap.ui.core.Control {


        /**
            * Constructor for a new YearPicker.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:pageChange pageChange} event of this `sap.ui.unified.calendar.YearPicker`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.YearPicker` itself.
         * 
         * The `pageChange` event is fired if the displayed years are changed by user navigation.
        */
        attachPageChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:pageChange pageChange} event of this `sap.ui.unified.calendar.YearPicker`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.YearPicker` itself.
         * 
         * The `pageChange` event is fired if the displayed years are changed by user navigation.
        */
        attachPageChange<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.YearPicker`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.YearPicker` itself.
         * 
         * Month selection changed
        */
        attachSelect<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.YearPicker`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.YearPicker` itself.
         * 
         * Month selection changed
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:pageChange pageChange} event of this `sap.ui.unified.calendar.YearPicker`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPageChange(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.calendar.YearPicker`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.ui.unified.calendar.YearPicker with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:pageChange pageChange} to attached listeners.
        */
        protected firePageChange(mParameters?: any): this;

        /**
            * Fires event {@link #event:select select} to attached listeners.
        */
        protected fireSelect(mParameters?: any): this;

        /**
            * Gets current value of property {@link #getColumns columns}.
         * 
         * number of years in each row 0 means just to have all years in one row, independent of the number
         * 
         * Default value is `4`.
        */
        public getColumns(): number;

        /**
            * Gets current value of property {@link #getDate date}.
         * 
         * Date as JavaScript Date object. For this date a `YearPicker` is rendered. If a Year is selected the date is updated with the start date of the selected year (depending on the calendar type).
        */
        public getDate(): any;

        /**
            * return the first date of the first rendered year ** Note: ** If the YearPicker is not rendered no date is returned
        */
        public getFirstRenderedDate(): any;

        /**
            * Returns a metadata object for class sap.ui.unified.calendar.YearPicker.
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
            * Gets current value of property {@link #getPrimaryCalendarType primaryCalendarType}.
         * 
         * If set, the calendar type is used for display. If not set, the calendar type of the global configuration is used.
        */
        public getPrimaryCalendarType(): sap.ui.core.CalendarType;

        /**
            * Gets current value of property {@link #getYear year}.
         * 
         * The year is initial focused and selected The value must be between 0 and 9999
         * 
         * Default value is `2000`.
        */
        public getYear(): number;

        /**
            * Gets current value of property {@link #getYears years}.
         * 
         * number of displayed years
         * 
         * Default value is `20`.
        */
        public getYears(): number;

        /**
            * displays the next page
        */
        public nextPage(): this;

        /**
            * displays the previous page
        */
        public previousPage(): this;

        /**
            * Sets a new value for property {@link #getColumns columns}.
         * 
         * number of years in each row 0 means just to have all years in one row, independent of the number
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `4`.
        */
        public setColumns(iColumns: number): this;

        /**
            * Sets a new value for property {@link #getDate date}.
         * 
         * Date as JavaScript Date object. For this date a `YearPicker` is rendered. If a Year is selected the date is updated with the start date of the selected year (depending on the calendar type).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDate(oDate: any): this;

        /**
            * Sets a new value for property {@link #getPrimaryCalendarType primaryCalendarType}.
         * 
         * If set, the calendar type is used for display. If not set, the calendar type of the global configuration is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setPrimaryCalendarType(sPrimaryCalendarType: sap.ui.core.CalendarType): this;

        /**
            * Sets a new value for property {@link #getYear year}.
         * 
         * The year is initial focused and selected The value must be between 0 and 9999
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `2000`.
        */
        public setYear(iYear: number): this;

        /**
            * Sets a new value for property {@link #getYears years}.
         * 
         * number of displayed years
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `20`.
        */
        public setYears(iYears: number): this;

    }

}
