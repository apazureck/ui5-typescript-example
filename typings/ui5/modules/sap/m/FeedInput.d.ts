declare module "sap/m/FeedInput" {

    /**
    
    */
    export default class FeedInput extends sap.ui.core.Control {


        /**
            * Constructor for a new FeedInput.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:post post} event of this `sap.m.FeedInput`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.FeedInput` itself.
         * 
         * The Post event is triggered when the user has entered a value and pressed the post button. After firing this event, the value is reset.
        */
        attachPost<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The value of the feed input before reseting it. */
            value: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:post post} event of this `sap.m.FeedInput`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.FeedInput` itself.
         * 
         * The Post event is triggered when the user has entered a value and pressed the post button. After firing this event, the value is reset.
        */
        attachPost<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The value of the feed input before reseting it. */
            value: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:post post} event of this `sap.m.FeedInput`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPost(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.m.FeedInput with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:post post} to attached listeners.
        */
        protected firePost(mParameters?: { value?: string, }): this;

        /**
            * Gets current value of property {@link #getAriaLabelForPicture ariaLabelForPicture}.
         * 
         * Text for Picture which will be read by screenreader. If a new ariaLabelForPicture is set, any previously set ariaLabelForPicture is deactivated.
        */
        public getAriaLabelForPicture(): string;

        /**
            * Gets current value of property {@link #getButtonTooltip buttonTooltip}.
         * 
         * Sets a new tooltip for Submit button. The tooltip can either be a simple string (which in most cases will be rendered as the title attribute of this element) or an instance of sap.ui.core.TooltipBase. If a new tooltip is set, any previously set tooltip is deactivated. The default value is set language dependent.
         * 
         * Default value is `Submit`.
        */
        public getButtonTooltip(): sap.ui.core.TooltipBase;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Set this flag to "false" to disable both text input and post button.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Icon to be displayed as a graphical element within the feed input. This can be an image or an icon from the icon font.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconDensityAware iconDensityAware}.
         * 
         * Some mobile devices support higher resolution images while others do not. Therefore, you should provide image resources for all relevant densities. If the property is set to "true", one or more requests are sent to the server to try and get the perfect density version of an image. If an image of a certain density is not available, the image control falls back to the default image, which should be provided.
         * 
         * If you do not have higher resolution images, you should set the property to "false" to avoid unnecessary round-trips.
         * 
         * Please be aware that this property is relevant only for images and not for icons.
         * 
         * Default value is `true`.
        */
        public getIconDensityAware(): boolean;

        /**
            * Gets current value of property {@link #getMaxLength maxLength}.
         * 
         * The maximum length (the maximum number of characters) for the feed input's value. By default this is not limited.
         * 
         * Default value is `0`.
        */
        public getMaxLength(): number;

        /**
            * Returns a metadata object for class sap.m.FeedInput.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

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
            * Gets current value of property {@link #getPlaceholder placeholder}.
         * 
         * The placeholder text shown in the input area as long as the user has not entered any text value.
         * 
         * Default value is `Post something here`.
        */
        public getPlaceholder(): string;

        /**
            * Gets current value of property {@link #getShowIcon showIcon}.
         * 
         * If set to "true" (default), icons will be displayed. In case no icon is provided the standard placeholder will be displayed. if set to "false" icons are hidden
         * 
         * Default value is `true`.
        */
        public getShowIcon(): boolean;

        /**
            * Gets current value of property {@link #getValue value}.
         * 
         * The text value of the feed input. As long as the user has not entered any text the post button is disabled
        */
        public getValue(): string;

        /**
            * Sets a new value for property {@link #getAriaLabelForPicture ariaLabelForPicture}.
         * 
         * Text for Picture which will be read by screenreader. If a new ariaLabelForPicture is set, any previously set ariaLabelForPicture is deactivated.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAriaLabelForPicture(sAriaLabelForPicture: string): this;

        /**
            * Sets a new value for property {@link #getButtonTooltip buttonTooltip}.
         * 
         * Sets a new tooltip for Submit button. The tooltip can either be a simple string (which in most cases will be rendered as the title attribute of this element) or an instance of sap.ui.core.TooltipBase. If a new tooltip is set, any previously set tooltip is deactivated. The default value is set language dependent.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Submit`.
        */
        public setButtonTooltip(sButtonTooltip: sap.ui.core.TooltipBase): this;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Set this flag to "false" to disable both text input and post button.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Icon to be displayed as a graphical element within the feed input. This can be an image or an icon from the icon font.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconDensityAware iconDensityAware}.
         * 
         * Some mobile devices support higher resolution images while others do not. Therefore, you should provide image resources for all relevant densities. If the property is set to "true", one or more requests are sent to the server to try and get the perfect density version of an image. If an image of a certain density is not available, the image control falls back to the default image, which should be provided.
         * 
         * If you do not have higher resolution images, you should set the property to "false" to avoid unnecessary round-trips.
         * 
         * Please be aware that this property is relevant only for images and not for icons.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setIconDensityAware(bIconDensityAware: boolean): this;

        /**
            * Sets a new value for property {@link #getMaxLength maxLength}.
         * 
         * The maximum length (the maximum number of characters) for the feed input's value. By default this is not limited.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setMaxLength(iMaxLength: number): this;

        /**
            * Sets a new value for property {@link #getPlaceholder placeholder}.
         * 
         * The placeholder text shown in the input area as long as the user has not entered any text value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Post something here`.
        */
        public setPlaceholder(sPlaceholder: string): this;

        /**
            * Sets a new value for property {@link #getShowIcon showIcon}.
         * 
         * If set to "true" (default), icons will be displayed. In case no icon is provided the standard placeholder will be displayed. if set to "false" icons are hidden
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowIcon(bShowIcon: boolean): this;

        /**
            * Sets a new value for property {@link #getValue value}.
         * 
         * The text value of the feed input. As long as the user has not entered any text the post button is disabled
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValue(sValue: string): this;

    }

}
