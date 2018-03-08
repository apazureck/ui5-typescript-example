declare module "sap/ui/model/odata/CountMode" {

    export = CountMode;



    /** 
* Different modes for retrieving the count of collections. 
*/
    enum CountMode {
        Both = "Both",
        Inline = "Inline",
        InlineRepeat = "InlineRepeat",
        None = "None",
        Request = "Request",
    }


}
