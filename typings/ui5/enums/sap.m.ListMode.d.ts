declare module 'sap/m/library' {
    /**
    * Defines the mode of the list.
    */
    export type ListMode = "Delete" | "MultiSelect" | "None" | "SingleSelect" | "SingleSelectLeft" | "SingleSelectMaster";
    export namespace ListMode {
        const Delete: ListMode;
        const MultiSelect: ListMode;
        const None: ListMode;
        const SingleSelect: ListMode;
        const SingleSelectLeft: ListMode;
        const SingleSelectMaster: ListMode;
    }
}