declare module 'sap/uxap/library' {
    /**
    * Used by the ObjectPagSubSection control to define which layout to apply.
    */
    export type ObjectPageSubSectionLayout = "TitleOnLeft" | "TitleOnTop";
    export namespace ObjectPageSubSectionLayout {
        const TitleOnLeft: ObjectPageSubSectionLayout;
        const TitleOnTop: ObjectPageSubSectionLayout;
    }
}