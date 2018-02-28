declare module 'sap/m/library' {
    /**
    * Different types for a button (predefined types).
    */
    export type ButtonType = "Accept" | "Back" | "Default" | "Emphasized" | "Reject" | "Transparent" | "Unstyled" | "Up";
    export namespace ButtonType {
        const Accept: ButtonType;
        const Back: ButtonType;
        const Default: ButtonType;
        const Emphasized: ButtonType;
        const Reject: ButtonType;
        const Transparent: ButtonType;
        const Unstyled: ButtonType;
        const Up: ButtonType;
    }
}