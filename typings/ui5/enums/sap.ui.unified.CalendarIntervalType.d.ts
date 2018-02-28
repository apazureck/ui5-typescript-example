declare module 'sap/ui/unified/library' {
    /**
    * Interval types in a `CalendarRow`.
    */
    export type CalendarIntervalType = "Day" | "Hour" | "Month";
    export namespace CalendarIntervalType {
        const Day: CalendarIntervalType;
        const Hour: CalendarIntervalType;
        const Month: CalendarIntervalType;
    }
}