declare module 'sap/m/library' {
    /**
    * Defines the visual indication and behaviour of the list items.
    */
    export type ListType = "Active" | "Detail" | "DetailAndActive" | "Inactive" | "Navigation";
    export namespace ListType {
        const Active: ListType;
        const Detail: ListType;
        const DetailAndActive: ListType;
        const Inactive: ListType;
        const Navigation: ListType;
    }
}