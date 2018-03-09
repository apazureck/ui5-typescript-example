declare module "sap/ui/core/ws/ReadyState" {
    /** 
* Defines the different ready states for a WebSocket connection. 
*/


    export default ReadyState;
    enum ReadyState {
        CLOSED = "CLOSED",
        CLOSING = "CLOSING",
        CONNECTING = "CONNECTING",
        OPEN = "OPEN",
    }

}
