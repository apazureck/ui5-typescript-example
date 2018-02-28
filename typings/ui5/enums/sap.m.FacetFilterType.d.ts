declare module 'sap/m/library' {
    /**
    * Used by the FacetFilter control to adapt its design according to type.
    */
    export type FacetFilterType = "Light" | "Simple";
    export namespace FacetFilterType {
        const Light: FacetFilterType;
        const Simple: FacetFilterType;
    }
}