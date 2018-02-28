declare module 'sap/m/DateTimePicker' {
    import Metadata from "sap/ui/base/Metadata";
    import DatePicker, { IDatePickerSettings } from 'sap/m/DatePicker';

    export interface IDateTimePickerSettings extends IDatePickerSettings {
    }

    /**
    
    */
    export default class DateTimePicker extends DatePicker {

        /**
            * Constructor for a new `DateTimePicker`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: IDateTimePickerSettings);


        /**
            * Creates a new subclass of class sap.m.DateTimePicker with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.DatePicker.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            
        */
        protected getAccessibilityInfo(): any;

        /**
            * Returns a metadata object for class sap.m.DateTimePicker.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

    }
}