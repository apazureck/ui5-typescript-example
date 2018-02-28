declare module 'sap/m/library' {
    /**
    * Defines the keyboard navigation mode.
    */
    export type SelectListKeyboardNavigationMode = "Delimited" | "None";
    export namespace SelectListKeyboardNavigationMode {
        const Delimited: SelectListKeyboardNavigationMode;
        const None: SelectListKeyboardNavigationMode;
    }
}