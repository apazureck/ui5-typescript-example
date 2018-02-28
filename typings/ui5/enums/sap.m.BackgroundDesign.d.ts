declare module 'sap/m/library' {
    /**
    * Available Background Design.
    */
    export type BackgroundDesign = "Solid" | "Translucent" | "Transparent";
    export namespace BackgroundDesign {
        const Solid: BackgroundDesign;
        const Translucent: BackgroundDesign;
        const Transparent: BackgroundDesign;
    }
}