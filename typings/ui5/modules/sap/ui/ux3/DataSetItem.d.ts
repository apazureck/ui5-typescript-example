declare module "sap/ui/ux3/DataSetItem" {

    /**
    
    */
    export default class DataSetItem extends sap.ui.core.Element {


        /**
            * Constructor for a new DataSetItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:selected selected} event of this `sap.ui.ux3.DataSetItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.DataSetItem` itself.
         * 
         * Event Fired when Datset item is selected.
        */
        attachSelected<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Id of the selected Datset item */
            itemId: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selected selected} event of this `sap.ui.ux3.DataSetItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.DataSetItem` itself.
         * 
         * Event Fired when Datset item is selected.
        */
        attachSelected<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Id of the selected Datset item */
            itemId: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:selected selected} event of this `sap.ui.ux3.DataSetItem`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelected(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.DataSetItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:selected selected} to attached listeners.
        */
        protected fireSelected(mParameters?: { itemId?: string, }): this;

        /**
            * Gets current value of property {@link #getCheckable checkable}.
         * 
         * checkable
         * 
         * Default value is `true`.
        */
        public getCheckable(): boolean;

        /**
            * Gets current value of property {@link #getIconSrc iconSrc}.
         * 
         * image
        */
        public getIconSrc(): sap.ui.core.URI;

        /**
            * Returns a metadata object for class sap.ui.ux3.DataSetItem.
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
            * Gets current value of property {@link #getSubtitle subtitle}.
         * 
         * subtitle
         * 
         * Default value is `Subtitle`.
        */
        public getSubtitle(): string;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * title
         * 
         * Default value is `Title`.
        */
        public getTitle(): string;

        /**
            * Sets a new value for property {@link #getCheckable checkable}.
         * 
         * checkable
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setCheckable(bCheckable: boolean): this;

        /**
            * Sets a new value for property {@link #getIconSrc iconSrc}.
         * 
         * image
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIconSrc(sIconSrc: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getSubtitle subtitle}.
         * 
         * subtitle
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Subtitle`.
        */
        public setSubtitle(sSubtitle: string): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * title
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Title`.
        */
        public setTitle(sTitle: string): this;

    }

}
