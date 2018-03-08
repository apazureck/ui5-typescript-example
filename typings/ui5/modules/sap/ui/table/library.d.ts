declare module "sap/ui/table/library" {

    export = table;

    namespace table {

    }

    namespace table {

        /** 
    * Details about the group event to distinguish between different actions associated with grouping 
    */
        enum GroupEventType {
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
        enum NavigationMode {
            Paginator = "Paginator",
            Scrollbar = "Scrollbar",
        }

        /** 
    * Row Action types. 
    */
        enum RowActionType {
            Custom = "Custom",
            Delete = "Delete",
            Navigation = "Navigation",
        }

        /** 
    * Selection behavior of the table 
    */
        enum SelectionBehavior {
            Row = "Row",
            RowOnly = "RowOnly",
            RowSelector = "RowSelector",
        }

        /** 
    * Selection mode of the table 
    */
        enum SelectionMode {
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
        enum SharedDomRef {
            HorizontalScrollBar = "HorizontalScrollBar",
            VerticalScrollBar = "VerticalScrollBar",
        }

        /** 
    * Sort order of a column 
    */
        enum SortOrder {
            Ascending = "Ascending",
            Descending = "Descending",
        }

        /** 
    * Different modes for setting the auto expand mode on tree or analytical bindings. 
    */
        enum TreeAutoExpandMode {
        }

        /** 
    * VisibleRowCountMode of the table 
    */
        enum VisibleRowCountMode {
            Auto = "Auto",
            Fixed = "Fixed",
            Interactive = "Interactive",
        }


    }
}
