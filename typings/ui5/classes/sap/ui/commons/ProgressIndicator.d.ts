declare module 'sap/ui/commons/ProgressIndicator' {
    import { BarColor } from "sap/ui/core/library";
    import Metadata from "sap/ui/base/Metadata";
    import Control, { IControlSettings } from 'sap/ui/core/Control';

    export interface IProgressIndicatorSettings extends IControlSettings {
        enabled?: boolean;
        barColor?: BarColor;
        displayValue?: string;
        percentValue?: number;
        showValue?: boolean;
        width?: sap.ui.core.CSSSize;
    }

    /**
    
    */
    export default class ProgressIndicator extends Control {

        /**
            * Constructor for a new ProgressIndicator.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: IProgressIndicatorSettings);


        /**
            * Creates a new subclass of class sap.ui.commons.ProgressIndicator with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            
        */
        protected getAccessibilityInfo(): any;

        /**
            * Gets current value of property {@link #getBarColor barColor}.
         * 
         * Determines the color of the bar which visualizes the progress. Possible values defined in the sap.ui.core.BarColor enumeration are the following: CRITICAL (yellow), NEGATIVE (red), POSITIVE (green), NEUTRAL (blue) (default value).
         * 
         * Default value is `NEUTRAL`.
        */
        public getBarColor(): BarColor;

        /**
            * Gets current value of property {@link #getDisplayValue displayValue}.
         * 
         * Determines the text value that will be displayed in the bar.
         * 
         * Default value is `0%`.
        */
        public getDisplayValue(): string;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Determines whether the control is enabled or not. Disabled controls have different colors, and can not be focused.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Returns a metadata object for class sap.ui.commons.ProgressIndicator.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Gets current value of property {@link #getPercentValue percentValue}.
         * 
         * Determines the numerical value for the displayed length of the progress bar.
         * 
         * Default value is `0`.
        */
        public getPercentValue(): number;

        /**
            * Gets current value of property {@link #getShowValue showValue}.
         * 
         * Determines whether the percent value shall be rendered inside the bar.
         * 
         * Default value is `true`.
        */
        public getShowValue(): boolean;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Determines the width of the control.
         * 
         * Default value is `100%`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Sets a new value for property {@link #getBarColor barColor}.
         * 
         * Determines the color of the bar which visualizes the progress. Possible values defined in the sap.ui.core.BarColor enumeration are the following: CRITICAL (yellow), NEGATIVE (red), POSITIVE (green), NEUTRAL (blue) (default value).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `NEUTRAL`.
        */
        public setBarColor(sBarColor: BarColor): this;

        /**
            * Sets a new value for property {@link #getDisplayValue displayValue}.
         * 
         * Determines the text value that will be displayed in the bar.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0%`.
        */
        public setDisplayValue(sDisplayValue: string): this;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Determines whether the control is enabled or not. Disabled controls have different colors, and can not be focused.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets the new percent value which the ProgressIndicator should display. A new rendering is not necessary, only the bar has to be moved.
        */
        public setPercentValue(iPercentValue: number): this;

        /**
            * Sets a new value for property {@link #getShowValue showValue}.
         * 
         * Determines whether the percent value shall be rendered inside the bar.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowValue(bShowValue: boolean): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Determines the width of the control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}