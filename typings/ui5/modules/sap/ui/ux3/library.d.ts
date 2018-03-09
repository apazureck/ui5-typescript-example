declare module "sap/ui/ux3/library" {
    /**

*/
    export default ux3;
    namespace ux3 {

        // Fields
        /**
        * Experimental implementation of visual Ux3 Shell personalization / branding.
     * 
     * DO NOT USE PRODUCTIVELY!!!
     * 
     * Being completely non-generic as of now, this is supposed to facilitate discussions with Ux about the personalization capabilities. Once that concept is more final, we can go for a cleaner implementation, considering the number of configurable properties etc.
        */
        export const ShellPersonalization: any;
    }
    /** 
* Enumeration of available standard actions for 'sap.ui.ux3.ActionBar'. To be used as parameters for function 'sap.ui.ux3.ActionBar.getSocialAction'. 
*/


    export enum ActionBarSocialActions {
        Favorite = "Favorite",
        Flag = "Flag",
        Follow = "Follow",
        Open = "Open",
        Update = "Update",
    }

    /**

*/
    export interface DataSetView {


    }


    /** 
* Defines the order of the sub lists of a list in the ExactBrowser. 
*/


    export enum ExactOrder {
        Fixed = "Fixed",
        Select = "Select",
    }

    /** 
* Type of a Feeder. 
*/


    export enum FeederType {
        Comment = "Comment",
        Large = "Large",
        Medium = "Medium",
    }

    /** 
* Defines the states of the follow action 
*/


    export enum FollowActionState {
        Default = "Default",
        Follow = "Follow",
        Hold = "Hold",
    }

    /** 
* This entries are used to set the visibility status of a NotificationBar 
*/


    export enum NotificationBarStatus {
        Default = "Default",
        Max = "Max",
        Min = "Min",
        None = "None",
    }

    /** 
* Available shell design types. 
*/


    export enum ShellDesignType {
        Crystal = "Crystal",
        Light = "Light",
        Standard = "Standard",
    }

    /** 
* Available shell header display types. 
*/


    export enum ShellHeaderType {
        BrandOnly = "BrandOnly",
        NoNavigation = "NoNavigation",
        SlimNavigation = "SlimNavigation",
        Standard = "Standard",
    }

    /** 
* Available ThingViewer header display types. 
*/


    export enum ThingViewerHeaderType {
        Horizontal = "Horizontal",
        Standard = "Standard",
    }

    /** 
* VisibleItemCountMode of the FacetFilter defines if the FacetFilter takes the whole available height (Auto) in the surrounding container, or is so high as needed to show 5 Items ("Fixed " - default). 
*/


    export enum VisibleItemCountMode {
        Auto = "Auto",
        Fixed = "Fixed",
    }

}
