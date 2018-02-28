declare module 'sap/ui/core/Popup' {
    /**
    * Enumeration providing options for docking of some element to another. "Right" and "Left" will stay the same in RTL mode, but "Begin" and "End" will flip to the other side ("Begin" is "Right" in RTL).
    */
    export type Dock = "BeginBottom" | "BeginCenter" | "BeginTop" | "CenterBottom" | "CenterCenter" | "CenterTop" | "EndBottom" | "EndCenter" | "EndTop" | "LeftBottom" | "LeftCenter" | "LeftTop" | "RightBottom" | "RightCenter" | "RightTop";
    export namespace Dock {
        const BeginBottom: Dock;
        const BeginCenter: Dock;
        const BeginTop: Dock;
        const CenterBottom: Dock;
        const CenterCenter: Dock;
        const CenterTop: Dock;
        const EndBottom: Dock;
        const EndCenter: Dock;
        const EndTop: Dock;
        const LeftBottom: Dock;
        const LeftCenter: Dock;
        const LeftTop: Dock;
        const RightBottom: Dock;
        const RightCenter: Dock;
        const RightTop: Dock;
    }
}