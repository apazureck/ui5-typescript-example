declare module 'sap/ui/commons/library' {
    /**
    * different styles for a button.
    */
    export type ButtonStyle = "Accept" | "Default" | "Emph" | "Reject";
    export namespace ButtonStyle {
        const Accept: ButtonStyle;
        const Default: ButtonStyle;
        const Emph: ButtonStyle;
        const Reject: ButtonStyle;
    }
}