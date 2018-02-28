declare module 'sap/ui/model/odata/OperationMode' {
    /**
    * Different modes for executing service operations (filtering, sorting)
    */
    export type OperationMode = "Auto" | "Client" | "Default" | "Server";
    export namespace OperationMode {
        const Auto: OperationMode;
        const Client: OperationMode;
        const Default: OperationMode;
        const Server: OperationMode;
    }
}