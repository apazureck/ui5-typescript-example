declare module 'sap/ui/commons/library' {
    /**
    * Horizontal alignment, e.g. of a layout cell's content within the cell's borders. Note that some values depend on the current locale's writing direction while others do not.
    */
    export type HAlign = "Begin" | "Center" | "End" | "Left" | "Right";
    export namespace HAlign {
        const Begin: HAlign;
        const Center: HAlign;
        const End: HAlign;
        const Left: HAlign;
        const Right: HAlign;
    }
}