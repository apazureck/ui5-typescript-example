declare module 'sap/ui/ux3/library' {
    /**
    * Defines the states of the follow action
    */
    export type FollowActionState = "Default" | "Follow" | "Hold";
    export namespace FollowActionState {
        const Default: FollowActionState;
        const Follow: FollowActionState;
        const Hold: FollowActionState;
    }
}