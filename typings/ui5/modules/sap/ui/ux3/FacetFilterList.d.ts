declare module "sap/ui/ux3/FacetFilterList" {
    import ListItem from "sap/ui/core/ListItem";

    /**
    
    */
    export default class FacetFilterList extends sap.ui.core.Control {


        /**
            * Constructor for a new FacetFilterList.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: ListItem): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.ux3.FacetFilterList`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.FacetFilterList` itself.
         * 
         * On Select event.
        */
        attachSelect<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Id of the FacetFilterList taht fires the event. */
            id: string, /* * Array of selected Indices. */
            selectedIndices: any[], /* * Array of selected Items. */
            selectedItems: any[], /* * If it is true, then Item All is selected. That means all items in the list are selected - no filter is set. */
            all: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.ux3.FacetFilterList`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.FacetFilterList` itself.
         * 
         * On Select event.
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Id of the FacetFilterList taht fires the event. */
            id: string, /* * Array of selected Indices. */
            selectedIndices: any[], /* * Array of selected Items. */
            selectedItems: any[], /* * If it is true, then Item All is selected. That means all items in the list are selected - no filter is set. */
            all: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.ux3.FacetFilterList`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.FacetFilterList with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:select select} to attached listeners.
        */
        protected fireSelect(mParameters?: { id?: string, selectedIndices?: any[], selectedItems?: any[], all?: boolean, }): this;

        /**
            * Gets current value of property {@link #getDisplaySecondaryValues displaySecondaryValues}.
         * 
         * Specifies whether the text values from the additionalText property (see sap.ui.core.ListItems) shall be displayed.
         * 
         * Default value is `false`.
        */
        public getDisplaySecondaryValues(): boolean;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * The filter values that are presented as a list.
        */
        public getItems(): any[];

        /**
            * Returns a metadata object for class sap.ui.ux3.FacetFilterList.
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
            * Gets current value of property {@link #getMultiSelect multiSelect}.
         * 
         * Specifies whether multiple or single selection is used.
         * 
         * Default value is `true`.
        */
        public getMultiSelect(): boolean;

        /**
            * Gets current value of property {@link #getSelectedKeys selectedKeys}.
         * 
         * Array of type string containing the selected keys.
        */
        public getSelectedKeys(): any[];

        /**
            * Gets current value of property {@link #getShowCounter showCounter}.
         * 
         * Specifies whether the counter for all entries is shown.
         * 
         * Default value is `true`.
        */
        public getShowCounter(): boolean;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * The title of this list.
        */
        public getTitle(): string;

        /**
            * Checks for the provided `sap.ui.core.ListItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: ListItem): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: ListItem, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): any[];

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | ListItem): ListItem;

        /**
            * Sets a new value for property {@link #getDisplaySecondaryValues displaySecondaryValues}.
         * 
         * Specifies whether the text values from the additionalText property (see sap.ui.core.ListItems) shall be displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setDisplaySecondaryValues(bDisplaySecondaryValues: boolean): this;

        /**
            * Sets a new value for property {@link #getMultiSelect multiSelect}.
         * 
         * Specifies whether multiple or single selection is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setMultiSelect(bMultiSelect: boolean): this;

        /**
            * Sets a new value for property {@link #getSelectedKeys selectedKeys}.
         * 
         * Array of type string containing the selected keys.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSelectedKeys(sSelectedKeys: any[]): this;

        /**
            * Sets a new value for property {@link #getShowCounter showCounter}.
         * 
         * Specifies whether the counter for all entries is shown.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowCounter(bShowCounter: boolean): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * The title of this list.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

    }

}
