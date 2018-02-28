declare module 'sap/m/library' {
    /**
    * Enum for possible frame size types for sap.m.TileContent and sap.m.GenericTile control.
    */
    export type FrameType = "Auto" | "OneByOne" | "TwoByOne" | "TwoThirds";
    export namespace FrameType {
        const Auto: FrameType;
        const OneByOne: FrameType;
        const TwoByOne: FrameType;
        const TwoThirds: FrameType;
    }
}