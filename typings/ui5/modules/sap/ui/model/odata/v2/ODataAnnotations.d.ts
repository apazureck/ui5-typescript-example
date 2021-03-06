declare module "sap/ui/model/odata/v2/ODataAnnotations" {
    import ODataMetadata from "sap/ui/model/odata/ODataMetadata";

    /**
    
    */
    export default class ODataAnnotations extends sap.ui.base.EventProvider {


        /**
            * Creates a new instance of the ODataAnnotations annotation loader.
        */
        public constructor(oMetadata: ODataMetadata, mOptions: { source: string | any | any[] | any[], headers: any, skipMetadata: boolean, });


        /**
            * Adds one or several sources to the annotation loader. Sources will be loaded instantly but merged only after the previously added source has either been successfully merged or failed.
        */
        public addSource(vSource: string | any[] | sap.ui.model.odata.v2.ODataAnnotations.Source | any[]): any;

        /**
            * This event exists for compatibility with the old Annotation loader Attaches the given callback to the `allFailed` event. This event is fired when no annotation from a group of sources was successfully (loaded,) parsed and merged. The parameter `result` will be set on the event argument and contains an array of Errors in the order in which the sources had been added.
        */
        public attachAllFailed(fnFunction: Function, oListener?: any): this;

        /**
            * This event exists for compatibility with the old Annotation loader Attaches the given callback to the `allFailed` event. This event is fired when no annotation from a group of sources was successfully (loaded,) parsed and merged. The parameter `result` will be set on the event argument and contains an array of Errors in the order in which the sources had been added.
        */
        public attachAllFailed(oData: any, fnFunction: Function, oListener?: any): this;

        /**
            * Attaches the given callback to the `error` event, which is fired whenever a source cannot be loaded, parsed or merged into the annotation data. The following parameters will be set on the event object that is given to the callback function: `source` - A map containing the properties `type` - containing either "url" or "xml" - and `data` containing the data given as source, either a URL or an XML string depending on how the source was added. `error` - An Error object describing the problem that occurred
        */
        public attachError(oData: any, fnFunction: Function, oListener?: any): this;

        /**
            * Attaches the given callback to the `error` event, which is fired whenever a source cannot be loaded, parsed or merged into the annotation data. The following parameters will be set on the event object that is given to the callback function: `source` - A map containing the properties `type` - containing either "url" or "xml" - and `data` containing the data given as source, either a URL or an XML string depending on how the source was added. `error` - An Error object describing the problem that occurred
        */
        public attachError(fnFunction: Function, oListener?: any): this;

        /**
            * Attaches the given callback to the `failed` event. This event is fired when at least one annotation from a group of sources was not successfully (loaded,) parsed or merged. The parameter `result` will be set on the event argument and contains an array of Errors in the order in which the sources had been added.
        */
        public attachFailed(fnFunction: Function, oListener?: any): this;

        /**
            * Attaches the given callback to the `failed` event. This event is fired when at least one annotation from a group of sources was not successfully (loaded,) parsed or merged. The parameter `result` will be set on the event argument and contains an array of Errors in the order in which the sources had been added.
        */
        public attachFailed(oData: any, fnFunction: Function, oListener?: any): this;

        /**
            * Attaches the given callback to the `loaded` event. This event is fired when all annotations from a group of sources was successfully (loaded,) parsed and merged. The parameter `result` will be set on the event argument and contains an array of all loaded sources as well as Errors in the order in which they had been added.
        */
        public attachLoaded(oData: any, fnFunction: Function, oListener?: any): this;

        /**
            * Attaches the given callback to the `loaded` event. This event is fired when all annotations from a group of sources was successfully (loaded,) parsed and merged. The parameter `result` will be set on the event argument and contains an array of all loaded sources as well as Errors in the order in which they had been added.
        */
        public attachLoaded(fnFunction: Function, oListener?: any): this;

        /**
            * This event exists for compatibility with the old Annotation loader Attaches the given callback to the `someLoaded` event. This event is fired when at least one annotation from a group of sources was successfully (loaded,) parsed and merged. The parameter `result` will be set on the event argument and contains an array of all loaded sources as well as Errors in the order in which they had been added.
        */
        public attachSomeLoaded(fnFunction: Function, oListener?: any): this;

        /**
            * This event exists for compatibility with the old Annotation loader Attaches the given callback to the `someLoaded` event. This event is fired when at least one annotation from a group of sources was successfully (loaded,) parsed and merged. The parameter `result` will be set on the event argument and contains an array of all loaded sources as well as Errors in the order in which they had been added.
        */
        public attachSomeLoaded(oData: any, fnFunction: Function, oListener?: any): this;

        /**
            * Attaches the given callback to the `success` event, which is fired whenever a source has been successfully (loaded,) parsed and merged into the annotation data. The following parameters will be set on the event object that is given to the callback function: `source` - A map containing the properties `type` - containing either "url" or "xml" - and `data` containing the data given as source, either a URL or an XML string depending on how the source was added.
        */
        public attachSuccess(fnFunction: Function, oListener?: any): this;

        /**
            * Attaches the given callback to the `success` event, which is fired whenever a source has been successfully (loaded,) parsed and merged into the annotation data. The following parameters will be set on the event object that is given to the callback function: `source` - A map containing the properties `type` - containing either "url" or "xml" - and `data` containing the data given as source, either a URL or an XML string depending on how the source was added.
        */
        public attachSuccess(oData: any, fnFunction: Function, oListener?: any): this;

        /**
            * Detaches the given callback from the `allFailed` event. The passed function and listener object must match the ones previously used for attaching to the event.
        */
        public detachAllFailed(fnFunction: Function, oListener?: any): this;

        /**
            * Detaches the given callback from the `error` event. The passed function and listener object must match the ones previously used for attaching to the event.
        */
        public detachError(fnFunction: Function, oListener?: any): this;

        /**
            * Detaches the given callback from the `failed` event. The passed function and listener object must match the ones previously used for attaching to the event.
        */
        public detachFailed(fnFunction: Function, oListener?: any): this;

        /**
            * Detaches the given callback from the `loaded` event. The passed function and listener object must match the ones previously used for attaching to the event.
        */
        public detachLoaded(fnFunction: Function, oListener?: any): this;

        /**
            * Detaches the given callback from the `someLoaded` event. The passed function and listener object must match the ones previously used for attaching to the event.
        */
        public detachSomeLoaded(fnFunction: Function, oListener?: any): this;

        /**
            * Detaches the given callback from the `success` event. The passed function and listener object must match the ones previously used for attaching to the event.
        */
        public detachSuccess(fnFunction: Function, oListener?: any): this;

        /**
            * Creates a new subclass of class sap.ui.model.odata.v2.ODataAnnotations with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * V1 API Compatibility method. @see sap.ui.model.odata.v2.ODataAnnotations#getData Returns the parsed and merged annotation data object
        */
        public getAnnotationsData(): any;

        /**
            * Returns the parsed and merged annotation data object
        */
        public getData(): any;

        /**
            * Returns a metadata object for class sap.ui.model.odata.v2.ODataAnnotations.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a promise that resolves when the annotation sources that were added up to this point were successfully (loaded,) parsed and merged
        */
        public loaded(): any;

        /**
            * Set custom headers which are provided in a key/value map. These headers are used for all requests. The "Accept-Language" header cannot be modified and is set using the core's language setting.
         * 
         * To remove these headers, simply set the `mHeaders` parameter to `{}`. Please also note that when calling this method again all previous custom headers are removed unless they are specified again in the `mCustomHeaders` parameter.
        */
        public setHeaders(mHeaders: any): any;

    }

}
