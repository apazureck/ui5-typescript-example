declare module 'sap/uxap/library' {
    /**
    * Used by the ObjectSectionBase control to define the importance of the content contained in it.
    */
    export type Importance = "High" | "Low" | "Medium";
    export namespace Importance {
        const High: Importance;
        const Low: Importance;
        const Medium: Importance;
    }
}