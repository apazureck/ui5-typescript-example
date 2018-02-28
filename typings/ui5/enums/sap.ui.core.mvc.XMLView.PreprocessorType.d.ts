declare module 'sap/ui/core/mvc/XMLView' {
    /**
    * Specifies the available preprocessor types for XMLViews
    */
    export type PreprocessorType = "CONTROLS" | "VIEWXML" | "XML";
    export namespace PreprocessorType {
        const CONTROLS: PreprocessorType;
        const VIEWXML: PreprocessorType;
        const XML: PreprocessorType;
    }
}