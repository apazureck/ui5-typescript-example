declare module "sap/ui/commons/RowRepeaterFilter" {

    export = RowRepeaterFilter;




    /**
    
    */
    class RowRepeaterFilter extends sap.ui.core.Element {

        /**
            * Constructor for a new RowRepeaterFilter.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.commons.RowRepeaterFilter with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getFilters filters}.
         * 
         * The set of filter objects.
        */
        public getFilters(): any;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * The filter icon if needed for display.
        */
        public getIcon(): string;

        /**
            * Returns a metadata object for class sap.ui.commons.RowRepeaterFilter.
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
            * Gets current value of property {@link #getText text}.
         * 
         * The filter title if needed for display.
        */
        public getText(): string;

        /**
            * Sets a new value for property {@link #getFilters filters}.
         * 
         * The set of filter objects.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFilters(oFilters: any): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * The filter icon if needed for display.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: string): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * The filter title if needed for display.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

    }


}
