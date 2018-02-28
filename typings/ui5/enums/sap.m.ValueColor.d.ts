declare module 'sap/m/library' {
    /**
    * Enumeration of possible value color settings.
    */
    export type ValueColor = "Critical" | "Error" | "Good" | "Neutral";
    export namespace ValueColor {
        const Critical: ValueColor;
        const Error: ValueColor;
        const Good: ValueColor;
        const Neutral: ValueColor;
    }
}