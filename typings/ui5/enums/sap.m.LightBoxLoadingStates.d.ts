declare module 'sap/m/library' {
    /**
    * Types of LightBox loading stages.
    */
    export type LightBoxLoadingStates = "Error" | "Loaded" | "Loading" | "TimeOutError";
    export namespace LightBoxLoadingStates {
        const Error: LightBoxLoadingStates;
        const Loaded: LightBoxLoadingStates;
        const Loading: LightBoxLoadingStates;
        const TimeOutError: LightBoxLoadingStates;
    }
}