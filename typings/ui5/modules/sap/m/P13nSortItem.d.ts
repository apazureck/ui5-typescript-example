declare module "sap/m/P13nSortItem" {
    import Item from "sap/ui/core/Item";

    export = P13nSortItem;




    /**
    
    */
    class P13nSortItem extends Item {

        /**
            * Constructor for a new P13nSortItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.m.P13nSortItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getColumnKey columnKey}.
         * 
         * key of the column
        */
        public getColumnKey(): string;

        /**
            * Returns a metadata object for class sap.m.P13nSortItem.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Gets current value of property {@link #getOperation operation}.
         * 
         * sap.m.P13nConditionOperation
        */
        public getOperation(): string;

        /**
            * Sets a new value for property {@link #getColumnKey columnKey}.
         * 
         * key of the column
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setColumnKey(sColumnKey: string): this;

        /**
            * Sets a new value for property {@link #getOperation operation}.
         * 
         * sap.m.P13nConditionOperation
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setOperation(sOperation: string): this;

    }


}
