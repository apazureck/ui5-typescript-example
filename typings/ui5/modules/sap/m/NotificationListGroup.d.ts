declare module "sap/m/NotificationListGroup" {
    import NotificationListBase from "sap/m/NotificationListBase";
    import NotificationListItem from "sap/m/NotificationListItem";

    export = NotificationListGroup;




    /**
    
    */
    class NotificationListGroup extends NotificationListBase {

        /**
            * Constructor for a new NotificationListGroup.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: NotificationListItem): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:onCollapse onCollapse} event of this `sap.m.NotificationListGroup`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.NotificationListGroup` itself.
         * 
         * This event is called when collapse property value is changed
        */
        attachOnCollapse<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Indicates exact collapse direction */
            collapsed: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:onCollapse onCollapse} event of this `sap.m.NotificationListGroup`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.NotificationListGroup` itself.
         * 
         * This event is called when collapse property value is changed
        */
        attachOnCollapse<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Indicates exact collapse direction */
            collapsed: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:onCollapse onCollapse} event of this `sap.m.NotificationListGroup`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachOnCollapse(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.m.NotificationListGroup with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.NotificationListBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:onCollapse onCollapse} to attached listeners.
        */
        protected fireOnCollapse(mParameters?: { collapsed?: boolean, }): this;

        /**
            * Gets current value of property {@link #getAutoPriority autoPriority}.
         * 
         * Determines if the group will automatically set the priority based on the highest priority of its notifications or get its priority from the developer.
         * 
         * Default value is `true`.
        */
        public getAutoPriority(): boolean;

        /**
            * Gets current value of property {@link #getCollapsed collapsed}.
         * 
         * Determines if the group is collapsed or expanded.
         * 
         * Default value is `false`.
        */
        public getCollapsed(): boolean;

        /**
            * Gets current value of property {@link #getEnableCollapseButtonWhenEmpty enableCollapseButtonWhenEmpty}.
         * 
         * Determines if the collapse/expand button should be enabled for an empty group.
         * 
         * Default value is `false`.
        */
        public getEnableCollapseButtonWhenEmpty(): boolean;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * The NotificationListItems inside the group.
        */
        public getItems(): any[];

        /**
            * Returns a metadata object for class sap.m.NotificationListGroup.
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
            * Gets current value of property {@link #getShowEmptyGroup showEmptyGroup}.
         * 
         * Determines if the group header/footer of the empty group will be always shown. By default groups with 0 notifications are not shown.
         * 
         * Default value is `false`.
        */
        public getShowEmptyGroup(): boolean;

        /**
            * Overwrites the getter for unread property.
        */
        public getUnread(): boolean;

        /**
            * Checks for the provided `sap.m.NotificationListItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: NotificationListItem): number;

        /**
            * Sets up the initial values of the control.
        */
        protected init(): any;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: NotificationListItem, iIndex: number): this;

        /**
            * Function is called before the rendering of the control is started.
         * 
         * Applications must not call this hook method directly, it is called by the framework.
         * 
         * Subclasses of Control should override this hook to implement any necessary actions before the rendering.
        */
        protected onBeforeRendering(): any;

        /**
            * Overwrites the onBeforeRendering.
        */
        protected onBeforeRendering(): any;

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): any[];

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | NotificationListItem): NotificationListItem;

        /**
            * Sets a new value for property {@link #getAutoPriority autoPriority}.
         * 
         * Determines if the group will automatically set the priority based on the highest priority of its notifications or get its priority from the developer.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setAutoPriority(bAutoPriority: boolean): this;

        /**
            * Overwrites the setter for collapsed property.
        */
        public setCollapsed(Collapsed: boolean): this;

        /**
            * Sets a new value for property {@link #getCollapsed collapsed}.
         * 
         * Determines if the group is collapsed or expanded.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setCollapsed(bCollapsed: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableCollapseButtonWhenEmpty enableCollapseButtonWhenEmpty}.
         * 
         * Determines if the collapse/expand button should be enabled for an empty group.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEnableCollapseButtonWhenEmpty(bEnableCollapseButtonWhenEmpty: boolean): this;

        /**
            * Sets a new value for property {@link #getShowEmptyGroup showEmptyGroup}.
         * 
         * Determines if the group header/footer of the empty group will be always shown. By default groups with 0 notifications are not shown.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowEmptyGroup(bShowEmptyGroup: boolean): this;

    }


}
