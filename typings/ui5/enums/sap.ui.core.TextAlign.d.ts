declare module 'sap/ui/core/library' {
    /**
    * Configuration options for text alignments.
    */
    export type TextAlign = "Begin" | "Center" | "End" | "Initial" | "Left" | "Right";
    export namespace TextAlign {
        const Begin: TextAlign;
        const Center: TextAlign;
        const End: TextAlign;
        const Initial: TextAlign;
        const Left: TextAlign;
        const Right: TextAlign;
    }
}