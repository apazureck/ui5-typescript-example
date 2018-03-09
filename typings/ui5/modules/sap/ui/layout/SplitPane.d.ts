declare module "sap/ui/layout/SplitPane" {

    /**
    
    */
    export default class SplitPane extends sap.ui.core.Element {


        /**
            * Constructor for a new SplitPane.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Destroys the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Creates a new subclass of class sap.ui.layout.SplitPane with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * Content of the SplitPane
        */
        public getContent(): sap.ui.core.Control;

        /**
            * Gets current value of property {@link #getDemandPane demandPane}.
         * 
         * Determines whether the pane will be moved to the pagination
         * 
         * Default value is `true`.
        */
        public getDemandPane(): boolean;

        /**
            * Returns a metadata object for class sap.ui.layout.SplitPane.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

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
            * Gets current value of property {@link #getRequiredParentWidth requiredParentWidth}.
         * 
         * Determines the minimum width of the ResponsiveSplitter(in pixels). When it is reached the pane will be hidden from the screen.
         * 
         * Default value is `800`.
        */
        public getRequiredParentWidth(): number;

        /**
            * Sets the aggregated {@link #getContent content}.
        */
        public setContent(oContent: sap.ui.core.Control): this;

        /**
            * Sets a new value for property {@link #getDemandPane demandPane}.
         * 
         * Determines whether the pane will be moved to the pagination
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setDemandPane(bDemandPane: boolean): this;

        /**
            * Sets a new value for property {@link #getRequiredParentWidth requiredParentWidth}.
         * 
         * Determines the minimum width of the ResponsiveSplitter(in pixels). When it is reached the pane will be hidden from the screen.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `800`.
        */
        public setRequiredParentWidth(iRequiredParentWidth: number): this;

    }

}
