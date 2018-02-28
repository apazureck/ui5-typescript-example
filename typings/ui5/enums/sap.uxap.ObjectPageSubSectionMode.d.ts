declare module 'sap/uxap/library' {
    /**
    * Used by the ObjectPageLayout control to define which layout to use (either Collapsed or Expanded).
    */
    export type ObjectPageSubSectionMode = "Collapsed" | "Expanded";
    export namespace ObjectPageSubSectionMode {
        const Collapsed: ObjectPageSubSectionMode;
        const Expanded: ObjectPageSubSectionMode;
    }
}