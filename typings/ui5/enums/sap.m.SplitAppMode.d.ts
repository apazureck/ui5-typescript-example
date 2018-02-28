declare module 'sap/m/library' {
    /**
    * The mode of SplitContainer or SplitApp control to show/hide the master area.
    */
    export type SplitAppMode = "HideMode" | "PopoverMode" | "ShowHideMode" | "StretchCompressMode";
    export namespace SplitAppMode {
        const HideMode: SplitAppMode;
        const PopoverMode: SplitAppMode;
        const ShowHideMode: SplitAppMode;
        const StretchCompressMode: SplitAppMode;
    }
}