declare module "sap/ui/model/odata/v4/ODataModel" {
    import Context from "sap/ui/model/odata/v4/Context";
    import ODataContextBinding from "sap/ui/model/odata/v4/ODataContextBinding";
    import OperationMode from "sap/ui/model/odata/OperationMode";
    import ODataListBinding from "sap/ui/model/odata/v4/ODataListBinding";
    import ODataPropertyBinding from "sap/ui/model/odata/v4/ODataPropertyBinding";
    import ODataMetaModel from "sap/ui/model/odata/v4/ODataMetaModel";
    /**

*/
    namespace v4 {

    }

    /**
    
    */
    export default class ODataModel extends sap.ui.model.Model {


        /**
            * Constructor for a new ODataModel.
        */
        public constructor(mParameters: { annotationURI?: string | any[], autoExpandSelect?: boolean, groupId?: string, groupProperties?: any, odataVersion?: string, operationMode?: OperationMode, serviceUrl: string, supportReferences?: boolean, synchronizationMode: string, updateGroupId?: string, });


        /**
            * Creates a new context binding for the given path, context and parameters.
         * 
         * This binding is inactive and will not know the bound context initially. You have to call {@link sap.ui.model.Binding#initialize} to get it updated asynchronously and register a change listener at the binding to be informed when the bound context is available.
        */
        public bindContext(sPath: string, oContext?: Context, mParameters?: { $$groupId?: string, $$updateGroupId?: string, }): ODataContextBinding | sap.ui.model.ContextBinding;

        /**
            * Create ContextBinding
        */
        public bindContext(sPath: string | any, oContext?: any, mParameters?: any, oEvents?: any): sap.ui.model.ContextBinding;

        /**
            * Implement in inheriting classes
        */
        public bindList(sPath: string, oContext?: any, aSorters?: sap.ui.model.Sorter, aFilters?: any[], mParameters?: any): sap.ui.model.ListBinding;

        /**
            * Creates a new list binding for the given path and optional context which must resolve to an absolute OData path for an entity set.
        */
        public bindList(sPath: string, oContext?: sap.ui.model.Context, vSorters?: sap.ui.model.Sorter | any[], vFilters?: sap.ui.model.Filter | any[], mParameters?: { operationMode?: OperationMode, $$groupId?: string, $$updateGroupId?: string, }): ODataListBinding | sap.ui.model.ListBinding;

        /**
            * Creates a new property binding for the given path. This binding is inactive and will not know the property value initially. You have to call {@link sap.ui.model.Binding#initialize} to get it updated asynchronously and register a change listener at the binding to be informed when the value is available.
        */
        public bindProperty(sPath: string, oContext?: sap.ui.model.Context, mParameters?: { $$groupId?: string, }): ODataPropertyBinding | sap.ui.model.PropertyBinding;

        /**
            * Implement in inheriting classes
        */
        public bindProperty(sPath: string, oContext?: any, mParameters?: any): sap.ui.model.PropertyBinding;

        /**
            * Method not supported
        */
        public bindTree(): any | sap.ui.model.TreeBinding;

        /**
            * Implement in inheriting classes
        */
        public bindTree(sPath: string, oContext?: any, aFilters?: any[], mParameters?: any, aSorters?: any[]): sap.ui.model.TreeBinding;

