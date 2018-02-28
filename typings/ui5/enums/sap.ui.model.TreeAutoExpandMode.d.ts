declare module 'sap/ui/model/TreeAutoExpandMode' {
    /**
    * Different modes for setting the auto expand mode on tree or analytical bindings.
    */
    export type TreeAutoExpandMode = "Bundled" | "Sequential";
    export namespace TreeAutoExpandMode {
        const Bundled: TreeAutoExpandMode;
        const Sequential: TreeAutoExpandMode;
    }
}