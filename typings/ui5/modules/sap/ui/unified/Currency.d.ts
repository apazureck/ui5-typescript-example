declare module "sap/ui/unified/Currency" {

    /**
    
    */
    export default class Currency extends sap.ui.core.Control {


        /**
            * Constructor for a new `Currency`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.unified.Currency with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            
        */
        protected getAccessibilityInfo(): any;

        /**
            * Gets current value of property {@link #getCurrency currency}.
         * 
         * Determines the displayed currency code (ISO 4217).
         * 
         * ** Note: ** If a * character is set instead of currency code, only the character itself will be rendered, ignoring the `value` property.
        */
        public getCurrency(): string;

        /**
            * Get symbol of the currency, if available.
        */
        public getCurrencySymbol(): string;

        /**
            * The formatted value.
        */
        public getFormattedValue(): string;

        /**
            * Gets current value of property {@link #getMaxPrecision maxPrecision}.
         * 
         * Defines the space that is available for the precision of the various currencies.
         * 
         * Default value is `3`.
        */
        public getMaxPrecision(): number;

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
            * Returns a metadata object for class sap.ui.unified.Currency.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Gets current value of property {@link #getUseSymbol useSymbol}.
         * 
         * Displays the currency symbol instead of the ISO currency code.
         * 
         * Default value is `true`.
        */
        public getUseSymbol(): boolean;

        /**
            * Gets current value of property {@link #getValue value}.
         * 
         * Determines the currency value.
         * 
         * Default value is `0`.
        */
        public getValue(): number;

        /**
            * Initializes the element instance after creation.
         * 
         * Applications must not call this hook method directly, it is called by the framework while the constructor of an element is executed.
         * 
         * Subclasses of Element should override this hook to implement any necessary initialization.
        */
        protected init(): any;

        /**
            * Initializes the control.
        */
        protected init(): any;

        /**
            * Sets a new value for property {@link #getCurrency currency}.
         * 
         * Determines the displayed currency code (ISO 4217).
         * 
         * ** Note: ** If a * character is set instead of currency code, only the character itself will be rendered, ignoring the `value` property.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setCurrency(sCurrency: string): this;

        /**
            * Sets a new value for property {@link #getMaxPrecision maxPrecision}.
         * 
         * Defines the space that is available for the precision of the various currencies.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `3`.
        */
        public setMaxPrecision(iMaxPrecision: number): this;

        /**
            * Sets a new value for property {@link #getUseSymbol useSymbol}.
         * 
         * Displays the currency symbol instead of the ISO currency code.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setUseSymbol(bUseSymbol: boolean): this;

        /**
            * Sets a new value for property {@link #getValue value}.
         * 
         * Determines the currency value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setValue(fValue: number): this;

    }

}
