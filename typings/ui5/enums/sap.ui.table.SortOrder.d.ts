declare module 'sap/ui/table/library' {
    /**
    * Sort order of a column
    */
    export type SortOrder = "Ascending" | "Descending";
    export namespace SortOrder {
        const Ascending: SortOrder;
        const Descending: SortOrder;
    }
}