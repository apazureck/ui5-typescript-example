declare module "sap/ui/test/matchers/I18NText" {
    import Matcher from "sap/ui/test/matchers/Matcher";

    /**
    
    */
    export default class I18NText extends Matcher {


        /**
            * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.test.matchers.I18NText with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.test.matchers.Matcher.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getKey key}.
         * 
         * The key of the I18N text in the containing {@link jQuery.sap.util.ResourceBundle}.
        */
        public getKey(): string;

        /**
            * Returns a metadata object for class sap.ui.test.matchers.I18NText.
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
            * Gets current value of property {@link #getModelName modelName}.
         * 
         * The name of the {@link sap.ui.model.resource.ResourceModel} assigned to the control.
         * 
         * Default value is `i18n`.
        */
        public getModelName(): string;

        /**
            * Gets current value of property {@link #getParameters parameters}.
         * 
         * The parameters for replacing the placeholders of the I18N text. See {@link jQuery.sap.util.ResourceBundle#getText}.
        */
        public getParameters(): any;

        /**
            * Gets current value of property {@link #getPropertyName propertyName}.
         * 
         * The name of the control property to match the I18N text with.
        */
        public getPropertyName(): string;

        /**
            * Checks if the control has a property that matches the I18N text
        */
        protected isMatching(oControl: sap.ui.core.Control): boolean;

        /**
            * Checks if the matcher is matching - will get an instance of sap.ui.core.Control as parameter.
         * 
         * Should be overwritten by subclasses
        */
        protected isMatching(oControl: sap.ui.core.Control): boolean;

        /**
            * Sets a new value for property {@link #getKey key}.
         * 
         * The key of the I18N text in the containing {@link jQuery.sap.util.ResourceBundle}.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setKey(sKey: string): this;

        /**
            * Sets a new value for property {@link #getModelName modelName}.
         * 
         * The name of the {@link sap.ui.model.resource.ResourceModel} assigned to the control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `i18n`.
        */
        public setModelName(sModelName: string): this;

        /**
            * Sets a new value for property {@link #getParameters parameters}.
         * 
         * The parameters for replacing the placeholders of the I18N text. See {@link jQuery.sap.util.ResourceBundle#getText}.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setParameters(oParameters: any): this;

        /**
            * Sets a new value for property {@link #getPropertyName propertyName}.
         * 
         * The name of the control property to match the I18N text with.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setPropertyName(sPropertyName: string): this;

    }

}
