declare module 'sap/ui/table/library' {
    /**
    * VisibleRowCountMode of the table
    */
    export type VisibleRowCountMode = "Auto" | "Fixed" | "Interactive";
    export namespace VisibleRowCountMode {
        const Auto: VisibleRowCountMode;
        const Fixed: VisibleRowCountMode;
        const Interactive: VisibleRowCountMode;
    }
}