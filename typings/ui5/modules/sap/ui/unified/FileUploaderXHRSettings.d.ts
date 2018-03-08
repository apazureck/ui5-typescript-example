declare module "sap/ui/unified/FileUploaderXHRSettings" {

    export = FileUploaderXHRSettings;




    /**
    
    */
    class FileUploaderXHRSettings extends sap.ui.core.Element {

        /**
            * Constructor for a new FileUploaderXHRSettings.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.unified.FileUploaderXHRSettings with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.unified.FileUploaderXHRSettings.
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
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Gets current value of property {@link #getWithCredentials withCredentials}.
         * 
         * Determines the value of the `XMLHttpRequest.withCredentials` property
         * 
         * Default value is `false`.
        */
        public getWithCredentials(): boolean;

        /**
            * Sets a new value for property {@link #getWithCredentials withCredentials}.
         * 
         * Determines the value of the `XMLHttpRequest.withCredentials` property
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setWithCredentials(bWithCredentials: boolean): this;

    }


}
