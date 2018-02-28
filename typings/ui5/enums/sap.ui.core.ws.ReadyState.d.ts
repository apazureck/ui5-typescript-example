declare module 'sap/ui/core/ws/ReadyState' {
    /**
    * Defines the different ready states for a WebSocket connection.
    */
    export type ReadyState = "CLOSED" | "CLOSING" | "CONNECTING" | "OPEN";
    export namespace ReadyState {
        const CLOSED: ReadyState;
        const CLOSING: ReadyState;
        const CONNECTING: ReadyState;
        const OPEN: ReadyState;
    }
}