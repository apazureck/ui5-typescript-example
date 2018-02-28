declare module 'sap/ui/layout/library' {
    /**
    * A string type that is used inside the BlockLayoutRow to set predefined set of colors the cells inside the control. Color sets depend on sap.ui.layout.BlockBackgroundType
    */
    export type BlockRowColorSets = "ColorSet1" | "ColorSet2" | "ColorSet3" | "ColorSet4";
    export namespace BlockRowColorSets {
        const ColorSet1: BlockRowColorSets;
        const ColorSet2: BlockRowColorSets;
        const ColorSet3: BlockRowColorSets;
        const ColorSet4: BlockRowColorSets;
    }
}