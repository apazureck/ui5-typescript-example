declare module 'sap/ui/core/library' {
    /**
    * Configuration options for the colors of a progress bar
    */
    export type BarColor = "CRITICAL" | "NEGATIVE" | "NEUTRAL" | "POSITIVE";
    export namespace BarColor {
        const CRITICAL: BarColor;
        const NEGATIVE: BarColor;
        const NEUTRAL: BarColor;
        const POSITIVE: BarColor;
    }
}