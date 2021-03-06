declare namespace sap.ui.model {

    /**
    
    */
    export abstract class ContextBinding extends sap.ui.model.Binding {


        /**
            * Constructor for ContextBinding
        */
        public constructor(oModel: sap.ui.model.Model, sPath: string, oContext: any, mParameters?: any, oEvents?: any);


        /**
            * Creates a new subclass of class sap.ui.model.ContextBinding with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.Binding.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Return the bound context.
        */
        public getBoundContext(): sap.ui.model.Context;

        /**
            * Returns a metadata object for class sap.ui.model.ContextBinding.
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