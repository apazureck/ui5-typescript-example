declare module 'sap/m/DateRangeSelection' {
    import Event from "sap/ui/base/Event";
    import Metadata from "sap/ui/base/Metadata";
    import DatePicker, { IDatePickerSettings } from 'sap/m/DatePicker';

    export interface IDateRangeSelectionSettings extends IDatePickerSettings {
        delimiter?: string;
        secondDateValue?: any;
        from?: any;
        to?: any;
    }

    /**
    
    */
    export default class DateRangeSelection extends DatePicker {

        /**
            * Constructor for a new `DateRangeSelection`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: IDateRangeSelectionSettings);


        /**
            * Creates a new subclass of class sap.m.DateRangeSelection with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.DatePicker.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { value?: string, }): this;

        /**
            * Fire event change to attached listeners.
         * 
         * Expects following event parameters:  * 'value' of type `string` The new value of the `sap.m.DateRangeSelection`. * 'valid' of type `boolean` Indicator for a valid date. * 'from' of type `object` Current start date after change. * 'to' of type `object` Current end date after change. 
        */
        protected fireChange(mArguments?: any): this;

        /**
            
        */
        protected getAccessibilityInfo(): any;

        /**
            * Getter for property `dateValue`.
         * 
         * The start date of the range as JavaScript Date object. This is independent from any formatter.
         * 
         * ** Note: ** If this property is used, the `value` property should not be changed from the caller.
        */
        public getDateValue(): any;

        /**
            * Gets current value of property {@link #getDelimiter delimiter}.
         * 
         * Delimiter between start and end date. Default value is "-". If no delimiter is given, the one defined for the used locale is used.
         * 
         * Default value is `-`.
        */
        public getDelimiter(): string;

        /**
            * Gets current value of property {@link #getFrom from}.
         * 
         * Start date of the range.
        */
        public getFrom(): any;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.m.DateRangeSelection.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Gets current value of property {@link #getSecondDateValue secondDateValue}.
         * 
         * The end date of the range as JavaScript Date object. This is independent from any formatter.
         * 
         * ** Note: ** If this property is used, the `value` property should not be changed from the caller.
        */
        public getSecondDateValue(): any;

        /**
            * Gets current value of property {@link #getTo to}.
         * 
         * End date of the range.
        */
        public getTo(): any;

        /**
            * Getter for property `value`.
         * 
         * Returns a date as a string in the format defined in property `displayFormat`.
         * 
         * ** Note: ** As the value string always used the `displayFormat`, it is both locale-dependent and calendar-type-dependent.
         * 
         * If this property is used, the `dateValue` property should not be changed from the caller.
        */
        public getValue(): string;

        /**
            * Getter for property `valueFormat`.
         * 
         * ** Note: ** Property `valueFormat` is not supported in the `sap.m.DateRangeSelection` control.
        */
        public getValueFormat(): string;

        /**
            * Initializes the element instance after creation.
         * 
         * Applications must not call this hook method directly, it is called by the framework while the constructor of an element is executed.
         * 
         * Subclasses of Element should override this hook to implement any necessary initialization.
        */
        protected init(): any;

        /**
            * This file defines behavior for the control
        */
        protected init(): any;

        /**
            * Setter for property `dateValue`.
         * 
         * The start date of the range as JavaScript Date object. This is independent from any formatter.
         * 
         * ** Note: ** If this property is used, the `value` property should not be changed from the caller.
        */
        public setDateValue(oDateValue: any): this;

        /**
            * Sets a new value for property {@link #getDelimiter delimiter}.
         * 
         * Delimiter between start and end date. Default value is "-". If no delimiter is given, the one defined for the used locale is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `-`.
        */
        public setDelimiter(sDelimiter: string): this;

        /**
            * Sets a new value for property {@link #getFrom from}.
         * 
         * Start date of the range.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFrom(oFrom: any): this;

        /**
            * Sets a new value for property {@link #getSecondDateValue secondDateValue}.
         * 
         * The end date of the range as JavaScript Date object. This is independent from any formatter.
         * 
         * ** Note: ** If this property is used, the `value` property should not be changed from the caller.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSecondDateValue(oSecondDateValue: any): this;

        /**
            * Sets a new value for property {@link #getTo to}.
         * 
         * End date of the range.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTo(oTo: any): this;

        /**
            * Setter for property `value`.
         * 
         * Expects a date as a string in the format defined in property `displayFormat`.
         * 
         * ** Note: ** As the value string always used the `displayFormat`, it is both locale-dependent and calendar-type-dependent.
         * 
         * If this property is used, the `dateValue` property should not be changed from the caller.
        */
        public setValue(sValue: string): this;

        /**
            * Setter for property `valueFormat`.
         * 
         * ** Note: ** Property `valueFormat` is not supported in the `sap.m.DateRangeSelection` control.
        */
        public setValueFormat(sValueFormat: string): this;

    }
}