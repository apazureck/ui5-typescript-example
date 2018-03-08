declare namespace sap.ui.core.routing {

    export class Targets extends sap.ui.base.EventProvider {

        /**
            * Provides a convenient way for placing views into the correct containers of your application. The main benefit of Targets is lazy loading: you do not have to create the views until you really need them. If you are using the mobile library, please use {@link sap.m.routing.Targets} instead of this class.
        */
        public constructor(oOptions: { views: sap.ui.core.routing.Views, config?: any, targets: any, });


        /**
            * Creates a target by using the given name and options. If there's already a target with the same name exists, the existing target is kept from being overwritten and an error log will be written to the development console.
        */
        public addTarget(sName: string, oTarget: any): sap.ui.core.routing.Targets;

        /**
            * Attach event-handler `fnFunction` to the 'display' event of this `sap.ui.core.routing.Targets`.
         * 
        */
        attachDisplay<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The view that got displayed. */
            view: any, /* * The control that now contains the view in the controlAggregation */
            control: any, /* * The options object passed to the constructor {@link sap.ui.core.routing.Targets#constructor} */
            config: any, /* * The name of the target firing the event */
            name: any, /* * The data passed into the {@link sap.ui.core.routing.Targets#display} function */
            data: any,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'display' event of this `sap.ui.core.routing.Targets`.
         * 
        */
        attachDisplay<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The view that got displayed. */
            view: any, /* * The control that now contains the view in the controlAggregation */
            control: any, /* * The options object passed to the constructor {@link sap.ui.core.routing.Targets#constructor} */
            config: any, /* * The name of the target firing the event */
            name: any, /* * The data passed into the {@link sap.ui.core.routing.Targets#display} function */
            data: any,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'titleChanged' event of this `sap.ui.core.routing.Targets`.
         * 
        */
        attachTitleChanged<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The current displayed title */
            title: string, /* * The name of the displayed target */
            name: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'titleChanged' event of this `sap.ui.core.routing.Targets`.
         * 
        */
        attachTitleChanged<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The current displayed title */
            title: string, /* * The name of the displayed target */
            name: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys the targets instance and all created targets. Does not destroy the views instance passed to the constructor. It has to be destroyed separately.
        */
        public destroy(): sap.ui.core.routing.Targets | any;

        /**
            * Destructor method for objects
        */
        public destroy(): any;

        /**
            * Detach event-handler `fnFunction` from the 'display' event of this `sap.ui.core.routing.Targets`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachDisplay(fnFunction: Function, oListener: any): sap.ui.core.routing.Targets;

        /**
            * Detach event-handler `fnFunction` from the 'titleChanged' event of this `sap.ui.core.routing.Targets`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachTitleChanged(fnFunction: Function, oListener: any): sap.ui.core.routing.Targets;

        /**
            * Creates a view and puts it in an aggregation of the specified control.
        */
        public display(vTargets: string | any[], oData?: any, sTitleTarget?: string): sap.ui.core.routing.Targets | any;

        /**
            * Creates a new subclass of class sap.ui.core.routing.Targets with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fire event created to attached listeners.
        */
        public fireDisplay(mArguments?: any): sap.ui.core.routing.Targets;

        /**
            * Returns a metadata object for class sap.ui.core.routing.Targets.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a target by its name (if you pass myTarget: { view: "myView" }) in the config myTarget is the name.
        */
        public getTarget(vName: string | any[]): sap.ui.core.routing.Target | any | any[];

        /**
            * Returns the views instance passed to the constructor
        */
        public getViews(): sap.ui.core.routing.Views;

    }
}