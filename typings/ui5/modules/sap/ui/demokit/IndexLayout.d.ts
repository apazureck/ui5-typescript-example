declare module "sap/ui/demokit/IndexLayout" {

    /**
    
    */
    export default class IndexLayout extends sap.ui.core.Control {


        /**
            * Constructor for a new IndexLayout.
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
            * Creates a new subclass of class sap.ui.demokit.IndexLayout with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * The content items
        */
        public getContent(): any[];

        /**
            * Gets current value of property {@link #getEnableScaling enableScaling}.
         * 
         * Whether the given item width/height should be scaled according to the screen size.
         * 
         * Default value is `true`.
        */
        public getEnableScaling(): boolean;

        /**
            * Gets current value of property {@link #getItemHeight itemHeight}.
         * 
         * The height of a content item. Only px values are allowed.
         * 
         * Default value is `200px`.
        */
        public getItemHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getItemWidth itemWidth}.
         * 
         * The width of a content item. Only px values are allowed.
         * 
         * Default value is `200px`.
        */
        public getItemWidth(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.ui.demokit.IndexLayout.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

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
            * Sets a new value for property {@link #getEnableScaling enableScaling}.
         * 
         * Whether the given item width/height should be scaled according to the screen size.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnableScaling(bEnableScaling: boolean): this;

        /**
            * Sets a new value for property {@link #getItemHeight itemHeight}.
         * 
         * The height of a content item. Only px values are allowed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `200px`.
        */
        public setItemHeight(sItemHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getItemWidth itemWidth}.
         * 
         * The width of a content item. Only px values are allowed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `200px`.
        */
        public setItemWidth(sItemWidth: sap.ui.core.CSSSize): this;

    }

}
