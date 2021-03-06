declare module "sap/ui/core/Icon" {

    /**
    
    */
    export default class Icon extends sap.ui.core.Control {


        /**
            * Constructor for a new Icon.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.core.Icon`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.Icon` itself.
         * 
         * This event is fired when icon is pressed/activated by the user. When a handler is attached to this event, the Icon gets tab stop. If you want to disable this behavior, set the noTabStop property to true.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.core.Icon`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.Icon` itself.
         * 
         * This event is fired when icon is pressed/activated by the user. When a handler is attached to this event, the Icon gets tab stop. If you want to disable this behavior, set the noTabStop property to true.
        */
        attachPress<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.core.Icon`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.ui.core.Icon with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: any): this;

        /**
            
        */
        protected getAccessibilityInfo(): any;

        /**
            * Gets current value of property {@link #getActiveBackgroundColor activeBackgroundColor}.
         * 
         * Background color for Icon in active state.
        */
        public getActiveBackgroundColor(): string;

        /**
            * Gets current value of property {@link #getActiveColor activeColor}.
         * 
         * This color is shown when icon is pressed/activated by the user.
        */
        public getActiveColor(): string;

        /**
            * Gets current value of property {@link #getAlt alt}.
         * 
         * This defines the alternative text which is used for outputting the aria-label attribute on the DOM.
        */
        public getAlt(): string;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): any[];

        /**
            * Gets current value of property {@link #getBackgroundColor backgroundColor}.
         * 
         * Background color of the Icon in normal state.
        */
        public getBackgroundColor(): string;

        /**
            * Gets current value of property {@link #getColor color}.
         * 
         * The color of the Icon. If color is not defined here, the Icon inherits the color from its DOM parent.
        */
        public getColor(): string;

        /**
            * Gets current value of property {@link #getDecorative decorative}.
         * 
         * A decorative icon is included for design reasons. Accessibility tools will ignore decorative icons. Tab stop isn't affected by this property anymore and it's now controlled by the existence of press event handler and the noTabStop property.
         * 
         * Default value is `true`.
        */
        public getDecorative(): boolean;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * This is the height of the DOM element which contains the Icon. Setting this property doesn't affect the size of the font. If you want to make the font bigger, increase the size property.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getHoverBackgroundColor hoverBackgroundColor}.
         * 
         * Background color for Icon in hover state. This property has no visual effect when run on mobile device.
        */
        public getHoverBackgroundColor(): string;

        /**
            * Gets current value of property {@link #getHoverColor hoverColor}.
         * 
         * This color is shown when icon is hovered. This property has no visual effect when run on mobile device.
        */
        public getHoverColor(): string;

        /**
            * Returns a metadata object for class sap.ui.core.Icon.
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
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Gets current value of property {@link #getNoTabStop noTabStop}.
         * 
         * Defines whether the tab stop of icon is controlled by the existence of press event handler. When it's set to false, Icon control has tab stop when press event handler is attached. If it's set to true, Icon control never has tab stop no matter whether press event handler exists or not.
         * 
         * Default value is `false`.
        */
        public getNoTabStop(): boolean;

        /**
            * Gets current value of property {@link #getSize size}.
         * 
         * Since Icon uses font, this property will be applied to the css font-size property on the rendered DOM element.
        */
        public getSize(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getSrc src}.
         * 
         * This property should be set by the return value of calling sap.ui.core.IconPool.getIconURI with an Icon name parameter and an optional collection parameter which is required when using application extended Icons. A list of standard FontIcon is available here.
        */
        public getSrc(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getUseIconTooltip useIconTooltip}.
         * 
         * Decides whether a default Icon tooltip should be used if no tooltip is set.
         * 
         * Default value is `true`.
        */
        public getUseIconTooltip(): boolean;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * This is the width of the DOM element which contains the Icon. Setting this property doesn't affect the size of the font. If you want to make the font bigger, increase the size property.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): any[];

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;

        /**
            * Sets a new value for property {@link #getActiveBackgroundColor activeBackgroundColor}.
         * 
         * Background color for Icon in active state.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setActiveBackgroundColor(sActiveBackgroundColor: string): this;

        /**
            * Sets a new value for property {@link #getActiveColor activeColor}.
         * 
         * This color is shown when icon is pressed/activated by the user.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setActiveColor(sActiveColor: string): this;

        /**
            * Sets a new value for property {@link #getAlt alt}.
         * 
         * This defines the alternative text which is used for outputting the aria-label attribute on the DOM.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAlt(sAlt: string): this;

        /**
            * Sets a new value for property {@link #getBackgroundColor backgroundColor}.
         * 
         * Background color of the Icon in normal state.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setBackgroundColor(sBackgroundColor: string): this;

        /**
            * Sets a new value for property {@link #getColor color}.
         * 
         * The color of the Icon. If color is not defined here, the Icon inherits the color from its DOM parent.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setColor(sColor: string): this;

        /**
            * Sets a new value for property {@link #getDecorative decorative}.
         * 
         * A decorative icon is included for design reasons. Accessibility tools will ignore decorative icons. Tab stop isn't affected by this property anymore and it's now controlled by the existence of press event handler and the noTabStop property.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setDecorative(bDecorative: boolean): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * This is the height of the DOM element which contains the Icon. Setting this property doesn't affect the size of the font. If you want to make the font bigger, increase the size property.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getHoverBackgroundColor hoverBackgroundColor}.
         * 
         * Background color for Icon in hover state. This property has no visual effect when run on mobile device.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHoverBackgroundColor(sHoverBackgroundColor: string): this;

        /**
            * Sets a new value for property {@link #getHoverColor hoverColor}.
         * 
         * This color is shown when icon is hovered. This property has no visual effect when run on mobile device.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHoverColor(sHoverColor: string): this;

        /**
            * Sets a new value for property {@link #getNoTabStop noTabStop}.
         * 
         * Defines whether the tab stop of icon is controlled by the existence of press event handler. When it's set to false, Icon control has tab stop when press event handler is attached. If it's set to true, Icon control never has tab stop no matter whether press event handler exists or not.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setNoTabStop(bNoTabStop: boolean): this;

        /**
            * Sets a new value for property {@link #getSize size}.
         * 
         * Since Icon uses font, this property will be applied to the css font-size property on the rendered DOM element.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSize(sSize: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getSrc src}.
         * 
         * This property should be set by the return value of calling sap.ui.core.IconPool.getIconURI with an Icon name parameter and an optional collection parameter which is required when using application extended Icons. A list of standard FontIcon is available here.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSrc(sSrc: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getUseIconTooltip useIconTooltip}.
         * 
         * Decides whether a default Icon tooltip should be used if no tooltip is set.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setUseIconTooltip(bUseIconTooltip: boolean): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * This is the width of the DOM element which contains the Icon. Setting this property doesn't affect the size of the font. If you want to make the font bigger, increase the size property.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }

}
