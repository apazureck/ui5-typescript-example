declare module "sap/m/Title" {
    import sap_ui_core_Title from "sap/ui/core/Title";

    export = Title;




    /**
    
    */
    class Title extends sap.ui.core.Control {

        /**
            * Constructor for a new Title control.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.m.Title with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets the accessibility information for the `sap.m.Title` control.
        */
        protected getAccessibilityInfo(): any;

        /**
            * Gets current value of property {@link #getLevel level}.
         * 
         * Defines the semantic level of the title. This information is e.g. used by assistive technologies like screenreaders to create a hierarchical site map for faster navigation. Depending on this setting either an HTML h1-h6 element is used or when using level `Auto` no explicit level information is written (HTML5 header element). This property does not influence the style of the control. Use the property `titleStyle` for this purpose instead.
         * 
         * Default value is `Auto`.
        */
        public getLevel(): sap.ui.core.TitleLevel;

        /**
            * Returns a metadata object for class sap.m.Title.
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
            * Gets current value of property {@link #getText text}.
         * 
         * Defines the text which should be displayed as a title.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getTextAlign textAlign}.
         * 
         * Defines the alignment of the text within the title. ** Note: ** This property only has an effect if the overall width of the title control is larger than the displayed text.
         * 
         * Default value is `Initial`.
        */
        public getTextAlign(): sap.ui.core.TextAlign;

        /**
            * ID of the element which is the current target of the association {@link #getTitle title}, or `null`.
        */
        public getTitle(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getTitleStyle titleStyle}.
         * 
         * Defines the style of the title. When using the `Auto` styling, the appearance of the title depends on the current position of the title (e.g. inside a `Toolbar`). This default behavior can be overridden by setting a different style explicitly. The actual appearance of the title and the different styles always depends on the theme being used.
         * 
         * Default value is `Auto`.
        */
        public getTitleStyle(): sap.ui.core.TitleLevel;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Defines the width of the title.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getWrapping wrapping}.
         * 
         * Enables text wrapping. ** Note: ** Wrapping must only be activated if the surrounding container allows flexible heights.
         * 
         * Default value is `false`.
        */
        public getWrapping(): boolean;

        /**
            * Sets a new value for property {@link #getLevel level}.
         * 
         * Defines the semantic level of the title. This information is e.g. used by assistive technologies like screenreaders to create a hierarchical site map for faster navigation. Depending on this setting either an HTML h1-h6 element is used or when using level `Auto` no explicit level information is written (HTML5 header element). This property does not influence the style of the control. Use the property `titleStyle` for this purpose instead.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Auto`.
        */
        public setLevel(sLevel: sap.ui.core.TitleLevel): this;

        /**
            * Sets text within the title.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Defines the text which should be displayed as a title.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getTextAlign textAlign}.
         * 
         * Defines the alignment of the text within the title. ** Note: ** This property only has an effect if the overall width of the title control is larger than the displayed text.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Initial`.
        */
        public setTextAlign(sTextAlign: sap.ui.core.TextAlign): this;

        /**
            * Sets the title for a `sap.m.Title` or `sap.ui.core.Title`
        */
        public setTitle(vTitle: this | sap_ui_core_Title): this;

        /**
            * Sets the associated {@link #getTitle title}.
        */
        public setTitle(oTitle: sap.ui.core.ID | sap_ui_core_Title): this;

        /**
            * Sets a new value for property {@link #getTitleStyle titleStyle}.
         * 
         * Defines the style of the title. When using the `Auto` styling, the appearance of the title depends on the current position of the title (e.g. inside a `Toolbar`). This default behavior can be overridden by setting a different style explicitly. The actual appearance of the title and the different styles always depends on the theme being used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Auto`.
        */
        public setTitleStyle(sTitleStyle: sap.ui.core.TitleLevel): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Defines the width of the title.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getWrapping wrapping}.
         * 
         * Enables text wrapping. ** Note: ** Wrapping must only be activated if the surrounding container allows flexible heights.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setWrapping(bWrapping: boolean): this;

    }


}
