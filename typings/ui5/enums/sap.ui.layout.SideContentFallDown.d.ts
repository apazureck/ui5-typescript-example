declare module 'sap/ui/layout/library' {
    /**
    * Types of the DynamicSideContent FallDown options
    */
    export type SideContentFallDown = "BelowL" | "BelowM" | "BelowXL" | "OnMinimumWidth";
    export namespace SideContentFallDown {
        const BelowL: SideContentFallDown;
        const BelowM: SideContentFallDown;
        const BelowXL: SideContentFallDown;
        const OnMinimumWidth: SideContentFallDown;
    }
}