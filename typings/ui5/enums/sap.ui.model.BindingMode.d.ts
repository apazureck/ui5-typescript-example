declare module 'sap/ui/model/BindingMode' {
    /**
    * Binding type definitions.
    */
    export type BindingMode = "Default" | "OneTime" | "OneWay" | "TwoWay";
    export namespace BindingMode {
        const Default: BindingMode;
        const OneTime: BindingMode;
        const OneWay: BindingMode;
        const TwoWay: BindingMode;
    }
}