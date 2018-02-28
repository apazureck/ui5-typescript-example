declare module 'sap/ui/ux3/library' {
    /**
    * Defines the order of the sub lists of a list in the ExactBrowser.
    */
    export type ExactOrder = "Fixed" | "Select";
    export namespace ExactOrder {
        const Fixed: ExactOrder;
        const Select: ExactOrder;
    }
}