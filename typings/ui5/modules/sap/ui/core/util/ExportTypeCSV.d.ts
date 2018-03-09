declare module "sap/ui/core/util/ExportTypeCSV" {
    import ExportType from "sap/ui/core/util/ExportType";

    /**
    
    */
    export default class ExportTypeCSV extends ExportType {


        /**
            * Constructor for a new ExportTypeCSV.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.core.util.ExportTypeCSV with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.util.ExportType.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Generates the file content.
        */
        protected generate(): string;

        /**
            * Returns a metadata object for class sap.ui.core.util.ExportTypeCSV.
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
            * Gets current value of property {@link #getSeparatorChar separatorChar}.
         * 
         * Separator char.
         * 
         * Value needs to be exactly one character or empty for default.
         * 
         * Default value is `,`.
        */
        public getSeparatorChar(): string;

        /**
            * Setter for property `separatorChar`.
         * 
         * Value needs to be exactly one character or empty for default. Default value is ','.
        */
        public setSeparatorChar(sSeparatorChar: string): this;

    }

}
