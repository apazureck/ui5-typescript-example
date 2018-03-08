declare module "sap/ui/core/format/NumberFormat" {

    export = NumberFormat;


    /**
    
    */
    class NumberFormat extends sap.ui.base.Object {

        /**
            * Constructor for NumberFormat - must not be used: To get a NumberFormat instance, please use getInstance, getFloatInstance or getIntegerInstance.
        */
        public constructor(oFormatOptions?: { minIntegerDigits?: number, maxIntegerDigits?: number, minFractionDigits?: number, maxFractionDigits?: number, decimals?: number, shortDecimals?: number, shortLimit?: number, shortRefNumber?: number, showScale?: boolean, precision?: number, pattern?: string, groupingEnabled?: boolean, groupingSeparator?: string, groupingSize?: number, groupingBaseSize?: number, decimalSeparator?: string, plusSign?: string, minusSign?: string, parseAsString?: boolean, style?: string, roundingMode?: NumberFormat.RoundingMode, showMeasure?: boolean, currencyCode?: boolean, currencyContext?: string, emptyString?: number, });


        /**
            * Creates a new subclass of class sap.ui.core.format.NumberFormat with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Format a number according to the given format options.
        */
        public format(oValue: number | any[], sMeasure?: string): string;

        /**
            * Get a currency instance of the NumberFormat, which can be used for formatting.
         * 
         * If no locale is given, the currently configured {@link sap.ui.core.Configuration.FormatSettings#getFormatLocale formatLocale} will be used.
         * 
         * This instance has HALF_AWAY_FROM_ZERO set as default rounding mode. Please set the roundingMode property in oFormatOptions to change the default value.
        */
        public static getCurrencyInstance(oFormatOptions?: any, oLocale?: sap.ui.core.Locale): NumberFormat;

        /**
            * Get a float instance of the NumberFormat, which can be used for formatting.
         * 
         * If no locale is given, the currently configured {@link sap.ui.core.Configuration.FormatSettings#getFormatLocale formatLocale} will be used.
         * 
         * This instance has HALF_AWAY_FROM_ZERO set as default rounding mode. Please set the roundingMode property in oFormatOptions to change the default value.
        */
        public static getFloatInstance(oFormatOptions?: any, oLocale?: sap.ui.core.Locale): NumberFormat;

        /**
            * Get an integer instance of the NumberFormat, which can be used for formatting.
         * 
         * If no locale is given, the currently configured {@link sap.ui.core.Configuration.FormatSettings#getFormatLocale formatLocale} will be used.
         * 
         * This instance has TOWARDS_ZERO set as default rounding mode. Please set the roundingMode property in oFormatOptions to change the default value.
        */
        public static getIntegerInstance(oFormatOptions?: any, oLocale?: sap.ui.core.Locale): NumberFormat;

        /**
            * Returns a metadata object for class sap.ui.core.format.NumberFormat.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Get a percent instance of the NumberFormat, which can be used for formatting.
         * 
         * If no locale is given, the currently configured {@link sap.ui.core.Configuration.FormatSettings#getFormatLocale formatLocale} will be used.
         * 
         * This instance has HALF_AWAY_FROM_ZERO set as default rounding mode. Please set the roundingMode property in oFormatOptions to change the default value.
        */
        public static getPercentInstance(oFormatOptions?: any, oLocale?: sap.ui.core.Locale): NumberFormat;

        /**
            * Parse a string which is formatted according to the given format options.
        */
        public parse(sValue: string): number | any[];

    }


    namespace NumberFormat {

        /** 
    * Specifies a rounding behavior for numerical operations capable of discarding precision. Each rounding mode in this object indicates how the least significant returned digits of rounded result is to be calculated. 
    */
        enum RoundingMode {
            AWAY_FROM_ZERO = "AWAY_FROM_ZERO",
            CEILING = "CEILING",
            FLOOR = "FLOOR",
            HALF_AWAY_FROM_ZERO = "HALF_AWAY_FROM_ZERO",
            HALF_CEILING = "HALF_CEILING",
            HALF_FLOOR = "HALF_FLOOR",
            HALF_TOWARDS_ZERO = "HALF_TOWARDS_ZERO",
            TOWARDS_ZERO = "TOWARDS_ZERO",
        }


    }
}
