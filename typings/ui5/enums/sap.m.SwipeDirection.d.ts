declare module 'sap/m/library' {
    /**
    * Directions for swipe event.
    */
    export type SwipeDirection = "Both" | "LeftToRight" | "RightToLeft";
    export namespace SwipeDirection {
        const Both: SwipeDirection;
        const LeftToRight: SwipeDirection;
        const RightToLeft: SwipeDirection;
    }
}