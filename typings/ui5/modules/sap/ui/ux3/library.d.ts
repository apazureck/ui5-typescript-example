declare module "sap/ui/ux3/library" {

    export = ux3;

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

    namespace ux3 {

        /** 
    * Enumeration of available standard actions for 'sap.ui.ux3.ActionBar'. To be used as parameters for function 'sap.ui.ux3.ActionBar.getSocialAction'. 
    */
        enum ActionBarSocialActions {
            Favorite = "Favorite",
            Flag = "Flag",
            Follow = "Follow",
            Open = "Open",
            Update = "Update",
        }

        /**
    
    */
        interface DataSetView {


        }


        /** 
    * Defines the order of the sub lists of a list in the ExactBrowser. 
    */
        enum ExactOrder {
            Fixed = "Fixed",
            Select = "Select",
        }

        /** 
    * Type of a Feeder. 
    */
        enum FeederType {
            Comment = "Comment",
            Large = "Large",
            Medium = "Medium",
        }

        /** 
    * Defines the states of the follow action 
    */
        enum FollowActionState {
            Default = "Default",
            Follow = "Follow",
            Hold = "Hold",
        }

        /** 
    * This entries are used to set the visibility status of a NotificationBar 
    */
        enum NotificationBarStatus {
            Default = "Default",
            Max = "Max",
            Min = "Min",
            None = "None",
        }

        /** 
    * Available shell design types. 
    */
        enum ShellDesignType {
            Crystal = "Crystal",
            Light = "Light",
            Standard = "Standard",
        }

        /** 
    * Available shell header display types. 
    */
        enum ShellHeaderType {
            BrandOnly = "BrandOnly",
            NoNavigation = "NoNavigation",
            SlimNavigation = "SlimNavigation",
            Standard = "Standard",
        }

        /** 
    * Available ThingViewer header display types. 
    */
        enum ThingViewerHeaderType {
            Horizontal = "Horizontal",
            Standard = "Standard",
        }

        /** 
    * VisibleItemCountMode of the FacetFilter defines if the FacetFilter takes the whole available height (Auto) in the surrounding container, or is so high as needed to show 5 Items ("Fixed " - default). 
    */
        enum VisibleItemCountMode {
            Auto = "Auto",
            Fixed = "Fixed",
        }


    }
}
