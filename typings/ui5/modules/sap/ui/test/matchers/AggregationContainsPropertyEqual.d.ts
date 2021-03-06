declare module "sap/ui/test/matchers/AggregationContainsPropertyEqual" {
    import Matcher from "sap/ui/test/matchers/Matcher";

    /**
    
    */
    export default class AggregationContainsPropertyEqual extends Matcher {


        /**
            * AggregationContainsPropertyEqual - checks if an aggregation contains at least one item that has a Property set to a certain value.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.test.matchers.AggregationContainsPropertyEqual with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.test.matchers.Matcher.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getAggregationName aggregationName}.
         * 
         * The Name of the aggregation that is used for matching.
        */
        public getAggregationName(): string;

        /**
            * Returns a metadata object for class sap.ui.test.matchers.AggregationContainsPropertyEqual.
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
            * Gets current value of property {@link #getPropertyName propertyName}.
         * 
         * The Name of the property that is used for matching.
        */
        public getPropertyName(): string;

        /**
            * Gets current value of property {@link #getPropertyValue propertyValue}.
         * 
         * The value of the Property that is used for matching.
        */
        public getPropertyValue(): any;

        /**
            * Checks if the control has a filled aggregation with at least one control that have a property equaling propertyName/Value.
        */
        protected isMatching(oControl: sap.ui.core.Control): boolean;

        /**
            * Checks if the matcher is matching - will get an instance of sap.ui.core.Control as parameter.
         * 
         * Should be overwritten by subclasses
        */
        protected isMatching(oControl: sap.ui.core.Control): boolean;

        /**
            * Sets a new value for property {@link #getAggregationName aggregationName}.
         * 
         * The Name of the aggregation that is used for matching.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAggregationName(sAggregationName: string): this;

        /**
            * Sets a new value for property {@link #getPropertyName propertyName}.
         * 
         * The Name of the property that is used for matching.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setPropertyName(sPropertyName: string): this;

        /**
            * Sets a new value for property {@link #getPropertyValue propertyValue}.
         * 
         * The value of the Property that is used for matching.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setPropertyValue(oPropertyValue: any): this;

    }

}
