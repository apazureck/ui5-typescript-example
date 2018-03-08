declare module "sap/ui/model/odata/OperationMode" {

    export = OperationMode;



    /** 
* Different modes for executing service operations (filtering, sorting) 
*/
    enum OperationMode {
        Auto = "Auto",
        Client = "Client",
        Default = "Default",
        Server = "Server",
    }


}
