declare module 'sap/ui/commons/library' {
    /**
    * Background design (i.e. color), e.g. of a layout cell.
    */
    export type BackgroundDesign = "Border" | "Fill1" | "Fill2" | "Fill3" | "Header" | "Plain" | "Transparent";
    export namespace BackgroundDesign {
        const Border: BackgroundDesign;
        const Fill1: BackgroundDesign;
        const Fill2: BackgroundDesign;
        const Fill3: BackgroundDesign;
        const Header: BackgroundDesign;
        const Plain: BackgroundDesign;
        const Transparent: BackgroundDesign;
    }
}