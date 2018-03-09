declare module "sap/ui/commons/HorizontalDivider" {
    import { HorizontalDividerHeight } from "sap/ui/commons/library";
    import { HorizontalDividerType } from "sap/ui/commons/library";

    /**
    
    */
    export default class HorizontalDivider extends sap.ui.core.Control {


        /**
            * Constructor for a new HorizontalDivider.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.commons.HorizontalDivider with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Defines the height of the divider.
         * 
         * Default value is `Medium`.
        */
        public getHeight(): HorizontalDividerHeight;

        /**
            * Returns a metadata object for class sap.ui.commons.HorizontalDivider.
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
            * Gets current value of property {@link #getType type}.
         * 
         * Defines the type of the divider.
         * 
         * Default value is `Area`.
        */
        public getType(): HorizontalDividerType;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Defines the width of the divider.
         * 
         * Default value is `100%`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * Defines the height of the divider.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Medium`.
        */
        public setHeight(sHeight: HorizontalDividerHeight): this;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * Defines the type of the divider.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Area`.
        */
        public setType(sType: HorizontalDividerType): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Defines the width of the divider.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }

}
