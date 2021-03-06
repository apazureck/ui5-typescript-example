declare module "sap/m/StandardTreeItem" {
    import TreeItemBase from "sap/m/TreeItemBase";

    /**
    
    */
    export default class StandardTreeItem extends TreeItemBase {


        /**
            * Constructor for a new StandardTreeItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.m.StandardTreeItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.TreeItemBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Defines the tree item icon.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Returns a metadata object for class sap.m.StandardTreeItem.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Defines the title of the item.
         * 
         * Default value is ``.
        */
        public getTitle(): string;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Defines the tree item icon.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Defines the title of the item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setTitle(sTitle: string): this;

    }

}
