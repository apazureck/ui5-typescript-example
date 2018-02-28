declare module 'sap/m/MessageBox' {
    /**
    * Enumeration of supported actions in a MessageBox.
 * 
 * Each action is represented as a button in the message box. The values of this enumeration are used for both, specifying the set of allowed actions as well as reporting back the user choice.
    */
    export type Action = "ABORT" | "CANCEL" | "CLOSE" | "DELETE" | "IGNORE" | "NO" | "OK" | "RETRY" | "YES";
    export namespace Action {
        const ABORT: Action;
        const CANCEL: Action;
        const CLOSE: Action;
        const DELETE: Action;
        const IGNORE: Action;
        const NO: Action;
        const OK: Action;
        const RETRY: Action;
        const YES: Action;
    }
}