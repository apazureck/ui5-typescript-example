declare module 'sap/ui/core/library' {
    /**
    * Enumaration for different HistoryDirections
    */
    export namespace routing {
        export type HistoryDirection = "Backwards" | "Forwards" | "NewEntry" | "Unknown";
        export namespace HistoryDirection {
            const Backwards: routing.HistoryDirection;
            const Forwards: routing.HistoryDirection;
            const NewEntry: routing.HistoryDirection;
            const Unknown: routing.HistoryDirection;
        }
    }
}