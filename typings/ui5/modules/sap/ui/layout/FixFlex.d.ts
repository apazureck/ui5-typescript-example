declare module "sap/ui/layout/FixFlex" {

    export = FixFlex;




    /**
    
    */
    class FixFlex extends sap.ui.core.Control {

        /**
            * Constructor for a new FixFlex.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some fixContent to the aggregation {@link #getFixContent fixContent}.
        */
        public addFixContent(oFixContent: sap.ui.core.Control): this;

        /**
            * Destroys all the fixContent in the aggregation {@link #getFixContent fixContent}.
        */
        public destroyFixContent(): this;

        /**
            * Destroys the flexContent in the aggregation {@link #getFlexContent flexContent}.
        */
        public destroyFlexContent(): this;

        /**
            * Creates a new subclass of class sap.ui.layout.FixFlex with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets content of aggregation {@link #getFixContent fixContent}.
         * 
         * Controls in the fixed part of the layout.
        */
        public getFixContent(): any[];

        /**
            * Gets current value of property {@link #getFixContentSize fixContentSize}.
         * 
         * Determines the height (if the vertical property is "true") or the width (if the vertical property is "false") of the fixed area. If left at the default value "auto", the fixed-size area will be as large as its content. In this case the content cannot use percentage sizes.
         * 
         * Default value is `auto`.
        */
        public getFixContentSize(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getFixFirst fixFirst}.
         * 
         * Determines whether the fixed-size area should be on the beginning/top ( if the value is "true") or end/bottom ( if the value is "false").
         * 
         * Default value is `true`.
        */
        public getFixFirst(): boolean;

        /**
            * Gets content of aggregation {@link #getFlexContent flexContent}.
         * 
         * Control in the stretching part of the layout.
        */
        public getFlexContent(): sap.ui.core.Control;

        /**
            * Returns a metadata object for class sap.ui.layout.FixFlex.
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
            * Gets current value of property {@link #getMinFlexSize minFlexSize}.
         * 
         * Enables scrolling inside the flexible part. The given size is calculated in "px". If the child control in the flexible part is larger than the available flexible size on the screen and if the available size for the flexible part is smaller or equal to the minFlexSize value, the scroll will be for the entire FixFlex control.
         * 
         * Default value is `0`.
        */
        public getMinFlexSize(): number;

        /**
            * Gets current value of property {@link #getVertical vertical}.
         * 
         * Determines the direction of the layout of child elements. True for vertical and false for horizontal layout.
         * 
         * Default value is `true`.
        */
        public getVertical(): boolean;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getFixContent fixContent}. and returns its index if found or -1 otherwise.
        */
        public indexOfFixContent(oFixContent: sap.ui.core.Control): number;

        /**
            * Inserts a fixContent into the aggregation {@link #getFixContent fixContent}.
        */
        public insertFixContent(oFixContent: sap.ui.core.Control, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getFixContent fixContent}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllFixContent(): any[];

        /**
            * Removes a fixContent from the aggregation {@link #getFixContent fixContent}.
        */
        public removeFixContent(vFixContent: number | string | sap.ui.core.Control): sap.ui.core.Control;

        /**
            * Sets a new value for property {@link #getFixContentSize fixContentSize}.
         * 
         * Determines the height (if the vertical property is "true") or the width (if the vertical property is "false") of the fixed area. If left at the default value "auto", the fixed-size area will be as large as its content. In this case the content cannot use percentage sizes.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `auto`.
        */
        public setFixContentSize(sFixContentSize: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getFixFirst fixFirst}.
         * 
         * Determines whether the fixed-size area should be on the beginning/top ( if the value is "true") or end/bottom ( if the value is "false").
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setFixFirst(bFixFirst: boolean): this;

        /**
            * Sets the aggregated {@link #getFlexContent flexContent}.
        */
        public setFlexContent(oFlexContent: sap.ui.core.Control): this;

        /**
            * Sets a new value for property {@link #getMinFlexSize minFlexSize}.
         * 
         * Enables scrolling inside the flexible part. The given size is calculated in "px". If the child control in the flexible part is larger than the available flexible size on the screen and if the available size for the flexible part is smaller or equal to the minFlexSize value, the scroll will be for the entire FixFlex control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setMinFlexSize(iMinFlexSize: number): this;

        /**
            * Sets a new value for property {@link #getVertical vertical}.
         * 
         * Determines the direction of the layout of child elements. True for vertical and false for horizontal layout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVertical(bVertical: boolean): this;

    }


}
