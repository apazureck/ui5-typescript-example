declare module 'sap/ui/core/library' {
    /**
    * Configuration options for visual drop effects that are given during a drag and drop operation.
    */
    export namespace dnd {
        export type DropEffect = "Copy" | "Link" | "Move" | "None";
        export namespace DropEffect {
            const Copy: dnd.DropEffect;
            const Link: dnd.DropEffect;
            const Move: dnd.DropEffect;
            const None: dnd.DropEffect;
        }
    }
}