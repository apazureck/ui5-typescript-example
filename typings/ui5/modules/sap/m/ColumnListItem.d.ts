declare module "sap/m/ColumnListItem" {
    import ListItemBase from "sap/m/ListItemBase";

    /**
    
    */
    export default class ColumnListItem extends ListItemBase {


        /**
            * Constructor for a new ColumnListItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Returns pop-in DOMRef as a jQuery Object
        */
        protected $Popin(): any;

        /**
            * Adds some cell to the aggregation {@link #getCells cells}.
        */
        public addCell(oCell: sap.ui.core.Control): this;

        /**
            * Binds aggregation {@link #getCells cells} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindCells(oBindingInfo: any): this;

        /**
            * Destroys all the cells in the aggregation {@link #getCells cells}.
        */
        public destroyCells(): this;

        /**
            * Creates a new subclass of class sap.m.ColumnListItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ListItemBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets content of aggregation {@link #getCells cells}.
         * 
         * Every `control` inside the `cells` aggregation defines one cell of the row. ** Note: ** The order of the `cells` aggregation must match the order of the `columns` aggregation of `sap.m.Table`.
        */
        public getCells(): any[];

        /**
            * Returns a metadata object for class sap.m.ColumnListItem.
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
            * Returns the pop-in element.
        */
        protected getPopin(): any;

        /**
            * Returns the tabbable DOM elements as a jQuery collection When popin is available this separated dom should also be included
        */
        protected getTabbables(): any;

        /**
            * Gets current value of property {@link #getVAlign vAlign}.
         * 
         * Sets the vertical alignment of all the cells within the table row (including selection and navigation). ** Note: ** `vAlign` property of `sap.m.Column` overrides the property for cell vertical alignment if both are set.
         * 
         * Default value is `Inherit`.
        */
        public getVAlign(): sap.ui.core.VerticalAlign;

        /**
            * Determines whether control has pop-in or not.
        */
        protected hasPopin(): any;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getCells cells}. and returns its index if found or -1 otherwise.
        */
        public indexOfCell(oCell: sap.ui.core.Control): number;

        /**
            * Inserts a cell into the aggregation {@link #getCells cells}.
        */
        public insertCell(oCell: sap.ui.core.Control, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getCells cells}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllCells(): any[];

        /**
            * Removes a cell from the aggregation {@link #getCells cells}.
        */
        public removeCell(vCell: number | string | sap.ui.core.Control): sap.ui.core.Control;

        /**
            * Pemove pop-in from DOM
        */
        protected removePopin(): any;

        /**
            * Sets a new value for property {@link #getVAlign vAlign}.
         * 
         * Sets the vertical alignment of all the cells within the table row (including selection and navigation). ** Note: ** `vAlign` property of `sap.m.Column` overrides the property for cell vertical alignment if both are set.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setVAlign(sVAlign: sap.ui.core.VerticalAlign): this;

        /**
            * Unbinds aggregation {@link #getCells cells} from model data.
        */
        public unbindCells(): this;

    }

}
