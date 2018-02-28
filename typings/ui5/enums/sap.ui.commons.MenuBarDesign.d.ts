declare module 'sap/ui/commons/library' {
    /**
    * Determines the visual design of a MenuBar. The feature might be not supported by all themes.
    */
    export type MenuBarDesign = "Header" | "Standard";
    export namespace MenuBarDesign {
        const Header: MenuBarDesign;
        const Standard: MenuBarDesign;
    }
}