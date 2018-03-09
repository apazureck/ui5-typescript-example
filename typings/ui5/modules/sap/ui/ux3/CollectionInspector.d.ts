declare module "sap/ui/ux3/CollectionInspector" {
    import Collection from "sap/ui/ux3/Collection";

    /**
    
    */
    export default class CollectionInspector extends sap.ui.core.Control {


        /**
            * Constructor for a new CollectionInspector.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some collection `oCollection` to the aggregation named `collections`.
        */
        public addCollection(oCollection: Collection): this;

        /**
            * Adds some content `oContent` to the aggregation named `content`.
        */
        public addContent(oContent: sap.ui.core.Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:collectionSelected collectionSelected} event of this `sap.ui.ux3.CollectionInspector`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.CollectionInspector` itself.
         * 
         * Event is fired if user selects a collection
        */
        attachCollectionSelected<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:collectionSelected collectionSelected} event of this `sap.ui.ux3.CollectionInspector`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.CollectionInspector` itself.
         * 
         * Event is fired if user selects a collection
        */
        attachCollectionSelected<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:editCollection editCollection} event of this `sap.ui.ux3.CollectionInspector`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.CollectionInspector` itself.
         * 
         * Fires when the edit button is clicked
        */
        attachEditCollection<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:editCollection editCollection} event of this `sap.ui.ux3.CollectionInspector`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.CollectionInspector` itself.
         * 
         * Fires when the edit button is clicked
        */
        attachEditCollection<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemSelectionChanged itemSelectionChanged} event of this `sap.ui.ux3.CollectionInspector`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.CollectionInspector` itself.
         * 
         * Fires when an item in a collection is selected
        */
        attachItemSelectionChanged<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemSelectionChanged itemSelectionChanged} event of this `sap.ui.ux3.CollectionInspector`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.CollectionInspector` itself.
         * 
         * Fires when an item in a collection is selected
        */
        attachItemSelectionChanged<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Closes the siedebar
        */
        public closeSidebar(): any;

        /**
            * Destroys the collection aggregation
        */
        public destroyCollections(): this;

        /**
            * Destroys all the content in the aggregation named `content`.
        */
        public destroyContent(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:collectionSelected collectionSelected} event of this `sap.ui.ux3.CollectionInspector`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachCollectionSelected(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:editCollection editCollection} event of this `sap.ui.ux3.CollectionInspector`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachEditCollection(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:itemSelectionChanged itemSelectionChanged} event of this `sap.ui.ux3.CollectionInspector`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachItemSelectionChanged(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.CollectionInspector with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:collectionSelected collectionSelected} to attached listeners.
        */
        protected fireCollectionSelected(mParameters?: any): this;

        /**
            * Fires event {@link #event:editCollection editCollection} to attached listeners.
        */
        protected fireEditCollection(mParameters?: any): this;

        /**
            * Fires event {@link #event:itemSelectionChanged itemSelectionChanged} to attached listeners.
        */
        protected fireItemSelectionChanged(mParameters?: any): this;

        /**
            * Gets content of aggregation {@link #getCollections collections}.
         * 
         * Collections which are displayed in the COllectionInspector
        */
        public getCollections(): any[];

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * All controls that are currently displayed
        */
        public getContent(): any[];

        /**
            * Return the edit button
        */
        public getEditButton(): any;

        /**
            * Gets current value of property {@link #getFitParent fitParent}.
         * 
         * If set to true, control will fit parents content area
         * 
         * Default value is `true`.
        */
        public getFitParent(): boolean;

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
            * Returns a metadata object for class sap.ui.ux3.CollectionInspector.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * ID of the element which is the current target of the association {@link #getSelectedCollection selectedCollection}, or `null`.
        */
        public getSelectedCollection(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getSidebarVisible sidebarVisible}.
         * 
         * Defines if the list of collection items is visible on the left
         * 
         * Default value is `true`.
        */
        public getSidebarVisible(): boolean;

        /**
            * Checks for the provided `sap.ui.ux3.Collection` in the aggregation {@link #getCollections collections}. and returns its index if found or -1 otherwise.
        */
        public indexOfCollection(oCollection: Collection): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: sap.ui.core.Control): number;

        /**
            * Inserts a collection into the aggregation named `collections`.
        */
        public insertCollection(oCollection: Collection, iIndex: number): this;

        /**
            * Inserts a content into the aggregation named `content`.
        */
        public insertContent(oContent: sap.ui.core.Control, iIndex: number): this;

        /**
            * Opens the sidebar
        */
        public openSidebar(): any;

        /**
            * Removes all the controls in the aggregation named `collections`.
         *  Additionally unregisters them from the hosting UIArea.
        */
        public removeAllCollections(): any[];

        /**
            * Removes all the controls in the aggregation named `content`.
         *  Additionally unregisters them from the hosting UIArea.
        */
        public removeAllContent(): any[];

        /**
            * Removes a collection from the aggregation named `collections`.
        */
        public removeCollection(vCollection: number | string | Collection): Collection;

        /**
            * Removes a content from the aggregation named `content`.
        */
        public removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control;

        /**
            * Sets a new value for property {@link #getFitParent fitParent}.
         * 
         * If set to true, control will fit parents content area
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setFitParent(bFitParent: boolean): this;

        /**
            * Sets the associated {@link #getSelectedCollection selectedCollection}.
        */
        public setSelectedCollection(oSelectedCollection: sap.ui.core.ID | Collection): this;

        /**
            * Sets a new value for property {@link #getSidebarVisible sidebarVisible}.
         * 
         * Defines if the list of collection items is visible on the left
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setSidebarVisible(bSidebarVisible: boolean): this;

    }

}
