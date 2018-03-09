declare module "sap/m/Toolbar" {
    import { IBar } from "sap/m/library";
    import { ToolbarDesign } from "sap/m/library";
    import { IBarHTMLTag } from "sap/m/library";
    import Title from "sap/m/Title";

    /**
    
    */
    export default class Toolbar extends sap.ui.core.Control {


        /**
            * Constructor for a new `Toolbar`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Sets classes according to the context of the page. Possible contexts are header, footer and subheader.
        */
        protected _applyContextClassFor(): IBar;

        /**
            * Sets HTML tag according to the context of the page. Possible contexts are header, footer and subheader.
        */
        protected _applyTag(): IBar;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): this;

        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: sap.ui.core.Control): this;

        /**
            * Sets classes and HTML tag according to the context of the page. Possible contexts are header, footer, subheader
        */
        protected applyTagAndContextClassFor(): IBar;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.Toolbar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Toolbar` itself.
         * 
         * Fired when the user clicks on the toolbar, if the Active property is set to "true".
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The toolbar item that was pressed */
            srcControl: sap.ui.core.Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.Toolbar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Toolbar` itself.
         * 
         * Fired when the user clicks on the toolbar, if the Active property is set to "true".
        */
        attachPress<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The toolbar item that was pressed */
            srcControl: sap.ui.core.Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.m.Toolbar`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.m.Toolbar with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: { srcControl?: sap.ui.core.Control, }): this;

        /**
            * Gets current value of property {@link #getActive active}.
         * 
         * Indicates that the whole toolbar is clickable. The Press event is fired only if Active is set to true. Note: This property should be used when there are no interactive controls inside the toolbar and the toolbar itself is meant to be interactive.
         * 
         * Default value is `false`.
        */
        public getActive(): boolean;

        /**
            * Returns the currently applied design property of the Toolbar.
        */
        protected getActiveDesign(): ToolbarDesign;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): any[];

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * The content of the toolbar.
        */
        public getContent(): any[];

        /**
            * Gets current value of property {@link #getDesign design}.
         * 
         * Defines the toolbar design. Note: Design settings are theme-dependent. They also determine the default height of the toolbar.
         * 
         * Default value is `Auto`.
        */
        public getDesign(): ToolbarDesign;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Sets the enabled property of all controls defined in the content aggregation. Note: This property does not apply to the toolbar itself, but rather to its items.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Defines the height of the control. By default, the `height` property depends on the used theme and the `design` property.
         * 
         * ** Note: ** It is not recommended to use this property if the `sapMTBHeader-CTX` class is used
         * 
         * Default value is ``.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Gets the HTML tag of the root domref
        */
        protected getHTMLTag(): IBarHTMLTag;

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
            * Returns a metadata object for class sap.m.Toolbar.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the first sap.m.Title control instance inside the toolbar for the accessibility
        */
        protected getTitleControl(): Title | any;

        /**
            * Returns the first sap.m.Title control id inside the toolbar for the accessibility
        */
        protected getTitleId(): string;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Defines the width of the control. By default, Toolbar is a block element. If the width is not explicitly set, the control will assume its natural size.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: sap.ui.core.Control): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: sap.ui.core.Control, iIndex: number): this;

        /**
            * Returns if the bar is sensitive to the container context. Implementation of the IBar interface
        */
        protected isContextSensitive(): boolean;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): any[];

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): any[];

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control;

        /**
            * Sets a new value for property {@link #getActive active}.
         * 
         * Indicates that the whole toolbar is clickable. The Press event is fired only if Active is set to true. Note: This property should be used when there are no interactive controls inside the toolbar and the toolbar itself is meant to be interactive.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setActive(bActive: boolean): this;

        /**
            * Sets a new value for property {@link #getDesign design}.
         * 
         * Defines the toolbar design. Note: Design settings are theme-dependent. They also determine the default height of the toolbar.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Auto`.
        */
        public setDesign(sDesign: ToolbarDesign): this;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Sets the enabled property of all controls defined in the content aggregation. Note: This property does not apply to the toolbar itself, but rather to its items.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * Defines the height of the control. By default, the `height` property depends on the used theme and the `design` property.
         * 
         * ** Note: ** It is not recommended to use this property if the `sapMTBHeader-CTX` class is used
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets the HTML tag of the root domref
        */
        protected setHTMLTag(sTag: string): IBar;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Defines the width of the control. By default, Toolbar is a block element. If the width is not explicitly set, the control will assume its natural size.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }

}
