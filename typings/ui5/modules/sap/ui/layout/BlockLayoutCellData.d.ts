declare module "sap/ui/layout/BlockLayoutCellData" {

    export = BlockLayoutCellData;




    /**
    
    */
    class BlockLayoutCellData extends sap.ui.core.LayoutData {

        /**
            * Constructor for a new BlockLayoutCellData.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.layout.BlockLayoutCellData with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getLSize lSize}.
         * 
         * Sets the width of the cell for L size of the BlockLayout.
         * 
         * Default value is `1`.
        */
        public getLSize(): number;

        /**
            * Returns a metadata object for class sap.ui.layout.BlockLayoutCellData.
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
            * Gets current value of property {@link #getMSize mSize}.
         * 
         * Sets the width of the cell for M size of the BlockLayout.
         * 
         * Default value is `1`.
        */
        public getMSize(): number;

        /**
            * Gets current value of property {@link #getSSize sSize}.
         * 
         * Sets the width of the cell for S size of the BlockLayout.
         * 
         * Default value is `1`.
        */
        public getSSize(): number;

        /**
            * Gets current value of property {@link #getXlSize xlSize}.
         * 
         * Sets the width of the cell for XL size of the BlockLayout.
         * 
         * Default value is `1`.
        */
        public getXlSize(): number;

        /**
            * Sets a new value for property {@link #getLSize lSize}.
         * 
         * Sets the width of the cell for L size of the BlockLayout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setLSize(iLSize: number): this;

        /**
            * Sets a new value for property {@link #getMSize mSize}.
         * 
         * Sets the width of the cell for M size of the BlockLayout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setMSize(iMSize: number): this;

        /**
            * Sets width of the cell to all sizes if the width is specified.
        */
        public setSize(iValue: any): this;

        /**
            * Sets a new value for property {@link #getSSize sSize}.
         * 
         * Sets the width of the cell for S size of the BlockLayout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setSSize(iSSize: number): this;

        /**
            * Sets a new value for property {@link #getXlSize xlSize}.
         * 
         * Sets the width of the cell for XL size of the BlockLayout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setXlSize(iXlSize: number): this;

    }


}
