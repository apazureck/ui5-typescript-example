declare module 'sap/ui/table/library' {
    /**
    * Navigation mode of the table
    */
    export type NavigationMode = "Paginator" | "Scrollbar";
    export namespace NavigationMode {
        const Paginator: NavigationMode;
        const Scrollbar: NavigationMode;
    }
}