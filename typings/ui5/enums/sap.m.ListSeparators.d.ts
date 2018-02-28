declare module 'sap/m/library' {
    /**
    * Defines which separator style will be applied for the items.
    */
    export type ListSeparators = "All" | "Inner" | "None";
    export namespace ListSeparators {
        const All: ListSeparators;
        const Inner: ListSeparators;
        const None: ListSeparators;
    }
}