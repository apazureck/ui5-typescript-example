declare module "sap/ui/layout/ResponsiveSplitter" {
    import PaneContainer from "sap/ui/layout/PaneContainer";
    import SplitPane from "sap/ui/layout/SplitPane";

    /**
    
    */
    export default class ResponsiveSplitter extends sap.ui.core.Control {


        /**
            * Constructor for a new ResponsiveSplitter.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Destroys the rootPaneContainer in the aggregation {@link #getRootPaneContainer rootPaneContainer}.
        */
        public destroyRootPaneContainer(): this;

        /**
            * Creates a new subclass of class sap.ui.layout.ResponsiveSplitter with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * ID of the element which is the current target of the association {@link #getDefaultPane defaultPane}, or `null`.
        */
        public getDefaultPane(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * The height of the control
         * 
         * Default value is `100%`.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.ui.layout.ResponsiveSplitter.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

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
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Gets content of aggregation {@link #getRootPaneContainer rootPaneContainer}.
         * 
         * The root PaneContainer of the ResponsiveSplitter
        */
        public getRootPaneContainer(): PaneContainer;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * The width of the control
         * 
         * Default value is `100%`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Sets the associated {@link #getDefaultPane defaultPane}.
        */
        public setDefaultPane(oDefaultPane: sap.ui.core.ID | SplitPane): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * The height of the control
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets the aggregated {@link #getRootPaneContainer rootPaneContainer}.
        */
        public setRootPaneContainer(oRootPaneContainer: PaneContainer): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * The width of the control
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }

}