        /**
            * Creates a binding context for the given path. A relative path can only be resolved if a context is provided. Note: The parameters `mParameters`, `fnCallBack`, and `bReload` from {@link sap.ui.model.Model#createBindingContext} are not supported.
         * 
         * It is possible to create binding contexts pointing to metadata. A '##' is recognized as separator in the resolved path and splits it into two parts; note that '#' may also be used as separator but is deprecated since 1.51. The part before the separator is transformed into a metadata context (see {@link sap.ui.model.odata.v4.ODataMetaModel#getMetaContext}). The part following the separator is then interpreted relative to this metadata context, even if it starts with a '/'; a trailing '/' is allowed here, see {@link sap.ui.model.odata.v4.ODataMetaModel#requestObject} for the effect it has.
         * 
         * Examples:  <li>`/Products('42')/Name#@com.sap.vocabularies.Common.v1.Label` points to the "Label" annotation of the "Name" property of the entity set "Products". <li>`/#Products/Name@com.sap.vocabularies.Common.v1.Label` has no data path part and thus starts at the metadata root. It also points to the "Label" annotation of the "Name" property of the entity set "Products". <li>`/Products#/` points to the entity type (note the trailing '/') of the entity set "Products". 
        */
        public createBindingContext(sPath: string, oContext?: sap.ui.model.Context): sap.ui.model.Context;

        /**
            * Destroys this model and its meta model.
        */
        public destroy(): any;

        /**
            * Method not supported
        */
        public destroyBindingContext(): any;

        /**
            * Creates a new subclass of class sap.ui.model.odata.v4.ODataModel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.Model.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns the model's group ID.
        */
        public getGroupId(): string;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.model.odata.v4.ODataModel.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the meta model associated with this model if it is available for the concrete model type.
        */
        public getMetaModel(): sap.ui.model.MetaModel;

        /**
            * Returns the meta model for this ODataModel.
        */
        public getMetaModel(): ODataMetaModel | sap.ui.model.MetaModel;

        /**
            * Method not supported
        */
        public getObject(): any;

        /**
            * Returns the version of the OData service.
        */
        public getODataVersion(): string;

        /**
            * Method not supported
        */
        public getOriginalProperty(): any;

        /**
            * Method not supported
        */
        public getProperty(): any;

        /**
            * Returns the model's update group ID.
        */
        public getUpdateGroupId(): string;

        /**
            * Returns `true` if there are pending changes, meaning updates or created entities (see {@link sap.ui.model.odata.v4.ODataListBinding#create}) that have not yet been successfully sent to the server.
        */
        public hasPendingChanges(): boolean;

        /**
            * Refreshes the model by calling refresh on all bindings which have a change event handler attached.
         * 
         * Note: When calling {@link #refresh} multiple times, the result of the request triggered by the last call determines the model's data; it is ** independent ** of the order of calls to {@link #submitBatch} with the given group ID.
         * 
         * If there are pending changes, an error is thrown. Use {@link #hasPendingChanges} to check if there are pending changes. If there are changes, call {@link #submitBatch} to submit the changes or {@link #resetChanges} to reset the changes before calling {@link #refresh}.
        */
        public refresh(sGroupId?: string): any;

        /**
            * Refresh the model. This will check all bindings for updated data and update the controls if data has been changed.
        */
        public refresh(bForceUpdate: boolean): any;

        /**
            * Returns a promise for the "canonical path" of the entity for the given context. According to "4.3.1 Canonical URL" of the specification "OData Version 4.0 Part 2: URL Conventions", this is the "name of the entity set associated with the entity followed by the key predicate identifying the entity within the collection". Use the canonical path in {@link sap.ui.core.Element#bindElement} to create an element binding.
        */
        public requestCanonicalPath(oEntityContext: Context): any;

        /**
            * Resets all property changes and created entities associated with the given group ID which have not been successfully submitted via {@link #submitBatch}. Resets also invalid user input for the same group ID. This function does not reset the deletion of entities (see {@link sap.ui.model.odata.v4.Context#delete}) and the execution of OData operations (see {@link sap.ui.model.odata.v4.ODataContextBinding#execute}).
        */
        public resetChanges(sGroupId?: string): any;

        /**
            * Method not supported
        */
        public setLegacySyntax(): any;

        /**
            * Submits the requests associated with the given application group ID in one batch request.
        */
        public submitBatch(sGroupId: string): any;

        /**
            * Returns a string representation of this object including the service URL.
        */
        public toString(): string;

    }

}
