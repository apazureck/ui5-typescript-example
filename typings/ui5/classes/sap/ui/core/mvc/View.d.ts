declare namespace sap.ui.core.mvc {

    /**
    
    */
    export class View extends sap.ui.core.Control {

        /**
            * Constructor for a new View.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: any);


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: sap.ui.core.Control): sap.ui.core.mvc.View;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterInit afterInit} event of this `sap.ui.core.mvc.View`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.mvc.View` itself.
         * 
         * Fired when the View has parsed the UI description and instantiated the contained controls (/control tree).
        */
        attachAfterInit<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterInit afterInit} event of this `sap.ui.core.mvc.View`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.mvc.View` itself.
         * 
         * Fired when the View has parsed the UI description and instantiated the contained controls (/control tree).
        */
        attachAfterInit<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterRendering afterRendering} event of this `sap.ui.core.mvc.View`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.mvc.View` itself.
         * 
         * Fired when the View has been (re-)rendered and its HTML is present in the DOM.
        */
        attachAfterRendering<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterRendering afterRendering} event of this `sap.ui.core.mvc.View`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.mvc.View` itself.
         * 
         * Fired when the View has been (re-)rendered and its HTML is present in the DOM.
        */
        attachAfterRendering<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeExit beforeExit} event of this `sap.ui.core.mvc.View`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.mvc.View` itself.
         * 
         * Fired when the view has received the request to destroy itself, but before it has destroyed anything.
        */
        attachBeforeExit<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeExit beforeExit} event of this `sap.ui.core.mvc.View`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.mvc.View` itself.
         * 
         * Fired when the view has received the request to destroy itself, but before it has destroyed anything.
        */
        attachBeforeExit<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeRendering beforeRendering} event of this `sap.ui.core.mvc.View`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.mvc.View` itself.
         * 
         * Fired before this View is re-rendered. Use to unbind event handlers from HTML elements etc.
        */
        attachBeforeRendering<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeRendering beforeRendering} event of this `sap.ui.core.mvc.View`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.mvc.View` itself.
         * 
         * Fired before this View is re-rendered. Use to unbind event handlers from HTML elements etc.
        */
        attachBeforeRendering<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Returns an element by its ID in the context of the view.
        */
        public byId(sId: string): sap.ui.core.Element;

        /**
            * Clones a tree of objects starting with the object on which clone is called first (root object).
         * 
         * The IDs within the newly created clone tree are derived from the original IDs by appending the given `sIdSuffix` (if no suffix is given, one will be created; it will be unique across multiple clone calls).
         * 
         * The `oOptions` configuration object can have the following properties:  * The boolean value `cloneChildren` specifies whether associations/aggregations will be cloned * The boolean value `cloneBindings` specifies if bindings will be cloned 
         * 
         * For each cloned object the following settings are cloned based on the metadata of the object and the defined options:  * all properties that are not bound. If `cloneBinding` is `false`, even these properties will be cloned; the values are used by reference, they are not cloned * all aggregated objects that are not bound. If `cloneBinding` is `false`, even the ones that are bound will be cloned; they are all cloned recursively using the same `sIdSuffix` * all associated controls; when an association points to an object inside the cloned object tree, then the cloned association will be modified to that it points to the clone of the target object. When the association points to a managed object outside of the cloned object tree, then its target won't be changed. * all models set via `setModel()`; used by reference * all property and aggregation bindings (if `cloneBindings` is `true`); the pure binding information (path, model name) is cloned, but all other information like template control or factory function, data type or formatter function are copied by reference. The bindings themselves are created anew as they are specific for the combination (object, property, model). As a result, any later changes to a binding of the original object are not reflected in the clone, but changes to e.g the type or template etc. are. 
         * 
         * Each clone is created by first collecting the above mentioned settings and then creating a new instance with the normal constructor function. As a result, any side effects of mutator methods (`setProperty` etc.) or init hooks are repeated during clone creation. There is no need to override `clone()` just to reproduce these internal settings!
         * 
         * Custom controls however can override `clone()` to implement additional clone steps. They usually will first call `clone()` on the super class and then modify the returned clone accordingly.
         * 
         * Applications ** must never provide ** the second parameter `aLocaleIds`. It is determined automatically for the root object (and its non-existence also serves as an indicator for the root object). Specifying it will break the implementation of `clone()`.
        */
        protected clone(sIdSuffix?: string, aLocalIds?: any[], oOptions?: any, cloneChildren?: boolean, cloneBindings?: boolean): sap.ui.base.ManagedObject;

        /**
            * Override clone method to avoid conflict between generic cloning of content and content creation as defined by the UI5 Model View Controller lifecycle.
         * 
         * For more details see the development guide section about Model View Controller in UI5.
        */
        protected clone(sIdSuffix?: string, aLocalIds?: any[]): sap.ui.core.Element | sap.ui.base.ManagedObject;

        /**
            * Convert the given view local element ID to a globally unique ID by prefixing it with the view ID.
        */
        public createId(sId: string): string;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): sap.ui.core.mvc.View;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterInit afterInit} event of this `sap.ui.core.mvc.View`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterInit(fnFunction: Function, oListener: any): sap.ui.core.mvc.View;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterRendering afterRendering} event of this `sap.ui.core.mvc.View`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterRendering(fnFunction: Function, oListener: any): sap.ui.core.mvc.View;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeExit beforeExit} event of this `sap.ui.core.mvc.View`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeExit(fnFunction: Function, oListener: any): sap.ui.core.mvc.View;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeRendering beforeRendering} event of this `sap.ui.core.mvc.View`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeRendering(fnFunction: Function, oListener: any): sap.ui.core.mvc.View;

        /**
            * Creates a new subclass of class sap.ui.core.mvc.View with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:afterInit afterInit} to attached listeners.
        */
        protected fireAfterInit(mParameters?: any): sap.ui.core.mvc.View;

        /**
            * Fires event {@link #event:afterRendering afterRendering} to attached listeners.
        */
        protected fireAfterRendering(mParameters?: any): sap.ui.core.mvc.View;

        /**
            * Fires event {@link #event:beforeExit beforeExit} to attached listeners.
        */
        protected fireBeforeExit(mParameters?: any): sap.ui.core.mvc.View;

        /**
            * Fires event {@link #event:beforeRendering beforeRendering} to attached listeners.
        */
        protected fireBeforeRendering(mParameters?: any): sap.ui.core.mvc.View;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * Child Controls of the view
        */
        public getContent(): any[];

        /**
            * Returns the view's Controller instance or null for a controller-less View.
        */
        public getController(): any;

        /**
            * An (optional) method to be implemented by Views. When no controller instance is given at View instantiation time AND this method exists and returns the (package and class) name of a controller, the View tries to load and instantiate the controller and to connect it to itself.
        */
        public getControllerName(): string;

        /**
            * Gets current value of property {@link #getDisplayBlock displayBlock}.
         * 
         * Whether the CSS display should be set to "block". Set this to "true" if the default display "inline-block" causes a vertical scrollbar with Views that are set to 100% height. Do not set this to "true" if you want to display other content in the same HTML parent on either side of the View (setting to "true" may push that other content to the next/previous line).
         * 
         * Default value is `false`.
        */
        public getDisplayBlock(): boolean;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * The height
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Returns the local ID of an element by removing the view ID prefix or `null` if the ID does not contain a prefix.
        */
        public getLocalId(sId: string): string;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.core.mvc.View.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the info object which is also passed to the preprocessors
        */
        protected getPreprocessorInfo(bSync: boolean): any;

        /**
            * Returns user specific data object
        */
        public getViewData(): any;

        /**
            * Gets current value of property {@link #getViewName viewName}.
         * 
         * Name of the View
        */
        public getViewName(): string;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * The width
         * 
         * Default value is `100%`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks if any preprocessors are active for the specified type
        */
        protected hasPreprocessor(sType: string): boolean;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: sap.ui.core.Control): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: sap.ui.core.Control, iIndex: number): sap.ui.core.mvc.View;

        /**
            * Creates a Promise representing the state of the view initialization.
         * 
         * For views that are loading asynchronously (by setting async=true) this Promise is created by view initialization. Synchronously loading views get wrapped in an immediately resolving Promise.
        */
        public loaded(): any;

        /**
            * Register a preprocessor for all views of a specific type.
         * 
         * The preprocessor can be registered for several stages of view initialization, which are dependent on the view type, e.g. "raw", "xml" or already initialized "controls". If there is a preprocessor passed to or activated at the view instance already, that one is used. When several preprocessors are registered for one hook, it has to be made sure that they do not conflict when being processed serially.
         * 
         * It can be either a module name as string of an implementation of {@link sap.ui.core.mvc.View.Preprocessor} or a function with a signature according to {@link sap.ui.core.mvc.View.Preprocessor.process}.
         * 
         * ** Note **: Preprocessors only work in async views and will be ignored when the view is instantiated in sync mode by default, as this could have unexpected side effects. You may override this behaviour by setting the `bSyncSupport` flag to `true`.
        */
        protected static registerPreprocessor(sType: string, vPreprocessor: string | Function, sViewType: string, bSyncSupport: boolean, bOnDemand?: boolean, mSettings?: any): any;

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): any[];

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control;

        /**
            * Executes preprocessors for a type of source
        */
        protected runPreprocessor(sType: string, vSource: any | string | any, bSync?: boolean): any | any | string | any;

        /**
            * Sets a new value for property {@link #getDisplayBlock displayBlock}.
         * 
         * Whether the CSS display should be set to "block". Set this to "true" if the default display "inline-block" causes a vertical scrollbar with Views that are set to 100% height. Do not set this to "true" if you want to display other content in the same HTML parent on either side of the View (setting to "true" may push that other content to the next/previous line).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setDisplayBlock(bDisplayBlock: boolean): sap.ui.core.mvc.View;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * The height
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): sap.ui.core.mvc.View;

        /**
            * Sets a new value for property {@link #getViewName viewName}.
         * 
         * Name of the View
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setViewName(sViewName: string): sap.ui.core.mvc.View;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * The width
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): sap.ui.core.mvc.View;

    }
}