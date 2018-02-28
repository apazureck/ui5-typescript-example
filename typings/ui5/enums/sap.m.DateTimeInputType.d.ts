declare module 'sap/m/library' {
    /**
    * A subset of DateTimeInput types that fit to a simple API returning one string.
    */
    export type DateTimeInputType = "Date" | "DateTime" | "Time";
    export namespace DateTimeInputType {
        const Date: DateTimeInputType;
        const DateTime: DateTimeInputType;
        const Time: DateTimeInputType;
    }
}