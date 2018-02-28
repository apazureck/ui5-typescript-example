declare module 'sap/ui/core/library' {
    /**
    * Configuration options for drop positions.
    */
    export namespace dnd {
        export type DropPosition = "Between" | "On" | "OnOrBetween";
        export namespace DropPosition {
            const Between: dnd.DropPosition;
            const On: dnd.DropPosition;
            const OnOrBetween: dnd.DropPosition;
        }
    }
}