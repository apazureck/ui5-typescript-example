declare module "sap/ui/ux3/ExactArea" {
    import sapuicommonslibrary from "sap/ui/commons/library";
    type ToolbarItem = sapuicommonslibrary.ToolbarItem;

    export = ExactArea;




    /**
    
    */
    class ExactArea extends sap.ui.core.Control {

        /**
            * Constructor for a new ExactArea.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: sap.ui.core.Control): this;

        /**
            * Adds some toolbarItem to the aggregation {@link #getToolbarItems toolbarItems}.
        */
        public addToolbarItem(oToolbarItem: ToolbarItem): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Destroys all the toolbarItems in the aggregation {@link #getToolbarItems toolbarItems}.
        */
        public destroyToolbarItems(): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.ExactArea with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * Arbitrary child controls of the content area
        */
        public getContent(): any[];

        /**
            * Returns a metadata object for class sap.ui.ux3.ExactArea.
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
            * Gets content of aggregation {@link #getToolbarItems toolbarItems}.
         * 
         * Tool bar items which shall be shown in the tool bar.
        */
        public getToolbarItems(): any[];

        /**
            * Gets current value of property {@link #getToolbarVisible toolbarVisible}.
         * 
         * Specifies whether the tool bar shall be visible
         * 
         * Default value is `true`.
        */
        public getToolbarVisible(): boolean;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: sap.ui.core.Control): number;

        /**
            * Checks for the provided `sap.ui.commons.ToolbarItem` in the aggregation {@link #getToolbarItems toolbarItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfToolbarItem(oToolbarItem: ToolbarItem): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: sap.ui.core.Control, iIndex: number): this;

        /**
            * Inserts a toolbarItem into the aggregation {@link #getToolbarItems toolbarItems}.
        */
        public insertToolbarItem(oToolbarItem: ToolbarItem, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): any[];

        /**
            * Removes all the controls from the aggregation {@link #getToolbarItems toolbarItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllToolbarItems(): any[];

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control;

        /**
            * Removes a toolbarItem from the aggregation {@link #getToolbarItems toolbarItems}.
        */
        public removeToolbarItem(vToolbarItem: number | string | ToolbarItem): ToolbarItem;

        /**
            * Sets a new value for property {@link #getToolbarVisible toolbarVisible}.
         * 
         * Specifies whether the tool bar shall be visible
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setToolbarVisible(bToolbarVisible: boolean): this;

    }


}
