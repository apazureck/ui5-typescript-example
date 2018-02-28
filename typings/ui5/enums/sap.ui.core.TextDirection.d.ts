declare module 'sap/ui/core/library' {
    /**
    * Configuration options for the direction of texts.
    */
    export type TextDirection = "Inherit" | "LTR" | "RTL";
    export namespace TextDirection {
        const Inherit: TextDirection;
        const LTR: TextDirection;
        const RTL: TextDirection;
    }
}