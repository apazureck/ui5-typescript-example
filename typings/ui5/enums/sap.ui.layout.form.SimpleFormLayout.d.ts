declare module 'sap/ui/layout/library' {
    /**
    * Available `FormLayouts` used to render a `SimpleForm`.
    */
    export type SimpleFormLayout = "GridLayout" | "ResponsiveGridLayout" | "ResponsiveLayout";
    export namespace SimpleFormLayout {
        const GridLayout: SimpleFormLayout;
        const ResponsiveGridLayout: SimpleFormLayout;
        const ResponsiveLayout: SimpleFormLayout;
    }
}