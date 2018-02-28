declare module 'sap/m/library' {
    /**
    * Defines the mode of GenericTile.
    */
    export type GenericTileMode = "ContentMode" | "HeaderMode" | "LineMode";
    export namespace GenericTileMode {
        const ContentMode: GenericTileMode;
        const HeaderMode: GenericTileMode;
        const LineMode: GenericTileMode;
    }
}