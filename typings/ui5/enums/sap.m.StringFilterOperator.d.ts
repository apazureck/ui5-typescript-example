declare module 'sap/m/library' {
    /**
    * Types of string filter operators.
    */
    export type StringFilterOperator = "AnyWordStartsWith" | "Contains" | "Equals" | "StartsWith";
    export namespace StringFilterOperator {
        const AnyWordStartsWith: StringFilterOperator;
        const Contains: StringFilterOperator;
        const Equals: StringFilterOperator;
        const StartsWith: StringFilterOperator;
    }
}