declare module 'sap/ui/table/library' {
    /**
    * Selection mode of the table
    */
    export type SelectionMode = "Multi" | "MultiToggle" | "None" | "Single";
    export namespace SelectionMode {
        const Multi: SelectionMode;
        const MultiToggle: SelectionMode;
        const None: SelectionMode;
        const Single: SelectionMode;
    }
}