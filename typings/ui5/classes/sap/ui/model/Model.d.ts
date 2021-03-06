declare namespace sap.ui.model {

    /**
    
    */
    export abstract class Model extends sap.ui.core.message.MessageProcessor {


        /**
            * Constructor for a new Model.
         * 
         * Every Model is a MessageProcessor that is able to handle Messages with the normal binding path syntax in the target.
        */
        public constructor();


        /**
            * Attach event-handler `fnFunction` to the 'parseError' event of this `sap.ui.model.Model`.
         * 
        */
        attachParseError<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { errorCode: number, url: string, reason: string, srcText: string, line: number, linepos: number, filepos: number, }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'parseError' event of this `sap.ui.model.Model`.
         * 
        */
        attachParseError<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { errorCode: number, url: string, reason: string, srcText: string, line: number, linepos: number, filepos: number, }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'propertyChange' event of this `sap.ui.model.Model`.
        */
        attachPropertyChange<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The cause of the property value change */
            reason: sap.ui.model.ChangeReason, /* * The path of the property */
            path: string, /* * The binding context (if available) */
            context?: sap.ui.model.Context, /* * The current value of the property */
            value: any,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'propertyChange' event of this `sap.ui.model.Model`.
        */
        attachPropertyChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The cause of the property value change */
            reason: sap.ui.model.ChangeReason, /* * The path of the property */
            path: string, /* * The binding context (if available) */
            context?: sap.ui.model.Context, /* * The current value of the property */
            value: any,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'requestCompleted' event of this `sap.ui.model.Model`.
        */
        attachRequestCompleted<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The url which was sent to the backend */
            url: string, /* * The type of the request (if available) */
            type?: string, /* * if the request has been successful or not. In case of errors consult the optional errorobject parameter. */
            success: boolean, /* * If the request failed the error if any can be accessed in this property. */
            errorobject?: any, /* * If the request is synchronous or asynchronous (if available) */
            async?: boolean, /* * Additional information for the request (if available) <strong>deprecated</strong> */
            info?: string, /* * Additional information for the request (if available) */
            infoObject?: any,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'requestCompleted' event of this `sap.ui.model.Model`.
        */
        attachRequestCompleted<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The url which was sent to the backend */
            url: string, /* * The type of the request (if available) */
            type?: string, /* * if the request has been successful or not. In case of errors consult the optional errorobject parameter. */
            success: boolean, /* * If the request failed the error if any can be accessed in this property. */
            errorobject?: any, /* * If the request is synchronous or asynchronous (if available) */
            async?: boolean, /* * Additional information for the request (if available) <strong>deprecated</strong> */
            info?: string, /* * Additional information for the request (if available) */
            infoObject?: any,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'requestFailed' event of this `sap.ui.model.Model`.
         * 
        */
        attachRequestFailed<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * A text that describes the failure. */
            message: string, /* * HTTP status code returned by the request (if available) */
            statusCode: string, /* * The status as a text, details not specified, intended only for diagnosis output */
            statusText: string, /* * Response that has been received for the request, as a text string */
            responseText?: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'requestFailed' event of this `sap.ui.model.Model`.
         * 
        */
        attachRequestFailed<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * A text that describes the failure. */
            message: string, /* * HTTP status code returned by the request (if available) */
            statusCode: string, /* * The status as a text, details not specified, intended only for diagnosis output */
            statusText: string, /* * Response that has been received for the request, as a text string */
            responseText?: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'requestSent' event of this `sap.ui.model.Model`.
        */
        attachRequestSent<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The url which is sent to the backend */
            url: string, /* * The type of the request (if available) */
            type?: string, /* * If the request is synchronous or asynchronous (if available) */
            async?: boolean, /* * Additional information for the request (if available) <strong>deprecated</strong> */
            info?: string, /* * Additional information for the request (if available) */
            infoObject?: any,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'requestSent' event of this `sap.ui.model.Model`.
        */
        attachRequestSent<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The url which is sent to the backend */
            url: string, /* * The type of the request (if available) */
            type?: string, /* * If the request is synchronous or asynchronous (if available) */
            async?: boolean, /* * Additional information for the request (if available) <strong>deprecated</strong> */
            info?: string, /* * Additional information for the request (if available) */
            infoObject?: any,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Create ContextBinding
        */
        public bindContext(sPath: string | any, oContext?: any, mParameters?: any, oEvents?: any): sap.ui.model.ContextBinding;

        /**
            * Implement in inheriting classes
        */
        public bindList(sPath: string, oContext?: any, aSorters?: sap.ui.model.Sorter, aFilters?: any[], mParameters?: any): sap.ui.model.ListBinding;

        /**
            * Implement in inheriting classes
        */
        public bindProperty(sPath: string, oContext?: any, mParameters?: any): sap.ui.model.PropertyBinding;

        /**
            * Implement in inheriting classes
        */
        public bindTree(sPath: string, oContext?: any, aFilters?: any[], mParameters?: any, aSorters?: any[]): sap.ui.model.TreeBinding;

        /**
            * Checks whether the given filters contain an unsupported operator.
         * 
         * OData v1, v2 and Client Bindings cannot be filtered with `sap.ui.model.FilterOperator` `"Any"` and `"All"`. The model property `mUnsupportedFilterOperators` can be configured in each model subclass to describe the unsupported operators.
         * 
         * If any of the given filters contains nested filters, those are checked recursively.
        */
        protected checkFilterOperation(vFilters: sap.ui.model.Filter | any[]): any;

        /**
            * Implement in inheriting classes
        */
        public createBindingContext(sPath: string, oContext?: any, mParameters?: any, fnCallBack?: Function, bReload?: boolean): sap.ui.model.Context;

        /**
            * Destroys the model and clears the model data. A model implementation may override this function and perform model specific cleanup tasks e.g. abort requests, prevent new requests, etc.
        */
        public destroy(): any;

        /**
            * Implement in inheriting classes
        */
        public destroyBindingContext(oContext: any): any;

        /**
            * Detach event-handler `fnFunction` from the 'parseError' event of this `sap.ui.model.Model`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachParseError(fnFunction: Function, oListener: any): sap.ui.model.Model;

        /**
            * Detach event-handler `fnFunction` from the 'propertyChange' event of this `sap.ui.model.Model`.
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachPropertyChange(fnFunction: Function, oListener: any): sap.ui.model.Model;

        /**
            * Detach event-handler `fnFunction` from the 'requestCompleted' event of this `sap.ui.model.Model`.
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachRequestCompleted(fnFunction: Function, oListener: any): sap.ui.model.Model;

        /**
            * Detach event-handler `fnFunction` from the 'requestFailed' event of this `sap.ui.model.Model`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachRequestFailed(fnFunction: Function, oListener: any): sap.ui.model.Model;

        /**
            * Detach event-handler `fnFunction` from the 'requestSent' event of this `sap.ui.model.Model`.
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachRequestSent(fnFunction: Function, oListener: any): sap.ui.model.Model;

        /**
            * Creates a new subclass of class sap.ui.model.Model with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.message.MessageProcessor.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fire event parseError to attached listeners.
        */
        protected fireParseError(mArguments?: { errorCode?: number, url?: string, reason?: string, srcText?: string, line?: number, linepos?: number, filepos?: number, }): sap.ui.model.Model;

        /**
            * Fire event propertyChange to attached listeners.
        */
        protected firePropertyChange(mArguments?: { reason?: sap.ui.model.ChangeReason, path?: string, context?: any, value?: any, }): sap.ui.model.Model;

        /**
            * Fire event requestCompleted to attached listeners.
        */
        protected fireRequestCompleted(mArguments?: { url?: string, type?: string, async?: boolean, info?: string, infoObject?: any, }): sap.ui.model.Model;

        /**
            * Fire event requestFailed to attached listeners.
        */
        protected fireRequestFailed(mArguments?: { message?: string, statusCode?: string, statusText?: string, responseText?: string, }): sap.ui.model.Model;

        /**
            * Fire event requestSent to attached listeners.
        */
        protected fireRequestSent(mArguments?: { url?: string, type?: string, async?: boolean, info?: string, infoObject?: any, }): sap.ui.model.Model;

        /**
            * Get the default binding mode for the model
        */
        public getDefaultBindingMode(): sap.ui.model.BindingMode;

        /**
            * Get messages for path
        */
        protected getMessagesByPath(sPath: string): any;

        /**
            * Returns a metadata object for class sap.ui.model.Model.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the meta model associated with this model if it is available for the concrete model type.
        */
        public getMetaModel(): sap.ui.model.MetaModel;

        /**
            * Implement in inheriting classes
        */
        public getObject(sPath: string, oContext?: any, mParameters?: any): any;

        /**
            * Returns the original value for the property with the given path and context. The original value is the value that was last responded by a server if using a server model implementation.
        */
        public getOriginalProperty(sPath: string, oContext?: any): any;

        /**
            * Implement in inheriting classes
        */
        public getProperty(sPath: string, oContext?: any): any;

        /**
            * Check if the specified binding mode is supported by the model.
        */
        public isBindingModeSupported(sMode: sap.ui.model.BindingMode): any;

        /**
            * Returns whether legacy path syntax is used
        */
        public isLegacySyntax(): boolean;

        /**
            * Refresh the model. This will check all bindings for updated data and update the controls if data has been changed.
        */
        public refresh(bForceUpdate: boolean): any;

        /**
            * Set the default binding mode for the model. If the default binding mode should be changed, this method should be called directly after model instance creation and before any binding creation. Otherwise it is not guaranteed that the existing bindings will be updated with the new binding mode.
        */
        public setDefaultBindingMode(sMode: sap.ui.model.BindingMode): sap.ui.model.Model;

        /**
            * Enables legacy path syntax handling
         * 
         * This defines, whether relative bindings, which do not have a defined binding context, should be compatible to earlier releases which means they are resolved relative to the root element or handled strict and stay unresolved until a binding context is set
        */
        public setLegacySyntax(bLegacySyntax: boolean): any;

        /**
            * Sets messages
        */
        public setMessages(mMessages: any): any;

        /**
            * Set the maximum number of entries which are used for list bindings.
        */
        public setSizeLimit(iSizeLimit: number): any;

    }
}