declare module "sap/m/P13nGroupItem" {
    import Item from "sap/ui/core/Item";

    /**
    
    */
    export default class P13nGroupItem extends Item {


        /**
            * Constructor for a new P13nGroupItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.m.P13nGroupItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
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
            * Returns a metadata object for class sap.m.P13nGroupItem.
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
            * Gets current value of property {@link #getOperation operation}.
         * 
         * sap.m.P13nConditionOperation
        */
        public getOperation(): string;

        /**
            * Gets current value of property {@link #getShowIfGrouped showIfGrouped}.
         * 
         * make the grouped column as normalcolumn visible
         * 
         * Default value is `false`.
        */
        public getShowIfGrouped(): boolean;

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

        /**
            * Sets a new value for property {@link #getShowIfGrouped showIfGrouped}.
         * 
         * make the grouped column as normalcolumn visible
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowIfGrouped(bShowIfGrouped: boolean): this;

    }

}
