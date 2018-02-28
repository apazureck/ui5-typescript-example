declare module 'sap/ui/core/library' {
    /**
    * The types of Calendar
    */
    export type CalendarType = "Gregorian" | "Islamic" | "Japanese" | "Persian";
    export namespace CalendarType {
        const Gregorian: CalendarType;
        const Islamic: CalendarType;
        const Japanese: CalendarType;
        const Persian: CalendarType;
    }
}