declare module "sap/m/FlexBox" {
    import { FlexAlignContent } from "sap/m/library";
    import { FlexAlignItems } from "sap/m/library";
    import { BackgroundDesign } from "sap/m/library";
    import { FlexDirection } from "sap/m/library";
    import { FlexJustifyContent } from "sap/m/library";
    import { FlexRendertype } from "sap/m/library";
    import { FlexWrap } from "sap/m/library";

    /**
    
    */
    export default class FlexBox extends sap.ui.core.Control {


        /**
            * Constructor for a new `sap.m.FlexBox`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: sap.ui.core.Control): this;

        /**
            * Adds item in the FlexBox.
        */
        public addItem(oItem: any): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Creates a new subclass of class sap.m.FlexBox with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets the accessibility information.
        */
        protected getAccessibilityInfo(): any;

        /**
            * Gets current value of property {@link #getAlignContent alignContent}.
         * 
         * Determines the layout behavior of container lines when there's extra space along the cross-axis. This property has no effect in Internet Explorer 10.
         * 
         * Default value is `Stretch`.
        */
        public getAlignContent(): FlexAlignContent;

        /**
            * Gets current value of property {@link #getAlignItems alignItems}.
         * 
         * Determines the layout behavior of items along the cross-axis. "Baseline" is not supported in Internet Explorer 10.
         * 
         * Default value is `Stretch`.
        */
        public getAlignItems(): FlexAlignItems;

        /**
            * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Defines the background style of the `sap.m.FlexBox`.
         * 
         * Default value is `Transparent`.
        */
        public getBackgroundDesign(): BackgroundDesign;

        /**
            * Gets current value of property {@link #getDirection direction}.
         * 
         * Determines the direction of the layout of child elements.
         * 
         * Default value is `Row`.
        */
        public getDirection(): FlexDirection;

        /**
            * Gets current value of property {@link #getDisplayInline displayInline}.
         * 
         * Determines whether the `sap.m.FlexBox` is in block or inline mode.
         * 
         * Default value is `false`.
        */
        public getDisplayInline(): boolean;

        /**
            * Gets current value of property {@link #getFitContainer fitContainer}.
         * 
         * Determines whether the `sap.m.FlexBox` will be sized to completely fill its container. If the `sap.m.FlexBox` is inserted into a Page, the property 'enableScrolling' of the Page needs to be set to 'false' for the FlexBox to fit the entire viewport.
         * 
         * Default value is `false`.
        */
        public getFitContainer(): boolean;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * The height of the `sap.m.FlexBox`. Note that when a percentage is given, for the height to work as expected, the height of the surrounding container must be defined.
         * 
         * Default value is ``.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * Flex items within the flexible box layout
        */
        public getItems(): any[];

        /**
            * Gets current value of property {@link #getJustifyContent justifyContent}.
         * 
         * Determines the layout behavior along the main axis.
         * 
         * Default value is `Start`.
        */
        public getJustifyContent(): FlexJustifyContent;

