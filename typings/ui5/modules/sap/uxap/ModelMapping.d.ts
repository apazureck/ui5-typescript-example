declare module "sap/uxap/ModelMapping" {

    export = ModelMapping;




    /**
    
    */
    class ModelMapping extends sap.ui.core.Element {

        /**
            * Constructor for a new ModelMapping.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.uxap.ModelMapping with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getExternalModelName externalModelName}.
         * 
         * Determines the external model name.
        */
        public getExternalModelName(): string;

        /**
            * Gets current value of property {@link #getExternalPath externalPath}.
         * 
         * Determines the external path.
        */
        public getExternalPath(): string;

        /**
            * Gets current value of property {@link #getInternalModelName internalModelName}.
         * 
         * Determines the internal model name.
         * 
         * Default value is `Model`.
        */
        public getInternalModelName(): string;

        /**
            * Returns a metadata object for class sap.uxap.ModelMapping.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Sets a new value for property {@link #getExternalModelName externalModelName}.
         * 
         * Determines the external model name.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setExternalModelName(sExternalModelName: string): this;

        /**
            * Sets a new value for property {@link #getExternalPath externalPath}.
         * 
         * Determines the external path.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setExternalPath(sExternalPath: string): this;

        /**
            * Sets a new value for property {@link #getInternalModelName internalModelName}.
         * 
         * Determines the internal model name.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Model`.
        */
        public setInternalModelName(sInternalModelName: string): this;

    }


}
