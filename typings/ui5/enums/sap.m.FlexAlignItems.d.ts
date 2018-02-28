declare module 'sap/m/library' {
    /**
    * Available options for the layout of all elements along the cross axis of the flexbox layout.
    */
    export type FlexAlignItems = "Baseline" | "Center" | "End" | "Inherit" | "Start" | "Stretch";
    export namespace FlexAlignItems {
        const Baseline: FlexAlignItems;
        const Center: FlexAlignItems;
        const End: FlexAlignItems;
        const Inherit: FlexAlignItems;
        const Start: FlexAlignItems;
        const Stretch: FlexAlignItems;
    }
}