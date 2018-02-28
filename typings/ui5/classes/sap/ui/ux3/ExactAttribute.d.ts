declare module 'sap/ui/ux3/ExactAttribute' {
    import Event from "sap/ui/base/Event";
    import { ExactOrder } from "sap/ui/ux3/library";
    import Metadata from "sap/ui/base/Metadata";
    import TooltipBase from "sap/ui/core/TooltipBase";
    import Element, { IElementSettings } from 'sap/ui/core/Element';

    export interface IExactAttributeSettings extends IElementSettings {
        text?: string;
        selected?: boolean;
        width?: number;
        listOrder?: ExactOrder;
        showSubAttributesIndicator?: boolean;
        additionalData?: any;
        supplyActive?: boolean;
        autoActivateSupply?: boolean;
    }

    /**
    
    */
    export default class ExactAttribute extends Element {

        /**
            * Constructor for a new ExactAttribute.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: IExactAttributeSettings);


        /**
            * Adds some attribute to the aggregation {@link #getAttributes attributes}.
        */
        public addAttribute(oAttribute: this): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:supplyAttributes supplyAttributes} event of this `sap.ui.ux3.ExactAttribute`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ExactAttribute` itself.
         * 
         * A supply function is a handler which is attached to the supplyAttributes event. The event is fired when the corresponding ExactAttribute is selected, it was already selected when a handler is attached or function getAttributes() is called.
        */
        attachSupplyAttributes<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The ExactAttribute */
            attribute: ExactAttribute,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:supplyAttributes supplyAttributes} event of this `sap.ui.ux3.ExactAttribute`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ExactAttribute` itself.
         * 
         * A supply function is a handler which is attached to the supplyAttributes event. The event is fired when the corresponding ExactAttribute is selected, it was already selected when a handler is attached or function getAttributes() is called.
        */
        attachSupplyAttributes<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The ExactAttribute */
            attribute: ExactAttribute,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the attributes in the aggregation {@link #getAttributes attributes}.
        */
        public destroyAttributes(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:supplyAttributes supplyAttributes} event of this `sap.ui.ux3.ExactAttribute`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSupplyAttributes(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.ExactAttribute with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:supplyAttributes supplyAttributes} to attached listeners.
        */
        protected fireSupplyAttributes(mParameters?: { attribute?: ExactAttribute, }): this;

        /**
            * Gets current value of property {@link #getAdditionalData additionalData}.
         * 
         * An example for additional data are database keys
        */
        public getAdditionalData(): any;

        /**
            * Gets content of aggregation {@link #getAttributes attributes}.
         * 
         * Values (sub attributes) of this attribute
        */
        public getAttributes(): any[];

        /**
            * Gets current value of property {@link #getAutoActivateSupply autoActivateSupply}.
         * 
         * If you want the supply function to be called on every select, you can set the autoActivateSupply attribute to true. In this case, supplyActive is automatically set to true on every unselect.
         * 
         * Default value is `false`.
        */
        public getAutoActivateSupply(): boolean;

        /**
            * Gets current value of property {@link #getListOrder listOrder}.
         * 
         * The order how the sublists of this attribute should be displayed.
         * 
         * Default value is `Select`.
        */
        public getListOrder(): ExactOrder;

        /**
            * Returns a metadata object for class sap.ui.ux3.ExactAttribute.
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
            * Gets current value of property {@link #getSelected selected}.
         * 
         * Specifies whether the attribute shall be selected
        */
        public getSelected(): boolean;

        /**
            * Gets current value of property {@link #getShowSubAttributesIndicator showSubAttributesIndicator}.
         * 
         * Specifies whether the attribute shall have sub values for visual purposes. The indicator which is a little arrow beside an attribute in the list is computed automatically (getShowSubAttributesIndicator_Computed() of sap.ui.ux3.ExactAttribute). In the case that a supply function is attached, and the supplyActive attribute has value 'true', then the Exact pattern needs a hint if sub attributes are available. The showSubAttributesIndicator attribute is considered then and has to be maintained. If the back-end does not support count-calls, for example, showSubAttributesIndicator should be set to true.
         * 
         * Default value is `true`.
        */
        public getShowSubAttributesIndicator(): boolean;

        /**
            * See attribute showSubAttributesIndicator
        */
        public getShowSubAttributesIndicator_Computed(): any;

        /**
            * Gets current value of property {@link #getSupplyActive supplyActive}.
         * 
         * The supplyAttributes event is only fired if supplyActive has value true which is the default. After firing the event, the attribute is automatically set to false. The idea is that a supply function is called only once when the data is requested. To enable the event again it is possible to manually set the attribute back to true.
         * 
         * Default value is `true`.
        */
        public getSupplyActive(): boolean;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * The attribute name
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Specifies the width of the corresponding list in pixels. The value must be between 70 and 500.
         * 
         * Default value is `168`.
        */
        public getWidth(): number;

        /**
            * Checks for the provided `sap.ui.ux3.ExactAttribute` in the aggregation {@link #getAttributes attributes}. and returns its index if found or -1 otherwise.
        */
        public indexOfAttribute(oAttribute: this): number;

        /**
            * Inserts a attribute into the aggregation {@link #getAttributes attributes}.
        */
        public insertAttribute(oAttribute: this, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getAttributes attributes}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllAttributes(): any[];

        /**
            * Removes a attribute from the aggregation {@link #getAttributes attributes}.
        */
        public removeAttribute(vAttribute: number | string | this): this;

        /**
            * Scrolls the corresponding list of this attribute until the given direct child attribute is visible. If the corresponding list is not yet visible the call is buffered until the list is available.
        */
        public scrollTo(oOAttribute: this): any;

        /**
            * Sets a new value for property {@link #getAdditionalData additionalData}.
         * 
         * An example for additional data are database keys
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAdditionalData(oAdditionalData: any): this;

        /**
            * Sets a new value for property {@link #getAutoActivateSupply autoActivateSupply}.
         * 
         * If you want the supply function to be called on every select, you can set the autoActivateSupply attribute to true. In this case, supplyActive is automatically set to true on every unselect.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setAutoActivateSupply(bAutoActivateSupply: boolean): this;

        /**
            * Sets a new value for property {@link #getListOrder listOrder}.
         * 
         * The order how the sublists of this attribute should be displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Select`.
        */
        public setListOrder(sListOrder: ExactOrder): this;

        /**
            
        */
        protected setProperty(sPropertyName: string, oValue: any, bSuppressRerendering: boolean): this;

        /**
            * Sets a new value for property {@link #getSelected selected}.
         * 
         * Specifies whether the attribute shall be selected
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSelected(bSelected: boolean): this;

        /**
            * Sets a new value for property {@link #getShowSubAttributesIndicator showSubAttributesIndicator}.
         * 
         * Specifies whether the attribute shall have sub values for visual purposes. The indicator which is a little arrow beside an attribute in the list is computed automatically (getShowSubAttributesIndicator_Computed() of sap.ui.ux3.ExactAttribute). In the case that a supply function is attached, and the supplyActive attribute has value 'true', then the Exact pattern needs a hint if sub attributes are available. The showSubAttributesIndicator attribute is considered then and has to be maintained. If the back-end does not support count-calls, for example, showSubAttributesIndicator should be set to true.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowSubAttributesIndicator(bShowSubAttributesIndicator: boolean): this;

        /**
            * Sets a new value for property {@link #getSupplyActive supplyActive}.
         * 
         * The supplyAttributes event is only fired if supplyActive has value true which is the default. After firing the event, the attribute is automatically set to false. The idea is that a supply function is called only once when the data is requested. To enable the event again it is possible to manually set the attribute back to true.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setSupplyActive(bSupplyActive: boolean): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * The attribute name
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

        /**
            
        */
        public setTooltip(oTooltip: string | TooltipBase): any;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Specifies the width of the corresponding list in pixels. The value must be between 70 and 500.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `168`.
        */
        public setWidth(iWidth: number): this;

    }
}