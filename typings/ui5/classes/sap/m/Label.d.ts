declare module 'sap/m/Label' {
    import { LabelDesign } from "sap/m/library";
    import Metadata from "sap/ui/base/Metadata";
    import { TextAlign } from "sap/ui/core/library";
    import { TextDirection } from "sap/ui/core/library";
    import Control, { IControlSettings } from 'sap/ui/core/Control';

    export interface ILabelSettings extends IControlSettings {
        design?: LabelDesign;
        text?: string;
        textAlign?: TextAlign;
        textDirection?: TextDirection;
        width?: sap.ui.core.CSSSize;
        required?: boolean;
        displayOnly?: boolean;
        wrapping?: boolean;
    }

    /**
    
    */
    export default class Label extends Control {

        /**
            * Constructor for a new Label.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: ILabelSettings);


        /**
            * Creates a new subclass of class sap.m.Label with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            
        */
        protected getAccessibilityInfo(): any;

        /**
            * Gets current value of property {@link #getDesign design}.
         * 
         * Sets the design of a Label to either Standard or Bold.
         * 
         * Default value is `Standard`.
        */
        public getDesign(): LabelDesign;

        /**
            * Gets current value of property {@link #getDisplayOnly displayOnly}.
         * 
         * Determines if the label is in displayOnly mode. Controls in this mode are neither interactive, nor editable, nor focusable, and not in the tab chain.
         * 
         * ** Note: ** This property should be used only in Form controls in preview mode.
         * 
         * Default value is `false`.
        */
        public getDisplayOnly(): boolean;

        /**
            * ID of the element which is the current target of the association {@link #getLabelFor labelFor}, or `null`.
        */
        public getLabelFor(): sap.ui.core.ID;

        /**
            * Returns a metadata object for class sap.m.Label.
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
            * Gets current value of property {@link #getRequired required}.
         * 
         * Indicates that user input is required for input control labeled by the sap.m.Label. When the property is set to true and associated input field is empty an asterisk character is added to the label text.
         * 
         * Default value is `false`.
        */
        public getRequired(): boolean;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Determines the Label text to be displayed.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getTextAlign textAlign}.
         * 
         * Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
         * 
         * Default value is `Begin`.
        */
        public getTextAlign(): TextAlign;

        /**
            * Gets current value of property {@link #getTextDirection textDirection}.
         * 
         * Options for the text direction are RTL and LTR. Alternatively, the control can inherit the text direction from its parent container.
         * 
         * Default value is `Inherit`.
        */
        public getTextDirection(): TextDirection;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Determines the width of the label.
         * 
         * Default value is ``.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getWrapping wrapping}.
         * 
         * Determines the wrapping of the text within the `Label`. If set to true the `Label` will wrap, when set to false the `Label` will be truncated and replaced with ellipsis which is the default behavior.
         * 
         * Default value is `false`.
        */
        public getWrapping(): boolean;

        /**
            * Sets a new value for property {@link #getDesign design}.
         * 
         * Sets the design of a Label to either Standard or Bold.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Standard`.
        */
        public setDesign(sDesign: LabelDesign): this;

        /**
            * Sets a new value for property {@link #getDisplayOnly displayOnly}.
         * 
         * Determines if the label is in displayOnly mode. Controls in this mode are neither interactive, nor editable, nor focusable, and not in the tab chain.
         * 
         * ** Note: ** This property should be used only in Form controls in preview mode.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setDisplayOnly(bDisplayOnly: boolean): this;

        /**
            * Sets the associated {@link #getLabelFor labelFor}.
        */
        public setLabelFor(oLabelFor: sap.ui.core.ID | Control): this;

        /**
            * Sets a new value for property {@link #getRequired required}.
         * 
         * Indicates that user input is required for input control labeled by the sap.m.Label. When the property is set to true and associated input field is empty an asterisk character is added to the label text.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setRequired(bRequired: boolean): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Determines the Label text to be displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getTextAlign textAlign}.
         * 
         * Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Begin`.
        */
        public setTextAlign(sTextAlign: TextAlign): this;

        /**
            * Sets a new value for property {@link #getTextDirection textDirection}.
         * 
         * Options for the text direction are RTL and LTR. Alternatively, the control can inherit the text direction from its parent container.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTextDirection(sTextDirection: TextDirection): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Determines the width of the label.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getWrapping wrapping}.
         * 
         * Determines the wrapping of the text within the `Label`. If set to true the `Label` will wrap, when set to false the `Label` will be truncated and replaced with ellipsis which is the default behavior.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setWrapping(bWrapping: boolean): this;

    }
}