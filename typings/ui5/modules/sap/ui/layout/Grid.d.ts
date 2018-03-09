declare module "sap/ui/layout/Grid" {
    import { GridPosition } from "sap/ui/layout/library";

    /**
    
    */
    export default class Grid extends sap.ui.core.Control {


        /**
            * Constructor for a new Grid.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): this;

        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: sap.ui.core.Control): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Creates a new subclass of class sap.ui.layout.Grid with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            
        */
        protected getAccessibilityInfo(): any;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): any[];

        /**
            * Gets current value of property {@link #getContainerQuery containerQuery}.
         * 
         * If true then not the media Query ( device screen size), but the size of the container surrounding the grid defines the current range (large, medium or small).
         * 
         * Default value is `false`.
        */
        public getContainerQuery(): boolean;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * Controls that are placed into Grid layout.
        */
        public getContent(): any[];

        /**
            * Gets current value of property {@link #getDefaultIndent defaultIndent}.
         * 
         * Optional. Defines default for the whole Grid numbers of empty columns before the current span begins. It can be defined for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 0 to 11 that the container has to take, for example: "L2 M4 S6", "M11", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
         * 
         * Default value is `XL0 L0 M0 S0`.
        */
        public getDefaultIndent(): sap.ui.layout.GridIndent;

        /**
            * Gets current value of property {@link #getDefaultSpan defaultSpan}.
         * 
         * Optional. A string type that represents Grid's default span values for large, medium and small screens for the whole Grid. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
         * 
         * Default value is `XL3 L3 M6 S12`.
        */
        public getDefaultSpan(): sap.ui.layout.GridSpan;

        /**
            * Gets current value of property {@link #getHSpacing hSpacing}.
         * 
         * Optional. Horizontal spacing between the content in the Grid. In rem, allowed values are 0, 0.5 , 1 or 2.
         * 
         * Default value is `1`.
        */
        public getHSpacing(): number;

        /**
            * Returns a metadata object for class sap.ui.layout.Grid.
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
            * Gets current value of property {@link #getPosition position}.
         * 
         * Optional. Position of the Grid in the window or surrounding container. Possible values are "Center", "Left" and "Right".
         * 
         * Default value is `Left`.
        */
        public getPosition(): GridPosition;

        /**
            * Gets current value of property {@link #getVSpacing vSpacing}.
         * 
         * Optional. Vertical spacing between the rows in the Grid. In rem, allowed values are 0, 0.5, 1 and 2.
         * 
         * Default value is `1`.
        */
        public getVSpacing(): number;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Optional. Width of the Grid. If not specified, then 100%.
         * 
         * Default value is `100%`.
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
            * Sets a new value for property {@link #getContainerQuery containerQuery}.
         * 
         * If true then not the media Query ( device screen size), but the size of the container surrounding the grid defines the current range (large, medium or small).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setContainerQuery(bContainerQuery: boolean): this;

        /**
            * Sets a new value for property {@link #getDefaultIndent defaultIndent}.
         * 
         * Optional. Defines default for the whole Grid numbers of empty columns before the current span begins. It can be defined for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 0 to 11 that the container has to take, for example: "L2 M4 S6", "M11", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `XL0 L0 M0 S0`.
        */
        public setDefaultIndent(sDefaultIndent: sap.ui.layout.GridIndent): this;

        /**
            * Sets a new value for property {@link #getDefaultSpan defaultSpan}.
         * 
         * Optional. A string type that represents Grid's default span values for large, medium and small screens for the whole Grid. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `XL3 L3 M6 S12`.
        */
        public setDefaultSpan(sDefaultSpan: sap.ui.layout.GridSpan): this;

        /**
            * Sets a new value for property {@link #getHSpacing hSpacing}.
         * 
         * Optional. Horizontal spacing between the content in the Grid. In rem, allowed values are 0, 0.5 , 1 or 2.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setHSpacing(fHSpacing: number): this;

        /**
            * Sets a new value for property {@link #getPosition position}.
         * 
         * Optional. Position of the Grid in the window or surrounding container. Possible values are "Center", "Left" and "Right".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Left`.
        */
        public setPosition(sPosition: GridPosition): this;

        /**
            * Sets a new value for property {@link #getVSpacing vSpacing}.
         * 
         * Optional. Vertical spacing between the rows in the Grid. In rem, allowed values are 0, 0.5, 1 and 2.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setVSpacing(fVSpacing: number): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Optional. Width of the Grid. If not specified, then 100%.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }

}
