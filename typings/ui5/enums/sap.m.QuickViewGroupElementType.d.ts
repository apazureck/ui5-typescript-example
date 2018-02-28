declare module 'sap/m/library' {
    /**
    * QuickViewGroupElement is a combination of one label and another control (Link or Text) associated to this label.
    */
    export type QuickViewGroupElementType = "email" | "link" | "mobile" | "pageLink" | "phone" | "text";
    export namespace QuickViewGroupElementType {
        const email: QuickViewGroupElementType;
        const link: QuickViewGroupElementType;
        const mobile: QuickViewGroupElementType;
        const pageLink: QuickViewGroupElementType;
        const phone: QuickViewGroupElementType;
        const text: QuickViewGroupElementType;
    }
}