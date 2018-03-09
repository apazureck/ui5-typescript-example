declare module "sap/ui/model/odata/ODataContextBinding" {

    /**
    
    */
    export default abstract class ODataContextBinding extends sap.ui.model.ContextBinding {


        /**
            * Constructor for odata.ODataContextBinding
        */
        public constructor(oModel: sap.ui.model.Model, sPath: string, oContext: any, mParameters?: any);


        /**
            * Creates a new subclass of class sap.ui.model.odata.ODataContextBinding with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.ContextBinding.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.model.odata.ODataContextBinding.
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
