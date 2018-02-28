declare module 'sap/m/library' {
    /**
    * Available options for the layout of container lines along the cross axis of the flexbox layout. ** Note: ** This property has no effect in Internet Explorer 10.
    */
    export type FlexAlignContent = "Center" | "End" | "Inherit" | "SpaceAround" | "SpaceBetween" | "Start" | "Stretch";
    export namespace FlexAlignContent {
        const Center: FlexAlignContent;
        const End: FlexAlignContent;
        const Inherit: FlexAlignContent;
        const SpaceAround: FlexAlignContent;
        const SpaceBetween: FlexAlignContent;
        const Start: FlexAlignContent;
        const Stretch: FlexAlignContent;
    }
}