declare module 'sap/ui/commons/library' {
    /**
    * Vertical alignment, e.g. of a layout cell's content within the cell's borders.
    */
    export type VAlign = "Bottom" | "Middle" | "Top";
    export namespace VAlign {
        const Bottom: VAlign;
        const Middle: VAlign;
        const Top: VAlign;
    }
}