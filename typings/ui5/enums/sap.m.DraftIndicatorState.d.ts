declare module 'sap/m/library' {
    /**
    * Enum for the state of {@link sap.m.DraftIndicator} control.
    */
    export type DraftIndicatorState = "Clear" | "Saved" | "Saving";
    export namespace DraftIndicatorState {
        const Clear: DraftIndicatorState;
        const Saved: DraftIndicatorState;
        const Saving: DraftIndicatorState;
    }
}