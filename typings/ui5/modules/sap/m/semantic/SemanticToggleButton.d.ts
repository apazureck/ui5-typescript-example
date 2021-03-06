declare module "sap/m/semantic/SemanticToggleButton" {
    import SemanticButton from "sap/m/semantic/SemanticButton";

    /**
    
    */
    export default abstract class SemanticToggleButton extends SemanticButton {


        /**
            * Constructor for a new SemanticToggleButton.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.m.semantic.SemanticToggleButton with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.semantic.SemanticButton.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.m.semantic.SemanticToggleButton.
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
            * Gets current value of property {@link #getPressed pressed}.
         * 
         * The property is “true” when the control is toggled. The default state of this property is "false".
         * 
         * Default value is `false`.
        */
        public getPressed(): boolean;

        /**
            * Sets a new value for property {@link #getPressed pressed}.
         * 
         * The property is “true” when the control is toggled. The default state of this property is "false".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setPressed(bPressed: boolean): this;

    }

}
