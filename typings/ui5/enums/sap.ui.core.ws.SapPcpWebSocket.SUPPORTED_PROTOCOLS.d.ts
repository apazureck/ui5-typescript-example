declare module 'sap/ui/core/ws/SapPcpWebSocket' {
    /**
    * Protocol versions.
 * 
 * One (or more) of these have to be selected to create an SapPcpWebSocket connection (or no protocol at all).
    */
    export type SUPPORTED_PROTOCOLS = "v10";
    export namespace SUPPORTED_PROTOCOLS {
        const v10: SUPPORTED_PROTOCOLS;
    }
}