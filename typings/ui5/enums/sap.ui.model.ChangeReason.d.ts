declare module 'sap/ui/model/ChangeReason' {
    /**
    * Change Reason for Model/ListBinding/TreeBinding.
    */
    export type ChangeReason = "Add" | "Binding" | "Change" | "Collapse" | "Context" | "Expand" | "Filter" | "Refresh" | "Remove" | "Sort";
    export namespace ChangeReason {
        const Add: ChangeReason;
        const Binding: ChangeReason;
        const Change: ChangeReason;
        const Collapse: ChangeReason;
        const Context: ChangeReason;
        const Expand: ChangeReason;
        const Filter: ChangeReason;
        const Refresh: ChangeReason;
        const Remove: ChangeReason;
        const Sort: ChangeReason;
    }
}