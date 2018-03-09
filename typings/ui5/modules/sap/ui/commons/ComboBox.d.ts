declare module "sap/ui/commons/ComboBox" {
    import TextField from "sap/ui/commons/TextField";
    import ListItem from "sap/ui/core/ListItem";
    import ListBox from "sap/ui/commons/ListBox";

    /**
    
    */
    export default class ComboBox extends TextField {


        /**
            * Constructor for a new ComboBox.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Compares the previous value with the current value and fires the "Change" event if the ComboBox is editable and the value has changed or whether the value has been changed e.g. via up/down or auto-complete feature
        */
        protected _checkChange(oEvent: jQuery.Event, bImmediate?: boolean): any;

        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: ListItem): this;

        /**
            * Binds aggregation {@link #getItems items} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindItems(oBindingInfo: any): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Creates a new subclass of class sap.ui.commons.ComboBox with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.TextField.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fire event change to attached listeners.
         * 
         * Expects following event parameters:  * 'newValue' of type `string` The new / changed value of the textfield. * 'selectedItem' of type `sap.ui.core.ListItem` selected item 
        */
        protected fireChange(mArguments?: any): this;

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { newValue?: string, }): this;

        /**
            
        */
        protected getAccessibilityInfo(): any;

        /**
            * Gets current value of property {@link #getDisplaySecondaryValues displaySecondaryValues}.
         * 
         * Indicates whether the `additionalText` property that is available for `sap.ui.core.ListItem` shall be displayed in the list.
         * 
         * Default value is `false`.
        */
        public getDisplaySecondaryValues(): boolean;

        /**
            * Returns the DomRef which represents the icon for value help. Could be overwritten in child-classes
        */
        protected getF4ButtonDomRef(): any;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * `ListItems` (see `sap.ui.core.ListBox`) that shall be displayed in the list.
        */
        public getItems(): any[];

        /**
            * ID of the element which is the current target of the association {@link #getListBox listBox}, or `null`.
        */
        public getListBox(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getMaxPopupItems maxPopupItems}.
         * 
         * Defines the number of items that shall be displayed at once. If the overall number of items is higher than this setting, a scrollbar is provided.
         * 
         * Default value is `10`.
        */
        public getMaxPopupItems(): number;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

        /**
            * Returns a metadata object for class sap.ui.commons.ComboBox.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

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
            * Gets current value of property {@link #getSelectedItemId selectedItemId}.
         * 
         * Id of the selected item. If the value has no corresponding item, the `selectedItemId` is empty.
         * 
         * If the `selectedItemId` is set to a not existing item, it will not be changed.
        */
        public getSelectedItemId(): string;

        /**
            * Gets current value of property {@link #getSelectedKey selectedKey}.
         * 
         * Key of the selected item.
         * 
         * If the value has no corresponding item the key is empty.
         * 
         * If duplicate keys exists the first item matching the key is used.
         * 
         * If the key is set to a not existing value it will not be changed.
        */
        public getSelectedKey(): string;

        /**
            * Checks for the provided `sap.ui.core.ListItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: ListItem): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: ListItem, iIndex: number): this;

        /**
            * Handle sapenter pseudo events on the control
        */
        protected onsapenter(oEvent: jQuery.Event): any;

        /**
            * Handle sapescape pseudo events on the control
        */
        protected onsapescape(oEvent: jQuery.Event): any;

        /**
            * Handle saphide pseudo events on the control
        */
        protected onsaphide(oEvent: jQuery.Event): any;

        /**
            * Handle sapnextmodifiers pseudo events on the control if in toolbar prevent item navigation if popup is opened.
        */
        protected onsapnextmodifiers(oEvent: jQuery.Event): any;

        /**
            * Handle sapshow pseudo events on the control
        */
        protected onsapshow(oEvent: jQuery.Event): any;

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
         * Indicates whether the `additionalText` property that is available for `sap.ui.core.ListItem` shall be displayed in the list.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setDisplaySecondaryValues(bDisplaySecondaryValues: boolean): this;

        /**
            * Sets the associated {@link #getListBox listBox}.
        */
        public setListBox(oListBox: sap.ui.core.ID | ListBox): this;

        /**
            * Sets a new value for property {@link #getMaxPopupItems maxPopupItems}.
         * 
         * Defines the number of items that shall be displayed at once. If the overall number of items is higher than this setting, a scrollbar is provided.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `10`.
        */
        public setMaxPopupItems(iMaxPopupItems: number): this;

        /**
            * Sets a new value for property {@link #getSelectedItemId selectedItemId}.
         * 
         * Id of the selected item. If the value has no corresponding item, the `selectedItemId` is empty.
         * 
         * If the `selectedItemId` is set to a not existing item, it will not be changed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSelectedItemId(sSelectedItemId: string): this;

        /**
            * Sets a new value for property {@link #getSelectedKey selectedKey}.
         * 
         * Key of the selected item.
         * 
         * If the value has no corresponding item the key is empty.
         * 
         * If duplicate keys exists the first item matching the key is used.
         * 
         * If the key is set to a not existing value it will not be changed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSelectedKey(sSelectedKey: string): this;

        /**
            * Unbinds aggregation {@link #getItems items} from model data.
        */
        public unbindItems(): this;

    }

}
