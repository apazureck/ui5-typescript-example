declare module "sap/ui/model/odata/CountMode" {
    /** 
* Different modes for retrieving the count of collections. 
*/


    export default CountMode;
    enum CountMode {
        Both = "Both",
        Inline = "Inline",
        InlineRepeat = "InlineRepeat",
        None = "None",
        Request = "Request",
    }

}
