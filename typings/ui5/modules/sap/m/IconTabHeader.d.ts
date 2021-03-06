declare module "sap/m/IconTabHeader" {
    import IconTabFilter from "sap/m/IconTabFilter";
    import { IconTab } from "sap/m/library";
    import { BackgroundDesign } from "sap/m/library";
    import { IconTabHeaderMode } from "sap/m/library";

    /**
    
    */
    export default class IconTabHeader extends sap.ui.core.Control {


        /**
            * Constructor for a new IconTabHeader.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: IconTab): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.m.IconTabHeader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.IconTabHeader` itself.
         * 
         * Fires when an item is selected.
        */
        attachSelect<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The selected item */
            item: IconTabFilter, /* * The key of the selected item */
            key: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.m.IconTabHeader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.IconTabHeader` itself.
         * 
         * Fires when an item is selected.
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The selected item */
            item: IconTabFilter, /* * The key of the selected item */
            key: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.m.IconTabHeader`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.m.IconTabHeader with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:select select} to attached listeners.
        */
        protected fireSelect(mParameters?: { item?: IconTabFilter, key?: string, }): this;

        /**
            * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Specifies the background color of the header.
         * 
         * Depending on the theme, you can change the state of the background color to "Solid", "Translucent", or "Transparent". Default is "Solid".
         * 
         * Default value is `Solid`.
        */
        public getBackgroundDesign(): BackgroundDesign;

        /**
            * Gets current value of property {@link #getEnableTabReordering enableTabReordering}.
         * 
         * Specifies whether tab reordering is enabled. Relevant only for desktop devices.
         * 
         * Default value is `false`.
        */
        public getEnableTabReordering(): boolean;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * The items displayed in the IconTabHeader.
        */
        public getItems(): any[];

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
            * Returns a metadata object for class sap.m.IconTabHeader.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Gets current value of property {@link #getMode mode}.
         * 
         * Specifies the header mode. ** Note: ** The Inline mode works only if no icons are set.
         * 
         * Default value is `Standard`.
        */
        public getMode(): IconTabHeaderMode;

        /**
            * Gets current value of property {@link #getSelectedKey selectedKey}.
         * 
         * Key of the selected item.
         * 
         * If the key has no corresponding aggregated item, no changes will apply. If duplicate keys exists the first item matching, the key is used.
        */
        public getSelectedKey(): string;

        /**
            * Gets current value of property {@link #getShowOverflowSelectList showOverflowSelectList}.
         * 
         * Specifies if the overflow select list is displayed.
         * 
         * The overflow select list represents a list, where all tab filters are displayed, so the user can select specific tab filter easier.
         * 
         * Default value is `false`.
        */
        public getShowOverflowSelectList(): boolean;

        /**
            * Gets current value of property {@link #getShowSelection showSelection}.
         * 
         * Defines whether the current selection is visualized.
         * 
         * Default value is `true`.
        */
        public getShowSelection(): boolean;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Specifies whether the control is rendered.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Checks for the provided `sap.m.IconTab` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: IconTab): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: IconTab, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): any[];

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | IconTab): IconTab;

        /**
            * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Specifies the background color of the header.
         * 
         * Depending on the theme, you can change the state of the background color to "Solid", "Translucent", or "Transparent". Default is "Solid".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Solid`.
        */
        public setBackgroundDesign(sBackgroundDesign: BackgroundDesign): this;

        /**
            * Sets a new value for property {@link #getEnableTabReordering enableTabReordering}.
         * 
         * Specifies whether tab reordering is enabled. Relevant only for desktop devices.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEnableTabReordering(bEnableTabReordering: boolean): this;

        /**
            * Sets a new value for property {@link #getMode mode}.
         * 
         * Specifies the header mode. ** Note: ** The Inline mode works only if no icons are set.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Standard`.
        */
        public setMode(sMode: IconTabHeaderMode): this;

        /**
            * Sets the selected item based on key.
        */
        public setSelectedKey(sKey: string): this;

        /**
            * Sets a new value for property {@link #getShowOverflowSelectList showOverflowSelectList}.
         * 
         * Specifies if the overflow select list is displayed.
         * 
         * The overflow select list represents a list, where all tab filters are displayed, so the user can select specific tab filter easier.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowOverflowSelectList(bShowOverflowSelectList: boolean): this;

        /**
            * Sets a new value for property {@link #getShowSelection showSelection}.
         * 
         * Defines whether the current selection is visualized.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowSelection(bShowSelection: boolean): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Specifies whether the control is rendered.
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
