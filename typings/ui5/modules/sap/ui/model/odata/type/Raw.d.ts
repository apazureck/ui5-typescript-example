declare module "sap/ui/model/odata/type/Raw" {
    import ODataType from "sap/ui/model/odata/type/ODataType";

    export = Raw;




    /**
    
    */
    class Raw extends ODataType {

        /**
            * Constructor for a placeholder for all unsupported OData primitive types.
        */
        public constructor(oFormatOptions?: any, oConstraints?: any);


        /**
            * Creates a new subclass of class sap.ui.model.odata.type.Raw with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.odata.type.ODataType.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Formats the given value to the given target type.
        */
        public formatValue(vValue: any, sTargetType: string): any;

        /**
            * Returns a metadata object for class sap.ui.model.odata.type.Raw.
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
            * Method not supported
        */
        public parseValue(): any;

        /**
            * Method not supported
        */
        public validateValue(): any;

    }


}
