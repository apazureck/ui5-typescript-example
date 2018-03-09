declare module "sap/m/SelectionDetailsItem" {
    import Item from "sap/ui/core/Item";
    import SelectionDetailsItemLine from "sap/m/SelectionDetailsItemLine";

    /**
    
    */
    export default class SelectionDetailsItem extends sap.ui.core.Element {


        /**
            * Constructor for a new SelectionDetailsItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some action to the aggregation {@link #getActions actions}.
        */
        public addAction(oAction: Item): this;

        /**
            * Adds some line to the aggregation {@link #getLines lines}.
        */
        public addLine(oLine: SelectionDetailsItemLine): this;

        /**
            * Binds aggregation {@link #getLines lines} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindLines(oBindingInfo: any): this;

        /**
            * Destroys all the actions in the aggregation {@link #getActions actions}.
        */
        public destroyActions(): this;

        /**
            * Destroys all the lines in the aggregation {@link #getLines lines}.
        */
        public destroyLines(): this;

        /**
            * Creates a new subclass of class sap.m.SelectionDetailsItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets content of aggregation {@link #getActions actions}.
         * 
         * Contains custom actions shown below the main content of the item.
        */
        public getActions(): any[];

        /**
            * Gets current value of property {@link #getEnableNav enableNav}.
         * 
         * Determines whether or not the item is active and a navigation event is triggered on press.
         * 
         * Default value is `false`.
        */
        public getEnableNav(): boolean;

        /**
            * Returns the public facade of the SelectionDetailsItem for non inner framework usages.
        */
        protected getFacade(): sap.ui.base.Interface;

        /**
            * Gets content of aggregation {@link #getLines lines}.
         * 
         * Contains a record of information about, for example, measures and dimensions. These entries are usually obtained via selection in chart controls.
        */
        public getLines(): any[];

        /**
            * Returns a metadata object for class sap.m.SelectionDetailsItem.
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
            * Checks for the provided `sap.ui.core.Item` in the aggregation {@link #getActions actions}. and returns its index if found or -1 otherwise.
        */
        public indexOfAction(oAction: Item): number;

        /**
            * Checks for the provided `sap.m.SelectionDetailsItemLine` in the aggregation {@link #getLines lines}. and returns its index if found or -1 otherwise.
        */
        public indexOfLine(oLine: SelectionDetailsItemLine): number;

        /**
            * Inserts a action into the aggregation {@link #getActions actions}.
        */
        public insertAction(oAction: Item, iIndex: number): this;

        /**
            * Inserts a line into the aggregation {@link #getLines lines}.
        */
        public insertLine(oLine: SelectionDetailsItemLine, iIndex: number): this;

        /**
            * Removes a action from the aggregation {@link #getActions actions}.
        */
        public removeAction(vAction: number | string | Item): Item;

        /**
            * Removes all the controls from the aggregation {@link #getActions actions}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllActions(): any[];

        /**
            * Removes all the controls from the aggregation {@link #getLines lines}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllLines(): any[];

        /**
            * Removes a line from the aggregation {@link #getLines lines}.
        */
        public removeLine(vLine: number | string | SelectionDetailsItemLine): SelectionDetailsItemLine;

        /**
            * Sets a new value for property {@link #getEnableNav enableNav}.
         * 
         * Determines whether or not the item is active and a navigation event is triggered on press.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEnableNav(bEnableNav: boolean): this;

        /**
            * Unbinds aggregation {@link #getLines lines} from model data.
        */
        public unbindLines(): this;

    }

}
