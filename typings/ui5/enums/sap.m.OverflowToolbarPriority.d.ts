declare module 'sap/m/library' {
    /**
    * Defines the priorities of the controls within {@link sap.m.OverflowToolbar}.
    */
    export type OverflowToolbarPriority = "Always" | "AlwaysOverflow" | "Disappear" | "High" | "Low" | "Never" | "NeverOverflow";
    export namespace OverflowToolbarPriority {
        const Always: OverflowToolbarPriority;
        const AlwaysOverflow: OverflowToolbarPriority;
        const Disappear: OverflowToolbarPriority;
        const High: OverflowToolbarPriority;
        const Low: OverflowToolbarPriority;
        const Never: OverflowToolbarPriority;
        const NeverOverflow: OverflowToolbarPriority;
    }
}