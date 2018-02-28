declare module 'sap/m/library' {
    /**
    * Available options for the layout of individual elements along the cross axis of the flexbox layout overriding the default alignment.
    */
    export type FlexAlignSelf = "Auto" | "Baseline" | "Center" | "End" | "Inherit" | "Start" | "Stretch";
    export namespace FlexAlignSelf {
        const Auto: FlexAlignSelf;
        const Baseline: FlexAlignSelf;
        const Center: FlexAlignSelf;
        const End: FlexAlignSelf;
        const Inherit: FlexAlignSelf;
        const Start: FlexAlignSelf;
        const Stretch: FlexAlignSelf;
    }
}