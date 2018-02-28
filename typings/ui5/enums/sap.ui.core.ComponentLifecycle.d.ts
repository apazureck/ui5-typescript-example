declare module 'sap/ui/core/library' {
    /**
    * Enumeration for different lifecycle behaviors of Components created by the ComponentContainer.
    */
    export type ComponentLifecycle = "Application" | "Container" | "Legacy";
    export namespace ComponentLifecycle {
        const Application: ComponentLifecycle;
        const Container: ComponentLifecycle;
        const Legacy: ComponentLifecycle;
    }
}