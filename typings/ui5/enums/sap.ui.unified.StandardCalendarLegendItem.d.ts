declare module 'sap/ui/unified/library' {
    /**
    * Standard day types visualized in a {@link sap.m.PlanningCalendarLegend}, which correspond to days in a {@link sap.ui.unified.Calendar}.
    */
    export type StandardCalendarLegendItem = "NonWorkingDay" | "Selected" | "Today" | "WorkingDay";
    export namespace StandardCalendarLegendItem {
        const NonWorkingDay: StandardCalendarLegendItem;
        const Selected: StandardCalendarLegendItem;
        const Today: StandardCalendarLegendItem;
        const WorkingDay: StandardCalendarLegendItem;
    }
}