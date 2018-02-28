declare module 'sap/m/library' {
    /**
    * Defines the keyboard handling behavior of the `sap.m.List` or `sap.m.Table`.
    */
    export type ListKeyboardMode = "Edit" | "Navigation";
    export namespace ListKeyboardMode {
        const Edit: ListKeyboardMode;
        const Navigation: ListKeyboardMode;
    }
}