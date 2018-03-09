declare module "sap/m/GroupHeaderListItem" {
    import ListItemBase from "sap/m/ListItemBase";

    /**
    
    */
    export default class GroupHeaderListItem extends ListItemBase {


        /**
            * Constructor for a new GroupHeaderListItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.m.GroupHeaderListItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ListItemBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getCount count}.
         * 
         * Defines the count of items in the group, but it could also be an amount which represents the sum of all amounts in the group. ** Note: ** Will not be displayed if not set.
        */
        public getCount(): string;

        /**
            * Returns a metadata object for class sap.m.GroupHeaderListItem.
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
            * Gets current value of property {@link #getTitle title}.
         * 
         * Defines the title of the group header.
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getTitleTextDirection titleTextDirection}.
         * 
         * Defines the title text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * Default value is `Inherit`.
        */
        public getTitleTextDirection(): sap.ui.core.TextDirection;

        /**
            * Gets current value of property {@link #getUpperCase upperCase}.
         * 
         * Allows to uppercase the group title.
         * 
         * Default value is `false`.
        */
        public getUpperCase(): boolean;

        /**
            * Sets a new value for property {@link #getCount count}.
         * 
         * Defines the count of items in the group, but it could also be an amount which represents the sum of all amounts in the group. ** Note: ** Will not be displayed if not set.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setCount(sCount: string): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Defines the title of the group header.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getTitleTextDirection titleTextDirection}.
         * 
         * Defines the title text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTitleTextDirection(sTitleTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Sets a new value for property {@link #getUpperCase upperCase}.
         * 
         * Allows to uppercase the group title.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setUpperCase(bUpperCase: boolean): this;

    }

}
