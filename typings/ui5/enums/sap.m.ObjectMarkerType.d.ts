declare module 'sap/m/library' {
    /**
    * Predefined types for ObjectMarker.
    */
    export type ObjectMarkerType = "Draft" | "Favorite" | "Flagged" | "Locked" | "LockedBy" | "Unsaved" | "UnsavedBy";
    export namespace ObjectMarkerType {
        const Draft: ObjectMarkerType;
        const Favorite: ObjectMarkerType;
        const Flagged: ObjectMarkerType;
        const Locked: ObjectMarkerType;
        const LockedBy: ObjectMarkerType;
        const Unsaved: ObjectMarkerType;
        const UnsavedBy: ObjectMarkerType;
    }
}