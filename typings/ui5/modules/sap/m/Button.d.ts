declare module "sap/m/Button" {
    import { ButtonType } from "sap/m/library";

    /**
    
    */
    export default class Button extends sap.ui.core.Control {


        /**
            * Constructor for a new `Button`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.Button`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Button` itself.
         * 
         * Fired when the user clicks or taps on the control.
        */
        attachPress<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.Button`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Button` itself.
         * 
         * Fired when the user clicks or taps on the control.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:tap tap} event of this `sap.m.Button`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Button` itself.
         * 
         * Fired when the user taps the control.
        */
        attachTap<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:tap tap} event of this `sap.m.Button`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Button` itself.
         * 
         * Fired when the user taps the control.
        */
        attachTap<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.m.Button`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:tap tap} event of this `sap.m.Button`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachTap(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.m.Button with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: any): this;

        /**
            * Fires event {@link #event:tap tap} to attached listeners.
        */
        protected fireTap(mParameters?: any): this;

        /**
            
        */
        protected getAccessibilityInfo(): any;

        /**
            * Gets current value of property {@link #getActiveIcon activeIcon}.
         * 
         * The source property of an alternative icon for the active (depressed) state of the button. Both active and default icon properties should be defined and have the same type: image or icon font. If the `icon` property is not set or has a different type, the active icon is not displayed.
        */
        public getActiveIcon(): sap.ui.core.URI;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): any[];

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): any[];

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Determines whether the `Button` is enabled (default is set to `true`). A disabled `Button` has different colors depending on the {@link sap.m.ButtonType ButtonType}.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Defines the icon to be displayed as graphical element within the `Button`. It can be an image or an icon from the icon font.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconDensityAware iconDensityAware}.
         * 
         * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
         * 
         * If only one version of image is provided, set this value to false to avoid the attempt of fetching density perfect image.
         * 
         * Default value is `true`.
        */
        public getIconDensityAware(): boolean;

        /**
            * Gets current value of property {@link #getIconFirst iconFirst}.
         * 
         * Determines whether the icon is displayed before the text.
         * 
         * Default value is `true`.
        */
        public getIconFirst(): boolean;

        /**
            * Returns a metadata object for class sap.m.Button.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

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
            * Defines to which DOM reference the Popup should be docked
        */
        protected getPopupAnchorDomRef(): any;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Determines the text of the `Button`.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getTextDirection textDirection}.
         * 
         * This property specifies the element's text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * Default value is `Inherit`.
        */
        public getTextDirection(): sap.ui.core.TextDirection;

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * Defines the `Button` type.
         * 
         * Default value is `Default`.
        */
        public getType(): ButtonType;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Defines the `Button` width.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAllAriaDescribedBy(): any[];

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): any[];

        /**
            * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;

        /**
            * Sets a new value for property {@link #getActiveIcon activeIcon}.
         * 
         * The source property of an alternative icon for the active (depressed) state of the button. Both active and default icon properties should be defined and have the same type: image or icon font. If the `icon` property is not set or has a different type, the active icon is not displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setActiveIcon(sActiveIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Determines whether the `Button` is enabled (default is set to `true`). A disabled `Button` has different colors depending on the {@link sap.m.ButtonType ButtonType}.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Property setter for the icon
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconDensityAware iconDensityAware}.
         * 
         * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
         * 
         * If only one version of image is provided, set this value to false to avoid the attempt of fetching density perfect image.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setIconDensityAware(bIconDensityAware: boolean): this;

        /**
            * Sets a new value for property {@link #getIconFirst iconFirst}.
         * 
         * Determines whether the icon is displayed before the text.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setIconFirst(bIconFirst: boolean): this;

        /**
            * Property setter for the text
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getTextDirection textDirection}.
         * 
         * This property specifies the element's text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTextDirection(sTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * Defines the `Button` type.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Default`.
        */
        public setType(sType: ButtonType): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Defines the `Button` width.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }

}
