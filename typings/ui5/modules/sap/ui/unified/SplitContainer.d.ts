declare module "sap/ui/unified/SplitContainer" {

    export = SplitContainer;




    /**
    
    */
    class SplitContainer extends sap.ui.core.Control {

        /**
            * Constructor for a new SplitContainer.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: sap.ui.core.Control): this;

        /**
            * Adds some secondaryContent to the aggregation {@link #getSecondaryContent secondaryContent}.
        */
        public addSecondaryContent(oSecondaryContent: sap.ui.core.Control): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Destroys all the secondaryContent in the aggregation {@link #getSecondaryContent secondaryContent}.
        */
        public destroySecondaryContent(): this;

        /**
            * Creates a new subclass of class sap.ui.unified.SplitContainer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * The content to appear in the main area.
        */
        public getContent(): any[];

        /**
            * Returns a metadata object for class sap.ui.unified.SplitContainer.
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
            * Gets current value of property {@link #getOrientation orientation}.
         * 
         * Whether to show the secondary content on the left ("Horizontal", default) or on the top ("Vertical").
         * 
         * Default value is `Horizontal`.
        */
        public getOrientation(): sap.ui.core.Orientation;

        /**
            * Gets content of aggregation {@link #getSecondaryContent secondaryContent}.
         * 
         * The content to appear in the secondary area.
        */
        public getSecondaryContent(): any[];

        /**
            * Gets current value of property {@link #getSecondaryContentSize secondaryContentSize}.
         * 
         * The width if the secondary content. The height is always 100%.
         * 
         * Default value is `250px`.
        */
        public getSecondaryContentSize(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getSecondaryContentWidth secondaryContentWidth}.
         * 
         * Do not use. Use secondaryContentSize instead.
         * 
         * Default value is `250px`.
        */
        public getSecondaryContentWidth(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getShowSecondaryContent showSecondaryContent}.
         * 
         * Shows / Hides the secondary area.
        */
        public getShowSecondaryContent(): boolean;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: sap.ui.core.Control): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getSecondaryContent secondaryContent}. and returns its index if found or -1 otherwise.
        */
        public indexOfSecondaryContent(oSecondaryContent: sap.ui.core.Control): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: sap.ui.core.Control, iIndex: number): this;

        /**
            * Inserts a secondaryContent into the aggregation {@link #getSecondaryContent secondaryContent}.
        */
        public insertSecondaryContent(oSecondaryContent: sap.ui.core.Control, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): any[];

        /**
            * Removes all the controls from the aggregation {@link #getSecondaryContent secondaryContent}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllSecondaryContent(): any[];

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control;

        /**
            * Removes a secondaryContent from the aggregation {@link #getSecondaryContent secondaryContent}.
        */
        public removeSecondaryContent(vSecondaryContent: number | string | sap.ui.core.Control): sap.ui.core.Control;

        /**
            * Sets a new value for property {@link #getOrientation orientation}.
         * 
         * Whether to show the secondary content on the left ("Horizontal", default) or on the top ("Vertical").
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Horizontal`.
        */
        public setOrientation(sOrientation: sap.ui.core.Orientation): this;

        /**
            * Sets a new value for property {@link #getSecondaryContentSize secondaryContentSize}.
         * 
         * The width if the secondary content. The height is always 100%.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `250px`.
        */
        public setSecondaryContentSize(sSecondaryContentSize: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getSecondaryContentWidth secondaryContentWidth}.
         * 
         * Do not use. Use secondaryContentSize instead.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `250px`.
        */
        public setSecondaryContentWidth(sSecondaryContentWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getShowSecondaryContent showSecondaryContent}.
         * 
         * Shows / Hides the secondary area.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setShowSecondaryContent(bShowSecondaryContent: boolean): this;

    }


}
