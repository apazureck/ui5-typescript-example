declare module 'sap/ui/core/library' {
    /**
    * Defines the different possible states of an element that can be open or closed and does not only toggle between these states, but also spends some time in between (e.g. because of an animation).
    */
    export type OpenState = "CLOSED" | "CLOSING" | "OPEN" | "OPENING";
    export namespace OpenState {
        const CLOSED: OpenState;
        const CLOSING: OpenState;
        const OPEN: OpenState;
        const OPENING: OpenState;
    }
}