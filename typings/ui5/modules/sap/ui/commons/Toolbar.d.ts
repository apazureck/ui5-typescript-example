declare module "sap/ui/commons/Toolbar" {
    import sapuicommonslibrary from "sap/ui/commons/library";
    type ToolbarItem = sapuicommonslibrary.ToolbarItem;
    type ToolbarDesign = sapuicommonslibrary.ToolbarDesign;

    export = Toolbar;




    /**
    
    */
    class Toolbar extends sap.ui.core.Control {

        /**
            * Constructor for a new Toolbar.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: ToolbarItem): this;

        /**
            * Adds some rightItem to the aggregation {@link #getRightItems rightItems}.
        */
        public addRightItem(oRightItem: ToolbarItem): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Destroys all the rightItems in the aggregation {@link #getRightItems rightItems}.
        */
        public destroyRightItems(): this;

        /**
            * Creates a new subclass of class sap.ui.commons.Toolbar with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getDesign design}.
         * 
         * Design settings are theme-dependent.
         * 
         * Default value is `Flat`.
        */
        public getDesign(): ToolbarDesign;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * Aggregating the tool bar items.
        */
        public getItems(): any[];

        /**
            * Returns a metadata object for class sap.ui.commons.Toolbar.
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
            * Gets content of aggregation {@link #getRightItems rightItems}.
         * 
         * Aggregating the right side tool bar items.
        */
        public getRightItems(): any[];

        /**
            * Gets current value of property {@link #getStandalone standalone}.
         * 
         * Per default, tool bars have the stand alone status. Alternatively, they can be nested in other controls and then inherit the design from their parent control.
         * 
         * Default value is `true`.
        */
        public getStandalone(): boolean;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * When there is not enough space for the toolbar to display all items, the rightmost items are overflowing into a drop-down menu.
         * 
         * Default value is `auto`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.commons.ToolbarItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: ToolbarItem): number;

        /**
            * Checks for the provided `sap.ui.commons.ToolbarItem` in the aggregation {@link #getRightItems rightItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfRightItem(oRightItem: ToolbarItem): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: ToolbarItem, iIndex: number): this;

        /**
            * Inserts a rightItem into the aggregation {@link #getRightItems rightItems}.
        */
        public insertRightItem(oRightItem: ToolbarItem, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): any[];

        /**
            * Removes all the controls from the aggregation {@link #getRightItems rightItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllRightItems(): any[];

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | ToolbarItem): ToolbarItem;

        /**
            * Removes a rightItem from the aggregation {@link #getRightItems rightItems}.
        */
        public removeRightItem(vRightItem: number | string | ToolbarItem): ToolbarItem;

        /**
            * Sets a new value for property {@link #getDesign design}.
         * 
         * Design settings are theme-dependent.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Flat`.
        */
        public setDesign(sDesign: ToolbarDesign): this;

        /**
            * Sets a new value for property {@link #getStandalone standalone}.
         * 
         * Per default, tool bars have the stand alone status. Alternatively, they can be nested in other controls and then inherit the design from their parent control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setStandalone(bStandalone: boolean): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * When there is not enough space for the toolbar to display all items, the rightmost items are overflowing into a drop-down menu.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `auto`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }


}
