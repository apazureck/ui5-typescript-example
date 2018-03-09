declare module "sap/ui/commons/layout/PositionContainer" {

    /**
    
    */
    export default class PositionContainer extends sap.ui.core.Element {


        /**
            * Constructor for a new layout/PositionContainer.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Destroys the control in the aggregation {@link #getControl control}.
        */
        public destroyControl(): this;

        /**
            * Creates a new subclass of class sap.ui.commons.layout.PositionContainer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getBottom bottom}.
         * 
         * Defines the distance to the bottom of the layout (as specified in HTML)
        */
        public getBottom(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getCenterHorizontally centerHorizontally}.
         * 
         * Indicates whether this container shall be centered horizontally within the AbsoluteLayout area. The values of the attributes left and right are ignored when this feature is activated.
         * 
         * Default value is `false`.
        */
        public getCenterHorizontally(): boolean;

        /**
            * Gets current value of property {@link #getCenterVertically centerVertically}.
         * 
         * Indicates whether this container should be centered vertically within the AbsoluteLayout area. The values of the attributes top and bottom are ignored when this feature is activated.
         * 
         * Default value is `false`.
        */
        public getCenterVertically(): boolean;

        /**
            * Gets content of aggregation {@link #getControl control}.
         * 
         * Child control of the position container
        */
        public getControl(): sap.ui.core.Control;

        /**
            * Gets current value of property {@link #getLeft left}.
         * 
         * Defines the distance to the left of the layout (as specified in HTML)
        */
        public getLeft(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.ui.commons.layout.PositionContainer.
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
            * Gets current value of property {@link #getRight right}.
         * 
         * Defines the distance to the right of the layout (as specified in HTML)
        */
        public getRight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getTop top}.
         * 
         * Defines the distance to the top of the layout (as specified in HTML)
        */
        public getTop(): sap.ui.core.CSSSize;

        /**
            * Sets a new value for property {@link #getBottom bottom}.
         * 
         * Defines the distance to the bottom of the layout (as specified in HTML)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setBottom(sBottom: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getCenterHorizontally centerHorizontally}.
         * 
         * Indicates whether this container shall be centered horizontally within the AbsoluteLayout area. The values of the attributes left and right are ignored when this feature is activated.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setCenterHorizontally(bCenterHorizontally: boolean): this;

        /**
            * Sets a new value for property {@link #getCenterVertically centerVertically}.
         * 
         * Indicates whether this container should be centered vertically within the AbsoluteLayout area. The values of the attributes top and bottom are ignored when this feature is activated.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setCenterVertically(bCenterVertically: boolean): this;

        /**
            * Sets the aggregated {@link #getControl control}.
        */
        public setControl(oControl: sap.ui.core.Control): this;

        /**
            * Sets a new value for property {@link #getLeft left}.
         * 
         * Defines the distance to the left of the layout (as specified in HTML)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setLeft(sLeft: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getRight right}.
         * 
         * Defines the distance to the right of the layout (as specified in HTML)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setRight(sRight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getTop top}.
         * 
         * Defines the distance to the top of the layout (as specified in HTML)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTop(sTop: sap.ui.core.CSSSize): this;

        /**
            * Updates the position properties of the container according to the given position in JSON style.
        */
        public updatePosition(oPos: any): any;

    }

}
