declare module 'sap/ui/unified/library' {
    /**
    * Predefined animations for the ContentSwitcher
    */
    export type ContentSwitcherAnimation = "Fade" | "None" | "Rotate" | "SlideOver" | "SlideRight" | "ZoomIn" | "ZoomOut";
    export namespace ContentSwitcherAnimation {
        const Fade: ContentSwitcherAnimation;
        const None: ContentSwitcherAnimation;
        const Rotate: ContentSwitcherAnimation;
        const SlideOver: ContentSwitcherAnimation;
        const SlideRight: ContentSwitcherAnimation;
        const ZoomIn: ContentSwitcherAnimation;
        const ZoomOut: ContentSwitcherAnimation;
    }
}