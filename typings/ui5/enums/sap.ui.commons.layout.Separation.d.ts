declare module 'sap/ui/commons/library' {
    /**
    * Separation, e.g. of a layout cell from its neighbor, via a vertical gutter of defined width, with or without a vertical line in its middle.
    */
    export type Separation = "Large" | "LargeWithLine" | "Medium" | "MediumWithLine" | "None" | "Small" | "SmallWithLine";
    export namespace Separation {
        const Large: Separation;
        const LargeWithLine: Separation;
        const Medium: Separation;
        const MediumWithLine: Separation;
        const None: Separation;
        const Small: Separation;
        const SmallWithLine: Separation;
    }
}