declare namespace sap.ui.core.routing {

    export class Router extends sap.ui.base.EventProvider {


        /**
            * Instantiates a SAPUI5 Router
        */
        public constructor(oRoutes?: any | any[], oConfig?: { async?: boolean, }, oOwner?: sap.ui.core.UIComponent, oTargetsConfig?: any);


        /**
            * Adds a route to the router
        */
        public addRoute(oConfig: any, oParent: sap.ui.core.routing.Route): any;

        /**
            * Attach event-handler `fnFunction` to the 'beforeRouteMatched' event of this `sap.ui.core.routing.Router`.
         * 
        */
        attachBeforeRouteMatched<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The name of the route */
            name: string, /* * A key-value pair object which contains the arguments defined in the route resolved with the corresponding information from the current URL hash */
            arguments: any, /* * The configuration object of the route */
            config: any, /* * The nested route instance of this route. The event is fired on this route because the pattern in the nested route is matched with the current URL hash. This parameter can be used to decide whether the current route is matched because of its nested child route. For more information about nested child route please refer to the documentation of oConfig.parent in {@link sap.ui.core.routing.Route#constructor} */
            nestedRoute?: sap.ui.core.routing.Route,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'beforeRouteMatched' event of this `sap.ui.core.routing.Router`.
         * 
        */
        attachBeforeRouteMatched<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The name of the route */
            name: string, /* * A key-value pair object which contains the arguments defined in the route resolved with the corresponding information from the current URL hash */
            arguments: any, /* * The configuration object of the route */
            config: any, /* * The nested route instance of this route. The event is fired on this route because the pattern in the nested route is matched with the current URL hash. This parameter can be used to decide whether the current route is matched because of its nested child route. For more information about nested child route please refer to the documentation of oConfig.parent in {@link sap.ui.core.routing.Route#constructor} */
            nestedRoute?: sap.ui.core.routing.Route,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'bypassed' event of this `sap.ui.core.routing.Router`.
         *  The event will get fired, if none of the routes of the routes is matching. 
         * 
        */
        attachBypassed<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * the current URL hash which did not match any route */
            hash: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'bypassed' event of this `sap.ui.core.routing.Router`.
         *  The event will get fired, if none of the routes of the routes is matching. 
         * 
        */
        attachBypassed<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * the current URL hash which did not match any route */
            hash: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'routeMatched' event of this `sap.ui.core.routing.Router`.
         * 
        */
        attachRouteMatched<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The name of the route */
            name: string, /* * A key-value pair object which contains the arguments defined in the route resolved with the corresponding information from the current URL hash */
            arguments: any, /* * The configuration object of the route */
            config: any, /* * The nested route instance of this route. The event is fired on this route because the pattern in the nested route is matched with the current URL hash. This parameter can be used to decide whether the current route is matched because of its nested child route. For more information about nested child route please refer to the documentation of oConfig.parent in {@link sap.ui.core.routing.Route#constructor} */
            nestedRoute?: sap.ui.core.routing.Route,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'routeMatched' event of this `sap.ui.core.routing.Router`.
         * 
        */
        attachRouteMatched<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The name of the route */
            name: string, /* * A key-value pair object which contains the arguments defined in the route resolved with the corresponding information from the current URL hash */
            arguments: any, /* * The configuration object of the route */
            config: any, /* * The nested route instance of this route. The event is fired on this route because the pattern in the nested route is matched with the current URL hash. This parameter can be used to decide whether the current route is matched because of its nested child route. For more information about nested child route please refer to the documentation of oConfig.parent in {@link sap.ui.core.routing.Route#constructor} */
            nestedRoute?: sap.ui.core.routing.Route,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'routePatternMatched' event of this `sap.ui.core.routing.Router`.
         *  This event is similar to route matched. But it will only fire for the route that has a matching pattern, not for its parent Routes 
         * 
        */
        attachRoutePatternMatched<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The name of the route */
            name: string, /* * A key-value pair object which contains the arguments defined in the route resolved with the corresponding information from the current URL hash */
            arguments: any, /* * The configuration object of the route */
            config: any,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'routePatternMatched' event of this `sap.ui.core.routing.Router`.
         *  This event is similar to route matched. But it will only fire for the route that has a matching pattern, not for its parent Routes 
         * 
        */
        attachRoutePatternMatched<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The name of the route */
            name: string, /* * A key-value pair object which contains the arguments defined in the route resolved with the corresponding information from the current URL hash */
            arguments: any, /* * The configuration object of the route */
            config: any,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'titleChanged' event of this `sap.ui.core.routing.Router`.
         * 
        */
        attachTitleChanged<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The current displayed title */
            title: string, /* * An array which contains the history of previous titles */
            history: any[],
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'titleChanged' event of this `sap.ui.core.routing.Router`.
         * 
        */
        attachTitleChanged<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The current displayed title */
            title: string, /* * An array which contains the history of previous titles */
            history: any[],
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'viewCreated' event of this `sap.ui.core.routing.Router`.
         * 
        */
        public attachViewCreated(oData: any, fnFunction: Function, oListener?: any): sap.ui.core.routing.Router;

        /**
            * Attach event-handler `fnFunction` to the 'viewCreated' event of this `sap.ui.core.routing.Router`.
         * 
        */
        public attachViewCreated(fnFunction: Function, oListener?: any): sap.ui.core.routing.Router;

