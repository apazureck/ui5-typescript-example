declare module 'sap/ui/core/library' {
    /**
    * Specifies possible view types
    */
    export namespace mvc {
        export type ViewType = "HTML" | "JS" | "JSON" | "Template" | "XML";
        export namespace ViewType {
            const HTML: mvc.ViewType;
            const JS: mvc.ViewType;
            const JSON: mvc.ViewType;
            const Template: mvc.ViewType;
            const XML: mvc.ViewType;
        }
    }
}