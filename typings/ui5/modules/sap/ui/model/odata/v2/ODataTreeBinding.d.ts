declare module "sap/ui/model/odata/v2/ODataTreeBinding" {
    import OperationMode from "sap/ui/model/odata/OperationMode";

    export = ODataTreeBinding;




    /**
    
    */
    class ODataTreeBinding extends sap.ui.model.TreeBinding {

        /**
            
        */
        public constructor(oModel: sap.ui.model.Model, sPath: string, oContext: sap.ui.model.Context, aApplicationFilters?: any[], mParameters?: { treeAnnotationProperties?: any, navigation?: any, numberOfExpandedLevels?: number, rootLevel?: number, batchGroupId?: string, groupId?: string, operationMode?: OperationMode, threshold?: number, useServersideApplicationFilters?: boolean, treeState?: boolean, }, aSorters?: any[]);


        /**
            * Creates a new subclass of class sap.ui.model.odata.v2.ODataTreeBinding with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.TreeBinding.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Filters the tree according to the filter definitions.
        */
        public filter(aFilters: any[], sFilterType: sap.ui.model.FilterType): any;

        /**
            * Applies the given filters to the ODataTreeBinding. Please note that "Control" filters are not supported for OperationMode.Server, here only "Application" filters are allowed. Filters given via the constructor are always Application filters and will be send with every backend-request. Please see the constructor documentation for more information.
         * 
         * Since 1.34.0 complete clientside filtering is supported for OperationMode.Client and in OperationMode.Auto, in case the backend-count is lower than the threshold. In this case all control and application filters will be applied on the client. See also: {@link sap.ui.model.odata.OperationMode.Auto}, {@link sap.ui.model.FilterType}.
         * 
         * For the OperationMode.Client and OperationMode.Auto, you may also specify the "useServersideApplicationFilters" constructor binding parameter. If this is set, the Application filters will always be applied on the backend, and thus trigger an OData request. Please see the constructor documentation for more information.
        */
        public filter(aFilters: any[] | sap.ui.model.Filter, sFilterType: sap.ui.model.FilterType): this;

        /**
            * Returns the number of child nodes. This function is not available when the annotation "hierarchy-node-descendant-count-for" is exposed on the service.
        */
        public getChildCount(oContext: any): number;

        /**
            * Get a download URL with the specified format considering the sort/filter/custom parameters.
        */
        public getDownloadUrl(sFormat: string): string;

        /**
            * Returns a metadata object for class sap.ui.model.odata.v2.ODataTreeBinding.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the contexts of the child nodes for the given context. This function is not available when the annotation "hierarchy-node-descendant-count-for" is exposed on the service.
        */
        public getNodeContexts(oContext: sap.ui.model.Context, iStartIndex: number, iLength: number, iThreshold?: number): any[];

        /**
            * Returns root contexts for the tree. You can specify the start index and the length for paging requests. This function is not available when the annotation "hierarchy-node-descendant-count-for" is exposed on the service.
        */
        public getRootContexts(iStartIndex?: number, iLength?: number, iThreshold?: number): any[];

        /**
            * Returns the rootLevel
        */
        public getRootLevel(): number;

        /**
            * Returns if the node has child nodes. If the ODataTreeBinding is running with hierarchy annotations, a context with the property values "expanded" or "collapsed" for the drilldown state property, returns true. Entities with drilldown state "leaf" return false.
         * 
         * This function is not available when the annotation "hierarchy-node-descendant-count-for" is exposed on the service.
        */
        public hasChildren(oContext: sap.ui.model.Context): boolean;

        /**
            * Returns if the node has child nodes
        */
        public hasChildren(oContext: any): boolean;

        /**
            * Initialize the binding. The message should be called when creating a binding. The default implementation calls checkUpdate(true).
        */
        protected initialize(): any;

        /**
            * Initialize binding. Fires a change if data is already available ($expand) or a refresh. If metadata is not yet available, do nothing, method will be called again when metadata is loaded.
        */
        protected initialize(): this;

        /**
            * Refreshes the binding, check whether the model data has been changed and fire change event if this is the case. For server side models this should refetch the data from the server. To update a control, even if no data has been changed, e.g. to reset a control after failed validation, please use the parameter bForceUpdate.
        */
        public refresh(bForceUpdate?: boolean, sGroupId?: string): any;

        /**
            * Sets the rootLevel The root level is the level of the topmost tree nodes, which will be used as an entry point for OData services. This is only possible (and necessary) for OData services implementing the hierarchy annotation specification, or when providing the annotation information locally as a binding parameter. See the constructor for API documentation on this.
        */
        public setRootLevel(iRootLevel: number): any;

        /**
            * Sorts the Tree according to the given Sorter(s). In OperationMode.Client or OperationMode.Auto (if the given threshold is satisfied), the sorters are applied locally on the client.
        */
        public sort(aSorters: any[] | sap.ui.model.Sorter): this;

        /**
            * Sorts the tree according to the sorter definitions.
        */
        public sort(aSorters: any[]): any;

    }


}
