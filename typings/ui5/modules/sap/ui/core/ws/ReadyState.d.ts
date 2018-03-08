declare module "sap/ui/core/ws/ReadyState" {

    export = ReadyState;



    /** 
* Defines the different ready states for a WebSocket connection. 
*/
    enum ReadyState {
        CLOSED = "CLOSED",
        CLOSING = "CLOSING",
        CONNECTING = "CONNECTING",
        OPEN = "OPEN",
    }


}
