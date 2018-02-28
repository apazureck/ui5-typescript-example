declare module 'sap/ui/commons/library' {
    /**
    * [Enter description for MessageType]
    */
    export type MessageType = "Error" | "Success" | "Warning";
    export namespace MessageType {
        const Error: MessageType;
        const Success: MessageType;
        const Warning: MessageType;
    }
}