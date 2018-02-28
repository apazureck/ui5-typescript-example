declare module 'sap/m/library' {
    /**
    * Enumeration for possible link-to-anchor conversion strategy.
    */
    export type LinkConversion = "All" | "None" | "ProtocolOnly";
    export namespace LinkConversion {
        const All: LinkConversion;
        const None: LinkConversion;
        const ProtocolOnly: LinkConversion;
    }
}