declare module 'sap/m/library' {
    /**
    * Allowed tags for the implementation of the IBar interface.
    */
    export type IBarHTMLTag = "Div" | "Footer" | "Header";
    export namespace IBarHTMLTag {
        const Div: IBarHTMLTag;
        const Footer: IBarHTMLTag;
        const Header: IBarHTMLTag;
    }
}