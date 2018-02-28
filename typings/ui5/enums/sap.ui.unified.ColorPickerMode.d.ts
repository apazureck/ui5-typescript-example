declare module 'sap/ui/unified/library' {
    /**
    * different styles for a ColorPicker.
    */
    export type ColorPickerMode = "HSL" | "HSV";
    export namespace ColorPickerMode {
        const HSL: ColorPickerMode;
        const HSV: ColorPickerMode;
    }
}