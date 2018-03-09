declare module "sap/ui/model/odata/ODataPropertyBinding" {

    /**
    
    */
    export default class ODataPropertyBinding extends sap.ui.model.PropertyBinding {


        /**
            
        */
        public constructor(oModel: sap.ui.model.Model, sPath: string, oContext: sap.ui.model.Context, mParameters?: any);


        /**
            * Creates a new subclass of class sap.ui.model.odata.ODataPropertyBinding with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.PropertyBinding.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.model.odata.ODataPropertyBinding.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the current value of the bound target
        */
        public getValue(): any;

        /**
            * Returns the current value of the bound target
        */
        public getValue(): any;

        /**
            * Initialize the binding. The message should be called when creating a binding. If metadata is not yet available, do nothing, method will be called again when metadata is loaded.
        */
        protected initialize(): any;

    }

}
