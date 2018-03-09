declare module "sap/ui/model/odata/type/SByte" {
    import Int from "sap/ui/model/odata/type/Int";

    /**
    
    */
    export default class SByte extends Int {


        /**
            * Constructor for a primitive type `Edm.SByte`.
        */
        public constructor(oFormatOptions?: any, oConstraints?: { nullable?: boolean | string, });


        /**
            * Creates a new subclass of class sap.ui.model.odata.type.SByte with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.odata.type.Int.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.model.odata.type.SByte.
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
            * Returns the type's supported range as object with properties `minimum` and `maximum`.
        */
        protected getRange(): any;

    }

}
