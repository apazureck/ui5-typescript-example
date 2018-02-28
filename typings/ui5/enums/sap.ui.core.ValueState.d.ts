declare module 'sap/ui/core/library' {
    /**
    * Marker for the correctness of the current value.
    */
    export type ValueState = "Error" | "None" | "Success" | "Warning";
    export namespace ValueState {
        const Error: ValueState;
        const None: ValueState;
        const Success: ValueState;
        const Warning: ValueState;
    }
}