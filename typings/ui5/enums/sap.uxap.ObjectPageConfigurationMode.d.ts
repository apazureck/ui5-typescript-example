declare module 'sap/uxap/library' {
    /**
    * Used by the sap.uxap.component.Component how to initialize the ObjectPageLayout sections and subsections.
    */
    export type ObjectPageConfigurationMode = "JsonModel" | "JsonURL";
    export namespace ObjectPageConfigurationMode {
        const JsonModel: ObjectPageConfigurationMode;
        const JsonURL: ObjectPageConfigurationMode;
    }
}