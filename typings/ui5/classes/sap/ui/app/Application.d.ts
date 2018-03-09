declare namespace sap.ui.app {

    /**
    
    */
    export abstract class Application extends sap.ui.core.Component {


        /**
            * Abstract application class. Extend this class to create a central application class.
         * 
         * Only one instance is allowed.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates and returns the root component. Override this method in your application implementation, if you want to override the default creation by metadata.
        */
        protected createRootComponent(): sap.ui.core.UIComponent;

        /**
            
        */
        public destroy(): any;

        /**
            * Destroys the rootComponent in the aggregation {@link #getRootComponent rootComponent}.
        */
        public destroyRootComponent(): sap.ui.app.Application;

        /**
            * Creates a new subclass of class sap.ui.app.Application with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Component.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getConfig config}.
        */
        public getConfig(): any;

        /**
            * Returns a metadata object for class sap.ui.app.Application.
        */
        public static getMetadata(): sap.ui.base.Metadata | any | sap.ui.core.ComponentMetadata;

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
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the specific class of the current instance.
        */
        public getMetadata(): sap.ui.core.ComponentMetadata | any | sap.ui.base.Metadata;

        /**
            * Gets current value of property {@link #getRoot root}.
        */
        public getRoot(): string;

        /**
            * Gets content of aggregation {@link #getRootComponent rootComponent}.
        */
        public getRootComponent(): sap.ui.core.UIComponent;

        /**
            * Returns the application root component.
        */
        public getView(): sap.ui.core.Control;

        /**
            * The main method is called when the DOM and UI5 is completely loaded. Override this method in your Application class implementation to execute code which relies on a loaded DOM / UI5.
        */
        public main(): any;

        /**
            * On before exit application hook. Override this method in your Application class implementation, to handle cleanup before the real exit or to prompt a question to the user, if the application should be exited.
        */
        public onBeforeExit(): string;

        /**
            * On error hook. Override this method in your Application class implementation to listen to unhandled errors.
        */
        public onError(sMessage: string, sFile: string, iLine: number): any;

        /**
            * On exit application hook. Override this method in your Application class implementation, to handle cleanup of the application.
        */
        public onExit(): any;

        /**
            * Sets the configuration model.
        */
        public setConfig(vConfig: string | any | sap.ui.model.Model): any;

        /**
            * Sets a new value for property {@link #getRoot root}.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setRoot(sRoot: string): sap.ui.app.Application;

        /**
            * Sets the aggregated {@link #getRootComponent rootComponent}.
        */
        public setRootComponent(oRootComponent: sap.ui.core.UIComponent): sap.ui.app.Application;

    }
}