declare module 'sap/ui/model/FilterOperator' {
    /**
    * Operators for the Filter.
    */
    export type FilterOperator = "All" | "Any" | "BT" | "Contains" | "EndsWith" | "EQ" | "GE" | "GT" | "LE" | "LT" | "NE" | "StartsWith";
    export namespace FilterOperator {
        const All: FilterOperator;
        const Any: FilterOperator;
        const BT: FilterOperator;
        const Contains: FilterOperator;
        const EndsWith: FilterOperator;
        const EQ: FilterOperator;
        const GE: FilterOperator;
        const GT: FilterOperator;
        const LE: FilterOperator;
        const LT: FilterOperator;
        const NE: FilterOperator;
        const StartsWith: FilterOperator;
    }
}