declare module 'sap/ui/layout/library' {
    /**
    * A string type that is used inside the BlockLayoutCell to set a predefined set of color shades for the cells. The colors are defined with sap.ui.layout.BlockLayoutCellColorSet. And this is for the shades only.
    */
    export type BlockLayoutCellColorShade = "ShadeA" | "ShadeB" | "ShadeC" | "ShadeD";
    export namespace BlockLayoutCellColorShade {
        const ShadeA: BlockLayoutCellColorShade;
        const ShadeB: BlockLayoutCellColorShade;
        const ShadeC: BlockLayoutCellColorShade;
        const ShadeD: BlockLayoutCellColorShade;
    }
}