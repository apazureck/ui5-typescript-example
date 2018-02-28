declare module 'sap/ui/core/library' {
    /**
    * State of the Input Method Editor (IME) for the control.
 * 
 * Depending on its value, it allows users to enter and edit for example Chinese characters.
    */
    export type ImeMode = "Active" | "Auto" | "Disabled" | "Inactive";
    export namespace ImeMode {
        const Active: ImeMode;
        const Auto: ImeMode;
        const Disabled: ImeMode;
        const Inactive: ImeMode;
    }
}