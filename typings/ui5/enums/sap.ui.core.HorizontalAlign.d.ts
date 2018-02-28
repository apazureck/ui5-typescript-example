declare module 'sap/ui/core/library' {
    /**
    * Configuration options for horizontal alignments of controls
    */
    export type HorizontalAlign = "Begin" | "Center" | "End" | "Left" | "Right";
    export namespace HorizontalAlign {
        const Begin: HorizontalAlign;
        const Center: HorizontalAlign;
        const End: HorizontalAlign;
        const Left: HorizontalAlign;
        const Right: HorizontalAlign;
    }
}