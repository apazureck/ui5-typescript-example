declare module 'sap/ui/layout/library' {
    /**
    * The position of the Grid. Can be "Left", "Center" or "Right". "Left" is default.
    */
    export type GridPosition = "Center" | "Left" | "Right";
    export namespace GridPosition {
        const Center: GridPosition;
        const Left: GridPosition;
        const Right: GridPosition;
    }
}