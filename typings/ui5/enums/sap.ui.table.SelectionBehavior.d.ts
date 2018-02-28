declare module 'sap/ui/table/library' {
    /**
    * Selection behavior of the table
    */
    export type SelectionBehavior = "Row" | "RowOnly" | "RowSelector";
    export namespace SelectionBehavior {
        const Row: SelectionBehavior;
        const RowOnly: SelectionBehavior;
        const RowSelector: SelectionBehavior;
    }
}