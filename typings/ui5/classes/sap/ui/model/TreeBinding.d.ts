declare namespace sap.ui.model {

    /**
    
    */
    export class TreeBinding extends sap.ui.model.Binding {


        /**
            * Constructor for TreeBinding
        */
        public constructor(oModel: sap.ui.model.Model, sPath: string, oContext?: any, aFilters?: any[], mParameters?: any, aSorters?: any[]);


        /**
            * Attach event-handler `fnFunction` to the '_filter' event of this `sap.ui.model.TreeBinding`.
         * 
        */
        protected attachFilter(fnFunction: Function, oListener?: any): any;

        /**
            * Detach event-handler `fnFunction` from the '_filter' event of this `sap.ui.model.TreeBinding`.
         * 
        */
        protected detachFilter(fnFunction: Function, oListener?: any): any;

        /**
            * Creates a new subclass of class sap.ui.model.TreeBinding with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.Binding.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Filters the tree according to the filter definitions.
        */
        public filter(aFilters: any[], sFilterType: sap.ui.model.FilterType): any;

        /**
            * Returns the number of child nodes of a specific context
        */
        public getChildCount(oContext: any): number;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.model.TreeBinding.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the current value of the bound target
        */
        public getNodeContexts(oContext: any, iStartIndex: number, iLength: number): any[];

        /**
            * Returns the current value of the bound target
        */
        public getRootContexts(iStartIndex: number, iLength: number): any[];

        /**
            * Returns if the node has child nodes
        */
        public hasChildren(oContext: any): boolean;

        /**
            * Sorts the tree according to the sorter definitions.
        */
        public sort(aSorters: any[]): any;

    }
}