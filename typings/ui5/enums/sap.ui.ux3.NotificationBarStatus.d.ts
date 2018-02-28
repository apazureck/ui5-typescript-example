declare module 'sap/ui/ux3/library' {
    /**
    * This entries are used to set the visibility status of a NotificationBar
    */
    export type NotificationBarStatus = "Default" | "Max" | "Min" | "None";
    export namespace NotificationBarStatus {
        const Default: NotificationBarStatus;
        const Max: NotificationBarStatus;
        const Min: NotificationBarStatus;
        const None: NotificationBarStatus;
    }
}