declare module 'sap/ui/core/library' {
    /**
    * Actions are: Click on track, button, drag of thumb, or mouse wheel click
    */
    export type ScrollBarAction = "Drag" | "MouseWheel" | "Page" | "Step";
    export namespace ScrollBarAction {
        const Drag: ScrollBarAction;
        const MouseWheel: ScrollBarAction;
        const Page: ScrollBarAction;
        const Step: ScrollBarAction;
    }
}