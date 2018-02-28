declare module 'sap/ui/commons/library' {
    /**
    * Value set for the background design of areas
    */
    export type AreaDesign = "Fill" | "Plain" | "Transparent";
    export namespace AreaDesign {
        const Fill: AreaDesign;
        const Plain: AreaDesign;
        const Transparent: AreaDesign;
    }
}