declare namespace sap.m.MessageToast {

    // Methods
    /**
        * Creates and displays a simple message toast notification message with the given text, and optionally other options.
     * 
     * The only mandatory parameter is `sMessage`.
        */
    export function show(sMessage: string, mOptions?: { duration?: number, width?: sap.ui.core.CSSSize, my?: any, at?: any, of?: any | any | any | any | any, offset?: string, collision?: string, onClose?: Function, autoClose?: boolean, animationTimingFunction?: string, animationDuration?: number, closeOnBrowserNavigation?: boolean, }): any;
}