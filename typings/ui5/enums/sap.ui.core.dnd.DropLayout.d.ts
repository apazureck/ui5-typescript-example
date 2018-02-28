declare module 'sap/ui/core/library' {
    /**
    * Configuration options for the layout of the droppable controls.
    */
    export namespace dnd {
        export type DropLayout = "Horizontal" | "Vertical";
        export namespace DropLayout {
            const Horizontal: dnd.DropLayout;
            const Vertical: dnd.DropLayout;
        }
    }
}