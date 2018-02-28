declare module 'sap/ui/layout/library' {
    /**
    * Types of the DynamicSideContent Visibility options
    */
    export type SideContentVisibility = "AlwaysShow" | "NeverShow" | "ShowAboveL" | "ShowAboveM" | "ShowAboveS";
    export namespace SideContentVisibility {
        const AlwaysShow: SideContentVisibility;
        const NeverShow: SideContentVisibility;
        const ShowAboveL: SideContentVisibility;
        const ShowAboveM: SideContentVisibility;
        const ShowAboveS: SideContentVisibility;
    }
}