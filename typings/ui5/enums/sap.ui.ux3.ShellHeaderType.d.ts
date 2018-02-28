declare module 'sap/ui/ux3/library' {
    /**
    * Available shell header display types.
    */
    export type ShellHeaderType = "BrandOnly" | "NoNavigation" | "SlimNavigation" | "Standard";
    export namespace ShellHeaderType {
        const BrandOnly: ShellHeaderType;
        const NoNavigation: ShellHeaderType;
        const SlimNavigation: ShellHeaderType;
        const Standard: ShellHeaderType;
    }
}