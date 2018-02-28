declare module 'sap/ui/core/library' {
    /**
    * Configuration options for text wrapping.
    */
    export type Wrapping = "Hard" | "None" | "Off" | "Soft";
    export namespace Wrapping {
        const Hard: Wrapping;
        const None: Wrapping;
        const Off: Wrapping;
        const Soft: Wrapping;
    }
}