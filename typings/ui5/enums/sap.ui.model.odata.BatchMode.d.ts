declare module 'sap/ui/model/odata/v2/BatchMode' {
    /**
    * Different modes for retrieving the count of collections
    */
    export type BatchMode = "Group" | "None";
    export namespace BatchMode {
        const Group: BatchMode;
        const None: BatchMode;
    }
}