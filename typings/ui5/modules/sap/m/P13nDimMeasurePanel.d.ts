declare module "sap/m/P13nDimMeasurePanel" {
    import P13nPanel from "sap/m/P13nPanel";
    import Item from "sap/ui/core/Item";
    import P13nDimMeasureItem from "sap/m/P13nDimMeasureItem";

    /**
    
    */
    export default class P13nDimMeasurePanel extends P13nPanel {


        /**
            * Constructor for a new P13nDimMeasurePanel.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some availableChartType to the aggregation {@link #getAvailableChartTypes availableChartTypes}.
        */
        public addAvailableChartType(oAvailableChartType: Item): this;

        /**
            * Adds some dimMeasureItem to the aggregation {@link #getDimMeasureItems dimMeasureItems}.
        */
        public addDimMeasureItem(oDimMeasureItem: P13nDimMeasureItem): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:changeChartType changeChartType} event of this `sap.m.P13nDimMeasurePanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nDimMeasurePanel` itself.
         * 
         * Event raised when a `ChartType` has been updated.
        */
        attachChangeChartType<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:changeChartType changeChartType} event of this `sap.m.P13nDimMeasurePanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nDimMeasurePanel` itself.
         * 
         * Event raised when a `ChartType` has been updated.
        */
        attachChangeChartType<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:changeDimMeasureItems changeDimMeasureItems} event of this `sap.m.P13nDimMeasurePanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nDimMeasurePanel` itself.
         * 
         * Event raised when one or more `DimMeasureItems` has been updated. Aggregation `DimMeasureItems` should be updated outside...
        */
        attachChangeDimMeasureItems<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:changeDimMeasureItems changeDimMeasureItems} event of this `sap.m.P13nDimMeasurePanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nDimMeasurePanel` itself.
         * 
         * Event raised when one or more `DimMeasureItems` has been updated. Aggregation `DimMeasureItems` should be updated outside...
        */
        attachChangeDimMeasureItems<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getDimMeasureItems dimMeasureItems} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindDimMeasureItems(oBindingInfo: any): this;

        /**
            * Destroys all the availableChartTypes in the aggregation {@link #getAvailableChartTypes availableChartTypes}.
        */
        public destroyAvailableChartTypes(): this;

        /**
            * Destroys all the dimMeasureItems in the aggregation {@link #getDimMeasureItems dimMeasureItems}.
        */
        public destroyDimMeasureItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:changeChartType changeChartType} event of this `sap.m.P13nDimMeasurePanel`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachChangeChartType(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:changeDimMeasureItems changeDimMeasureItems} event of this `sap.m.P13nDimMeasurePanel`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachChangeDimMeasureItems(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.m.P13nDimMeasurePanel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.P13nPanel.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:changeChartType changeChartType} to attached listeners.
        */
        protected fireChangeChartType(mParameters?: any): this;

        /**
            * Fires event {@link #event:changeDimMeasureItems changeDimMeasureItems} to attached listeners.
        */
        protected fireChangeDimMeasureItems(mParameters?: any): this;

        /**
            * Gets content of aggregation {@link #getAvailableChartTypes availableChartTypes}.
         * 
         * Specifies available chart types.
        */
        public getAvailableChartTypes(): any[];

        /**
            * Gets current value of property {@link #getChartTypeKey chartTypeKey}.
         * 
         * Specifies a chart type key.
         * 
         * Default value is ``.
        */
        public getChartTypeKey(): string;

        /**
            * Gets content of aggregation {@link #getDimMeasureItems dimMeasureItems}.
         * 
         * List of columns that has been changed.
        */
        public getDimMeasureItems(): any[];

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
            * Returns a metadata object for class sap.m.P13nDimMeasurePanel.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Checks for the provided `sap.ui.core.Item` in the aggregation {@link #getAvailableChartTypes availableChartTypes}. and returns its index if found or -1 otherwise.
        */
        public indexOfAvailableChartType(oAvailableChartType: Item): number;

        /**
            * Checks for the provided `sap.m.P13nDimMeasureItem` in the aggregation {@link #getDimMeasureItems dimMeasureItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfDimMeasureItem(oDimMeasureItem: P13nDimMeasureItem): number;

        /**
            * Inserts a availableChartType into the aggregation {@link #getAvailableChartTypes availableChartTypes}.
        */
        public insertAvailableChartType(oAvailableChartType: Item, iIndex: number): this;

        /**
            * Inserts a dimMeasureItem into the aggregation {@link #getDimMeasureItems dimMeasureItems}.
        */
        public insertDimMeasureItem(oDimMeasureItem: P13nDimMeasureItem, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getAvailableChartTypes availableChartTypes}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllAvailableChartTypes(): any[];

        /**
            * Removes all the controls from the aggregation {@link #getDimMeasureItems dimMeasureItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllDimMeasureItems(): any[];

        /**
            * Removes a availableChartType from the aggregation {@link #getAvailableChartTypes availableChartTypes}.
        */
        public removeAvailableChartType(vAvailableChartType: number | string | Item): Item;

        /**
            * Removes a dimMeasureItem from the aggregation {@link #getDimMeasureItems dimMeasureItems}.
        */
        public removeDimMeasureItem(vDimMeasureItem: number | string | P13nDimMeasureItem): P13nDimMeasureItem;

        /**
            * Sets a new value for property {@link #getChartTypeKey chartTypeKey}.
         * 
         * Specifies a chart type key.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setChartTypeKey(sChartTypeKey: string): this;

        /**
            * Unbinds aggregation {@link #getDimMeasureItems dimMeasureItems} from model data.
        */
        public unbindDimMeasureItems(): this;

    }

}