        /**
            * Returns a metadata object for class sap.m.FlexBox.
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
            * Gets current value of property {@link #getRenderType renderType}.
         * 
         * Determines whether the layout is rendered as a series of divs or as an unordered list (ul).<br> <br> We recommend to use `Bare` in most cases to avoid layout issues due to browser inconsistencies.
         * 
         * Default value is `Div`.
        */
        public getRenderType(): FlexRendertype;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * The width of the `sap.m.FlexBox`. Note that when a percentage is given, for the width to work as expected, the width of the surrounding container must be defined.
         * 
         * Default value is ``.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getWrap wrap}.
         * 
         * Determines the wrapping behavior of the flex container. This property has no effect in older browsers, e.g. Android Native 4.3 and below.
         * 
         * Default value is `NoWrap`.
        */
        public getWrap(): FlexWrap;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: sap.ui.core.Control): number;

        /**
            * Initializes the element instance after creation.
         * 
         * Applications must not call this hook method directly, it is called by the framework while the constructor of an element is executed.
         * 
         * Subclasses of Element should override this hook to implement any necessary initialization.
        */
        protected init(): any;

        /**
            * Initiates the control.
        */
        protected init(): any;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: sap.ui.core.Control, iIndex: number): this;

        /**
            * Inserts single item.
        */
        public insertItem(oItem: any, iIndex: number): this;

        /**
            * Removes all items.
        */
        public removeAllItems(): any;

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): any[];

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | sap.ui.core.Control): sap.ui.core.Control;

        /**
            * Removes single item.
        */
        public removeItem(vItem: any): any;

        /**
            * Sets a new value for property {@link #getAlignContent alignContent}.
         * 
         * Determines the layout behavior of container lines when there's extra space along the cross-axis. This property has no effect in Internet Explorer 10.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Stretch`.
        */
        public setAlignContent(sAlignContent: FlexAlignContent): this;

        /**
            * Sets the alignment of content in the FlexBox.
        */
        public setAlignContent(sValue: string): this;

        /**
            * Sets a new value for property {@link #getAlignItems alignItems}.
         * 
         * Determines the layout behavior of items along the cross-axis. "Baseline" is not supported in Internet Explorer 10.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Stretch`.
        */
        public setAlignItems(sAlignItems: FlexAlignItems): this;

        /**
            * Sets the alignment of items in the FlexBox.
        */
        public setAlignItems(sValue: string): this;

        /**
            * Sets the background design.
        */
        public setBackgroundDesign(sValue: string): this;

        /**
            * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Defines the background style of the `sap.m.FlexBox`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Transparent`.
        */
        public setBackgroundDesign(sBackgroundDesign: BackgroundDesign): this;

        /**
            * Sets a new value for property {@link #getDirection direction}.
         * 
         * Determines the direction of the layout of child elements.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Row`.
        */
        public setDirection(sDirection: FlexDirection): this;

        /**
            * Sets direction for the FlexBox. It could be row, row-reverse, column or column-reverse.
        */
        public setDirection(sValue: string): this;

        /**
            * Sets a new value for property {@link #getDisplayInline displayInline}.
         * 
         * Determines whether the `sap.m.FlexBox` is in block or inline mode.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setDisplayInline(bDisplayInline: boolean): this;

        /**
            * Sets display inline for nested or contained FlexBox.
        */
        public setDisplayInline(bInline: boolean): this;

        /**
            * Sets a new value for property {@link #getFitContainer fitContainer}.
         * 
         * Determines whether the `sap.m.FlexBox` will be sized to completely fill its container. If the `sap.m.FlexBox` is inserted into a Page, the property 'enableScrolling' of the Page needs to be set to 'false' for the FlexBox to fit the entire viewport.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setFitContainer(bFitContainer: boolean): this;

        /**
            * Sets fitContainer so you can have nested FlexBox containers in columns or rows.
        */
        public setFitContainer(sValue: string): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * The height of the `sap.m.FlexBox`. Note that when a percentage is given, for the height to work as expected, the height of the surrounding container must be defined.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets the FlexBox height.
        */
        public setHeight(sValue: string): this;

        /**
            * Sets the justifyContent - it can be flex-start, flex-end, center, space-between, space-around, space-evenly.
        */
        public setJustifyContent(sValue: string): this;

        /**
            * Sets a new value for property {@link #getJustifyContent justifyContent}.
         * 
         * Determines the layout behavior along the main axis.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Start`.
        */
        public setJustifyContent(sJustifyContent: FlexJustifyContent): this;

        /**
            * Sets the render type of the FlexBox.
        */
        public setRenderType(sValue: string): this;

        /**
            * Sets a new value for property {@link #getRenderType renderType}.
         * 
         * Determines whether the layout is rendered as a series of divs or as an unordered list (ul).<br> <br> We recommend to use `Bare` in most cases to avoid layout issues due to browser inconsistencies.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Div`.
        */
        public setRenderType(sRenderType: FlexRendertype): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * The width of the `sap.m.FlexBox`. Note that when a percentage is given, for the width to work as expected, the width of the surrounding container must be defined.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets the FlexBox width.
        */
        public setWidth(sValue: string): this;

        /**
            * Sets a new value for property {@link #getWrap wrap}.
         * 
         * Determines the wrapping behavior of the flex container. This property has no effect in older browsers, e.g. Android Native 4.3 and below.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `NoWrap`.
        */
        public setWrap(sWrap: FlexWrap): this;

        /**
            * Sets the wrapping.
        */
        public setWrap(sValue: string): this;

    }

}
