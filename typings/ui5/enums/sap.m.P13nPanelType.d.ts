declare module 'sap/m/library' {
    /**
    * Type of panels used in the personalization dialog.
    */
    export type P13nPanelType = "columns" | "dimeasure" | "filter" | "group" | "sort";
    export namespace P13nPanelType {
        const columns: P13nPanelType;
        const dimeasure: P13nPanelType;
        const filter: P13nPanelType;
        const group: P13nPanelType;
        const sort: P13nPanelType;
    }
}