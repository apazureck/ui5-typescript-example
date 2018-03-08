declare module "sap/m/Bar" {
    import sapmlibrary from "sap/m/library";
    type BarDesign = sapmlibrary.BarDesign;

    export = Bar;




    /**
    
    */
    class Bar extends sap.ui.core.Control {

        /**
            * Constructor for a new `Bar`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): this;

        /**
            * Adds some contentLeft to the aggregation {@link #getContentLeft contentLeft}.
        */
        public addContentLeft(oContentLeft: sap.ui.core.Control): this;

        /**
            * Adds some contentMiddle to the aggregation {@link #getContentMiddle contentMiddle}.
        */
        public addContentMiddle(oContentMiddle: sap.ui.core.Control): this;

        /**
            * Adds some contentRight to the aggregation {@link #getContentRight contentRight}.
        */
        public addContentRight(oContentRight: sap.ui.core.Control): this;

        /**
            * Destroys all the contentLeft in the aggregation {@link #getContentLeft contentLeft}.
        */
        public destroyContentLeft(): this;

        /**
            * Destroys all the contentMiddle in the aggregation {@link #getContentMiddle contentMiddle}.
        */
        public destroyContentMiddle(): this;

        /**
            * Destroys all the contentRight in the aggregation {@link #getContentRight contentRight}.
        */
        public destroyContentRight(): this;

        /**
            * Creates a new subclass of class sap.m.Bar with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): any[];

        /**
            * Gets content of aggregation {@link #getContentLeft contentLeft}.
         * 
         * Represents the left content area, usually containing a button or an app icon. If it is overlapped by the right content, its content will disappear and the text will show an ellipsis.
        */
        public getContentLeft(): any[];

        /**
            * Gets content of aggregation {@link #getContentMiddle contentMiddle}.
         * 
         * Represents the middle content area. Controls such as label, segmented buttons or select can be placed here. The content is centrally positioned if there is enough space. If the right or left content overlaps the middle content, the middle content will be centered in the space between the left and the right content.
        */
        public getContentMiddle(): any[];

        /**
            * Gets content of aggregation {@link #getContentRight contentRight}.
         * 
         * Represents the right content area. Controls such as action buttons or search field can be placed here.
        */
        public getContentRight(): any[];

        /**
            * Gets current value of property {@link #getDesign design}.
         * 
         * Determines the design of the bar. If set to auto, it becomes dependent on the place where the bar is placed.
         * 
         * Default value is `Auto`.
        */
        public getDesign(): BarDesign;

        /**
            * Gets current value of property {@link #getEnableFlexBox enableFlexBox}.
         * 
         * If this flag is set to true, contentMiddle will be rendered as a HBox and layoutData can be used to allocate available space.
         * 
         * Default value is `false`.
        */
        public getEnableFlexBox(): boolean;

        /**
            * Returns a metadata object for class sap.m.Bar.
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
            * Gets current value of property {@link #getTranslucent translucent}.
         * 
         * Indicates whether the Bar is partially translucent. It is only applied for touch devices.
         * 
         * Default value is `false`.
        */
        public getTranslucent(): boolean;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContentLeft contentLeft}. and returns its index if found or -1 otherwise.
        */
        public indexOfContentLeft(oContentLeft: sap.ui.core.Control): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContentMiddle contentMiddle}. and returns its index if found or -1 otherwise.
        */
        public indexOfContentMiddle(oContentMiddle: sap.ui.core.Control): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContentRight contentRight}. and returns its index if found or -1 otherwise.
        */
        public indexOfContentRight(oContentRight: sap.ui.core.Control): number;

        /**
            * Inserts a contentLeft into the aggregation {@link #getContentLeft contentLeft}.
        */
        public insertContentLeft(oContentLeft: sap.ui.core.Control, iIndex: number): this;

        /**
            * Inserts a contentMiddle into the aggregation {@link #getContentMiddle contentMiddle}.
        */
        public insertContentMiddle(oContentMiddle: sap.ui.core.Control, iIndex: number): this;

        /**
            * Inserts a contentRight into the aggregation {@link #getContentRight contentRight}.
        */
        public insertContentRight(oContentRight: sap.ui.core.Control, iIndex: number): this;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): any[];

        /**
            * Removes all the controls from the aggregation {@link #getContentLeft contentLeft}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContentLeft(): any[];

        /**
            * Removes all the controls from the aggregation {@link #getContentMiddle contentMiddle}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContentMiddle(): any[];

        /**
            * Removes all the controls from the aggregation {@link #getContentRight contentRight}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContentRight(): any[];

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;

        /**
            * Removes a contentLeft from the aggregation {@link #getContentLeft contentLeft}.
        */
        public removeContentLeft(vContentLeft: number | string | sap.ui.core.Control): sap.ui.core.Control;

        /**
            * Removes a contentMiddle from the aggregation {@link #getContentMiddle contentMiddle}.
        */
        public removeContentMiddle(vContentMiddle: number | string | sap.ui.core.Control): sap.ui.core.Control;

        /**
            * Removes a contentRight from the aggregation {@link #getContentRight contentRight}.
        */
        public removeContentRight(vContentRight: number | string | sap.ui.core.Control): sap.ui.core.Control;

        /**
            * Sets a new value for property {@link #getDesign design}.
         * 
         * Determines the design of the bar. If set to auto, it becomes dependent on the place where the bar is placed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Auto`.
        */
        public setDesign(sDesign: BarDesign): this;

        /**
            * Sets a new value for property {@link #getEnableFlexBox enableFlexBox}.
         * 
         * If this flag is set to true, contentMiddle will be rendered as a HBox and layoutData can be used to allocate available space.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEnableFlexBox(bEnableFlexBox: boolean): this;

        /**
            * Sets a new value for property {@link #getTranslucent translucent}.
         * 
         * Indicates whether the Bar is partially translucent. It is only applied for touch devices.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setTranslucent(bTranslucent: boolean): this;

    }


}
