declare module "sap/ui/model/odata/type/ODataType" {
    import SimpleType from "sap/ui/model/SimpleType";

    export = ODataType;




    /**
    
    */
    class ODataType extends SimpleType {

        /**
            * Constructor for a new `ODataType`.
        */
        public constructor(oFormatOptions?: any, oConstraints?: any);


        /**
            * Creates a new subclass of class sap.ui.model.odata.type.ODataType with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.SimpleType.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            
        */
        public getInterface(): any | sap.ui.base.Interface;

        /**
            * Returns the public interface of the object.
        */
        public getInterface(): sap.ui.base.Interface;

        /**
            * Returns a metadata object for class sap.ui.model.odata.type.ODataType.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

    }


}
