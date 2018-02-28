declare module 'sap/m/library' {
    /**
    * Types of the Bar design.
    */
    export type BarDesign = "Auto" | "Footer" | "Header" | "SubHeader";
    export namespace BarDesign {
        const Auto: BarDesign;
        const Footer: BarDesign;
        const Header: BarDesign;
        const SubHeader: BarDesign;
    }
}