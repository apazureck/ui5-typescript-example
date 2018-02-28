declare module 'sap/ui/core/library' {
    /**
    * Configuration options for vertical alignments, for example of a layout cell content within the borders.
    */
    export type VerticalAlign = "Bottom" | "Inherit" | "Middle" | "Top";
    export namespace VerticalAlign {
        const Bottom: VerticalAlign;
        const Inherit: VerticalAlign;
        const Middle: VerticalAlign;
        const Top: VerticalAlign;
    }
}