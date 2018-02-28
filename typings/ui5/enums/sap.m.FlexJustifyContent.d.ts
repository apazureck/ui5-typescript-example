declare module 'sap/m/library' {
    /**
    * Available options for the layout of elements along the main axis of the flexbox layout.
    */
    export type FlexJustifyContent = "Center" | "End" | "Inherit" | "SpaceAround" | "SpaceBetween" | "Start";
    export namespace FlexJustifyContent {
        const Center: FlexJustifyContent;
        const End: FlexJustifyContent;
        const Inherit: FlexJustifyContent;
        const SpaceAround: FlexJustifyContent;
        const SpaceBetween: FlexJustifyContent;
        const Start: FlexJustifyContent;
    }
}