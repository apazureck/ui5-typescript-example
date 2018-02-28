declare module 'sap/ui/commons/library' {
    /**
    * Determines the visual design of a RowRepeater.
    */
    export type RowRepeaterDesign = "BareShell" | "Standard" | "Transparent";
    export namespace RowRepeaterDesign {
        const BareShell: RowRepeaterDesign;
        const Standard: RowRepeaterDesign;
        const Transparent: RowRepeaterDesign;
    }
}