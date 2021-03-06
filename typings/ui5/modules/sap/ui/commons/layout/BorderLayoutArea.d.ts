declare module "sap/ui/commons/layout/BorderLayoutArea" {
    import { layout } from "sap/ui/commons/library";
    type BorderLayoutAreaTypes = layout.BorderLayoutAreaTypes;

    /**
    
    */
    export default class BorderLayoutArea extends sap.ui.core.Element {


        /**
            * Constructor for a new layout/BorderLayoutArea.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: sap.ui.core.Control): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Creates a new subclass of class sap.ui.commons.layout.BorderLayoutArea with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getAreaId areaId}.
         * 
         * Defines which area the element represents: top, begin, center, end, bottom
         * 
         * Default value is `top`.
        */
        public getAreaId(): BorderLayoutAreaTypes;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * Controls within the area
        */
        public getContent(): any[];

        /**
            * Gets current value of property {@link #getContentAlign contentAlign}.
         * 
         * The content alignment as CSS value
         * 
         * Default value is `left`.
        */
        public getContentAlign(): string;

        /**
            * Returns a metadata object for class sap.ui.commons.layout.BorderLayoutArea.
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
            * Gets current value of property {@link #getOverflowX overflowX}.
         * 
         * The overflow mode of the area in horizontal direction as CSS value
         * 
         * Default value is `auto`.
        */
        public getOverflowX(): string;

        /**
            * Gets current value of property {@link #getOverflowY overflowY}.
         * 
         * The overflow mode of the area in vertical direction as CSS value
         * 
         * Default value is `auto`.
        */
        public getOverflowY(): string;

        /**
            * Gets current value of property {@link #getSize size}.
         * 
         * Defines the height or the width. Is not used when the area element is in Center.
         * 
         * Default value is `100px`.
        */
        public getSize(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Invisible controls are not rendered
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

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
            * Sets a new value for property {@link #getAreaId areaId}.
         * 
         * Defines which area the element represents: top, begin, center, end, bottom
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `top`.
        */
        public setAreaId(sAreaId: BorderLayoutAreaTypes): this;

        /**
            * Sets a new value for property {@link #getContentAlign contentAlign}.
         * 
         * The content alignment as CSS value
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `left`.
        */
        public setContentAlign(sContentAlign: string): this;

        /**
            * Sets a new value for property {@link #getOverflowX overflowX}.
         * 
         * The overflow mode of the area in horizontal direction as CSS value
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `auto`.
        */
        public setOverflowX(sOverflowX: string): this;

        /**
            * Sets a new value for property {@link #getOverflowY overflowY}.
         * 
         * The overflow mode of the area in vertical direction as CSS value
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `auto`.
        */
        public setOverflowY(sOverflowY: string): this;

        /**
            * Sets a new value for property {@link #getSize size}.
         * 
         * Defines the height or the width. Is not used when the area element is in Center.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100px`.
        */
        public setSize(sSize: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Invisible controls are not rendered
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

    }

}
