declare module 'sap/ui/table/library' {
    /**
    * Details about the group event to distinguish between different actions associated with grouping
    */
    export type GroupEventType = "group" | "hideGroupedColumn" | "moveDown" | "moveUp" | "showGroupedColumn" | "ungroup" | "ungroupAll";
    export namespace GroupEventType {
        const group: GroupEventType;
        const hideGroupedColumn: GroupEventType;
        const moveDown: GroupEventType;
        const moveUp: GroupEventType;
        const showGroupedColumn: GroupEventType;
        const ungroup: GroupEventType;
        const ungroupAll: GroupEventType;
    }
}