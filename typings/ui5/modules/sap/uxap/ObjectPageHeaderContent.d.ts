declare module "sap/uxap/ObjectPageHeaderContent" {
    import { ObjectPageHeaderDesign } from "sap/uxap/library";

    /**
    
    */
    export default class ObjectPageHeaderContent extends sap.ui.core.Control {


        /**
            * Constructor for a new ObjectPageHeaderContent.
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
            * Creates a new subclass of class sap.uxap.ObjectPageHeaderContent with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * The list of Objects of type sap.ui.core.Control.
        */
        public getContent(): any[];

        /**
            * Gets current value of property {@link #getContentDesign contentDesign}.
         * 
         * Determines the design of the header - Light or Dark. ** Note: **This property is deprecated. It will continue to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.
         * 
         * Default value is `Light`.
        */
        public getContentDesign(): ObjectPageHeaderDesign;

        /**
            * Returns a metadata object for class sap.uxap.ObjectPageHeaderContent.
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
            * Sets a new value for property {@link #getContentDesign contentDesign}.
         * 
         * Determines the design of the header - Light or Dark. ** Note: **This property is deprecated. It will continue to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Light`.
        */
        public setContentDesign(sContentDesign: ObjectPageHeaderDesign): this;

    }

}
