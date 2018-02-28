declare module 'sap/m/RatingIndicator' {
    import Event from "sap/ui/base/Event";
    import Metadata from "sap/ui/base/Metadata";
    import { RatingIndicatorVisualMode } from "sap/m/library";
    import Control, { IControlSettings } from 'sap/ui/core/Control';

    export interface IRatingIndicatorSettings extends IControlSettings {
        enabled?: boolean;
        maxValue?: number;
        value?: number;
        iconSize?: sap.ui.core.CSSSize;
        iconSelected?: sap.ui.core.URI;
        iconUnselected?: sap.ui.core.URI;
        iconHovered?: sap.ui.core.URI;
        visualMode?: RatingIndicatorVisualMode;
        displayOnly?: boolean;
        editable?: boolean;
    }

    /**
    
    */
    export default class RatingIndicator extends Control {

        /**
            * Constructor for a new RatingIndicator.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: IRatingIndicatorSettings);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.m.RatingIndicator`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.RatingIndicator` itself.
         * 
         * The event is fired when the user has done a rating.
        */
        attachChange<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The rated value */
            value: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.m.RatingIndicator`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.RatingIndicator` itself.
         * 
         * The event is fired when the user has done a rating.
        */
        attachChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The rated value */
            value: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.m.RatingIndicator`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.RatingIndicator` itself.
         * 
         * This event is triggered during the dragging period, each time the rating value changes.
        */
        attachLiveChange<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The current value of the rating after a live change event. */
            value: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.m.RatingIndicator`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.RatingIndicator` itself.
         * 
         * This event is triggered during the dragging period, each time the rating value changes.
        */
        attachLiveChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The current value of the rating after a live change event. */
            value: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Binds property {@link #getValue value} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description of the possible properties of `oBindingInfo`
        */
        public bindValue(oBindingInfo: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.m.RatingIndicator`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachChange(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:liveChange liveChange} event of this `sap.m.RatingIndicator`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachLiveChange(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.m.RatingIndicator with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { value?: number, }): this;

        /**
            * Fires event {@link #event:liveChange liveChange} to attached listeners.
        */
        protected fireLiveChange(mParameters?: { value?: number, }): this;

        /**
            
        */
        protected getAccessibilityInfo(): any;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): any[];

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): any[];

        /**
            * Gets current value of property {@link #getDisplayOnly displayOnly}.
         * 
         * The RatingIndicator in displayOnly mode is not interactive, not editable, not focusable, and not in the tab chain. This setting is used for forms in review mode.
         * 
         * Default value is `false`.
        */
        public getDisplayOnly(): boolean;

        /**
            * Gets current value of property {@link #getEditable editable}.
         * 
         * Defines whether the user is allowed to edit the RatingIndicator. If editable is false the control is focusable, and in the tab chain but not interactive.
         * 
         * Default value is `true`.
        */
        public getEditable(): boolean;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Value "true" is required to let the user rate with this control. It is recommended to set this parameter to "false" for the "Small" size which is meant for indicating a value only
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets current value of property {@link #getIconHovered iconHovered}.
         * 
         * The URI to the icon font icon or image that will be displayed for hovered rating symbols. A star icon will be used if the property is not set
        */
        public getIconHovered(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconSelected iconSelected}.
         * 
         * The URI to the icon font icon or image that will be displayed for selected rating symbols. A star icon will be used if the property is not set
        */
        public getIconSelected(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconSize iconSize}.
         * 
         * The Size of the image or icon to be displayed. The default value depends on the theme. Please be sure that the size is corresponding to a full pixel value as some browsers don't support subpixel calculations. Recommended size is 1.375rem (22px) for normal, 1rem (16px) for small, and 2rem (32px) for large icons correspondingly.
        */
        public getIconSize(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getIconUnselected iconUnselected}.
         * 
         * The URI to the icon font icon or image that will be displayed for all unselected rating symbols. A star icon will be used if the property is not set
        */
        public getIconUnselected(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getMaxValue maxValue}.
         * 
         * The number of displayed rating symbols
         * 
         * Default value is `5`.
        */
        public getMaxValue(): number;

        /**
            * Returns a metadata object for class sap.m.RatingIndicator.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

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
            * Gets current value of property {@link #getValue value}.
         * 
         * The indicated value of the rating
         * 
         * Default value is `0`.
        */
        public getValue(): number;

        /**
            * Gets current value of property {@link #getVisualMode visualMode}.
         * 
         * Defines how float values are visualized: Full, Half (see enumeration RatingIndicatorVisualMode)
         * 
         * Default value is `Half`.
        */
        public getVisualMode(): RatingIndicatorVisualMode;

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
        public removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Sets a new value for property {@link #getDisplayOnly displayOnly}.
         * 
         * The RatingIndicator in displayOnly mode is not interactive, not editable, not focusable, and not in the tab chain. This setting is used for forms in review mode.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setDisplayOnly(bDisplayOnly: boolean): this;

        /**
            * Sets a new value for property {@link #getEditable editable}.
         * 
         * Defines whether the user is allowed to edit the RatingIndicator. If editable is false the control is focusable, and in the tab chain but not interactive.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEditable(bEditable: boolean): this;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Value "true" is required to let the user rate with this control. It is recommended to set this parameter to "false" for the "Small" size which is meant for indicating a value only
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getIconHovered iconHovered}.
         * 
         * The URI to the icon font icon or image that will be displayed for hovered rating symbols. A star icon will be used if the property is not set
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIconHovered(sIconHovered: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconSelected iconSelected}.
         * 
         * The URI to the icon font icon or image that will be displayed for selected rating symbols. A star icon will be used if the property is not set
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIconSelected(sIconSelected: sap.ui.core.URI): this;

        /**
            * Sets the icon size value. The method automatically updates the UI components if the control has been rendered before.
        */
        public setIconSize(sIconSize: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getIconUnselected iconUnselected}.
         * 
         * The URI to the icon font icon or image that will be displayed for all unselected rating symbols. A star icon will be used if the property is not set
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIconUnselected(sIconUnselected: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getMaxValue maxValue}.
         * 
         * The number of displayed rating symbols
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `5`.
        */
        public setMaxValue(iMaxValue: number): this;

        /**
            * Sets the rating value. The method is automatically checking whether the value is in the valid range of 0-{@link #getMaxValue maxValue} and if it is a valid number. Calling the setter with null or undefined will reset the value to it's default.
        */
        public setValue(fValue: number): this;

        /**
            * Sets a new value for property {@link #getVisualMode visualMode}.
         * 
         * Defines how float values are visualized: Full, Half (see enumeration RatingIndicatorVisualMode)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Half`.
        */
        public setVisualMode(sVisualMode: RatingIndicatorVisualMode): this;

        /**
            * Unbinds property {@link #getValue value} from model data.
        */
        public unbindValue(): this;

    }
}