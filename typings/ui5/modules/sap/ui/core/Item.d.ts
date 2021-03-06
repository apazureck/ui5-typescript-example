declare module "sap/ui/core/Item" {

    /**
    
    */
    export default class Item extends sap.ui.core.Element {


        /**
            * Constructor for a new Item.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.core.Item with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Enabled items can be selected.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets current value of property {@link #getKey key}.
         * 
         * Can be used as input for subsequent actions.
        */
        public getKey(): string;

        /**
            * Returns a metadata object for class sap.ui.core.Item.
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
         * The text to be displayed for the item.
         * 
         * Default value is ``.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getTextDirection textDirection}.
         * 
         * Options are RTL and LTR. Alternatively, an item can inherit its text direction from its parent control.
         * 
         * Default value is `Inherit`.
        */
        public getTextDirection(): sap.ui.core.TextDirection;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Enabled items can be selected.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getKey key}.
         * 
         * Can be used as input for subsequent actions.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setKey(sKey: string): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * The text to be displayed for the item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getTextDirection textDirection}.
         * 
         * Options are RTL and LTR. Alternatively, an item can inherit its text direction from its parent control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTextDirection(sTextDirection: sap.ui.core.TextDirection): this;

    }

}
