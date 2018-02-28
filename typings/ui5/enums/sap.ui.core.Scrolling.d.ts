declare module 'sap/ui/core/library' {
    /**
    * Defines the possible values for horizontal and vertical scrolling behavior.
    */
    export type Scrolling = "Auto" | "Hidden" | "None" | "Scroll";
    export namespace Scrolling {
        const Auto: Scrolling;
        const Hidden: Scrolling;
        const None: Scrolling;
        const Scroll: Scrolling;
    }
}