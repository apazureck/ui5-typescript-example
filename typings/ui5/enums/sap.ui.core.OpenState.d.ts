declare namespace sap.ui.core {
    /**
    * Defines the different possible states of an element that can be open or closed and does not only toggle between these states, but also spends some time in between (e.g. because of an animation).
    */
    export enum OpenState {
        CLOSED = "CLOSED",
        CLOSING = "CLOSING",
        OPEN = "OPEN",
        OPENING = "OPENING",
    }
}