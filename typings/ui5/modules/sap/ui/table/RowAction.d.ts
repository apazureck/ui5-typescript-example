declare module "sap/ui/table/RowAction" {
    import RowActionItem from "sap/ui/table/RowActionItem";

    /**
    
    */
    export default class RowAction extends sap.ui.core.Control {


        /**
            * Constructor for a new RowAction.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: RowActionItem): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Creates a new subclass of class sap.ui.table.RowAction with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * The action items which should be displayed.
        */
        public getItems(): any[];

        /**
            * Returns a metadata object for class sap.ui.table.RowAction.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

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
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Whether the control should be visible on the screen. If set to `false`, the control is hidden.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Checks for the provided `sap.ui.table.RowActionItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: RowActionItem): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: RowActionItem, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): any[];

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | RowActionItem): RowActionItem;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Whether the control should be visible on the screen. If set to `false`, the control is hidden.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Whether the control should be visible on the screen.
         * 
         * If set to false, a placeholder will be rendered to mark the location of the invisible control in the DOM of the current page. The placeholder will be hidden and have zero dimensions (`display: none`).
         * 
         * See {@link sap.ui.core.RenderManager#writeInvisiblePlaceholderData RenderManager#writeInvisiblePlaceholderData} for details.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): sap.ui.core.Control;

    }

}
