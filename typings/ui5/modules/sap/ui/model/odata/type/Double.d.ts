declare module "sap/ui/model/odata/type/Double" {
    import ODataType from "sap/ui/model/odata/type/ODataType";

    /**
    
    */
    export default class Double extends ODataType {


        /**
            * Constructor for a primitive type `Edm.Double`.
        */
        public constructor(oFormatOptions?: any, oConstraints?: { nullable?: boolean | string, });


        /**
            * Creates a new subclass of class sap.ui.model.odata.type.Double with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.odata.type.ODataType.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Formats the given value to the given target type. When formatting to "string", very large or very small values are formatted to the exponential format (e.g. "-3.14 E+15").
        */
        public formatValue(vValue: number | string, sTargetType: string): number | string | any;

        /**
            * Format the given value in model representation to an output value in the given internal type. This happens according to the format options, if target type is 'string'. If oValue is not defined or null, null will be returned.
        */
        public formatValue(oValue: any, sInternalType: string): any;

        /**
            * Returns a metadata object for class sap.ui.model.odata.type.Double.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the type's name.
        */
        public getName(): string;

        /**
            * Parses the given value, which is expected to be of the given type, to an Edm.Double in `number` representation.
        */
        public parseValue(vValue: string | number, sSourceType: string): number | any;

        /**
            * Parse a value of an internal type to the expected value of the model type.
        */
        public parseValue(oValue: any, sInternalType: string): any;

        /**
            * Validates whether the given value in model representation is valid and meets the defined constraints.
        */
        public validateValue(fValue: number): any;

        /**
            * Validate whether a given value in model representation is valid and meets the defined constraints (if any).
        */
        public validateValue(oValue: any): any;

    }

}
