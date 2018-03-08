declare module "sap/ui/ux3/FacetFilter" {
    import FacetFilterList from "sap/ui/ux3/FacetFilterList";
    import sapuiux3library from "sap/ui/ux3/library";
    type VisibleItemCountMode = sapuiux3library.VisibleItemCountMode;

    export = FacetFilter;




    /**
    
    */
    class FacetFilter extends sap.ui.core.Control {

        /**
            * Constructor for a new FacetFilter.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some list to the aggregation {@link #getLists lists}.
        */
        public addList(oList: FacetFilterList): this;

        /**
            * Destroys all the lists in the aggregation {@link #getLists lists}.
        */
        public destroyLists(): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.FacetFilter with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets content of aggregation {@link #getLists lists}.
         * 
         * Facet Filter list represents the list of the filter values and the title of this list.
        */
        public getLists(): any[];

        /**
            * Returns a metadata object for class sap.ui.ux3.FacetFilter.
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
            * Gets current value of property {@link #getVisibleItemCountMode visibleItemCountMode}.
         * 
         * If the value is "Auto" - the Facet Filter takes the whole available height. If "Fixed" , then the default number of Facet Filter Items (5) is visible.
         * 
         * Default value is `Fixed`.
        */
        public getVisibleItemCountMode(): VisibleItemCountMode;

        /**
            * Checks for the provided `sap.ui.ux3.FacetFilterList` in the aggregation {@link #getLists lists}. and returns its index if found or -1 otherwise.
        */
        public indexOfList(oList: FacetFilterList): number;

        /**
            * Inserts a list into the aggregation {@link #getLists lists}.
        */
        public insertList(oList: FacetFilterList, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getLists lists}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllLists(): any[];

        /**
            * Removes a list from the aggregation {@link #getLists lists}.
        */
        public removeList(vList: number | string | FacetFilterList): FacetFilterList;

        /**
            * Sets a new value for property {@link #getVisibleItemCountMode visibleItemCountMode}.
         * 
         * If the value is "Auto" - the Facet Filter takes the whole available height. If "Fixed" , then the default number of Facet Filter Items (5) is visible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Fixed`.
        */
        public setVisibleItemCountMode(sVisibleItemCountMode: VisibleItemCountMode): this;

    }


}
