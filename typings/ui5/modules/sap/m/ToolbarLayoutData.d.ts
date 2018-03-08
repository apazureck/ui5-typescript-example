declare module "sap/m/ToolbarLayoutData" {

    export = ToolbarLayoutData;




    /**
    
    */
    class ToolbarLayoutData extends sap.ui.core.LayoutData {

        /**
            * Constructor for a new `ToolbarLayoutData`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.m.ToolbarLayoutData with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getMaxWidth maxWidth}.
         * 
         * Sets the maximum width of the toolbar item.
        */
        public getMaxWidth(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.m.ToolbarLayoutData.
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
            * Gets current value of property {@link #getMinWidth minWidth}.
         * 
         * Sets the minimum width of the toolbar item.
        */
        public getMinWidth(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getShrinkable shrinkable}.
         * 
         * Determines whether the control, when in a toolbar, is shrinkable or not. For controls with fixed width (100px, 5rem, etc...) this property is ignored.
         * 
         * Note: Nested layout controls should not be shrinkable.
         * 
         * Default value is `false`.
        */
        public getShrinkable(): boolean;

        /**
            * Sets a new value for property {@link #getMaxWidth maxWidth}.
         * 
         * Sets the maximum width of the toolbar item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMaxWidth(sMaxWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getMinWidth minWidth}.
         * 
         * Sets the minimum width of the toolbar item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMinWidth(sMinWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getShrinkable shrinkable}.
         * 
         * Determines whether the control, when in a toolbar, is shrinkable or not. For controls with fixed width (100px, 5rem, etc...) this property is ignored.
         * 
         * Note: Nested layout controls should not be shrinkable.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShrinkable(bShrinkable: boolean): this;

    }


}
