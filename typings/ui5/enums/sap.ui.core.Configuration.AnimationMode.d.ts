declare module 'sap/ui/core/Configuration' {
    /**
    * Enumerable list with available animation modes.
 * 
 * This enumerable is used to validate the animation mode. Animation modes allow to specify different animation scenarios or levels. The implementation of the Control (JavaScript or CSS) has to be done differently for each animation mode.
    */
    export type AnimationMode = "basic" | "full" | "minimal" | "none";
    export namespace AnimationMode {
        const basic: AnimationMode;
        const full: AnimationMode;
        const minimal: AnimationMode;
        const none: AnimationMode;
    }
}