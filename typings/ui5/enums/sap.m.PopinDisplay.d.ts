declare module 'sap/m/library' {
    /**
    * Defines the display of table pop-ins.
    */
    export type PopinDisplay = "Block" | "Inline" | "WithoutHeader";
    export namespace PopinDisplay {
        const Block: PopinDisplay;
        const Inline: PopinDisplay;
        const WithoutHeader: PopinDisplay;
    }
}