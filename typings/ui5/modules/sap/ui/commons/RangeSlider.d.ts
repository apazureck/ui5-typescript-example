declare module "sap/ui/commons/RangeSlider" {
    import Slider from "sap/ui/commons/Slider";

    export = RangeSlider;




    /**
    
    */
    class RangeSlider extends Slider {

        /**
            * Constructor for a new `RangeSlider`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.commons.RangeSlider with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.Slider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.commons.RangeSlider.
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
            * Gets current value of property {@link #getValue2 value2}.
         * 
         * Current second value of the slider. (Position of the second grip.)
         * 
         * ** Note: ** If the value is not in the valid range (between `min` and `max`) it will be changed to be in the valid range. If it is smaller than `value` it will be set to the same value.
         * 
         * Default value is `80`.
        */
        public getValue2(): number;

        /**
            * Sets a new value for property {@link #getValue2 value2}.
         * 
         * Current second value of the slider. (Position of the second grip.)
         * 
         * ** Note: ** If the value is not in the valid range (between `min` and `max`) it will be changed to be in the valid range. If it is smaller than `value` it will be set to the same value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `80`.
        */
        public setValue2(fValue2: number): this;

    }


}
