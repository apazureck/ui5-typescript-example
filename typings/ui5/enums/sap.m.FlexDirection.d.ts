declare module 'sap/m/library' {
    /**
    * Available directions for flex layouts.
    */
    export type FlexDirection = "Column" | "ColumnReverse" | "Inherit" | "Row" | "RowReverse";
    export namespace FlexDirection {
        const Column: FlexDirection;
        const ColumnReverse: FlexDirection;
        const Inherit: FlexDirection;
        const Row: FlexDirection;
        const RowReverse: FlexDirection;
    }
}