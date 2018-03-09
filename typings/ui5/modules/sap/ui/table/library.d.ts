declare module "sap/ui/table/library" {
    /**

*/
    export default table;
    namespace table {

    }
    /** 
* Details about the group event to distinguish between different actions associated with grouping 
*/


    export enum GroupEventType {
        group = "group",
        hideGroupedColumn = "hideGroupedColumn",
        moveDown = "moveDown",
        moveUp = "moveUp",
        showGroupedColumn = "showGroupedColumn",
        ungroup = "ungroup",
        ungroupAll = "ungroupAll",
    }

    /** 
* Navigation mode of the table 
*/


    export enum NavigationMode {
        Paginator = "Paginator",
        Scrollbar = "Scrollbar",
    }

    /** 
* Row Action types. 
*/


    export enum RowActionType {
        Custom = "Custom",
        Delete = "Delete",
        Navigation = "Navigation",
    }

    /** 
* Selection behavior of the table 
*/


    export enum SelectionBehavior {
        Row = "Row",
        RowOnly = "RowOnly",
        RowSelector = "RowSelector",
    }

    /** 
* Selection mode of the table 
*/


    export enum SelectionMode {
        Multi = "Multi",
        MultiToggle = "MultiToggle",
        None = "None",
        Single = "Single",
    }

    /** 
* Shared DOM Reference IDs of the table.
 * 
 * Contains IDs of shared DOM references, which should be accessible to inheriting controls via getDomRef() function. 
*/


    export enum SharedDomRef {
        HorizontalScrollBar = "HorizontalScrollBar",
        VerticalScrollBar = "VerticalScrollBar",
    }

    /** 
* Sort order of a column 
*/


    export enum SortOrder {
        Ascending = "Ascending",
        Descending = "Descending",
    }

    /** 
* Different modes for setting the auto expand mode on tree or analytical bindings. 
*/


    export enum TreeAutoExpandMode {
    }

    /** 
* VisibleRowCountMode of the table 
*/


    export enum VisibleRowCountMode {
        Auto = "Auto",
        Fixed = "Fixed",
        Interactive = "Interactive",
    }

}
