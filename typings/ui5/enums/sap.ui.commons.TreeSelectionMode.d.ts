declare module 'sap/ui/commons/library' {
    /**
    * Selection mode of the tree
    */
    export type TreeSelectionMode = "Legacy" | "Multi" | "None" | "Single";
    export namespace TreeSelectionMode {
        const Legacy: TreeSelectionMode;
        const Multi: TreeSelectionMode;
        const None: TreeSelectionMode;
        const Single: TreeSelectionMode;
    }
}