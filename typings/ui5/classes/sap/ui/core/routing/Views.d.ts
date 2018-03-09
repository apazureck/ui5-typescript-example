declare namespace sap.ui.core.routing {

    export class Views extends sap.ui.base.EventProvider {


        /**
            * Instantiates a view repository that creates and caches views. If it is destroyed, all the Views it created are destroyed. Usually you do not have to create instances of this class, it is used by the {@link sap.ui.core.routing.Router}. If you are using {@link sap.ui.core.routing.Targets} without using a {@link sap.ui.core.UIComponent} you have to create an instance of this class. They will create an instance on their own, or if they are used with a {@link sap.ui.core.UIComponent} they will share the same instance of Views.
        */
        public constructor(oOptions: { component?: sap.ui.core.UIComponent, async?: boolean, });


        /**
            * Attach event-handler `fnFunction` to the 'created' event of this `sap.ui.core.routing.Views`.
         * 
        */
        attachCreated<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * the instance of the created view. */
            view: sap.ui.core.mvc.View, /* * The view options passed to {@link sap.ui.view} */
            viewOptions: any,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'created' event of this `sap.ui.core.routing.Views`.
         * 
        */
        attachCreated<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * the instance of the created view. */
            view: sap.ui.core.mvc.View, /* * The view options passed to {@link sap.ui.view} */
            viewOptions: any,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detach event-handler `fnFunction` from the 'created' event of this `sap.ui.core.routing.Views`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachCreated(fnFunction: Function, oListener: any): sap.ui.core.routing.Views;

        /**
            * Creates a new subclass of class sap.ui.core.routing.Views with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fire event created to attached listeners.
        */
        protected fireCreated(mArguments?: any): sap.ui.core.routing.Views;

        /**
            * Returns a metadata object for class sap.ui.core.routing.Views.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a cached view, for a given name. If it does not exist yet, it will create the view with the provided options. If you provide a viewId, it will be prefixed with the viewId of the component.
        */
        public getView(oOptions: { viewName: string, }): any;

        /**
            * Adds or overwrites a view in the cache of the Views instance. The viewName serves as a key for caching.
         * 
         * If the second parameter is set to null or undefined, the previous cache view under the same name isn't managed by the Views instance. The lifecycle (for example the destroy of the view) of the view instance should be maintained by additional code.
        */
        public setView(sViewName: string, oView: sap.ui.core.mvc.View | any | any): sap.ui.core.routing.Views;

    }
}