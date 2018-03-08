declare namespace sap.ui.core {

    /**
    
    */
    export class UIComponent extends sap.ui.core.Component {

        /**
            * Base Class for UIComponent.
         * 
         * If you are extending a UIComponent make sure you read the {@link #.extend} documentation since the metadata is special.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: any);


        /**
            * Returns an element by its ID in the context of the component.
        */
        public byId(sId: string): sap.ui.core.Element;

        /**
            * Hook method to create the content (UI Control Tree) of this component.
         * 
         * The default implementation in this class reads the name (and optionally type) of a root view from the descriptor for this component (path `/sap.ui5/rootView`) or, for backward compatibility, just the name from static component metadata (property `rootView`). When no type is specified, it defaults to XML. The method then calls the {@link sap.ui.view view factory} to instantiate the root view and returns the result.
         * 
         * When there is no root view configuration, `null` will be returned.
         * 
         * This method can be overwritten by subclasses if the default implementation doesn't fit their needs. Subclasses are not limited to views as return type but may return any control, but only a single control (can be the root of a larger control tree, however).
        */
        public createContent(): sap.ui.core.mvc.View | sap.ui.core.Control;

        /**
            * Convert the given component local element ID to a globally unique ID by prefixing it with the component ID.
        */
        public createId(sId: string): string;

        /**
            * Creates a new subclass of class sap.ui.core.UIComponent with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Component.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * A method to be implemented by UIComponents, returning the flag whether to prefix the IDs of controls automatically or not if the controls are created inside the {@link sap.ui.core.UIComponent#createContent} function. By default this feature is not activated.
         * 
         * You can overwrite this function and return `true` to activate the automatic prefixing. In addition the default behavior can be configured in the manifest by specifying the entry `sap.ui5/autoPrefixId`.
        */
        protected getAutoPrefixId(): boolean;

        /**
            
        */
        protected getEventingParent(): any | sap.ui.base.EventProvider;

        /**
            * Returns the parent in the eventing hierarchy of this object.
         * 
         * Per default this returns null, but if eventing is used in objects, which are hierarchically structured, this can be overwritten to make the object hierarchy visible to the eventing and enables the use of event bubbling within this object hierarchy.
        */
        protected getEventingParent(): sap.ui.base.EventProvider;

        /**
            * Returns the local ID of an element by removing the component ID prefix or `null` if the ID does not contain a prefix.
        */
        public getLocalId(sId: string): string;

        /**
            * Returns a metadata object for class sap.ui.base.EventProvider.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the Component class.
        */
        public static getMetadata(): sap.ui.core.ComponentMetadata;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

        /**
            * Returns the metadata for the specific class of the current instance.
        */
        public getMetadata(): sap.ui.core.ComponentMetadata | any | sap.ui.base.Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.UIComponent.
        */
        public static getMetadata(): sap.ui.base.Metadata | any | sap.ui.core.ComponentMetadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the content of {@link sap.ui.core.UIComponent#createContent}. If you specified a `rootView` in your metadata or in the descriptor file (manifest.json), you will get the instance of the root view. This getter will only return something if the {@link sap.ui.core.UIComponent#init} function was invoked. If `createContent` is not implemented, and there is no root view, it will return `null`. Here is an example: ` `var MyExtension = UIComponent.extend("my.Component", {
         *               metadata: {
         *                    rootView: "my.View"
         *               },
         *               init: function () {
         *                    this.getRootControl(); // returns null
         *                    UIComponent.prototype.init.apply(this, arguments);
         *                    this.getRootControl(); // returns the view "my.View"
         *               }
         *          });` `
        */
        protected getRootControl(): sap.ui.core.Control;

        /**
            * Returns the reference to the router instance which has been created by the UIComponent once the routes in the routing metadata has been defined.
        */
        public getRouter(): sap.ui.core.routing.Router;

        /**
            * Returns the reference to the router instance. The passed controller or view has to be created in the context of a UIComponent to return the router instance. Otherwise this function will return undefined. You may define the routerClass property in the config section of the routing to make the Component create your router extension. Example: routing: { config: { routerClass : myAppNamespace.MyRouterClass ... } ...
        */
        public static getRouterFor(oControllerOrView: sap.ui.core.mvc.View | sap.ui.core.mvc.Controller): sap.ui.core.routing.Router;

        /**
            * Returns the reference to the Targets instance which has been created by the UIComponent once the targets in the routing metadata has been defined. If routes have been defined, it will be the Targets instance created and used by the router.
        */
        public getTargets(): sap.ui.core.routing.Targets;

        /**
            * Returns the reference to the UIArea of the container.
        */
        public getUIArea(): sap.ui.core.UIArea;

        /**
            * Initializes the Component instance after creation.
         * 
         * Applications must not call this hook method directly, it is called by the framework while the constructor of a Component is executed.
         * 
         * Subclasses of Component should override this hook to implement any necessary initialization. ** When overriding this function make sure to invoke the init function of the UIComponent as well! **
        */
        protected init(): any;

        /**
            * Function is called when the rendering of the ComponentContainer is completed.
         * 
         * Applications must not call this hook method directly, it is called from ComponentContainer.
         * 
         * Subclasses of UIComponent override this hook to implement any necessary actions after the rendering.
        */
        protected onAfterRendering(): any;

        /**
            * Function is called when the rendering of the ComponentContainer is started.
         * 
         * Applications must not call this hook method directly, it is called from ComponentContainer.
         * 
         * Subclasses of UIComponent override this hook to implement any necessary actions before the rendering.
        */
        protected onBeforeRendering(): any;

        /**
            * Renders the root control of the UIComponent.
        */
        public render(oRenderManager: sap.ui.core.RenderManager): any;

        /**
            * Sets the reference to the ComponentContainer - later required for the determination of the UIArea for the UIComponent.
        */
        public setContainer(oContainer: sap.ui.core.ComponentContainer): sap.ui.core.UIComponent;

    }
}