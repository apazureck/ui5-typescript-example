declare module "sap/m/P13nPanel" {
    import P13nItem from "sap/m/P13nItem";

    /**
    
    */
    export default class P13nPanel extends sap.ui.core.Control {


        /**
            * Constructor for a new P13nPanel.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: P13nItem): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeNavigationTo beforeNavigationTo} event of this `sap.m.P13nPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nPanel` itself.
         * 
         * Due to performance the data of the panel can be requested in lazy mode e.g. when the panel is displayed
        */
        attachBeforeNavigationTo<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeNavigationTo beforeNavigationTo} event of this `sap.m.P13nPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nPanel` itself.
         * 
         * Due to performance the data of the panel can be requested in lazy mode e.g. when the panel is displayed
        */
        attachBeforeNavigationTo<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * This method defines the point in time before the panel becomes active.
        */
        public beforeNavigationTo(): any;

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
            * Detaches event handler `fnFunction` from the {@link #event:beforeNavigationTo beforeNavigationTo} event of this `sap.m.P13nPanel`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeNavigationTo(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.m.P13nPanel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:beforeNavigationTo beforeNavigationTo} to attached listeners.
        */
        protected fireBeforeNavigationTo(mParameters?: any): this;

        /**
            * Gets current value of property {@link #getChangeNotifier changeNotifier}.
         * 
         * Callback which notifies a change on this panel.
        */
        public getChangeNotifier(): any;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * Defines personalization items (e.g. columns in the `P13nColumnsPanel`).
        */
        public getItems(): any[];

        /**
            * Returns a metadata object for class sap.m.P13nPanel.
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
            * This method can be overwritten by subclass in order to return a payload for Ok action
        */
        public getOkPayload(): any;

        /**
            * This method can be overwritten by subclass in order to return a payload for Reset action
        */
        public getResetPayload(): any;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Title text appears in the panel.
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getTitleLarge titleLarge}.
         * 
         * Large title text appears e.g. in dialog header in case that only one panel is shown.
        */
        public getTitleLarge(): string;

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * Panel type for generic use. Due to extensibility reason the type of `type` property should be `string`. So it is feasible to add a custom panel without expanding the type.
        */
        public getType(): string;

        /**
            * Gets current value of property {@link #getValidationExecutor validationExecutor}.
         * 
         * Callback method which is called in order to validate end user entry.
        */
        public getValidationExecutor(): any;

        /**
            * Gets current value of property {@link #getValidationListener validationListener}.
         * 
         * Callback method which is called in order to register for validation result.
        */
        public getValidationListener(): any;

        /**
            * Gets current value of property {@link #getVerticalScrolling verticalScrolling}.
         * 
         * Enables the vertical Scrolling on the `P13nDialog` when the panel is shown.
         * 
         * Default value is `true`.
        */
        public getVerticalScrolling(): boolean;

        /**
            * Checks for the provided `sap.m.P13nItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: P13nItem): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: P13nItem, iIndex: number): this;

        /**
            * This method can be overwritten by subclass in order to cleanup after navigation, e.g. to remove invalid content on the panel.
        */
        public onAfterNavigationFrom(): any;

        /**
            * This method can be overwritten by subclass in order to prevent navigation to another panel. This could be the case if some content on the panel is considered 'invalid'.
        */
        public onBeforeNavigationFrom(): boolean;

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): any[];

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | P13nItem): P13nItem;

        /**
            * Sets a new value for property {@link #getChangeNotifier changeNotifier}.
         * 
         * Callback which notifies a change on this panel.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setChangeNotifier(oChangeNotifier: any): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Title text appears in the panel.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getTitleLarge titleLarge}.
         * 
         * Large title text appears e.g. in dialog header in case that only one panel is shown.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitleLarge(sTitleLarge: string): this;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * Panel type for generic use. Due to extensibility reason the type of `type` property should be `string`. So it is feasible to add a custom panel without expanding the type.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setType(sType: string): this;

        /**
            * Sets a new value for property {@link #getValidationExecutor validationExecutor}.
         * 
         * Callback method which is called in order to validate end user entry.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValidationExecutor(oValidationExecutor: any): this;

        /**
            * Sets a new value for property {@link #getValidationListener validationListener}.
         * 
         * Callback method which is called in order to register for validation result.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValidationListener(oValidationListener: any): this;

        /**
            * Sets a new value for property {@link #getVerticalScrolling verticalScrolling}.
         * 
         * Enables the vertical Scrolling on the `P13nDialog` when the panel is shown.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVerticalScrolling(bVerticalScrolling: boolean): this;

        /**
            * Unbinds aggregation {@link #getItems items} from model data.
        */
        public unbindItems(): this;

    }

}
