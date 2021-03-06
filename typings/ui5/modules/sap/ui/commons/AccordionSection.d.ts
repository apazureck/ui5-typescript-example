declare module "sap/ui/commons/AccordionSection" {

    /**
    
    */
    export default class AccordionSection extends sap.ui.core.Element {


        /**
            * Constructor for a new AccordionSection.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: sap.ui.core.Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:scroll scroll} event of this `sap.ui.commons.AccordionSection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.AccordionSection` itself.
         * 
         * Event is fired when the user scrolls the panel
        */
        attachScroll<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Horizontal scroll position */
            left: number, /* * Vertical scroll position */
            top: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:scroll scroll} event of this `sap.ui.commons.AccordionSection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.AccordionSection` itself.
         * 
         * Event is fired when the user scrolls the panel
        */
        attachScroll<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Horizontal scroll position */
            left: number, /* * Vertical scroll position */
            top: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:scroll scroll} event of this `sap.ui.commons.AccordionSection`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachScroll(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.ui.commons.AccordionSection with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:scroll scroll} to attached listeners.
        */
        protected fireScroll(mParameters?: { left?: number, top?: number, }): this;

        /**
            * Gets current value of property {@link #getCollapsed collapsed}.
         * 
         * It is recommended to adjust the settings for the width when the section is set to 'collapsed'.
         * 
         * Default value is `false`.
        */
        public getCollapsed(): boolean;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * Aggregates the controls that are contained in the panel. The control layout is browser-dependent. For a stable content layout, use a layout control as direct single child. When the panel dimensions are set, the child control may have width and height of 100%; when the panel dimensions are not set, the child defines the panel size.
        */
        public getContent(): any[];

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * It is required that the used theme supports the control.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets current value of property {@link #getMaxHeight maxHeight}.
         * 
         * When the section content exceeds maxHeight, a vertical scroll bar appears.
        */
        public getMaxHeight(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.ui.commons.AccordionSection.
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
            * Gets current value of property {@link #getTitle title}.
         * 
         * Text for the section header
        */
        public getTitle(): string;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: sap.ui.core.Control): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: sap.ui.core.Control, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): any[];

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control;

        /**
            * Property setter for the "collapsed" state
        */
        public setCollapsed(bCollapsed: boolean): this;

        /**
            * Property setter for the "enabled" state
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getMaxHeight maxHeight}.
         * 
         * When the section content exceeds maxHeight, a vertical scroll bar appears.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMaxHeight(sMaxHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Text for the section header
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

    }

}
