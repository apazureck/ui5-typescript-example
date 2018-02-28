declare module 'sap/m/library' {
    /**
    * A subset of input types that fits to a simple API returning one string. Not available on purpose: button, checkbox, hidden, image, password, radio, range, reset, search, submit.
    */
    export type InputType = "Date" | "Datetime" | "DatetimeLocale" | "Email" | "Month" | "Number" | "Password" | "Tel" | "Text" | "Time" | "Url" | "Week";
    export namespace InputType {
        const Date: InputType;
        const Datetime: InputType;
        const DatetimeLocale: InputType;
        const Email: InputType;
        const Month: InputType;
        const Number: InputType;
        const Password: InputType;
        const Tel: InputType;
        const Text: InputType;
        const Time: InputType;
        const Url: InputType;
        const Week: InputType;
    }
}