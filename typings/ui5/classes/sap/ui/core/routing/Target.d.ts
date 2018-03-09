declare namespace sap.ui.core.routing {

    export class Target extends sap.ui.base.EventProvider {


        /**
            * Provides a convenient way for placing views into the correct containers of your application.
         *  The main benefit of Targets is lazy loading: you do not have to create the views until you really need them.
         *  ** Don't call this constructor directly **, use {@link sap.ui.core.routing.Targets} instead, it will create instances of a Target.
         *  If you are using the mobile library, please use the {@link sap.m.routing.Targets} constructor, please read the documentation there.
         * 
        */
        public constructor(oOptions: any, oViews: sap.ui.core.routing.Views, oParent?: sap.ui.core.routing.Target);


        /**
            * This function is called between the target view is loaded and the view is added to the container.
         * 
         * This function can be used for applying modification on the view or the container to make the rerendering occur together with the later aggregation change.
        */
        protected _beforePlacingViewIntoContainer(mArguments: { container: sap.ui.core.Control, view: sap.ui.core.Control, data?: any, }): any;

        /**
            * Attach event-handler `fnFunction` to the 'display' event of this `sap.ui.core.routing.Target`.
         * 
        */
        attachDisplay<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The view that got displayed. */
            view: any, /* * The control that now contains the view in the controlAggregation */
            control: any, /* * The options object passed to the constructor {@link sap.ui.core.routing.Target#constructor} */
            config: any, /* * The data passed into the {@link sap.ui.core.routing.Target#display} function */
            data: any,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'display' event of this `sap.ui.core.routing.Target`.
         * 
        */
        attachDisplay<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The view that got displayed. */
            view: any, /* * The control that now contains the view in the controlAggregation */
            control: any, /* * The options object passed to the constructor {@link sap.ui.core.routing.Target#constructor} */
            config: any, /* * The data passed into the {@link sap.ui.core.routing.Target#display} function */
            data: any,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Destroys the target, will be called by {@link sap.m.routing.Targets} don't call this directly.
        */
        public destroy(): sap.ui.core.routing.Target | any;

        /**
            * Destructor method for objects
        */
        public destroy(): any;

        /**
            * Detach event-handler `fnFunction` from the 'display' event of this `sap.ui.core.routing.Target`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachDisplay(fnFunction: Function, oListener: any): sap.ui.core.routing.Target;

        /**
            * Creates a view and puts it in an aggregation of a control that has been defined in the {@link sap.ui.core.routing.Target#constructor}.
        */
        public display(vData?: any): any;

        /**
            * Creates a new subclass of class sap.ui.core.routing.Target with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fire event created to attached listeners.
        */
        protected fireDisplay(mArguments?: any): sap.ui.core.routing.Target;

        /**
            * Returns a metadata object for class sap.ui.core.routing.Target.
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