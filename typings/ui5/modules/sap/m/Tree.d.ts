declare module "sap/m/Tree" {
    import ListBase from "sap/m/ListBase";

    /**
    
    */
    export default class Tree extends ListBase {


        /**
            * Constructor for a new Tree.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:toggleOpenState toggleOpenState} event of this `sap.m.Tree`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Tree` itself.
         * 
         * Fired when an item has been expanded or collapsed by user interaction.
        */
        attachToggleOpenState<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Index of the expanded/collapsed item */
            itemIndex: number, /* * Binding context of the item */
            itemContext: any, /* * Flag that indicates whether the item has been expanded or collapsed */
            expanded: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:toggleOpenState toggleOpenState} event of this `sap.m.Tree`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Tree` itself.
         * 
         * Fired when an item has been expanded or collapsed by user interaction.
        */
        attachToggleOpenState<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Index of the expanded/collapsed item */
            itemIndex: number, /* * Binding context of the item */
            itemContext: any, /* * Flag that indicates whether the item has been expanded or collapsed */
            expanded: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Collapses all nodes.
        */
        public collapseAll(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:toggleOpenState toggleOpenState} event of this `sap.m.Tree`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachToggleOpenState(fnFunction: Function, oListener: any): this;

        /**
            * Defines the level to which the tree is expanded. The function can be used to define the initial expanding state. An alternative way to define the initial expanding state is to set the parameter `numberOfExpandedLevels` of the binding.
         * 
         * Example: `oTree.bindItems({
         *      path: "...",
         *      parameters: {
         *         numberOfExpandedLevels: 1
         *      }
         *   });`
        */
        public expandToLevel(iLevel: number): this;

        /**
            * Creates a new subclass of class sap.m.Tree with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ListBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:toggleOpenState toggleOpenState} to attached listeners.
        */
        protected fireToggleOpenState(mParameters?: { itemIndex?: number, itemContext?: any, expanded?: boolean, }): this;

        /**
            * Returns a metadata object for class sap.m.Tree.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

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
            * The `growing` property is not supported for control `Tree`.
        */
        public setGrowing(): this;

        /**
            * The `growingDirection` property is not supported for control `Tree`.
        */
        public setGrowingDirection(): this;

        /**
            * The `growingScrollToLoad` property is not supported for control `Tree`.
        */
        public setGrowingScrollToLoad(): this;

        /**
            * The `growingThreshold` property is not supported for control `Tree`.
        */
        public setGrowingThreshold(): this;

        /**
            * The `growingTriggerText` property is not supported for control `Tree`.
        */
        public setGrowingTriggerText(): this;

    }

}
