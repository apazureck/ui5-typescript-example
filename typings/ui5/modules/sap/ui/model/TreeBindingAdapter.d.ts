declare module "sap/ui/model/TreeBindingAdapter" {
    import SelectionModel from "sap/ui/model/SelectionModel";

    export default class TreeBindingAdapter {


        /**
            * Adapter for TreeBindings to add the ListBinding functionality and use the tree structure in list based controls.
        */
        public constructor();


        /**
            * Calculate the request length based on the given information
        */
        protected _calculateRequestLength(iMaxGroupSize: number, oSection: any): any;

        /**
            * Attach event-handler `fnFunction` to the 'selectionChanged' event of this `sap.ui.model.SelectionModel`.
         *  Event is fired if the selection of tree nodes is changed in any way.
        */
        public attachSelectionChanged(fnFunction: Function, oListener?: any): SelectionModel;

        /**
            * Attach event-handler `fnFunction` to the 'selectionChanged' event of this `sap.ui.model.SelectionModel`.
         *  Event is fired if the selection of tree nodes is changed in any way.
        */
        public attachSelectionChanged(oData: any, fnFunction: Function, oListener?: any): SelectionModel;

        /**
            * Detach event-handler `fnFunction` from the 'selectionChanged' event of this `sap.ui.model.SelectionModel`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachSelectionChanged(fnFunction: Function, oListener: any): SelectionModel;

        /**
            * Fire event 'selectionChanged' to attached listeners.
         * 
         * Expects following event parameters:  * 'leadIndex' of type `int` Lead selection index. * 'rowIndices' of type `int[]` Other selected indices (if available) 
        */
        protected fireSelectionChanged(mArguments: { leadIndex: number, rowIndices?: any[], }): SelectionModel;

        /**
            * Retrieves the requested part from the tree and returns node objects.
        */
        protected getNodes(iStartIndex: number, iLength: number, iThreshold: number): any;

    }

}
