declare module 'sap/ui/layout/library' {
    /**
    * A string type that is used inside the BlockLayout to set predefined background color to the cells inside the control.
    */
    export type BlockBackgroundType = "Accent" | "Dashboard" | "Default" | "Light" | "Mixed";
    export namespace BlockBackgroundType {
        const Accent: BlockBackgroundType;
        const Dashboard: BlockBackgroundType;
        const Default: BlockBackgroundType;
        const Light: BlockBackgroundType;
        const Mixed: BlockBackgroundType;
    }
}