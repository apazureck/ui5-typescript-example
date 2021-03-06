declare module "sap/ui/commons/layout/MatrixLayoutCell" {
    import { layout } from "sap/ui/commons/library";
    type BackgroundDesign = layout.BackgroundDesign;
    type HAlign = layout.HAlign;
    type Padding = layout.Padding;
    type Separation = layout.Separation;
    type VAlign = layout.VAlign;

    /**
    
    */
    export default class MatrixLayoutCell extends sap.ui.core.Element {


        /**
            * Constructor for a new layout/MatrixLayoutCell.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: sap.ui.core.Control): this;

        /**
            * The string given as "sStyleClass" will be added to the "class" attribute of this element's root HTML element.
         * 
         * This method is intended to be used to mark controls as being of a special type for which special styling can be provided using CSS selectors that reference this style class name.
         * 
         * `Example:
         * myButton.addStyleClass("myRedTextButton"); // add a CSS class to one button instance
         * 
         * ...and in CSS:
         * .myRedTextButton {
         * color: red;
         * }`
         * 
         * This will add the CSS class "myRedTextButton" to the Button HTML and the CSS code above will then make the text in this particular button red.
         * 
         * Only characters allowed inside HTML attributes are allowed. Quotes are not allowed and this method will ignore any strings containing quotes. Strings containing spaces are interpreted as ONE custom style class (even though CSS selectors interpret them as different classes) and can only removed later by calling removeStyleClass() with exactly the same (space-containing) string as parameter. Multiple calls with the same sStyleClass will have no different effect than calling once. If sStyleClass is null, the call is ignored.
         * 
         * Returns `this` to allow method chaining
        */
        public addStyleClass(sStyleClass: string): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Creates a new subclass of class sap.ui.commons.layout.MatrixLayoutCell with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Determines the matrix layout cell's background design.
         * 
         * Default value is `Transparent`.
        */
        public getBackgroundDesign(): BackgroundDesign;

        /**
            * Gets current value of property {@link #getColSpan colSpan}.
         * 
         * Determines how many columns of the underlying grid structure are occupied by this matrix layout cell.
         * 
         * Default value is `1`.
        */
        public getColSpan(): number;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * The matrix layout cell's content (arbitrary controls).
         * 
         * If the matrix row has a defined height and the matrix has layoutFixed = true, the controls inside of a cell should all use the same unit for its height property.
        */
        public getContent(): any[];

        /**
            * Gets current value of property {@link #getHAlign hAlign}.
         * 
         * Determines the horizontal alignment of the matrix layout cell's content with the cell's borders.
         * 
         * Default value is `Begin`.
        */
        public getHAlign(): HAlign;

        /**
            * Returns a metadata object for class sap.ui.commons.layout.MatrixLayoutCell.
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
            * Gets current value of property {@link #getPadding padding}.
         * 
         * Determines the padding of the matrix layout cell's content within the cell's borders. The default value is appropriate for all cells in a form-like layout. Consider to remove the padding on the outer layout in case of nesting.
         * 
         * Default value is `End`.
        */
        public getPadding(): Padding;

        /**
            * Gets current value of property {@link #getRowSpan rowSpan}.
         * 
         * Determines how many rows of the underlying grid structure are occupied by this matrix layout cell. In case a row-height is used, all rows affected by the RowSpan must have the same unit.
         * 
         * Default value is `1`.
        */
        public getRowSpan(): number;

        /**
            * Gets current value of property {@link #getSeparation separation}.
         * 
         * Determines how a matrix layout cell is separated from its predecessor, via a vertical gutter of variable width, with or without a vertical line.
         * 
         * Default value is `None`.
        */
        public getSeparation(): Separation;

        /**
            * Gets current value of property {@link #getVAlign vAlign}.
         * 
         * Determines the vertical alignment of the matrix layout cell's content with the cell's borders.
         * 
         * Default value is `Middle`.
        */
        public getVAlign(): VAlign;

        /**
            * Returns true if the given style class string is valid and if this Element has this style class set via a previous call to addStyleClass().
        */
        public hasStyleClass(sStyleClass: string): boolean;

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
            * Removes the given string from the list of custom style classes that have been set previously. Regular style classes like "sapUiBtn" cannot be removed.
         * 
         * Returns `this` to allow method chaining
        */
        public removeStyleClass(sStyleClass: string): this;

        /**
            * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Determines the matrix layout cell's background design.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Transparent`.
        */
        public setBackgroundDesign(sBackgroundDesign: BackgroundDesign): this;

        /**
            * Sets a new value for property {@link #getColSpan colSpan}.
         * 
         * Determines how many columns of the underlying grid structure are occupied by this matrix layout cell.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setColSpan(iColSpan: number): this;

        /**
            * Sets a new value for property {@link #getHAlign hAlign}.
         * 
         * Determines the horizontal alignment of the matrix layout cell's content with the cell's borders.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Begin`.
        */
        public setHAlign(sHAlign: HAlign): this;

        /**
            * Sets a new value for property {@link #getPadding padding}.
         * 
         * Determines the padding of the matrix layout cell's content within the cell's borders. The default value is appropriate for all cells in a form-like layout. Consider to remove the padding on the outer layout in case of nesting.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `End`.
        */
        public setPadding(sPadding: Padding): this;

        /**
            * Sets a new value for property {@link #getRowSpan rowSpan}.
         * 
         * Determines how many rows of the underlying grid structure are occupied by this matrix layout cell. In case a row-height is used, all rows affected by the RowSpan must have the same unit.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setRowSpan(iRowSpan: number): this;

        /**
            * Sets a new value for property {@link #getSeparation separation}.
         * 
         * Determines how a matrix layout cell is separated from its predecessor, via a vertical gutter of variable width, with or without a vertical line.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setSeparation(sSeparation: Separation): this;

        /**
            * Sets a new value for property {@link #getVAlign vAlign}.
         * 
         * Determines the vertical alignment of the matrix layout cell's content with the cell's borders.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Middle`.
        */
        public setVAlign(sVAlign: VAlign): this;

    }

}
