declare module "sap/ui/ux3/Collection" {
    import Item from "sap/ui/core/Item";

    /**
    
    */
    export default class Collection extends sap.ui.core.Element {


        /**
            * Constructor for a new Collection.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: Item): this;

        /**
            
        */
        public addSelectedItem(vSelectedItem: string | Item): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:propertyChanged propertyChanged} event of this `sap.ui.ux3.Collection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Collection` itself.
         * 
         * Fires if a property has changed, and the collection inspector needs to do something after that
        */
        attachPropertyChanged<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:propertyChanged propertyChanged} event of this `sap.ui.ux3.Collection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Collection` itself.
         * 
         * Fires if a property has changed, and the collection inspector needs to do something after that
        */
        attachPropertyChanged<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionChanged selectionChanged} event of this `sap.ui.ux3.Collection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Collection` itself.
         * 
         * Fired when ever the selected items changer
        */
        attachSelectionChanged<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionChanged selectionChanged} event of this `sap.ui.ux3.Collection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Collection` itself.
         * 
         * Fired when ever the selected items changer
        */
        attachSelectionChanged<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:propertyChanged propertyChanged} event of this `sap.ui.ux3.Collection`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPropertyChanged(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:selectionChanged selectionChanged} event of this `sap.ui.ux3.Collection`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelectionChanged(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.Collection with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:propertyChanged propertyChanged} to attached listeners.
        */
        protected firePropertyChanged(mParameters?: any): this;

        /**
            * Fires event {@link #event:selectionChanged selectionChanged} to attached listeners.
        */
        protected fireSelectionChanged(mParameters?: any): this;

        /**
            * Gets current value of property {@link #getEditable editable}.
         * 
         * If a collection is editable an edit button will be displayed below the list of items
         * 
         * Default value is `false`.
        */
        public getEditable(): boolean;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * Items in the collection
        */
        public getItems(): any[];

        /**
            * Returns a metadata object for class sap.ui.ux3.Collection.
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
            * Gets current value of property {@link #getMultiSelection multiSelection}.
         * 
         * Allow multi selection of items in collection
         * 
         * Default value is `false`.
        */
        public getMultiSelection(): boolean;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getSelectedItems selectedItems}.
        */
        public getSelectedItems(): any[];

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Name for the collection
        */
        public getTitle(): string;

        /**
            * Checks for the provided `sap.ui.core.Item` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: Item): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: Item, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): any[];

        /**
            
        */
        public removeAllSelectedItems(): any[];

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | Item): Item;

        /**
            
        */
        public removeSelectedItem(vSelectedItem: number | string | Item): string;

        /**
            * Sets a new value for property {@link #getEditable editable}.
         * 
         * If a collection is editable an edit button will be displayed below the list of items
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEditable(bEditable: boolean): this;

        /**
            * Sets a new value for property {@link #getMultiSelection multiSelection}.
         * 
         * Allow multi selection of items in collection
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setMultiSelection(bMultiSelection: boolean): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Name for the collection
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

    }

}
