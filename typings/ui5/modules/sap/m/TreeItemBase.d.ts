declare module "sap/m/TreeItemBase" {
    import ListItemBase from "sap/m/ListItemBase";

    /**
    
    */
    export default class TreeItemBase extends ListItemBase {


        /**
            * Constructor for a new TreeItemBase.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.m.TreeItemBase with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ListItemBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets the expanding information of the node.
        */
        public getExpanded(): boolean;

        /**
            * Gets the context of the node.
        */
        public getItemNodeContext(): any;

        /**
            * Gets the node level in the hierarchy.
        */
        public getLevel(): number;

        /**
            * Returns a metadata object for class sap.m.TreeItemBase.
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
            * Gets the parent node control.
        */
        public getParentNode(): this | any;

        /**
            * Gets the context of the parent node control.
        */
        public getParentNodeContext(): any;

        /**
            * Determines if the node is a leaf.
        */
        public isLeaf(): boolean;

        /**
            * Checks if the node is the top level node.
        */
        public isTopLevel(): boolean;

    }

}
