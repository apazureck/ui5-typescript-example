declare module "sap/ui/core/VariantLayoutData" {

    export = VariantLayoutData;




    /**
    
    */
    class VariantLayoutData extends sap.ui.core.LayoutData {

        /**
            * Constructor for a new VariantLayoutData.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some multipleLayoutData to the aggregation {@link #getMultipleLayoutData multipleLayoutData}.
        */
        public addMultipleLayoutData(oMultipleLayoutData: sap.ui.core.LayoutData): this;

        /**
            * Destroys all the multipleLayoutData in the aggregation {@link #getMultipleLayoutData multipleLayoutData}.
        */
        public destroyMultipleLayoutData(): this;

        /**
            * Creates a new subclass of class sap.ui.core.VariantLayoutData with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.core.VariantLayoutData.
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
            * Gets content of aggregation {@link #getMultipleLayoutData multipleLayoutData}.
         * 
         * Allows multiple LayoutData.
        */
        public getMultipleLayoutData(): any[];

        /**
            * Checks for the provided `sap.ui.core.LayoutData` in the aggregation {@link #getMultipleLayoutData multipleLayoutData}. and returns its index if found or -1 otherwise.
        */
        public indexOfMultipleLayoutData(oMultipleLayoutData: sap.ui.core.LayoutData): number;

        /**
            * Inserts a multipleLayoutData into the aggregation {@link #getMultipleLayoutData multipleLayoutData}.
        */
        public insertMultipleLayoutData(oMultipleLayoutData: sap.ui.core.LayoutData, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getMultipleLayoutData multipleLayoutData}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllMultipleLayoutData(): any[];

        /**
            * Removes a multipleLayoutData from the aggregation {@link #getMultipleLayoutData multipleLayoutData}.
        */
        public removeMultipleLayoutData(vMultipleLayoutData: number | string | sap.ui.core.LayoutData): sap.ui.core.LayoutData;

    }


}
