declare module "sap/ui/core/format/DateFormat" {

    /**
    
    */
    export default class DateFormat {


        /**
            * Constructor for DateFormat - must not be used: To get a DateFormat instance, please use getDateInstance, getDateTimeInstance or getTimeInstance.
        */
        public constructor();


        /**
            * Format a date according to the given format options.
        */
        public format(vJSDate: any | any[], bUTC: boolean): string;

        /**
            * Get a date instance of the DateFormat, which can be used for formatting.
        */
        public static getDateInstance(oFormatOptions?: { format?: string, pattern?: string, style?: string, strictParsing?: boolean, relative?: boolean, relativeRange?: any[], relativeScale?: string, relativeStyle?: string, interval?: boolean, UTC?: boolean, calendarType?: sap.ui.core.CalendarType, }, oLocale?: sap.ui.core.Locale): DateFormat;

        /**
            * Get a datetime instance of the DateFormat, which can be used for formatting.
        */
        public static getDateTimeInstance(oFormatOptions?: { format?: string, pattern?: string, style?: string, strictParsing?: boolean, relative?: boolean, relativeRange?: any[], relativeScale?: string, relativeStyle?: string, interval?: boolean, UTC?: boolean, calendarType?: sap.ui.core.CalendarType, }, oLocale?: sap.ui.core.Locale): DateFormat;

        /**
            * Get a time instance of the DateFormat, which can be used for formatting.
        */
        public static getTimeInstance(oFormatOptions?: { format?: string, pattern?: string, style?: string, strictParsing?: boolean, relative?: boolean, relativeRange?: any[], relativeScale?: string, relativeStyle?: string, interval?: boolean, UTC?: boolean, calendarType?: sap.ui.core.CalendarType, }, oLocale?: sap.ui.core.Locale): DateFormat;

        /**
            * Parse a string which is formatted according to the given format options.
        */
        public parse(sValue: string, bUTC: boolean, bStrict: boolean): any | any[];

    }

}
