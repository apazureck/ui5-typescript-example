declare module "sap/ui/unified/ContentSwitcher" {

    /**
    
    */
    export default class ContentSwitcher extends sap.ui.core.Control {


        /**
            * Constructor for a new ContentSwitcher.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some content1 to the aggregation {@link #getContent1 content1}.
        */
        public addContent1(oContent1: sap.ui.core.Control): this;

        /**
            * Adds some content2 to the aggregation {@link #getContent2 content2}.
        */
        public addContent2(oContent2: sap.ui.core.Control): this;

        /**
            * Destroys all the content1 in the aggregation {@link #getContent1 content1}.
        */
        public destroyContent1(): this;

        /**
            * Destroys all the content2 in the aggregation {@link #getContent2 content2}.
        */
        public destroyContent2(): this;

        /**
            * Creates a new subclass of class sap.ui.unified.ContentSwitcher with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getActiveContent activeContent}.
         * 
         * The number of the currently active content (1 or 2).
         * 
         * Default value is `1`.
        */
        public getActiveContent(): number;

        /**
            * Gets current value of property {@link #getAnimation animation}.
         * 
         * Set the used animation when changing content. This just sets a CSS-class named "sapUiUnifiedACSwitcherAnimation" + this value on the root element of the control. The animation has to be implemented in CSS. This also enables applications to implement their own animations via CSS by reacting to the parent class. See the types sap.ui.unified.ContentSwitcherAnimation for default implementations.
         * 
         * Default value is `None`.
        */
        public getAnimation(): string;

        /**
            * Gets content of aggregation {@link #getContent1 content1}.
         * 
         * The controls that should be shown in the first content
        */
        public getContent1(): any[];

        /**
            * Gets content of aggregation {@link #getContent2 content2}.
         * 
         * The controls that should be shown in the second content
        */
        public getContent2(): any[];

        /**
            * Returns a metadata object for class sap.ui.unified.ContentSwitcher.
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
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent1 content1}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent1(oContent1: sap.ui.core.Control): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent2 content2}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent2(oContent2: sap.ui.core.Control): number;

        /**
            * Inserts a content1 into the aggregation {@link #getContent1 content1}.
        */
        public insertContent1(oContent1: sap.ui.core.Control, iIndex: number): this;

        /**
            * Inserts a content2 into the aggregation {@link #getContent2 content2}.
        */
        public insertContent2(oContent2: sap.ui.core.Control, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getContent1 content1}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent1(): any[];

        /**
            * Removes all the controls from the aggregation {@link #getContent2 content2}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent2(): any[];

        /**
            * Removes a content1 from the aggregation {@link #getContent1 content1}.
        */
        public removeContent1(vContent1: number | string | sap.ui.core.Control): sap.ui.core.Control;

        /**
            * Removes a content2 from the aggregation {@link #getContent2 content2}.
        */
        public removeContent2(vContent2: number | string | sap.ui.core.Control): sap.ui.core.Control;

        /**
            * Sets a new value for property {@link #getActiveContent activeContent}.
         * 
         * The number of the currently active content (1 or 2).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setActiveContent(iActiveContent: number): this;

        /**
            * Sets a new value for property {@link #getAnimation animation}.
         * 
         * Set the used animation when changing content. This just sets a CSS-class named "sapUiUnifiedACSwitcherAnimation" + this value on the root element of the control. The animation has to be implemented in CSS. This also enables applications to implement their own animations via CSS by reacting to the parent class. See the types sap.ui.unified.ContentSwitcherAnimation for default implementations.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setAnimation(sAnimation: string): this;

        /**
            * Changes the currently active content to the other one. If content 1 is active, content 2 will be activated and the other way around.
        */
        public switchContent(): any;

    }

}
