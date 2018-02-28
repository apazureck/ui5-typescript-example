declare module 'sap/m/library' {
    /**
    * Defines the growing direction of the `sap.m.List` or `sap.m.Table`.
    */
    export type ListGrowingDirection = "Downwards" | "Upwards";
    export namespace ListGrowingDirection {
        const Downwards: ListGrowingDirection;
        const Upwards: ListGrowingDirection;
    }
}