declare module 'sap/ui/core/library' {
    /**
    * Defines the different message types of a message
    */
    export type MessageType = "Error" | "Information" | "None" | "Success" | "Warning";
    export namespace MessageType {
        const Error: MessageType;
        const Information: MessageType;
        const None: MessageType;
        const Success: MessageType;
        const Warning: MessageType;
    }
}