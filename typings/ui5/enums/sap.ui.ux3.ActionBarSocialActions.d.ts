declare module 'sap/ui/ux3/library' {
    /**
    * Enumeration of available standard actions for 'sap.ui.ux3.ActionBar'. To be used as parameters for function 'sap.ui.ux3.ActionBar.getSocialAction'.
    */
    export type ActionBarSocialActions = "Favorite" | "Flag" | "Follow" | "Open" | "Update";
    export namespace ActionBarSocialActions {
        const Favorite: ActionBarSocialActions;
        const Flag: ActionBarSocialActions;
        const Follow: ActionBarSocialActions;
        const Open: ActionBarSocialActions;
        const Update: ActionBarSocialActions;
    }
}