declare module 'sap/ui/commons/library' {
    /**
    * Distinct paginator event types
    */
    export type PaginatorEvent = "First" | "Goto" | "Last" | "Next" | "Previous";
    export namespace PaginatorEvent {
        const First: PaginatorEvent;
        const Goto: PaginatorEvent;
        const Last: PaginatorEvent;
        const Next: PaginatorEvent;
        const Previous: PaginatorEvent;
    }
}