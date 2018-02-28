declare module 'sap/m/library' {
    /**
    * Available options for the wrapping behavior of a flex container.
    */
    export type FlexWrap = "NoWrap" | "Wrap" | "WrapReverse";
    export namespace FlexWrap {
        const NoWrap: FlexWrap;
        const Wrap: FlexWrap;
        const WrapReverse: FlexWrap;
    }
}