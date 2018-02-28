declare module 'sap/ui/table/library' {
    /**
    * Row Action types.
    */
    export type RowActionType = "Custom" | "Delete" | "Navigation";
    export namespace RowActionType {
        const Custom: RowActionType;
        const Delete: RowActionType;
        const Navigation: RowActionType;
    }
}