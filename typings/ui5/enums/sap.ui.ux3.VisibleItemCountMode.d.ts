declare module 'sap/ui/ux3/library' {
    /**
    * VisibleItemCountMode of the FacetFilter defines if the FacetFilter takes the whole available height (Auto) in the surrounding container, or is so high as needed to show 5 Items ("Fixed " - default).
    */
    export type VisibleItemCountMode = "Auto" | "Fixed";
    export namespace VisibleItemCountMode {
        const Auto: VisibleItemCountMode;
        const Fixed: VisibleItemCountMode;
    }
}