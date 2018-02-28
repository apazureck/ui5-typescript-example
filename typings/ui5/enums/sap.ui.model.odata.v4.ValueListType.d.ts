declare module 'sap/ui/model/odata/v4/ValueListType' {
    /**
    * Specifies the value list type of a property.
    */
    export type ValueListType = "Fixed" | "None" | "Standard";
    export namespace ValueListType {
        const Fixed: ValueListType;
        const None: ValueListType;
        const Standard: ValueListType;
    }
}