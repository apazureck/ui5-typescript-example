declare module 'sap/ui/commons/library' {
    /**
    * States for TriStateCheckBox
    */
    export type TriStateCheckBoxState = "Checked" | "Mixed" | "Unchecked";
    export namespace TriStateCheckBoxState {
        const Checked: TriStateCheckBoxState;
        const Mixed: TriStateCheckBoxState;
        const Unchecked: TriStateCheckBoxState;
    }
}