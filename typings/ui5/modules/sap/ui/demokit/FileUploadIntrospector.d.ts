declare module "sap/ui/demokit/FileUploadIntrospector" {

    /**
    
    */
    export default class FileUploadIntrospector extends sap.ui.core.Control {


        /**
            * Constructor for a new FileUploadIntrospector.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.demokit.FileUploadIntrospector with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getAutoRefreshInterval autoRefreshInterval}.
         * 
         * Interval in milliseconds after which the content is checked again. values lower or equal to 0 mean 'no automatic refresh'.
         * 
         * Default value is `0`.
        */
        public getAutoRefreshInterval(): string;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * (CSS) Height of the control
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.ui.demokit.FileUploadIntrospector.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

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
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Gets current value of property {@link #getUploadUrl uploadUrl}.
         * 
         * The URL to check the upload content with....
        */
        public getUploadUrl(): string;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Width of the file list
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Trigger an explicit refresh of the displayed information
        */
        public refresh(): any;

        /**
            * Sets a new value for property {@link #getAutoRefreshInterval autoRefreshInterval}.
         * 
         * Interval in milliseconds after which the content is checked again. values lower or equal to 0 mean 'no automatic refresh'.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setAutoRefreshInterval(sAutoRefreshInterval: string): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * (CSS) Height of the control
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getUploadUrl uploadUrl}.
         * 
         * The URL to check the upload content with....
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setUploadUrl(sUploadUrl: string): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Width of the file list
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }

}
