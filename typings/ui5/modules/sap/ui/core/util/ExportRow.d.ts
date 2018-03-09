declare module "sap/ui/core/util/ExportRow" {
    import ExportCell from "sap/ui/core/util/ExportCell";

    /**
    
    */
    export default class ExportRow extends sap.ui.base.ManagedObject {


        /**
            * Constructor for a new ExportRow.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some cell to the aggregation {@link #getCells cells}.
        */
        public addCell(oCell: ExportCell): this;

        /**
            * Destroys all the cells in the aggregation {@link #getCells cells}.
        */
        public destroyCells(): this;

        /**
            * Creates a new subclass of class sap.ui.core.util.ExportRow with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets content of aggregation {@link #getCells cells}.
         * 
         * Cells for the Export.
        */
        public getCells(): any[];

        /**
            * Returns a metadata object for class sap.ui.core.util.ExportRow.
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
            * Checks for the provided `sap.ui.core.util.ExportCell` in the aggregation {@link #getCells cells}. and returns its index if found or -1 otherwise.
        */
        public indexOfCell(oCell: ExportCell): number;

        /**
            * Inserts a cell into the aggregation {@link #getCells cells}.
        */
        public insertCell(oCell: ExportCell, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getCells cells}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllCells(): any[];

        /**
            * Removes a cell from the aggregation {@link #getCells cells}.
        */
        public removeCell(vCell: number | string | ExportCell): ExportCell;

    }

}
