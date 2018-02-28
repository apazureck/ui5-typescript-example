declare module 'sap/ui/model/odata/UpdateMethod' {
    /**
    * Different methods for update operations.
    */
    export type UpdateMethod = "Merge" | "Put";
    export namespace UpdateMethod {
        const Merge: UpdateMethod;
        const Put: UpdateMethod;
    }
}