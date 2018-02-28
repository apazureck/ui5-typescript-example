declare module 'sap/ui/commons/library' {
    /**
    * Possible values for the visualization of float values in the RatingIndicator Control.
    */
    export type RatingIndicatorVisualMode = "Continuous" | "Full" | "Half";
    export namespace RatingIndicatorVisualMode {
        const Continuous: RatingIndicatorVisualMode;
        const Full: RatingIndicatorVisualMode;
        const Half: RatingIndicatorVisualMode;
    }
}