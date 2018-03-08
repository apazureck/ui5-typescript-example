declare module "sap/ui/test/matchers/AggregationFilled" {
    import Matcher from "sap/ui/test/matchers/Matcher";

    export = AggregationFilled;




    /**
    
    */
    class AggregationFilled extends Matcher {

        /**
            * AggregationFilled - checks if an aggregation contains at least one entry.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.test.matchers.AggregationFilled with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.test.matchers.Matcher.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.test.matchers.AggregationFilled.
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
            * Gets current value of property {@link #getName name}.
         * 
         * The name of the aggregation that is used for matching.
        */
        public getName(): string;

        /**
            * Checks if the control has a filled aggregation.
        */
        protected isMatching(oControl: sap.ui.core.Control): boolean;

        /**
            * Checks if the matcher is matching - will get an instance of sap.ui.core.Control as parameter.
         * 
         * Should be overwritten by subclasses
        */
        protected isMatching(oControl: sap.ui.core.Control): boolean;

        /**
            * Sets a new value for property {@link #getName name}.
         * 
         * The name of the aggregation that is used for matching.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setName(sName: string): this;

    }


}
