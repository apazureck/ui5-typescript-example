declare module 'sap/ui/core/library' {
    /**
    * Priorities for general use.
    */
    export type Priority = "High" | "Low" | "Medium" | "None";
    export namespace Priority {
        const High: Priority;
        const Low: Priority;
        const Medium: Priority;
        const None: Priority;
    }
}