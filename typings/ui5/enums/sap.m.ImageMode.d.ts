declare module 'sap/m/library' {
    /**
    * Determines how the source image is used on the output DOM element.
    */
    export type ImageMode = "Background" | "Image";
    export namespace ImageMode {
        const Background: ImageMode;
        const Image: ImageMode;
    }
}