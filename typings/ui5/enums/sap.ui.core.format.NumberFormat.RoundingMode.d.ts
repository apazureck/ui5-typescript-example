declare module 'sap/ui/core/format/NumberFormat' {
    /**
    * Specifies a rounding behavior for numerical operations capable of discarding precision. Each rounding mode in this object indicates how the least significant returned digits of rounded result is to be calculated.
    */
    export type RoundingMode = "AWAY_FROM_ZERO" | "CEILING" | "FLOOR" | "HALF_AWAY_FROM_ZERO" | "HALF_CEILING" | "HALF_FLOOR" | "HALF_TOWARDS_ZERO" | "TOWARDS_ZERO";
    export namespace RoundingMode {
        const AWAY_FROM_ZERO: RoundingMode;
        const CEILING: RoundingMode;
        const FLOOR: RoundingMode;
        const HALF_AWAY_FROM_ZERO: RoundingMode;
        const HALF_CEILING: RoundingMode;
        const HALF_FLOOR: RoundingMode;
        const HALF_TOWARDS_ZERO: RoundingMode;
        const TOWARDS_ZERO: RoundingMode;
    }
}