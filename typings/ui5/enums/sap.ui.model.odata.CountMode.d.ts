declare module 'sap/ui/model/odata/CountMode' {
    /**
    * Different modes for retrieving the count of collections.
    */
    export type CountMode = "Both" | "Inline" | "InlineRepeat" | "None" | "Request";
    export namespace CountMode {
        const Both: CountMode;
        const Inline: CountMode;
        const InlineRepeat: CountMode;
        const None: CountMode;
        const Request: CountMode;
    }
}