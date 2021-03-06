declare module "sap/m/TableSelectDialog" {
    import StandardListItem from "sap/m/StandardListItem";
    import Column from "sap/m/Column";
    import ColumnListItem from "sap/m/ColumnListItem";

    /**
    
    */
    export default class TableSelectDialog extends sap.ui.core.Control {


        /**
            * Constructor for a new TableSelectDialog.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some column to the aggregation {@link #getColumns columns}.
        */
        public addColumn(oColumn: Column): this;

        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: ColumnListItem): this;

        /**
            * Transfers method to the inner dialog: addStyleClass
        */
        public addStyleClass(): this;

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
            * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.m.TableSelectDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TableSelectDialog` itself.
         * 
         * Fires when the Cancel button is clicked.
        */
        attachCancel<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.m.TableSelectDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TableSelectDialog` itself.
         * 
         * Fires when the Cancel button is clicked.
        */
        attachCancel<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:confirm confirm} event of this `sap.m.TableSelectDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TableSelectDialog` itself.
         * 
         * Fires when the dialog is confirmed by selecting an item in single-selection mode or by pressing the confirmation button in multi-selection mode. The items being selected are returned as event parameters.
        */
        attachConfirm<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Returns the selected list item. When no item is selected, "null" is returned. When multi-selection is enabled and multiple items are selected, only the first selected item is returned. */
            selectedItem: StandardListItem, /* * Returns an array containing the visible selected list items. If no items are selected, an empty array is returned. */
            selectedItems: any[], /* * Returns the binding contexts of the selected items including the non-visible items. Note: In contrast to the parameter "selectedItems", this parameter includes the selected but NOT visible items (due to list filtering). An empty array is set for this parameter if no Databinding is used. */
            selectedContexts: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:confirm confirm} event of this `sap.m.TableSelectDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TableSelectDialog` itself.
         * 
         * Fires when the dialog is confirmed by selecting an item in single-selection mode or by pressing the confirmation button in multi-selection mode. The items being selected are returned as event parameters.
        */
        attachConfirm<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Returns the selected list item. When no item is selected, "null" is returned. When multi-selection is enabled and multiple items are selected, only the first selected item is returned. */
            selectedItem: StandardListItem, /* * Returns an array containing the visible selected list items. If no items are selected, an empty array is returned. */
            selectedItems: any[], /* * Returns the binding contexts of the selected items including the non-visible items. Note: In contrast to the parameter "selectedItems", this parameter includes the selected but NOT visible items (due to list filtering). An empty array is set for this parameter if no Databinding is used. */
            selectedContexts: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.m.TableSelectDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TableSelectDialog` itself.
         * 
         * Fires when the value of the search field is changed by a user (for example at each key press).
        */
        attachLiveChange<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Specifies the value entered in the search field. */
            value: string, /* * The Items binding of the Table Select Dialog. Only available if the items aggregation is bound to a model. */
            itemsBinding: any,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.m.TableSelectDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TableSelectDialog` itself.
         * 
         * Fires when the value of the search field is changed by a user (for example at each key press).
        */
        attachLiveChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Specifies the value entered in the search field. */
            value: string, /* * The Items binding of the Table Select Dialog. Only available if the items aggregation is bound to a model. */
            itemsBinding: any,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.m.TableSelectDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TableSelectDialog` itself.
         * 
         * Fires when the search button has been clicked on dialog.
        */
        attachSearch<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Specifies the value entered in the search field. */
            value: string, /* * Determines the Items binding of the Table Select Dialog. Only available if the items aggregation is bound to a model. */
            itemsBinding: any,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.m.TableSelectDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TableSelectDialog` itself.
         * 
         * Fires when the search button has been clicked on dialog.
        */
        attachSearch<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Specifies the value entered in the search field. */
            value: string, /* * Determines the Items binding of the Table Select Dialog. Only available if the items aggregation is bound to a model. */
            itemsBinding: any,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Forwards aggregations with the name of items or columns to the internal table.
        */
        public bindAggregation(sAggregationName: string, oBindingInfo: any): this;

        /**
            * Bind an aggregation to the model.
         * 
         * The bound aggregation will use the given template, clone it for each item which exists in the bound list and set the appropriate binding context. This is a generic method which can be used to bind any aggregation to the model. A managed object may flag aggregations in the metamodel with bindable="bindable" to get typed bind* Something * methods for those aggregations.
        */
        public bindAggregation(sName: string, oBindingInfo: { path: string, template: sap.ui.base.ManagedObject, templateShareable?: boolean, factory: Function, startIndex: number, length: number, sorter?: sap.ui.model.Sorter | any[], filters?: any[], key: string | Function, parameters?: any, groupHeaderFactory?: Function, }): sap.ui.base.ManagedObject;

        /**
            * Binds aggregation {@link #getColumns columns} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindColumns(oBindingInfo: any): this;

        /**
            * Binds aggregation {@link #getItems items} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindItems(oBindingInfo: any): this;

        /**
            * Destroys all the columns in the aggregation {@link #getColumns columns}.
        */
        public destroyColumns(): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:cancel cancel} event of this `sap.m.TableSelectDialog`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachCancel(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:confirm confirm} event of this `sap.m.TableSelectDialog`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachConfirm(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:liveChange liveChange} event of this `sap.m.TableSelectDialog`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachLiveChange(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:search search} event of this `sap.m.TableSelectDialog`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSearch(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.m.TableSelectDialog with name `sClassName` and enriches it with the information contained in `oClassInfo`.
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
        protected fireConfirm(mParameters?: { selectedItem?: StandardListItem, selectedItems?: any[], selectedContexts?: string, }): this;

        /**
            * Fires event {@link #event:liveChange liveChange} to attached listeners.
        */
        protected fireLiveChange(mParameters?: { value?: string, itemsBinding?: any, }): this;

        /**
            * Fires event {@link #event:search search} to attached listeners.
        */
        protected fireSearch(mParameters?: { value?: string, itemsBinding?: any, }): this;

        /**
            * Gets current busy state.
        */
        public getBusy(): boolean;

        /**
            * Gets content of aggregation {@link #getColumns columns}.
         * 
         * The columns bindings.
        */
        public getColumns(): any[];

        /**
            * Retrieves content height of the select dialog {@link sap.m.Dialog}
        */
        public getContentHeight(): sap.ui.core.CSSSize;

        /**
            * Retrieves content width of the select dialog {@link sap.m.Dialog}
        */
        public getContentWidth(): sap.ui.core.CSSSize;

        /**
            * Transfers method to the inner dialog: getDomRef
        */
        protected getDomRef(): any;

        /**
            * Returns the best suitable DOM Element that represents this UI5 Element. By default the DOM Element with the same ID as this Element is returned. Subclasses should override this method if the lookup via id is not sufficient.
         * 
         * Note that such a DOM Element does not necessarily exist in all cases. Some elements or controls might not have a DOM representation at all (e.g. a naive FlowLayout) while others might not have one due to their current state (e.g. an initial, not yet rendered control).
         * 
         * If an ID suffix is given, the ID of this Element is concatenated with the suffix (separated by a single dash) and the DOM node with that compound ID will be returned. This matches the UI5 naming convention for named inner DOM nodes of a control.
        */
        protected getDomRef(sSuffix?: string): any;

        /**
            * Gets current value of property {@link #getGrowingThreshold growingThreshold}.
         * 
         * Determines the number of items initially displayed in the table.
        */
        public getGrowingThreshold(): number;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * The items of the table.
        */
        public getItems(): any[];

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

        /**
            * Returns a metadata object for class sap.m.TableSelectDialog.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Gets current value of property {@link #getMultiSelect multiSelect}.
         * 
         * Enables the user to select several options from the table.
         * 
         * Default value is `false`.
        */
        public getMultiSelect(): boolean;

        /**
            * Retrieves the internal List's no data text property
        */
        public getNoDataText(): string;

        /**
            * Gets current value of property {@link #getRememberSelections rememberSelections}.
         * 
         * Controls whether the dialog clears the selection or not. When the dialog is opened multiple times in the same context to allow for corrections of previous user inputs, set this flag to "true". When the dialog should reset the selection to allow for a new selection each time set it to "false" Note: This property must be set before the Dialog is opened to have an effect.
         * 
         * Default value is `false`.
        */
        public getRememberSelections(): boolean;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Specifies the title text in the dialog header.
        */
        public getTitle(): string;

        /**
            * Transfers method to the inner dialog: hasStyleClass
        */
        public hasStyleClass(): boolean;

        /**
            * Checks for the provided `sap.m.Column` in the aggregation {@link #getColumns columns}. and returns its index if found or -1 otherwise.
        */
        public indexOfColumn(oColumn: Column): number;

        /**
            * Checks for the provided `sap.m.ColumnListItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: ColumnListItem): number;

        /**
            * Inserts a column into the aggregation {@link #getColumns columns}.
        */
        public insertColumn(oColumn: Column, iIndex: number): this;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: ColumnListItem, iIndex: number): this;

        /**
            * Invalidates the dialog instead of this control, as there is no renderer.
        */
        protected invalidate(): this;

        /**
            * This triggers rerendering of itself and its children.
         *  As `sap.ui.base.ManagedObject` "bubbles up" the invalidate, changes to child-`Elements` will also result in rerendering of the whole sub tree.
        */
        protected invalidate(): any;

        /**
            * Shows the busy state and is called after the renderer is finished.
        */
        protected onAfterRendering(): this;

        /**
            * Function is called when the rendering of the control is completed.
         * 
         * Applications must not call this hook method directly, it is called by the framework.
         * 
         * Subclasses of Control should override this hook to implement any necessary actions after the rendering.
        */
        protected onAfterRendering(): any;

        /**
            * Opens the internal dialog with a searchfield and a table.
        */
        public open(sSearchValue: string): this;

        /**
            * Removes all the controls from the aggregation {@link #getColumns columns}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllColumns(): any[];

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): any[];

        /**
            * Removes a column from the aggregation {@link #getColumns columns}.
        */
        public removeColumn(vColumn: number | string | Column): Column;

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | ColumnListItem): ColumnListItem;

        /**
            * Removes the given string from the list of custom style classes that have been set previously. Regular style classes like "sapUiBtn" cannot be removed.
        */
        public removeStyleClass(sStyleClass: string): sap.ui.core.Control;

        /**
            * Transfers method to the inner dialog: removeStyleClass
        */
        public removeStyleClass(): this;

        /**
            * Enables/Disables busy state.
        */
        public setBusy(flag: boolean): this;

        /**
            * Set the controls busy state.
        */
        public setBusy(bBusy: boolean): sap.ui.core.Control;

        /**
            * Define the delay, after which the busy indicator will show up.
        */
        public setBusyIndicatorDelay(iDelay: number): sap.ui.core.Control;

        /**
            * Sets the busyIndicatorDelay value to the internal table
        */
        public setBusyIndicatorDelay(iValue: number): this;

        /**
            * Sets content height of the select dialog {@link sap.m.Dialog}
        */
        public setContentHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets content width of the select dialog {@link sap.m.Dialog}
        */
        public setContentWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets the growing threshold to the internal table
        */
        public setGrowingThreshold(iValue: number): this;

        /**
            * Enables/Disables multi selection mode.
        */
        public setMultiSelect(bMulti: boolean): this;

        /**
            * Sets the no data text of the internal table
        */
        public setNoDataText(sNoDataText: string): any;

        /**
            * Sets a new value for property {@link #getRememberSelections rememberSelections}.
         * 
         * Controls whether the dialog clears the selection or not. When the dialog is opened multiple times in the same context to allow for corrections of previous user inputs, set this flag to "true". When the dialog should reset the selection to allow for a new selection each time set it to "false" Note: This property must be set before the Dialog is opened to have an effect.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setRememberSelections(bRememberSelections: boolean): this;

        /**
            * Sets the title of the internal dialog
        */
        public setTitle(sTitle: string): this;

        /**
            * The string given as "sStyleClass" will be be either added to or removed from the "class" attribute of this control's root HTML element, depending on the value of "bAdd": if bAdd is true, sStyleClass will be added. If bAdd is not given, sStyleClass will be removed if it is currently present and will be added if not present. If sStyleClass is null or empty string, the call is ignored.
         * 
         * See addStyleClass and removeStyleClass for further documentation.
        */
        public toggleStyleClass(sStyleClass: string, bAdd: boolean): sap.ui.core.Control;

        /**
            * Transfers method to the inner dialog: toggleStyleClass
        */
        public toggleStyleClass(): this;

        /**
            * Unbinds aggregation {@link #getColumns columns} from model data.
        */
        public unbindColumns(): this;

        /**
            * Unbinds aggregation {@link #getItems items} from model data.
        */
        public unbindItems(): this;

    }

}
