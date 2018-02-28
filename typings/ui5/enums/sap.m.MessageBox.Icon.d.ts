declare module 'sap/m/MessageBox' {
    /**
    * Enumeration of the pre-defined icons that can be used in a MessageBox.
    */
    export type Icon = "ERROR" | "INFORMATION" | "NONE" | "QUESTION" | "SUCCESS" | "WARNING";
    export namespace Icon {
        const ERROR: Icon;
        const INFORMATION: Icon;
        const NONE: Icon;
        const QUESTION: Icon;
        const SUCCESS: Icon;
        const WARNING: Icon;
    }
}