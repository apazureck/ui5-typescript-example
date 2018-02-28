declare module 'sap/m/library' {
    /**
    * Predefined visibility for ObjectMarker.
    */
    export type ObjectMarkerVisibility = "IconAndText" | "IconOnly" | "TextOnly";
    export namespace ObjectMarkerVisibility {
        const IconAndText: ObjectMarkerVisibility;
        const IconOnly: ObjectMarkerVisibility;
        const TextOnly: ObjectMarkerVisibility;
    }
}