declare module "sap/m/BusyIndicator" {

    export = BusyIndicator;




    /**
    
    */
    class BusyIndicator extends sap.ui.core.Control {

        /**
            * Constructor for a new BusyIndicator.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): this;

        /**
            * Creates a new subclass of class sap.m.BusyIndicator with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): any[];

        /**
            * Gets current value of property {@link #getCustomIcon customIcon}.
         * 
         * Icon URL if an icon is used as the busy indicator.
         * 
         * Default value is ``.
        */
        public getCustomIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getCustomIconDensityAware customIconDensityAware}.
         * 
         * If this is set to false, the src image will be loaded directly without attempting to fetch the density perfect image for high density device. By default, this is set to true but then one or more requests are sent to the server, trying to get the density perfect version of the specified image. If bandwidth is the key for the application, set this value to false.
         * 
         * Default value is `true`.
        */
        public getCustomIconDensityAware(): boolean;

        /**
            * Gets current value of property {@link #getCustomIconHeight customIconHeight}.
         * 
         * Height of the provided icon. By default 44px are used.
         * 
         * Default value is `44px`.
        */
        public getCustomIconHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getCustomIconRotationSpeed customIconRotationSpeed}.
         * 
         * Defines the rotation speed of the given image. If a .gif is used, the speed has to be set to 0. The unit is in ms. ** Note: ** Values are considered valid when greater than or equal to 0. If invalid value is provided the speed defaults to 0.
         * 
         * Default value is `1000`.
        */
        public getCustomIconRotationSpeed(): number;

        /**
            * Gets current value of property {@link #getCustomIconWidth customIconWidth}.
         * 
         * Width of the provided icon. By default 44px are used.
         * 
         * Default value is `44px`.
        */
        public getCustomIconWidth(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getDesign design}.
         * 
         * Setting this property will not have any effect on the appearance of the BusyIndicator in versions greater than or equal to 1.32.1
         * 
         * Default value is `auto`.
        */
        public getDesign(): string;

        /**
            * Returns a metadata object for class sap.m.BusyIndicator.
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
            * Gets current value of property {@link #getSize size}.
         * 
         * Defines the size of the busy indicator. The animation consists of three circles, each of which will be this size. Therefore the total width of the control amounts to three times the given size.
         * 
         * Default value is `1rem`.
        */
        public getSize(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Defines text to be displayed below the busy indicator. It can be used to inform the user of the current operation.
         * 
         * Default value is ``.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getTextDirection textDirection}.
         * 
         * Options for the text direction are RTL and LTR. Alternatively, the control can inherit the text direction from its parent container.
         * 
         * Default value is `Inherit`.
        */
        public getTextDirection(): sap.ui.core.TextDirection;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): any[];

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;

        /**
            * Sets a new value for property {@link #getCustomIcon customIcon}.
         * 
         * Icon URL if an icon is used as the busy indicator.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setCustomIcon(sCustomIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getCustomIconDensityAware customIconDensityAware}.
         * 
         * If this is set to false, the src image will be loaded directly without attempting to fetch the density perfect image for high density device. By default, this is set to true but then one or more requests are sent to the server, trying to get the density perfect version of the specified image. If bandwidth is the key for the application, set this value to false.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setCustomIconDensityAware(bCustomIconDensityAware: boolean): this;

        /**
            * Sets a new value for property {@link #getCustomIconHeight customIconHeight}.
         * 
         * Height of the provided icon. By default 44px are used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `44px`.
        */
        public setCustomIconHeight(sCustomIconHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getCustomIconRotationSpeed customIconRotationSpeed}.
         * 
         * Defines the rotation speed of the given image. If a .gif is used, the speed has to be set to 0. The unit is in ms. ** Note: ** Values are considered valid when greater than or equal to 0. If invalid value is provided the speed defaults to 0.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1000`.
        */
        public setCustomIconRotationSpeed(iCustomIconRotationSpeed: number): this;

        /**
            * Sets a new value for property {@link #getCustomIconWidth customIconWidth}.
         * 
         * Width of the provided icon. By default 44px are used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `44px`.
        */
        public setCustomIconWidth(sCustomIconWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getDesign design}.
         * 
         * Setting this property will not have any effect on the appearance of the BusyIndicator in versions greater than or equal to 1.32.1
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `auto`.
        */
        public setDesign(sDesign: string): this;

        /**
            * Sets a new value for property {@link #getSize size}.
         * 
         * Defines the size of the busy indicator. The animation consists of three circles, each of which will be this size. Therefore the total width of the control amounts to three times the given size.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1rem`.
        */
        public setSize(sSize: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Defines text to be displayed below the busy indicator. It can be used to inform the user of the current operation.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getTextDirection textDirection}.
         * 
         * Options for the text direction are RTL and LTR. Alternatively, the control can inherit the text direction from its parent container.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTextDirection(sTextDirection: sap.ui.core.TextDirection): this;

    }


}
