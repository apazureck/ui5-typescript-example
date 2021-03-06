declare module "sap/ui/model/odata/v4/ODataContextBinding" {
    import Context from "sap/ui/model/odata/v4/Context";
    import ODataModel from "sap/ui/model/odata/v4/ODataModel";

    /**
    
    */
    export default class ODataContextBinding extends sap.ui.model.ContextBinding {


        /**
            * Do ** NOT ** call this private constructor, but rather use {@link sap.ui.model.odata.v4.ODataModel#bindContext} instead!
        */
        public constructor(oModel: ODataModel, sPath: string, oContext?: sap.ui.model.Context, mParameters?: any);


        /**
            * Changes this binding's parameters and refreshes the binding.
         * 
         * If there are pending changes an error is thrown. Use {@link #hasPendingChanges} to check if there are pending changes. If there are changes, call {@link sap.ui.model.odata.v4.ODataModel#submitBatch} to submit the changes or {@link sap.ui.model.odata.v4.ODataModel#resetChanges} to reset the changes before calling {@link #changeParameters}.
         * 
         * The parameters are changed according to the given map of parameters: Parameters with an `undefined` value are removed, the other parameters are set, and missing parameters remain unchanged.
        */
        public changeParameters(mParameters: any): any;

        /**
            * Destroys the object. The object must not be used anymore after this function was called.
        */
        public destroy(): any;

        /**
            * Calls the OData operation that corresponds to this operation binding.
         * 
         * Parameters for the operation must be set via {@link #setParameter} beforehand.
         * 
         * The value of this binding is the result of the operation. To access a result of primitive type, bind a control to the path "value", for example `&lt;Text text="{value}"/&gt;`. If the result has a complex or entity type, you can bind properties as usual, for example `&lt;Text text="{street}"/&gt;`.
        */
        public execute(sGroupId?: string): any;

        /**
            * Creates a new subclass of class sap.ui.model.odata.v4.ODataContextBinding with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.ContextBinding.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns the bound context.
        */
        public getBoundContext(): Context | sap.ui.model.Context;

        /**
            * Return the bound context.
        */
        public getBoundContext(): sap.ui.model.Context;

        /**
            * Returns a metadata object for class sap.ui.model.odata.v4.ODataContextBinding.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns `true` if this binding or its dependent bindings have pending changes, meaning updates that have not yet been successfully sent to the server.
        */
        public hasPendingChanges(): boolean;

        /**
            * Initializes the OData list binding. Fires a 'change' event in case the binding has a resolved path.
        */
        protected initialize(): any;

        /**
            * Method not supported
        */
        public isInitial(): any | boolean;

        /**
            * Returns whether the binding is initial, which means it did not get an initial value yet
        */
        public isInitial(): boolean;

        /**
            * Refreshes the binding, check whether the model data has been changed and fire change event if this is the case. For server side models this should refetch the data from the server. To update a control, even if no data has been changed, e.g. to reset a control after failed validation, please use the parameter bForceUpdate.
        */
        public refresh(bForceUpdate: boolean): any;

        /**
            * Refreshes the binding. Prompts the model to retrieve data from the server using the given group ID and notifies the control that new data is available.
         * 
         * Refresh is supported for bindings which are not relative to a {@link sap.ui.model.odata.v4.Context}.
         * 
         * Note: When calling {@link #refresh} multiple times, the result of the request triggered by the last call determines the binding's data; it is ** independent ** of the order of calls to {@link sap.ui.model.odata.v4.ODataModel#submitBatch} with the given group ID.
         * 
         * If there are pending changes, an error is thrown. Use {@link #hasPendingChanges} to check if there are pending changes. If there are changes, call {@link sap.ui.model.odata.v4.ODataModel#submitBatch} to submit the changes or {@link sap.ui.model.odata.v4.ODataModel#resetChanges} to reset the changes before calling {@link #refresh}.
        */
        public refresh(sGroupId?: string): any;

        /**
            * Resets all pending changes of this binding, see {@link #hasPendingChanges}. Resets also invalid user input.
        */
        public resetChanges(): any;

        /**
            * Method not supported
        */
        public resume(): any;

        /**
            * Sets a parameter for an operation call.
        */
        public setParameter(sParameterName: string, vValue: any): this;

        /**
            * Method not supported
        */
        public suspend(): any;

        /**
            * Returns a string representation of this object including the binding path. If the binding is relative, the parent path is also given, separated by a '|'.
        */
        public toString(): string;

    }

}
