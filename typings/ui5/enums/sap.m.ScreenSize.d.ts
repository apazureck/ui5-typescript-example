declare module 'sap/m/library' {
    /**
    * Breakpoint names for different screen sizes.
    */
    export type ScreenSize = "Desktop" | "Large" | "Medium" | "Phone" | "Small" | "Tablet" | "XLarge" | "XSmall" | "XXLarge" | "XXSmall";
    export namespace ScreenSize {
        const Desktop: ScreenSize;
        const Large: ScreenSize;
        const Medium: ScreenSize;
        const Phone: ScreenSize;
        const Small: ScreenSize;
        const Tablet: ScreenSize;
        const XLarge: ScreenSize;
        const XSmall: ScreenSize;
        const XXLarge: ScreenSize;
        const XXSmall: ScreenSize;
    }
}