declare module 'sap/ui/commons/library' {
    /**
    * Determines the visual design of a Toolbar.
    */
    export type ToolbarDesign = "Flat" | "Standard" | "Transparent";
    export namespace ToolbarDesign {
        const Flat: ToolbarDesign;
        const Standard: ToolbarDesign;
        const Transparent: ToolbarDesign;
    }
}