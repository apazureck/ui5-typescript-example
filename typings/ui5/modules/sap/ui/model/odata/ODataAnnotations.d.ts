declare module "sap/ui/model/odata/ODataAnnotations" {
    import ODataMetadata from "sap/ui/model/odata/ODataMetadata";

    /**
    
    */
    export default class ODataAnnotations extends sap.ui.base.EventProvider {


        /**
            
        */
        public constructor(aAnnotationURI: string | any[], oMetadata: ODataMetadata, mParams: any);


        /**
            * Adds either one URL or an array of URLs to be loaded and parsed. The result will be merged into the annotations data which can be retrieved using the getAnnotations-method.
        */
        public addUrl(vUrl: string | any[]): any;

        /**
            * Attach event-handler `fnFunction` to the 'failed' event of this `sap.ui.model.odata.ODataAnnotations`.
        */
        public attachFailed(oData: any, fnFunction: Function, oListener?: any): this;

        /**
            * Attach event-handler `fnFunction` to the 'failed' event of this `sap.ui.model.odata.ODataAnnotations`.
        */
        public attachFailed(fnFunction: Function, oListener?: any): this;

        /**
            * Attach event-handler `fnFunction` to the 'loaded' event of this `sap.ui.model.odata.ODataAnnotations`.
        */
        public attachLoaded(fnFunction: Function, oListener?: any): this;

        /**
            * Attach event-handler `fnFunction` to the 'loaded' event of this `sap.ui.model.odata.ODataAnnotations`.
        */
        public attachLoaded(oData: any, fnFunction: Function, oListener?: any): this;

        /**
            * Detach event-handler `fnFunction` from the 'failed' event of this `sap.ui.model.odata.ODataAnnotations`.
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachFailed(fnFunction: Function, oListener: any): this;

        /**
            * Detach event-handler `fnFunction` from the 'loaded' event of this `sap.ui.model.odata.ODataAnnotations`.
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachLoaded(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.ui.model.odata.ODataAnnotations with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fire event failed to attached listeners.
        */
        protected fireFailed(mArguments?: { message?: string, statusCode?: string, statusText?: string, responseText?: string, }): this;

        /**
            * Fire event loaded to attached listeners.
        */
        protected fireLoaded(mArguments?: any): this;

        /**
            * returns the raw annotation data
        */
        public getAnnotationsData(): any;

        /**
            * Returns a metadata object for class sap.ui.model.odata.ODataAnnotations.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Checks whether annotations loading of at least one of the given URLs has already failed. Note: For asynchronous annotations {@link #attachFailed} has to be used.
        */
        public isFailed(): boolean;

        /**
            * Checks whether annotations from at least one source are available
        */
        public isLoaded(): boolean;

        /**
            * Set custom headers which are provided in a key/value map. These headers are used for all requests. The Accept-Language header cannot be modified and is set using the Core's language setting.
         * 
         * To remove these headers simply set the mHeaders parameter to {}. Please also note that when calling this method again all previous custom headers are removed unless they are specified again in the mCustomHeaders parameter.
        */
        public setHeaders(mHeaders: any): any;

        /**
            * Sets an XML document.
        */
        public setXML(oXMLDocument: any, sXMLContent: string, mOptions?: { success?: Function, error?: Function, fireEvents?: boolean, }): boolean;

    }

}
