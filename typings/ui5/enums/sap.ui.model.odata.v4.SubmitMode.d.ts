declare module 'sap/ui/model/odata/v4/SubmitMode' {
    /**
    * Modes to control the use of batch requests for a group ID.
    */
    export type SubmitMode = "API" | "Auto" | "Direct";
    export namespace SubmitMode {
        const API: SubmitMode;
        const Auto: SubmitMode;
        const Direct: SubmitMode;
    }
}