        /**
            * Removes the router from the hash changer @see sap.ui.core.routing.HashChanger
        */
        public destroy(): sap.ui.core.routing.Router | any;

        /**
            * Destructor method for objects
        */
        public destroy(): any;

        /**
            * Detach event-handler `fnFunction` from the 'beforeRouteMatched' event of this `sap.ui.core.routing.Router`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachBeforeRouteMatched(fnFunction: Function, oListener: any): sap.ui.core.routing.Router;

        /**
            * Detach event-handler `fnFunction` from the 'bypassed' event of this `sap.ui.core.routing.Router`.
         *  The event will get fired, if none of the routes of the routes is matching. 
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachBypassed(fnFunction: Function, oListener: any): sap.ui.core.routing.Router;

        /**
            * Detach event-handler `fnFunction` from the 'routeMatched' event of this `sap.ui.core.routing.Router`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachRouteMatched(fnFunction: Function, oListener: any): sap.ui.core.routing.Router;

        /**
            * Detach event-handler `fnFunction` from the 'routePatternMatched' event of this `sap.ui.core.routing.Router`.
         *  This event is similar to route matched. But it will only fire for the route that has a matching pattern, not for its parent Routes 
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachRoutePatternMatched(fnFunction: Function, oListener: any): sap.ui.core.routing.Router;

        /**
            * Detach event-handler `fnFunction` from the 'titleChanged' event of this `sap.ui.core.routing.Router`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachTitleChanged(fnFunction: Function, oListener: any): sap.ui.core.routing.Router;

        /**
            * Detach event-handler `fnFunction` from the 'viewCreated' event of this `sap.ui.core.routing.Router`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachViewCreated(fnFunction: Function, oListener: any): sap.ui.core.routing.Router;

        /**
            * Creates a new subclass of class sap.ui.core.routing.Router with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fire event beforeRouteMatched to attached listeners.
        */
        protected fireBeforeRouteMatched(mArguments?: any): sap.ui.core.routing.Router;

        /**
            * Fire event bypassed to attached listeners. The event will get fired, if none of the routes of the routes is matching. 
         * 
        */
        protected fireBypassed(mArguments?: any): sap.ui.core.routing.Router;

        /**
            * Fire event routeMatched to attached listeners.
        */
        protected fireRouteMatched(mArguments?: any): sap.ui.core.routing.Router;

        /**
            * Fire event routePatternMatched to attached listeners. This event is similar to route matched. But it will only fire for the route that has a matching pattern, not for its parent Routes 
         * 
        */
        protected fireRoutePatternMatched(mArguments?: any): sap.ui.core.routing.Router;

        /**
            * Fire event viewCreated to attached listeners.
        */
        protected fireViewCreated(mArguments?: any): sap.ui.core.routing.Router;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.core.routing.Router.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the Route with a name, if no route is found undefined is returned
        */
        public getRoute(sName: string): sap.ui.core.routing.Route;

        /**
            * Get a registered router
        */
        public static getRouter(sName: string): sap.ui.core.routing.Router;

        /**
            * Returns the instance of Targets, if you pass a targets config to the router
        */
        public getTargets(): sap.ui.core.routing.Targets | any;

        /**
            * Returns the title history.
         * 
         * History entry example: ` { title: "TITLE", // The displayed title hash: "HASH" // The url hash isHome: "true/false" // The app home indicator } `
        */
        public getTitleHistory(): any[];

        /**
            * Returns the URL for the route and replaces the placeholders with the values in oParameters
        */
        public getURL(sName: string, oParameters?: any): string;

        /**
            * Returns a cached view for a given name or creates it if it does not yet exists
        */
        public getView(sViewName: string, sViewType: string, sViewId: string): sap.ui.core.mvc.View;

        /**
            * Returns the views instance created by the router
        */
        public getViews(): sap.ui.core.routing.Views;

        /**
            * Attaches the router to the hash changer @see sap.ui.core.routing.HashChanger
        */
        public initialize(bIgnoreInitialHash?: boolean): sap.ui.core.routing.Router;

        /**
            * Navigates to a specific route defining a set of parameters. The Parameters will be URI encoded - the characters ; , / ? : @ & = + $ are reserved and will not be encoded. If you want to use special characters in your oParameters, you have to encode them (encodeURIComponent).
         * 
         * IF the given route name can't be found, an error message is logged to the console and the hash will be changed to empty string.
        */
        public navTo(sName: string, oParameters?: any, bReplace?: boolean): sap.ui.core.routing.Router;

        /**
            * Will trigger routing events + place targets for routes matching the string
        */
        protected parse(sNewHash: string): any;

        /**
            * Registers the router to access it from another context. Use sap.ui.routing.Router.getRouter() to receive the instance
        */
        public register(sName: string): any;

        /**
            * Adds or overwrites a view in the viewcache of the router, the viewname serves as a key
        */
        public setView(sViewName: string, oView: sap.ui.core.mvc.View): sap.ui.core.routing.Router;

        /**
            * Stops to listen to the hashChange of the browser.
         *  If you want the router to start again, call initialize again.
        */
        public stop(): sap.ui.core.routing.Router;

    }
}