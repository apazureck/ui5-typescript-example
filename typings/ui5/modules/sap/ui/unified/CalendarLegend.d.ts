declare module "sap/ui/unified/CalendarLegend" {
    import CalendarLegendItem from "sap/ui/unified/CalendarLegendItem";

    /**
    
    */
    export default class CalendarLegend extends sap.ui.core.Control {


        /**
            * Constructor for a new CalendarLegend.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: CalendarLegendItem): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Creates a new subclass of class sap.ui.unified.CalendarLegend with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getColumnWidth columnWidth}.
         * 
         * Defines the width of the created columns in which the items are arranged.
         * 
         * Default value is `120px`.
        */
        public getColumnWidth(): sap.ui.core.CSSSize;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * Items to be displayed.
        */
        public getItems(): any[];

        /**
            * Returns a metadata object for class sap.ui.unified.CalendarLegend.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

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
            * Checks for the provided `sap.ui.unified.CalendarLegendItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: CalendarLegendItem): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: CalendarLegendItem, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): any[];

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | CalendarLegendItem): CalendarLegendItem;

        /**
            * Sets a new value for property {@link #getColumnWidth columnWidth}.
         * 
         * Defines the width of the created columns in which the items are arranged.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `120px`.
        */
        public setColumnWidth(sColumnWidth: sap.ui.core.CSSSize): this;

    }

}
