declare module 'sap/m/library' {
    /**
    * Enumeration of possible load statuses.
    */
    export type LoadState = "Disabled" | "Failed" | "Loaded" | "Loading";
    export namespace LoadState {
        const Disabled: LoadState;
        const Failed: LoadState;
        const Loaded: LoadState;
        const Loading: LoadState;
    }
}