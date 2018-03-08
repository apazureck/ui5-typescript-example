declare module "sap/m/MessageToast" {
    import sapuicorePopup from "sap/ui/core/Popup";
    type Dock = sapuicorePopup.Dock;

    export = MessageToast;



    namespace MessageToast {

        // Methods
        /**
            * Creates and displays a simple message toast notification message with the given text, and optionally other options.
         * 
         * The only mandatory parameter is `sMessage`.
            */
        export function show(sMessage: string, mOptions?: { duration?: number, width?: sap.ui.core.CSSSize, my?: Dock, at?: Dock, of?: sap.ui.core.Control | any | any | any | any, offset?: string, collision?: string, onClose?: Function, autoClose?: boolean, animationTimingFunction?: string, animationDuration?: number, closeOnBrowserNavigation?: boolean, }): any;
    }

}
