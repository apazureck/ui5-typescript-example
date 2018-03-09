declare module "sap/ui/test/matchers/BindingPath" {
    import Matcher from "sap/ui/test/matchers/Matcher";

    /**
    
    */
    export default class BindingPath extends Matcher {


        /**
            * BindingPath - checks if a control has a binding context with the exact same binding path.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.test.matchers.BindingPath with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.test.matchers.Matcher.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.test.matchers.BindingPath.
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
            * Gets current value of property {@link #getModelName modelName}.
         * 
         * The name of the binding model that is used for matching.
        */
        public getModelName(): string;

        /**
            * Gets current value of property {@link #getPath path}.
         * 
         * The value of the binding path that is used for matching.
        */
        public getPath(): string;

        /**
            * Checks if the control has a binding context that matches the path
        */
        protected isMatching(oControl: sap.ui.core.Control): boolean;

        /**
            * Checks if the matcher is matching - will get an instance of sap.ui.core.Control as parameter.
         * 
         * Should be overwritten by subclasses
        */
        protected isMatching(oControl: sap.ui.core.Control): boolean;

        /**
            * Sets a new value for property {@link #getModelName modelName}.
         * 
         * The name of the binding model that is used for matching.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setModelName(sModelName: string): this;

        /**
            * Sets a new value for property {@link #getPath path}.
         * 
         * The value of the binding path that is used for matching.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setPath(sPath: string): this;

    }

}
