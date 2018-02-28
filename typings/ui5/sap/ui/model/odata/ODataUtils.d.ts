declare module "sap/ui/model/odata/ODataUtils" {




    // Methods
    /**
        * Adapter for TreeBindings to add the ListBinding functionality and use the tree structure in list based controls. Only usable with the sap.ui.table.TreeTable control. The functions defined here are only available when you are using a TreeTable and an ODataModel.
        */
    export function ODataTreeBindingAdapter(): any;/**
    * Adapter for TreeBindings to add the ListBinding functionality and use the tree structure in list based controls.
    */
    export function ODataTreeBindingFlat(): any;
}