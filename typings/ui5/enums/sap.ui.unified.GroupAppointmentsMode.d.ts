declare module 'sap/ui/unified/library' {
    /**
    * Types of display mode for overlapping appointments.
    */
    export type GroupAppointmentsMode = "Collapsed" | "Expanded";
    export namespace GroupAppointmentsMode {
        const Collapsed: GroupAppointmentsMode;
        const Expanded: GroupAppointmentsMode;
    }
}