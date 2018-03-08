declare module "sap/m/SelectionDetailsItemLine" {

    export = SelectionDetailsItemLine;




    /**
    
    */
    class SelectionDetailsItemLine extends sap.ui.core.Element {

        /**
            * Constructor for a new SelectionDetailsItemLine.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.m.SelectionDetailsItemLine with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getDisplayValue displayValue}.
         * 
         * The display value of the line. If this property is set, it overrides the value property and is displayed as is.
        */
        public getDisplayValue(): string;

        /**
            * Gets current value of property {@link #getLabel label}.
         * 
         * The label that is shown as the first part of the line. It may contain the name of the currently selected dimension or measure.
        */
        public getLabel(): string;

        /**
            * Returns a metadata object for class sap.m.SelectionDetailsItemLine.
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
            * Gets current value of property {@link #getUnit unit}.
         * 
         * The unit of the given value. If this unit is given, the line is displayed bold.
        */
        public getUnit(): string;

        /**
            * Gets current value of property {@link #getValue value}.
         * 
         * The value of the line, for example the value of the currently selected measure. Expected type is a string or a plain object, including date and time properties of type string.
        */
        public getValue(): any;

        /**
            * Sets a new value for property {@link #getDisplayValue displayValue}.
         * 
         * The display value of the line. If this property is set, it overrides the value property and is displayed as is.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDisplayValue(sDisplayValue: string): this;

        /**
            * Sets a new value for property {@link #getLabel label}.
         * 
         * The label that is shown as the first part of the line. It may contain the name of the currently selected dimension or measure.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setLabel(sLabel: string): this;

        /**
            * Sets a new value for property {@link #getUnit unit}.
         * 
         * The unit of the given value. If this unit is given, the line is displayed bold.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setUnit(sUnit: string): this;

        /**
            * Sets a new value for property {@link #getValue value}.
         * 
         * The value of the line, for example the value of the currently selected measure. Expected type is a string or a plain object, including date and time properties of type string.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValue(oValue: any): this;

    }


}
