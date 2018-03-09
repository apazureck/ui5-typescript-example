declare module "sap/ui/commons/MenuBar" {
    import MenuItem from "sap/ui/unified/MenuItem";
    import { MenuBarDesign } from "sap/ui/commons/library";

    /**
    
    */
    export default class MenuBar extends sap.ui.core.Control {


        /**
            * Constructor for a new MenuBar.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: MenuItem): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Creates a new subclass of class sap.ui.commons.MenuBar with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getDesign design}.
         * 
         * Available design options are Header and Standard. Note that design settings are theme-dependent.
         * 
         * Default value is `Standard`.
        */
        public getDesign(): MenuBarDesign;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * When the MenuBar is not enabled, automatically all single menu items are also displayed as 'disabled'.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * Aggregation of menu items.
        */
        public getItems(): any[];

        /**
            * Returns a metadata object for class sap.ui.commons.MenuBar.
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
            * Gets current value of property {@link #getWidth width}.
         * 
         * Specifies the width of the MenuBar
         * 
         * Default value is `100%`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.unified.MenuItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: MenuItem): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: MenuItem, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): any[];

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | MenuItem): MenuItem;

        /**
            * Sets a new value for property {@link #getDesign design}.
         * 
         * Available design options are Header and Standard. Note that design settings are theme-dependent.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Standard`.
        */
        public setDesign(sDesign: MenuBarDesign): this;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * When the MenuBar is not enabled, automatically all single menu items are also displayed as 'disabled'.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Specifies the width of the MenuBar
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }

}
