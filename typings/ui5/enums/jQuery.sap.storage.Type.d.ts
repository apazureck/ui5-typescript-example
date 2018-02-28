declare namespace jQuery.sap.storage {
    /**
    * Enumeration of the storage types supported by {@link jQuery.sap.storage.Storage}
    */
    export type Type = "global" | "local" | "session";
    export namespace Type {
        const global: Type;
        const local: Type;
        const session: Type;
    }
}