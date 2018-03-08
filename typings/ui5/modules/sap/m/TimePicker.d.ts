declare module "sap/m/TimePicker" {
    import DateTimeField from "sap/m/DateTimeField";
    import MaskInputRule from "sap/m/MaskInputRule";

    export = TimePicker;




    /**
    
    */
    class TimePicker extends DateTimeField {

        /**
            * Constructor for a new `TimePicker`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some rule to the aggregation {@link #getRules rules}.
        */
        public addRule(oRule: MaskInputRule): this;

        /**
            * Destroys all the rules in the aggregation {@link #getRules rules}.
        */
        public destroyRules(): this;

        /**
            * Creates a new subclass of class sap.m.TimePicker with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.DateTimeField.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires change event to attached listeners.
         * 
         * Expects following event parameters:  * value parameter of type `string` - the new value of the input * valid parameter of type `boolean` - indicator for a valid time 
        */
        protected fireChange(mArguments?: any): this;

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { value?: string, }): this;

        /**
            * Fires the change event for the listeners
        */
        protected fireChangeEvent(sValue: string, oParams?: any): any;

        /**
            
        */
        protected getAccessibilityInfo(): any;

        /**
            * Holds a reference to a JavaScript Date Object. The `value` (string) property will be set according to it. Alternatively, if the `value` and `valueFormat` pair properties are supplied instead, the `dateValue` will be instantiated according to the parsed `value`.
        */
        public getDateValue(): any;

        /**
            * Determines the format, displayed in the input field and the picker sliders.
         * 
         * The default value is the browser's medium time format locale setting {@link sap.ui.core.LocaleData#getTimePattern}. If data binding with type {@link sap.ui.model.type.Time} or {@link sap.ui.model.odata.type.Time} is used for the `value` property, the `displayFormat` property is ignored as the information is provided from the binding itself.
        */
        public getDisplayFormat(): string;

        /**
            * Gets current value of property {@link #getLocaleId localeId}.
         * 
         * Defines the locale used to parse string values representing time.
         * 
         * Determines the locale, used to interpret the string, supplied by the `value` property. Example: AM in the string "09:04 AM" is locale (language) dependent. The format comes from the browser language settings if not set explicitly. Used in combination with 12 hour `valueFormat` containing 'a', which stands for day period string. Default value is taken from browser's locale setting.
        */
        public getLocaleId(): string;

        /**
            * Gets current value of property {@link #getMask mask}.
         * 
         * Mask defined by its characters type (respectively, by its length). You should consider the following important facts: 1. The mask characters normally correspond to an existing rule (one rule per unique char). Characters which don't, are considered immutable characters (for example, the mask '2099', where '9' corresponds to a rule for digits, has the characters '2' and '0' as immutable). 2. Adding a rule corresponding to the `placeholderSymbol` is not recommended and would lead to an unpredictable behavior. 3. You can use the special escape character '^' called "Caret" prepending a rule character to make it immutable. Use the double escape '^^' if you want to make use of the escape character as an immutable one.
        */
        public getMask(): string;

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
            * Returns a metadata object for class sap.m.TimePicker.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

        /**
            * Gets current value of property {@link #getMinutesStep minutesStep}.
         * 
         * Sets the minutes slider step. The minutes slider is populated only by multiples of the step.
         * 
         * Default value is `1`.
        */
        public getMinutesStep(): number;

        /**
            * Gets current value of property {@link #getPlaceholderSymbol placeholderSymbol}.
         * 
         * Defines a placeholder symbol. Shown at the position where there is no user input yet.
         * 
         * Default value is `_`.
        */
        public getPlaceholderSymbol(): string;

        /**
            * Gets content of aggregation {@link #getRules rules}.
         * 
         * A list of validation rules (one rule per mask character).
        */
        public getRules(): any[];

        /**
            * Gets current value of property {@link #getSecondsStep secondsStep}.
         * 
         * Sets the seconds slider step. The seconds slider is populated only by multiples of the step.
         * 
         * Default value is `1`.
        */
        public getSecondsStep(): number;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Displays the text of the general picker label and is read by screen readers. It is visible only on phone.
        */
        public getTitle(): string;

        /**
            * Determines the format of the value property.
         * 
         * The default value is the browser's medium time format locale setting {@link sap.ui.core.LocaleData#getTimePattern}. If data binding with type {@link sap.ui.model.type.Time} or {@link sap.ui.model.odata.type.Time} is used for the `value` property, the `valueFormat` property is ignored as the information is provided from the binding itself.
        */
        public getValueFormat(): string;

        /**
            * Checks for the provided `sap.m.MaskInputRule` in the aggregation {@link #getRules rules}. and returns its index if found or -1 otherwise.
        */
        public indexOfRule(oRule: MaskInputRule): number;

        /**
            * Initializes the control.
        */
        protected init(): any;

        /**
            * Initializes the element instance after creation.
         * 
         * Applications must not call this hook method directly, it is called by the framework while the constructor of an element is executed.
         * 
         * Subclasses of Element should override this hook to implement any necessary initialization.
        */
        protected init(): any;

        /**
            * Inserts a rule into the aggregation {@link #getRules rules}.
        */
        public insertRule(oRule: MaskInputRule, iIndex: number): this;

        /**
            * Called after the picker closes.
        */
        public onAfterClose(): any;

        /**
            * Called after the picker appears.
        */
        public onAfterOpen(): any;

        /**
            * Called before the picker appears.
        */
        public onBeforeOpen(): any;

        /**
            * Removes all the controls from the aggregation {@link #getRules rules}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllRules(): any[];

        /**
            * Removes a rule from the aggregation {@link #getRules rules}.
        */
        public removeRule(vRule: number | string | MaskInputRule): MaskInputRule;

        /**
            * Sets the locale of the control.
         * 
         * Used for parsing and formatting the time values in languages different than English. Necessary for translation and auto-complete of the day periods, such as AM and PM.
        */
        public setLocaleId(sLocaleId: string): this;

        /**
            * Sets a new value for property {@link #getMask mask}.
         * 
         * Mask defined by its characters type (respectively, by its length). You should consider the following important facts: 1. The mask characters normally correspond to an existing rule (one rule per unique char). Characters which don't, are considered immutable characters (for example, the mask '2099', where '9' corresponds to a rule for digits, has the characters '2' and '0' as immutable). 2. Adding a rule corresponding to the `placeholderSymbol` is not recommended and would lead to an unpredictable behavior. 3. You can use the special escape character '^' called "Caret" prepending a rule character to make it immutable. Use the double escape '^^' if you want to make use of the escape character as an immutable one.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMask(sMask: string): this;

        /**
            * Sets the minutes slider step.
        */
        public setMinutesStep(step: number): any;

        /**
            * Sets a new value for property {@link #getPlaceholderSymbol placeholderSymbol}.
         * 
         * Defines a placeholder symbol. Shown at the position where there is no user input yet.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `_`.
        */
        public setPlaceholderSymbol(sPlaceholderSymbol: string): this;

        /**
            * Sets the seconds slider step.
        */
        public setSecondsStep(step: number): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Displays the text of the general picker label and is read by screen readers. It is visible only on phone.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new tooltip for this object. The tooltip can either be a simple string (which in most cases will be rendered as the `title` attribute of this Element) or an instance of {@link sap.ui.core.TooltipBase}.
         * 
         * If a new tooltip is set, any previously set tooltip is deactivated.
        */
        public setTooltip(vTooltip: string | sap.ui.core.TooltipBase): any;

        /**
            * Sets tooltip of the control.
        */
        public setTooltip(vTooltip: string | sap.ui.core.TooltipBase): this;

    }


}
