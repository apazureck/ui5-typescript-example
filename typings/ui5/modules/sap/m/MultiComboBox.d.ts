declare module "sap/m/MultiComboBox" {
    import ComboBoxBase from "sap/m/ComboBoxBase";
    import Item from "sap/ui/core/Item";
    import List from "sap/m/List";
    import Popover from "sap/m/Popover";
    import Dialog from "sap/m/Dialog";
    import ComboBox from "sap/m/ComboBox";

    export = MultiComboBox;




    /**
    
    */
    class MultiComboBox extends ComboBoxBase {

        /**
            * Constructor for a new MultiComboBox.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some item `oItem` to the association named `selectedItems`.
        */
        public addSelectedItem(oItem: Item): this;

        /**
            * Adds selected items. Only items with valid keys are added as selected.
        */
        public addSelectedKeys(aKeys: any[]): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this `sap.m.MultiComboBox`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MultiComboBox` itself.
         * 
         * Event is fired when selection of an item is changed. Note: please do not use the "change" event inherited from sap.m.InputBase
        */
        attachSelectionChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Item which selection is changed */
            changedItem: Item, /* * Selection state: true if item is selected, false if item is not selected */
            selected: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this `sap.m.MultiComboBox`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MultiComboBox` itself.
         * 
         * Event is fired when selection of an item is changed. Note: please do not use the "change" event inherited from sap.m.InputBase
        */
        attachSelectionChange<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Item which selection is changed */
            changedItem: Item, /* * Selection state: true if item is selected, false if item is not selected */
            selected: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionFinish selectionFinish} event of this `sap.m.MultiComboBox`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MultiComboBox` itself.
         * 
         * Event is fired when user has finished a selection of items in a list box and list box has been closed.
        */
        attachSelectionFinish<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The selected items which are selected after list box has been closed. */
            selectedItems: any[],
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionFinish selectionFinish} event of this `sap.m.MultiComboBox`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MultiComboBox` itself.
         * 
         * Event is fired when user has finished a selection of items in a list box and list box has been closed.
        */
        attachSelectionFinish<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The selected items which are selected after list box has been closed. */
            selectedItems: any[],
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Clear the selection.
        */
        protected clearSelection(): any;

        /**
            * Create an instance type of `sap.m.List`.
        */
        protected createList(): List;

        /**
            * Creates a picker. To be overwritten by subclasses.
        */
        protected createPicker(sPickerType: string): Popover | Dialog;

        /**
            * Destroys all the items in the aggregation named `items`.
        */
        public destroyItems(): this;

        /**
            * Destroys all the items in the aggregation named `items`.
        */
        public destroyItems(): ComboBox;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:selectionChange selectionChange} event of this `sap.m.MultiComboBox`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelectionChange(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:selectionFinish selectionFinish} event of this `sap.m.MultiComboBox`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelectionFinish(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.m.MultiComboBox with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ComboBoxBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:selectionChange selectionChange} to attached listeners.
        */
        protected fireSelectionChange(mParameters?: { changedItem?: Item, selected?: boolean, }): this;

        /**
            * Fires event {@link #event:selectionFinish selectionFinish} to attached listeners.
        */
        protected fireSelectionFinish(mParameters?: { selectedItems?: any[], }): this;

        /**
            
        */
        protected getAccessibilityInfo(): any;

        /**
            * Gets the enabled items from the aggregation named `items`.
        */
        public getEnabledItems(aItems?: any[]): any[];

        /**
            * Gets the item with the given key from the aggregation named `items`.<br> ** Note: ** If duplicate keys exist, the first item matching the key is returned.
        */
        public getItemByKey(sKey: string): Item;

        /**
            * Returns a metadata object for class sap.m.MultiComboBox.
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
            * Retrieves the selected item objects from the association named `selectedItems`.
        */
        public getSelectedItems(): any[];

        /**
            * Gets current value of property {@link #getSelectedKeys selectedKeys}.
         * 
         * Keys of the selected items. If the key has no corresponding item, no changes will apply. If duplicate keys exists the first item matching the key is used.
         * 
         * Default value is `[]`.
        */
        public getSelectedKeys(): any[];

        /**
            * Inserts an item into the aggregation named `items`.
        */
        public insertItem(oItem: Item, iIndex: number): this;

        /**
            * This hook method is called after the MultiComboBox's Pop-up is rendered.
        */
        protected onAfterRenderingPicker(): any;

        /**
            * This hook method is called before the MultiComboBox's Pop-up is rendered.
        */
        protected onBeforeRenderingPicker(): any;

        /**
            * Removes all the items in the aggregation named `items`.
        */
        public removeAllItems(): any[];

        /**
            * Removes all the controls in the association named {@link #getSelectedItems selectedItems}.
        */
        public removeAllSelectedItems(): any[];

        /**
            * Removes an item from the aggregation named `items`.
        */
        public removeItem(oItem: number | string | Item): Item;

        /**
            * Removes an selectedItem from the association named {@link #getSelectedItems selectedItems}.
        */
        public removeSelectedItem(vSelectedItem: number | sap.ui.core.ID | Item): sap.ui.core.ID;

        /**
            * Removes selected items. Only items with valid keys are removed.
        */
        public removeSelectedKeys(aKeys: any[]): this;

        /**
            * Setter for association `selectedItems`.
        */
        public setSelectedItems(aItems: any[] | any[] | any): this;

        /**
            * Sets a new value for property {@link #getSelectedKeys selectedKeys}.
         * 
         * Keys of the selected items. If the key has no corresponding item, no changes will apply. If duplicate keys exists the first item matching the key is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `[]`.
        */
        public setSelectedKeys(sSelectedKeys: any[]): this;

    }


}
