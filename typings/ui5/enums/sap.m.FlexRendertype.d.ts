declare module 'sap/m/library' {
    /**
    * Determines the type of HTML elements used for rendering controls.
    */
    export type FlexRendertype = "Bare" | "Div" | "List";
    export namespace FlexRendertype {
        const Bare: FlexRendertype;
        const Div: FlexRendertype;
        const List: FlexRendertype;
    }
}