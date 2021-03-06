declare module "sap/m/ViewSettingsDialog" {
    import ViewSettingsItem from "sap/m/ViewSettingsItem";
    import ViewSettingsFilterItem from "sap/m/ViewSettingsFilterItem";
    import { StringFilterOperator } from "sap/m/library";
    import ViewSettingsCustomTab from "sap/m/ViewSettingsCustomTab";

    /**
    
    */
    export default class ViewSettingsDialog extends sap.ui.core.Control {


        /**
            * Constructor for a new `ViewSettingsDialog`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Overwrites the aggregation setter in order to have ID validation logic as some strings are reserved for the predefined tabs.
        */
        public addCustomTab(oCustomTab: any): this;

        /**
            * Adds some filterItem to the aggregation {@link #getFilterItems filterItems}.
        */
        public addFilterItem(oFilterItem: ViewSettingsItem): this;

        /**
            * Adds a group item and sets the association to reflect the selected state.
        */
        public addGroupItem(oItem: ViewSettingsItem): this;

        /**
            * Adds a preset filter item and sets the association to reflect the selected state.
        */
        public addPresetFilterItem(oItem: ViewSettingsItem): this;

        /**
            * Adds a sort item and sets the association to reflect the selected state.
        */
        public addSortItem(oItem: ViewSettingsItem): this;

        /**
            * The string given as "sStyleClass" will be added to the "class" attribute of this control's root HTML element.
         * 
         * This method is intended to be used to mark controls as being of a special type for which special styling can be provided using CSS selectors that reference this style class name.
         * 
         * `Example:
         *    myButton.addStyleClass("myRedTextButton"); // add a CSS class to one button instance
         * 
         * ...and in CSS:
         *    .myRedTextButton {
         *       color: red;
         *    }`
         * 
         * This will add the CSS class "myRedTextButton" to the Button HTML and the CSS code above will then make the text in this particular button red.
         * 
         * Only characters allowed inside HTML attributes are allowed. Quotes are not allowed and this method will ignore any strings containing quotes. Strings containing spaces are interpreted as multiple custom style classes which are split by space and can be removed individually later by calling removeStyleClass. Multiple calls with the same sStyleClass will have no different effect than calling once. If sStyleClass is null, empty string or it contains quotes, the call is ignored.
        */
        public addStyleClass(sStyleClass: string): sap.ui.core.Control;

        /**
            * Forward method to the inner dialog method: addStyleClass.
        */
        public addStyleClass(): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.m.ViewSettingsDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ViewSettingsDialog` itself.
         * 
         * Called when the Cancel button is pressed. It can be used to set the state of custom filter controls.
        */
        attachCancel<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.m.ViewSettingsDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ViewSettingsDialog` itself.
         * 
         * Called when the Cancel button is pressed. It can be used to set the state of custom filter controls.
        */
        attachCancel<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:confirm confirm} event of this `sap.m.ViewSettingsDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ViewSettingsDialog` itself.
         * 
         * Indicates that the user has pressed the OK button and the selected sort, group, and filter settings should be applied to the data on this page. 
         * 
         * ** Note: ** Custom tabs are not converted to event parameters automatically. For custom tabs, you have to read the state of your controls inside the callback of this event.
        */
        attachConfirm<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The selected sort item. */
            sortItem: ViewSettingsItem, /* * The selected sort order (true = descending, false = ascending). */
            sortDescending: boolean, /* * The selected group item. */
            groupItem: ViewSettingsItem, /* * The selected group order (true = descending, false = ascending). */
            groupDescending: boolean, /* * The selected preset filter item. */
            presetFilterItem: ViewSettingsItem, /* * The selected filters in an array of ViewSettingsItem. */
            filterItems: any[], /* * The selected filter items in an object notation format: { key: boolean }. If a custom control filter was displayed (for example, the user clicked on the filter item), the value for its key is set to true to indicate that there has been an interaction with the control. */
            filterKeys: any, /* * The selected filter items in an object notation format: { parentKey: { key: boolean, key2: boolean, ... }, ...}. If a custom control filter was displayed (for example, the user clicked on the filter item), the value for its key is set to true to indicate that there has been an interaction with the control. */
            filterCompoundKeys: any, /* * The selected filter items in a string format to display in the control's header bar in format "Filtered by: key (subkey1, subkey2, subkey3)". */
            filterString: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:confirm confirm} event of this `sap.m.ViewSettingsDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ViewSettingsDialog` itself.
         * 
         * Indicates that the user has pressed the OK button and the selected sort, group, and filter settings should be applied to the data on this page. 
         * 
         * ** Note: ** Custom tabs are not converted to event parameters automatically. For custom tabs, you have to read the state of your controls inside the callback of this event.
        */
        attachConfirm<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The selected sort item. */
            sortItem: ViewSettingsItem, /* * The selected sort order (true = descending, false = ascending). */
            sortDescending: boolean, /* * The selected group item. */
            groupItem: ViewSettingsItem, /* * The selected group order (true = descending, false = ascending). */
            groupDescending: boolean, /* * The selected preset filter item. */
            presetFilterItem: ViewSettingsItem, /* * The selected filters in an array of ViewSettingsItem. */
            filterItems: any[], /* * The selected filter items in an object notation format: { key: boolean }. If a custom control filter was displayed (for example, the user clicked on the filter item), the value for its key is set to true to indicate that there has been an interaction with the control. */
            filterKeys: any, /* * The selected filter items in an object notation format: { parentKey: { key: boolean, key2: boolean, ... }, ...}. If a custom control filter was displayed (for example, the user clicked on the filter item), the value for its key is set to true to indicate that there has been an interaction with the control. */
            filterCompoundKeys: any, /* * The selected filter items in a string format to display in the control's header bar in format "Filtered by: key (subkey1, subkey2, subkey3)". */
            filterString: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:filterDetailPageOpened filterDetailPageOpened} event of this `sap.m.ViewSettingsDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ViewSettingsDialog` itself.
         * 
         * Fired when the filter detail page is opened.
        */
        attachFilterDetailPageOpened<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The filter item for which the details are opened. */
            parentFilterItem: ViewSettingsFilterItem,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:filterDetailPageOpened filterDetailPageOpened} event of this `sap.m.ViewSettingsDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ViewSettingsDialog` itself.
         * 
         * Fired when the filter detail page is opened.
        */
        attachFilterDetailPageOpened<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The filter item for which the details are opened. */
            parentFilterItem: ViewSettingsFilterItem,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:resetFilters resetFilters} event of this `sap.m.ViewSettingsDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ViewSettingsDialog` itself.
         * 
         * Called when the reset filters button is pressed. It can be used to clear the state of custom filter controls.
        */
        attachResetFilters<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:resetFilters resetFilters} event of this `sap.m.ViewSettingsDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ViewSettingsDialog` itself.
         * 
         * Called when the reset filters button is pressed. It can be used to clear the state of custom filter controls.
        */
        attachResetFilters<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getCustomTabs customTabs} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindCustomTabs(oBindingInfo: any): this;

        /**
            * Binds aggregation {@link #getFilterItems filterItems} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindFilterItems(oBindingInfo: any): this;

        /**
            * Binds aggregation {@link #getGroupItems groupItems} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindGroupItems(oBindingInfo: any): this;

        /**
            * Binds aggregation {@link #getPresetFilterItems presetFilterItems} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindPresetFilterItems(oBindingInfo: any): this;

        /**
            * Binds aggregation {@link #getSortItems sortItems} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindSortItems(oBindingInfo: any): this;

        /**
            * Destroys all the customTabs in the aggregation {@link #getCustomTabs customTabs}.
        */
        public destroyCustomTabs(): this;

        /**
            * Destroys all the filterItems in the aggregation {@link #getFilterItems filterItems}.
        */
        public destroyFilterItems(): this;

        /**
            * Destroys all the groupItems in the aggregation {@link #getGroupItems groupItems}.
        */
        public destroyGroupItems(): this;

        /**
            * Destroys all the presetFilterItems in the aggregation {@link #getPresetFilterItems presetFilterItems}.
        */
        public destroyPresetFilterItems(): this;

        /**
            * Destroys all the sortItems in the aggregation {@link #getSortItems sortItems}.
        */
        public destroySortItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:cancel cancel} event of this `sap.m.ViewSettingsDialog`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachCancel(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:confirm confirm} event of this `sap.m.ViewSettingsDialog`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachConfirm(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:filterDetailPageOpened filterDetailPageOpened} event of this `sap.m.ViewSettingsDialog`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachFilterDetailPageOpened(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:resetFilters resetFilters} event of this `sap.m.ViewSettingsDialog`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachResetFilters(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.m.ViewSettingsDialog with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:cancel cancel} to attached listeners.
        */
        protected fireCancel(mParameters?: any): this;

        /**
            * Fires event {@link #event:confirm confirm} to attached listeners.
        */
        protected fireConfirm(mParameters?: { sortItem?: ViewSettingsItem, sortDescending?: boolean, groupItem?: ViewSettingsItem, groupDescending?: boolean, presetFilterItem?: ViewSettingsItem, filterItems?: any[], filterKeys?: any, filterCompoundKeys?: any, filterString?: string, }): this;

        /**
            * Fires event {@link #event:filterDetailPageOpened filterDetailPageOpened} to attached listeners.
        */
        protected fireFilterDetailPageOpened(mParameters?: { parentFilterItem?: ViewSettingsFilterItem, }): this;

        /**
            * Fires event {@link #event:resetFilters resetFilters} to attached listeners.
        */
        protected fireResetFilters(mParameters?: any): this;

        /**
            * Gets content of aggregation {@link #getCustomTabs customTabs}.
         * 
         * The list of all the custom tabs.
        */
        public getCustomTabs(): any[];

        /**
            * Returns the best suitable DOM Element that represents this UI5 Element. By default the DOM Element with the same ID as this Element is returned. Subclasses should override this method if the lookup via id is not sufficient.
         * 
         * Note that such a DOM Element does not necessarily exist in all cases. Some elements or controls might not have a DOM representation at all (e.g. a naive FlowLayout) while others might not have one due to their current state (e.g. an initial, not yet rendered control).
         * 
         * If an ID suffix is given, the ID of this Element is concatenated with the suffix (separated by a single dash) and the DOM node with that compound ID will be returned. This matches the UI5 naming convention for named inner DOM nodes of a control.
        */
        protected getDomRef(sSuffix?: string): any;

        /**
            * Forward method to the inner dialog method: getDomRef.
        */
        protected getDomRef(): any;

        /**
            * Gets content of aggregation {@link #getFilterItems filterItems}.
         * 
         * The list of items with key and value that can be filtered on (for example, a list of columns for a table). A filterItem is associated with one or more detail filters.
         * 
         * ** Note: ** It is recommended to use the `sap.m.ViewSettingsFilterItem` as it fits best at the filter page.
        */
        public getFilterItems(): any[];

        /**
            * Gets current value of property {@link #getFilterSearchOperator filterSearchOperator}.
         * 
         * Provides a string filter operator which is used when the user searches items in filter details page. Possible operators are: `AnyWordStartsWith`, `Contains`, `StartsWith`, `Equals`. This property will be ignored if a custom callback is provided through `setFilterSearchCallback` method.
         * 
         * Default value is `StartsWith`.
        */
        public getFilterSearchOperator(): StringFilterOperator;

        /**
            * Gets current value of property {@link #getGroupDescending groupDescending}.
         * 
         * Determines whether the group order is descending or ascending (default).
         * 
         * Default value is `false`.
        */
        public getGroupDescending(): boolean;

        /**
            * Gets content of aggregation {@link #getGroupItems groupItems}.
         * 
         * The list of items with key and value that can be grouped on (for example, a list of columns for a table).
        */
        public getGroupItems(): any[];

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Returns a metadata object for class sap.m.ViewSettingsDialog.
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
            * Gets content of aggregation {@link #getPresetFilterItems presetFilterItems}.
         * 
         * The list of preset filter items that allows the selection of more complex or custom filters. These entries are displayed at the top of the filter tab.
        */
        public getPresetFilterItems(): any[];

        /**
            * Gets the selected filter object in format { parent_key: { key: boolean, key2: boolean, ...}, ... }.
        */
        public getSelectedFilterCompoundKeys(): any;

        /**
            * Returns the selected filters as an array of ViewSettingsItems.
         * 
         * It can be used to create matching sorters and filters to apply the selected settings to the data.
        */
        public getSelectedFilterItems(): any[];

        /**
            * Gets the selected filter object in format {key: boolean}.
         * 
         * It can be used to create matching sorters and filters to apply the selected settings to the data.
        */
        public getSelectedFilterKeys(): any;

        /**
            * Gets the filter string in format: "filter name (subfilter1 name, subfilter2 name, ...), ...". For custom and preset filters it will only add the filter name to the resulting string.
        */
        public getSelectedFilterString(): string;

        /**
            * ID of the element which is the current target of the association {@link #getSelectedGroupItem selectedGroupItem}, or `null`.
        */
        public getSelectedGroupItem(): sap.ui.core.ID;

        /**
            * ID of the element which is the current target of the association {@link #getSelectedPresetFilterItem selectedPresetFilterItem}, or `null`.
        */
        public getSelectedPresetFilterItem(): sap.ui.core.ID;

        /**
            * ID of the element which is the current target of the association {@link #getSelectedSortItem selectedSortItem}, or `null`.
        */
        public getSelectedSortItem(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getSortDescending sortDescending}.
         * 
         * Determines whether the sort order is descending or ascending (default).
         * 
         * Default value is `false`.
        */
        public getSortDescending(): boolean;

        /**
            * Gets content of aggregation {@link #getSortItems sortItems}.
         * 
         * The list of items with key and value that can be sorted over (for example, a list of columns for a table).
        */
        public getSortItems(): any[];

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Defines the title of the dialog. If not set and there is only one active tab, the dialog uses the default "View" or "Sort", "Group", "Filter" respectively.
        */
        public getTitle(): string;

        /**
            * Forward method to the inner dialog method: hasStyleClass.
        */
        public hasStyleClass(): boolean;

        /**
            * Checks for the provided `sap.m.ViewSettingsCustomTab` in the aggregation {@link #getCustomTabs customTabs}. and returns its index if found or -1 otherwise.
        */
        public indexOfCustomTab(oCustomTab: ViewSettingsCustomTab): number;

        /**
            * Checks for the provided `sap.m.ViewSettingsItem` in the aggregation {@link #getFilterItems filterItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfFilterItem(oFilterItem: ViewSettingsItem): number;

        /**
            * Checks for the provided `sap.m.ViewSettingsItem` in the aggregation {@link #getGroupItems groupItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfGroupItem(oGroupItem: ViewSettingsItem): number;

        /**
            * Checks for the provided `sap.m.ViewSettingsItem` in the aggregation {@link #getPresetFilterItems presetFilterItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfPresetFilterItem(oPresetFilterItem: ViewSettingsItem): number;

        /**
            * Checks for the provided `sap.m.ViewSettingsItem` in the aggregation {@link #getSortItems sortItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfSortItem(oSortItem: ViewSettingsItem): number;

        /**
            * Inserts a customTab into the aggregation {@link #getCustomTabs customTabs}.
        */
        public insertCustomTab(oCustomTab: ViewSettingsCustomTab, iIndex: number): this;

        /**
            * Inserts a filterItem into the aggregation {@link #getFilterItems filterItems}.
        */
        public insertFilterItem(oFilterItem: ViewSettingsItem, iIndex: number): this;

        /**
            * Inserts a groupItem into the aggregation {@link #getGroupItems groupItems}.
        */
        public insertGroupItem(oGroupItem: ViewSettingsItem, iIndex: number): this;

        /**
            * Inserts a presetFilterItem into the aggregation {@link #getPresetFilterItems presetFilterItems}.
        */
        public insertPresetFilterItem(oPresetFilterItem: ViewSettingsItem, iIndex: number): this;

        /**
            * Inserts a sortItem into the aggregation {@link #getSortItems sortItems}.
        */
        public insertSortItem(oSortItem: ViewSettingsItem, iIndex: number): this;

        /**
            * Opens the ViewSettingsDialog relative to the parent control.
        */
        public open(sPageId?: string): this;

        /**
            * Removes all the controls from the aggregation {@link #getCustomTabs customTabs}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllCustomTabs(): any[];

        /**
            * Removes all filter Items and resets the remembered page if it was a filter detail page and all of its filter items are being removed.
        */
        public removeAllFilterItems(): this;

        /**
            * Removes all the controls from the aggregation {@link #getGroupItems groupItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllGroupItems(): any[];

        /**
            * Removes all the controls from the aggregation {@link #getPresetFilterItems presetFilterItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllPresetFilterItems(): any[];

        /**
            * Removes all the controls from the aggregation {@link #getSortItems sortItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllSortItems(): any[];

        /**
            * Removes a customTab from the aggregation {@link #getCustomTabs customTabs}.
        */
        public removeCustomTab(vCustomTab: number | string | ViewSettingsCustomTab): ViewSettingsCustomTab;

        /**
            * Removes a filter Item and resets the remembered page if it was the filter detail page of the removed filter.
        */
        public removeFilterItem(vFilterItem: number | ViewSettingsFilterItem | string): this;

        /**
            * Removes a groupItem from the aggregation {@link #getGroupItems groupItems}.
        */
        public removeGroupItem(vGroupItem: number | string | ViewSettingsItem): ViewSettingsItem;

        /**
            * Removes a presetFilterItem from the aggregation {@link #getPresetFilterItems presetFilterItems}.
        */
        public removePresetFilterItem(vPresetFilterItem: number | string | ViewSettingsItem): ViewSettingsItem;

        /**
            * Removes a sortItem from the aggregation {@link #getSortItems sortItems}.
        */
        public removeSortItem(vSortItem: number | string | ViewSettingsItem): ViewSettingsItem;

        /**
            * Removes the given string from the list of custom style classes that have been set previously. Regular style classes like "sapUiBtn" cannot be removed.
        */
        public removeStyleClass(sStyleClass: string): sap.ui.core.Control;

        /**
            * Forward method to the inner dialog method: removeStyleClass.
        */
        public removeStyleClass(): this;

        /**
            * Set the controls busy state.
        */
        public setBusy(bBusy: boolean): sap.ui.core.Control;

        /**
            * Forward the busy state setting to the internal dialog instance. Needed because of the not-bullet proof implementation of setBusy in sap.ui.core.Control
        */
        public setBusy(bBusy: boolean): this;

        /**
            * Sets a callback that will check the ViewSettingsItem's text against the search query. If a callback is set, `filterSearchOperator` property will be ignored, as it serves the same purpose.
        */
        public setFilterSearchCallback(fnTest: Function): this;

        /**
            * Sets a new value for property {@link #getFilterSearchOperator filterSearchOperator}.
         * 
         * Provides a string filter operator which is used when the user searches items in filter details page. Possible operators are: `AnyWordStartsWith`, `Contains`, `StartsWith`, `Equals`. This property will be ignored if a custom callback is provided through `setFilterSearchCallback` method.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `StartsWith`.
        */
        public setFilterSearchOperator(sFilterSearchOperator: StringFilterOperator): this;

        /**
            * Sets a new value for property {@link #getGroupDescending groupDescending}.
         * 
         * Determines whether the group order is descending or ascending (default).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setGroupDescending(bGroupDescending: boolean): this;

        /**
            * Sets the selected filter object in format { parent_key: { key: boolean, key2: boolean, ...}, ... }.
        */
        public setSelectedFilterCompoundKeys(oSelectedFilterKeys: any): this;

        /**
            * Sets the selected filter object in format {key: boolean}. ** Note: ** Do not use duplicated item keys with this method.
        */
        public setSelectedFilterKeys(oSelectedFilterKeys: any): this;

        /**
            * Sets the selected group item (either by key or by item).
        */
        public setSelectedGroupItem(vItemOrKey: ViewSettingsItem | string): this;

        /**
            * Sets the selected preset filter item.
        */
        public setSelectedPresetFilterItem(vItemOrKey: ViewSettingsItem | string): this;

        /**
            * Sets the selected sort item (either by key or by item).
        */
        public setSelectedSortItem(vItemOrKey: ViewSettingsItem | string): this;

        /**
            * Sets a new value for property {@link #getSortDescending sortDescending}.
         * 
         * Determines whether the sort order is descending or ascending (default).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setSortDescending(bSortDescending: boolean): this;

        /**
            * Sets the title of the internal dialog.
        */
        public setTitle(sTitle: string): this;

        /**
            * Forward method to the inner dialog method: toggleStyleClass.
        */
        public toggleStyleClass(): this;

        /**
            * The string given as "sStyleClass" will be be either added to or removed from the "class" attribute of this control's root HTML element, depending on the value of "bAdd": if bAdd is true, sStyleClass will be added. If bAdd is not given, sStyleClass will be removed if it is currently present and will be added if not present. If sStyleClass is null or empty string, the call is ignored.
         * 
         * See addStyleClass and removeStyleClass for further documentation.
        */
        public toggleStyleClass(sStyleClass: string, bAdd: boolean): sap.ui.core.Control;

        /**
            * Unbinds aggregation {@link #getCustomTabs customTabs} from model data.
        */
        public unbindCustomTabs(): this;

        /**
            * Unbinds aggregation {@link #getFilterItems filterItems} from model data.
        */
        public unbindFilterItems(): this;

        /**
            * Unbinds aggregation {@link #getGroupItems groupItems} from model data.
        */
        public unbindGroupItems(): this;

        /**
            * Unbinds aggregation {@link #getPresetFilterItems presetFilterItems} from model data.
        */
        public unbindPresetFilterItems(): this;

        /**
            * Unbinds aggregation {@link #getSortItems sortItems} from model data.
        */
        public unbindSortItems(): this;

    }

}
