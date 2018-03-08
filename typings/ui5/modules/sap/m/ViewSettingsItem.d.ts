declare module "sap/m/ViewSettingsItem" {
    import Item from "sap/ui/core/Item";

    export = ViewSettingsItem;




    /**
    
    */
    class ViewSettingsItem extends Item {

        /**
            * Constructor for a new ViewSettingsItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemPropertyChanged itemPropertyChanged} event of this `sap.m.ViewSettingsItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ViewSettingsItem` itself.
         * 
         * Let the outside world know that some of its properties has changed.
        */
        attachItemPropertyChanged<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Instance of the item that changed. */
            changedItem: ViewSettingsItem, /* * Key of the changed property. */
            propertyKey: string, /* * Value of the changed property. */
            propertyValue: any,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemPropertyChanged itemPropertyChanged} event of this `sap.m.ViewSettingsItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ViewSettingsItem` itself.
         * 
         * Let the outside world know that some of its properties has changed.
        */
        attachItemPropertyChanged<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Instance of the item that changed. */
            changedItem: ViewSettingsItem, /* * Key of the changed property. */
            propertyKey: string, /* * Value of the changed property. */
            propertyValue: any,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:itemPropertyChanged itemPropertyChanged} event of this `sap.m.ViewSettingsItem`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachItemPropertyChanged(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.m.ViewSettingsItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:itemPropertyChanged itemPropertyChanged} to attached listeners.
        */
        protected fireItemPropertyChanged(mParameters?: { changedItem?: ViewSettingsItem, propertyKey?: string, propertyValue?: any, }): this;

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
            * Returns a metadata object for class sap.m.ViewSettingsItem.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Gets current value of property {@link #getSelected selected}.
         * 
         * Selected state of the item. If set to "true", the item will be displayed as selected in the view settings dialog.
         * 
         * Default value is `false`.
        */
        public getSelected(): boolean;

        /**
            * Sets a new value for property {@link #getSelected selected}.
         * 
         * Selected state of the item. If set to "true", the item will be displayed as selected in the view settings dialog.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setSelected(bSelected: boolean): this;

    }


}
