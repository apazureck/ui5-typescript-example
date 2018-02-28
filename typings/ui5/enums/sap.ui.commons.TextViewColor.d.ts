declare module 'sap/ui/commons/library' {
    /**
    * Semantic Colors of a text.
    */
    export type TextViewColor = "Critical" | "Default" | "Negative" | "Positive";
    export namespace TextViewColor {
        const Critical: TextViewColor;
        const Default: TextViewColor;
        const Negative: TextViewColor;
        const Positive: TextViewColor;
    }
}