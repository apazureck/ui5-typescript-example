declare module "sap/m/ResponsiveScale" {

    /**
    
    */
    export default class ResponsiveScale extends sap.ui.core.Element {


        /**
            * Constructor for a new `ResponsiveScale`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.m.ResponsiveScale with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.m.ResponsiveScale.
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
            * Gets current value of property {@link #getTickmarksBetweenLabels tickmarksBetweenLabels}.
         * 
         * Put a label on every N-th tickmark.
         * 
         * Default value is `0`.
        */
        public getTickmarksBetweenLabels(): number;

        /**
            * Sets a new value for property {@link #getTickmarksBetweenLabels tickmarksBetweenLabels}.
         * 
         * Put a label on every N-th tickmark.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setTickmarksBetweenLabels(iTickmarksBetweenLabels: number): this;

    }

}
