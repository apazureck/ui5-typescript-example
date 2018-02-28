declare module 'sap/m/library' {
    /**
    * Different levels for headers.
    */
    export type HeaderLevel = "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
    export namespace HeaderLevel {
        const H1: HeaderLevel;
        const H2: HeaderLevel;
        const H3: HeaderLevel;
        const H4: HeaderLevel;
        const H5: HeaderLevel;
        const H6: HeaderLevel;
    }
}