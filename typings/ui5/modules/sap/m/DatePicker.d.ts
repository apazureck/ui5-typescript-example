declare module "sap/m/DatePicker" {
    import DateTimeField from "sap/m/DateTimeField";
    import DateRange from "sap/ui/unified/DateRange";
    import DateTypeRange from "sap/ui/unified/DateTypeRange";
    import CalendarLegend from "sap/ui/unified/CalendarLegend";

    /**
    
    */
    export default class DatePicker extends DateTimeField {


        /**
            * Constructor for a new `DatePicker`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some `specialDate` to the aggregation `specialDates`.
        */
        public addSpecialDate(oSpecialDate: DateTypeRange): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.m.DatePicker`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.DatePicker` itself.
         * 
         * Fired when navigating in `Calendar` popup.
        */
        attachNavigate<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Date range containing the start and end date displayed in the <code>Calendar</code> popup. */
            dateRange: DateRange,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.m.DatePicker`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.DatePicker` itself.
         * 
         * Fired when navigating in `Calendar` popup.
        */
        attachNavigate<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Date range containing the start and end date displayed in the <code>Calendar</code> popup. */
            dateRange: DateRange,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the specialDates in the aggregation {@link #getSpecialDates specialDates}.
        */
        public destroySpecialDates(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:navigate navigate} event of this `sap.m.DatePicker`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachNavigate(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.m.DatePicker with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.DateTimeField.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fire event change to attached listeners.
         * 
         * Expects following event parameters:  * 'value' of type `string` The new value of the `sap.m.DatePicker`. * 'valid' of type `boolean` Indicator for a valid date. 
        */
        protected fireChange(mArguments?: any): this;

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { value?: string, }): this;

        /**
            * Fires event {@link #event:navigate navigate} to attached listeners.
        */
        protected fireNavigate(mParameters?: { dateRange?: DateRange, }): this;

        /**
            
        */
        protected getAccessibilityInfo(): any;

        /**
            * The date as JavaScript Date object. This is independent from any formatter.
         * 
         * ** Note: ** If this property is used, the `value` property should not be changed from the caller.
        */
        public getDateValue(): any;

        /**
            * The date is displayed in the input field using this format. By default, the medium format of the used locale is used.
         * 
         * Supported format options are pattern-based on Unicode LDML Date Format notation. {@link http://unicode.org/reports/tr35/#Date_Field_Symbol_Table} ** Note: ** If you use data binding on the `value` property with type `sap.ui.model.type.Date` this property will be ignored. The format defined in the binding will be used.
        */
        public getDisplayFormat(): string;

        /**
            * Gets current value of property {@link #getDisplayFormatType displayFormatType}.
         * 
         * Displays date in this given type in input field. Default value is taken from locale settings. Accepted are values of `sap.ui.core.CalendarType` or an empty string. If no type is set, the default type of the configuration is used. ** Note: ** If data binding on `value` property with type `sap.ui.model.type.Date` is used, this property will be ignored.
         * 
         * Default value is ``.
        */
        public getDisplayFormatType(): string;

        /**
            * ID of the element which is the current target of the association {@link #getLegend legend}, or `null`.
        */
        public getLegend(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getMaxDate maxDate}.
         * 
         * Maximum date that can be shown and selected in the `DatePicker`. This must be a JavaScript date object.
         * 
         * ** Note: ** If the `maxDate` is set to be before the `minDate`, the `maxDate` and the `minDate` are switched before rendering.
        */
        public getMaxDate(): any;

        /**
            * Returns a metadata object for class sap.m.DatePicker.
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
            * Gets current value of property {@link #getMinDate minDate}.
         * 
         * Minimum date that can be shown and selected in the `DatePicker`. This must be a JavaScript date object.
         * 
         * ** Note: ** If the `minDate` is set to be after the `maxDate`, the `maxDate` and the `minDate` are switched before rendering.
        */
        public getMinDate(): any;

        /**
            * Gets current value of property {@link #getSecondaryCalendarType secondaryCalendarType}.
         * 
         * If set, the days in the calendar popup are also displayed in this calendar type If not set, the dates are only displayed in the primary calendar type
        */
        public getSecondaryCalendarType(): sap.ui.core.CalendarType;

        /**
            * Gets content of aggregation {@link #getSpecialDates specialDates}.
         * 
         * Date Range with type to visualize special days in the Calendar. If one day is assigned to more than one Type, only the first one will be used.
         * 
         * To set a single date (instead of a range), set only the startDate property of the sap.ui.unified.DateRange class.
         * 
         * ** Note: ** Since 1.48 you could set a non-working day via the sap.ui.unified.CalendarDayType.NonWorking enum type just as any other special date type using sap.ui.unified.DateRangeType.
        */
        public getSpecialDates(): any[];

        /**
            * Getter for property `value`.
         * 
         * Returns a date as a string in the format defined in property `valueFormat`.
         * 
         * ** Note: ** The value is always expected and updated in Gregorian calendar format. (If data binding is used the format of the binding is used.)
         * 
         * If this property is used, the `dateValue` property should not be changed from the caller.
        */
        public getValue(): string;

        /**
            * The date string expected and returned in the `value` property uses this format. By default the short format of the used locale is used.
         * 
         * Supported format options are pattern-based on Unicode LDML Date Format notation. {@link http://unicode.org/reports/tr35/#Date_Field_Symbol_Table}
         * 
         * For example, if the date string represents an ABAP DATS type, the format should be "yyyyMMdd".
         * 
         * ** Note: ** If data binding on `value` property with type `sap.ui.model.type.Date` is used, this property will be ignored. The format defined in the binding will be used.
        */
        public getValueFormat(): string;

        /**
            * Checks for the provided `sap.ui.core.Element` in the aggregation {@link #getSpecialDates specialDates}. and returns its index if found or -1 otherwise.
        */
        public indexOfSpecialDate(oSpecialDate: sap.ui.core.Element): number;

        /**
            * Inserts a `specialDate` to the aggregation `specialDates`.
        */
        public insertSpecialDate(oSpecialDate: DateTypeRange, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getSpecialDates specialDates}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllSpecialDates(): any[];

        /**
            * Removes a `specialDate` from the aggregation `specialDates`.
        */
        public removeSpecialDate(oSpecialDate: DateTypeRange): DateTypeRange;

        /**
            * Sets a new value for property {@link #getDisplayFormatType displayFormatType}.
         * 
         * Displays date in this given type in input field. Default value is taken from locale settings. Accepted are values of `sap.ui.core.CalendarType` or an empty string. If no type is set, the default type of the configuration is used. ** Note: ** If data binding on `value` property with type `sap.ui.model.type.Date` is used, this property will be ignored.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setDisplayFormatType(sDisplayFormatType: string): this;

        /**
            * Sets the associated legend.
        */
        public setLegend(oLegend: sap.ui.core.ID | CalendarLegend): this;

        /**
            * Sets a new value for property {@link #getMaxDate maxDate}.
         * 
         * Maximum date that can be shown and selected in the `DatePicker`. This must be a JavaScript date object.
         * 
         * ** Note: ** If the `maxDate` is set to be before the `minDate`, the `maxDate` and the `minDate` are switched before rendering.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMaxDate(oMaxDate: any): this;

        /**
            * Sets a new value for property {@link #getMinDate minDate}.
         * 
         * Minimum date that can be shown and selected in the `DatePicker`. This must be a JavaScript date object.
         * 
         * ** Note: ** If the `minDate` is set to be after the `maxDate`, the `maxDate` and the `minDate` are switched before rendering.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMinDate(oMinDate: any): this;

        /**
            * Sets a new value for property {@link #getSecondaryCalendarType secondaryCalendarType}.
         * 
         * If set, the days in the calendar popup are also displayed in this calendar type If not set, the dates are only displayed in the primary calendar type
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSecondaryCalendarType(sSecondaryCalendarType: sap.ui.core.CalendarType): this;

        /**
            * Setter for property `value`.
         * 
         * Expects a date as a string in the format defined in property `valueFormat`.
         * 
         * ** Note: ** The value is always expected and updated in Gregorian calendar format. (If data binding is used the format of the binding is used.)
         * 
         * If this property is used, the `dateValue` property should not be changed from the caller.
         * 
         * If Data binding using a `sap.ui.model.type.Date` is used, please set the `formatOption` `stricktParsing` to `true`. This prevents unwanted automatic corrections of wrong input.
        */
        public setValue(sValue: string): this;

        /**
            * Defines the width of the DatePicker. Default value is 100%
        */
        public setWidth(sWidth: string): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Defines the width of the control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }

}
