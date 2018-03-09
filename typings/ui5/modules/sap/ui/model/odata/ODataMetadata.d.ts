declare module "sap/ui/model/odata/ODataMetadata" {

    /**
    
    */
    export default class ODataMetadata extends sap.ui.base.EventProvider {


        /**
            * Constructor for a new ODataMetadata.
        */
        public constructor(sMetadataURI: string, mParams?: { async?: boolean, user?: string, password?: string, headers?: any, });


        /**
            * Attach event-handler `fnFunction` to the 'failed' event of this `sap.ui.model.odata.ODataMetadata`.
        */
        public attachFailed(fnFunction: Function, oListener?: any): this;

        /**
            * Attach event-handler `fnFunction` to the 'failed' event of this `sap.ui.model.odata.ODataMetadata`.
        */
        public attachFailed(oData: any, fnFunction: Function, oListener?: any): this;

        /**
            * Attach event-handler `fnFunction` to the 'loaded' event of this `sap.ui.model.odata.ODataMetadata`.
        */
        public attachLoaded(fnFunction: Function, oListener?: any): this;

        /**
            * Attach event-handler `fnFunction` to the 'loaded' event of this `sap.ui.model.odata.ODataMetadata`.
        */
        public attachLoaded(oData: any, fnFunction: Function, oListener?: any): this;

        /**
            * Detach event-handler `fnFunction` from the 'failed' event of this `sap.ui.model.odata.ODataMetadata`.
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachFailed(fnFunction: Function, oListener: any): this;

        /**
            * Detach event-handler `fnFunction` from the 'loaded' event of this `sap.ui.model.odata.ODataMetadata`.
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachLoaded(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.ui.model.odata.ODataMetadata with name `sClassName` and enriches it with the information contained in `oClassInfo`.
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
        protected fireLoaded(): this;

        /**
            * Returns a metadata object for class sap.ui.model.odata.ODataMetadata.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Return the metadata object
        */
        public getServiceMetadata(): any;

        /**
            * Get the use-batch extension value if any
        */
        public getUseBatch(): boolean;

        /**
            * Checks whether metadata loading has already failed
        */
        public isFailed(): boolean;

        /**
            * Checks whether metadata is available
        */
        public isLoaded(): boolean;

        /**
            * Returns a promise for the loaded state of the metadata
        */
        public loaded(): any;

        /**
            * Refreshes the metadata creating a new request to the server. Returns a new promise which can be resolved or rejected depending on the metadata loading state.
        */
        public refresh(): any;

    }

}
