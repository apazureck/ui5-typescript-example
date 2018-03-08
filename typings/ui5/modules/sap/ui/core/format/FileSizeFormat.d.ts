declare module "sap/ui/core/format/FileSizeFormat" {

    export = FileSizeFormat;




    /**
    
    */
    class FileSizeFormat extends sap.ui.base.Object {

        /**
            * Constructor for FileSizeFormat - must not be used: To get a FileSizeFormat instance, please use getInstance.
        */
        public constructor();


        /**
            * Creates a new subclass of class sap.ui.core.format.FileSizeFormat with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Format a filesize (in bytes) according to the given format options.
        */
        public format(oValue: number | string): string;

        /**
            * Get an instance of the FileSizeFormat, which can be used for formatting.
         * 
         * If no locale is given, the currently configured {@link sap.ui.core.Configuration.FormatSettings#getFormatLocale formatLocale} will be used.
        */
        public static getInstance(oFormatOptions?: any, oLocale?: sap.ui.core.Locale): FileSizeFormat;

        /**
            * Returns a metadata object for class sap.ui.core.format.FileSizeFormat.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Parse a string which is formatted according to the given format options.
        */
        public parse(sValue: string): number;

    }


}
