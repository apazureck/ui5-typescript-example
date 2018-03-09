declare module "sap/ui/model/odata/OperationMode" {
    /** 
* Different modes for executing service operations (filtering, sorting) 
*/


    export default OperationMode;
    enum OperationMode {
        Auto = "Auto",
        Client = "Client",
        Default = "Default",
        Server = "Server",
    }

}
