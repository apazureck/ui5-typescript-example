declare module 'sap/m/library' {
    /**
    * Defines how the input display text should be formatted.
    */
    export type InputTextFormatMode = "Key" | "KeyValue" | "Value" | "ValueKey";
    export namespace InputTextFormatMode {
        const Key: InputTextFormatMode;
        const KeyValue: InputTextFormatMode;
        const Value: InputTextFormatMode;
        const ValueKey: InputTextFormatMode;
    }
}