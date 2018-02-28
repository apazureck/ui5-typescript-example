declare module 'sap/ui/table/library' {
    /**
    * Shared DOM Reference IDs of the table.
 * 
 * Contains IDs of shared DOM references, which should be accessible to inheriting controls via getDomRef() function.
    */
    export type SharedDomRef = "HorizontalScrollBar" | "VerticalScrollBar";
    export namespace SharedDomRef {
        const HorizontalScrollBar: SharedDomRef;
        const VerticalScrollBar: SharedDomRef;
    }
}