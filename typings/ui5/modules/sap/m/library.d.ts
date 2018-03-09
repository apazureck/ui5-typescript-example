declare module "sap/m/library" {
    /**

*/
    export default m;
    namespace m {

        // Methods
        /**
            * Returns invalid date value of UI5.
            */
        export function getInvalidDate(): any;/**
    * Finds default locale settings once and returns always the same. We should not need to create new instance to get same locale settings This method keep the locale instance in the scope and returns the same after first run
    */
        export function getLocale(): any;/**
    * Finds default locale data once and returns always the same.
    */
        export function getLocaleData(): any;/**
    * Checks if the given parameter is a valid JsDate Object.
    */
        export function isDate(value: any): boolean;/**
    * Returns if the LightBox is open.
    */
        export function LightBox(): boolean;    // Fields
        /**
        * Hide the soft keyboard.
        */
        export const closeKeyboard: any;
        // Fields
        /**
        * Search given control's parents and try to find iScroll.
        */
        export const getIScroll: any;
        // Fields
        /**
        * Search given control's parents and try to find ScrollDelegate.
        */
        export const getScrollDelegate: any;
        // Fields
        /**
        * ``sap.m.Support` shows the technical information for SAPUI5 Mobile Applications.
     * This technical information includes
     *    * SAPUI5 Version
     *    * User Agent
     *    * Configurations (Bootstrap and Computed)
     *    * URI parameters
     *    * All loaded module names
     * 
     * In order to show the device information, the user must follow the following gestures.
     *    1 - Hold two finger for 3 seconds minimum.
     *    2 - Tab with a third finger while holding the first two fingers.
     * 
     * NOTE: This class is internal and all its functions must not be used by an application
     * 
     * As `sap.m.Support` is a static class, a `jQuery.sap.require("sap.m.Support");`
     * statement must be implicitly executed before the class is used.
     * 
     * 
     * Enable Support:
     * --------------------------------------------------
     * //import library
     * jQuery.sap.require("sap.m.Support");
     * 
     * //By default after require, support is enabled but implicitly we can call
     * sap.m.Support.on();
     * 
     * Disable Support:
     * --------------------------------------------------
     * sap.m.Support.off();`
        */
        export const Support: any;
    }
    /** 
* Available Background Design. 
*/


    export enum BackgroundDesign {
        Solid = "Solid",
        Translucent = "Translucent",
        Transparent = "Transparent",
    }

    /**

*/
    export namespace BackgroundHelper {

    }
    /** 
* Types of the Bar design. 
*/


    export enum BarDesign {
        Auto = "Auto",
        Footer = "Footer",
        Header = "Header",
        SubHeader = "SubHeader",
    }

    /** 
* Different types for a button (predefined types). 
*/


    export enum ButtonType {
        Accept = "Accept",
        Back = "Back",
        Default = "Default",
        Emphasized = "Emphasized",
        Reject = "Reject",
        Transparent = "Transparent",
        Unstyled = "Unstyled",
        Up = "Up",
    }

    /** 
* Carousel arrows align. 
*/


    export enum CarouselArrowsPlacement {
        Content = "Content",
        PageIndicator = "PageIndicator",
    }

    /** 
* A subset of DateTimeInput types that fit to a simple API returning one string. 
*/


    export enum DateTimeInputType {
        Date = "Date",
        DateTime = "DateTime",
        Time = "Time",
    }

    /** 
* Enum of the available deviation markers for the NumericContent control. 
*/


    export enum DeviationIndicator {
        Down = "Down",
        None = "None",
        Up = "Up",
    }

    /** 
* Enum for the type of {@link sap.m.Dialog} control. 
*/


    export enum DialogType {
        Message = "Message",
        Standard = "Standard",
    }

    /** 
* Enum for the state of {@link sap.m.DraftIndicator} control. 
*/


    export enum DraftIndicatorState {
        Clear = "Clear",
        Saved = "Saved",
        Saving = "Saving",
    }

    /** 
* FacetFilterList data types. 
*/


    export enum FacetFilterListDataType {
        Boolean = "Boolean",
        Date = "Date",
        DateTime = "DateTime",
        Float = "Float",
        Integer = "Integer",
        String = "String",
        Time = "Time",
    }

    /** 
* Used by the FacetFilter control to adapt its design according to type. 
*/


    export enum FacetFilterType {
        Light = "Light",
        Simple = "Simple",
    }

    /** 
* Available options for the layout of container lines along the cross axis of the flexbox layout. ** Note: ** This property has no effect in Internet Explorer 10. 
*/


    export enum FlexAlignContent {
        Center = "Center",
        End = "End",
        Inherit = "Inherit",
        SpaceAround = "SpaceAround",
        SpaceBetween = "SpaceBetween",
        Start = "Start",
        Stretch = "Stretch",
    }

    /** 
* Available options for the layout of all elements along the cross axis of the flexbox layout. 
*/


    export enum FlexAlignItems {
        Baseline = "Baseline",
        Center = "Center",
        End = "End",
        Inherit = "Inherit",
        Start = "Start",
        Stretch = "Stretch",
    }

    /** 
* Available options for the layout of individual elements along the cross axis of the flexbox layout overriding the default alignment. 
*/


    export enum FlexAlignSelf {
        Auto = "Auto",
        Baseline = "Baseline",
        Center = "Center",
        End = "End",
        Inherit = "Inherit",
        Start = "Start",
        Stretch = "Stretch",
    }

    /** 
* Available directions for flex layouts. 
*/


    export enum FlexDirection {
        Column = "Column",
        ColumnReverse = "ColumnReverse",
        Inherit = "Inherit",
        Row = "Row",
        RowReverse = "RowReverse",
    }

    /** 
* Available options for the layout of elements along the main axis of the flexbox layout. 
*/


    export enum FlexJustifyContent {
        Center = "Center",
        End = "End",
        Inherit = "Inherit",
        SpaceAround = "SpaceAround",
        SpaceBetween = "SpaceBetween",
        Start = "Start",
    }

    /** 
* Determines the type of HTML elements used for rendering controls. 
*/


    export enum FlexRendertype {
        Bare = "Bare",
        Div = "Div",
        List = "List",
    }

    /** 
* Available options for the wrapping behavior of a flex container. 
*/


    export enum FlexWrap {
        NoWrap = "NoWrap",
        Wrap = "Wrap",
        WrapReverse = "WrapReverse",
    }

    /** 
* Enum for possible frame size types for sap.m.TileContent and sap.m.GenericTile control. 
*/


    export enum FrameType {
        Auto = "Auto",
        OneByOne = "OneByOne",
        TwoByOne = "TwoByOne",
        TwoThirds = "TwoThirds",
    }

    /** 
* Defines the mode of GenericTile. 
*/


    export enum GenericTileMode {
        ContentMode = "ContentMode",
        HeaderMode = "HeaderMode",
        LineMode = "LineMode",
    }

    /** 
* Defines the scopes of GenericTile enabling the developer to implement different "flavors" of tiles. 
*/


    export enum GenericTileScope {
        Actions = "Actions",
        Display = "Display",
    }

    /** 
* Different levels for headers. 
*/


    export enum HeaderLevel {
        H1 = "H1",
        H2 = "H2",
        H3 = "H3",
        H4 = "H4",
        H5 = "H5",
        H6 = "H6",
    }

    /**

*/
    export interface IBar {


    }


    /** 
* Allowed tags for the implementation of the IBar interface. 
*/


    export enum IBarHTMLTag {
        Div = "Div",
        Footer = "Footer",
        Header = "Header",
    }

    /**

*/
    export interface IBreadcrumbs {


    }


    /**

*/
    export interface IconTab {


    }


    /** 
* Available Filter Item Design. 
*/


    export enum IconTabFilterDesign {
        Horizontal = "Horizontal",
        Vertical = "Vertical",
    }

    /** 
* Specifies `IconTabBar` header mode. 
*/


    export enum IconTabHeaderMode {
    }

    /**

*/
    export namespace ImageHelper {

    }
    /** 
* Determines how the source image is used on the output DOM element. 
*/


    export enum ImageMode {
        Background = "Background",
        Image = "Image",
    }

    /**

*/
    export namespace InputODataSuggestProvider {

    }
    /** 
* Defines how the input display text should be formatted. 
*/


    export enum InputTextFormatMode {
        Key = "Key",
        KeyValue = "KeyValue",
        Value = "Value",
        ValueKey = "ValueKey",
    }

    /** 
* A subset of input types that fits to a simple API returning one string. Not available on purpose: button, checkbox, hidden, image, password, radio, range, reset, search, submit. 
*/


    export enum InputType {
        Date = "Date",
        Datetime = "Datetime",
        DatetimeLocale = "DatetimeLocale",
        Email = "Email",
        Month = "Month",
        Number = "Number",
        Password = "Password",
        Tel = "Tel",
        Text = "Text",
        Time = "Time",
        Url = "Url",
        Week = "Week",
    }

    /**

*/
    export interface IOverflowToolbarContent {


    }


    /**

*/
    export interface IScale {


    }


    /** 
* Available label display modes. 
*/


    export enum LabelDesign {
        Bold = "Bold",
        Standard = "Standard",
    }

    /** 
* Types of LightBox loading stages. 
*/


    export enum LightBoxLoadingStates {
        Error = "Error",
        Loaded = "Loaded",
        Loading = "Loading",
        TimeOutError = "TimeOutError",
    }

    /** 
* Enumeration for possible link-to-anchor conversion strategy. 
*/


    export enum LinkConversion {
        All = "All",
        None = "None",
        ProtocolOnly = "ProtocolOnly",
    }

    /** 
* Defines the growing direction of the `sap.m.List` or `sap.m.Table`. 
*/


    export enum ListGrowingDirection {
        Downwards = "Downwards",
        Upwards = "Upwards",
    }

    /** 
* Defines the different header styles. 
*/


    export enum ListHeaderDesign {
        Plain = "Plain",
        Standard = "Standard",
    }

    /** 
* Defines the keyboard handling behavior of the `sap.m.List` or `sap.m.Table`. 
*/


    export enum ListKeyboardMode {
        Edit = "Edit",
        Navigation = "Navigation",
    }

    /** 
* Defines the mode of the list. 
*/


    export enum ListMode {
        Delete = "Delete",
        MultiSelect = "MultiSelect",
        None = "None",
        SingleSelect = "SingleSelect",
        SingleSelectLeft = "SingleSelectLeft",
        SingleSelectMaster = "SingleSelectMaster",
    }

    /** 
* Defines which separator style will be applied for the items. 
*/


    export enum ListSeparators {
        All = "All",
        Inner = "Inner",
        None = "None",
    }

    /** 
* Defines the visual indication and behaviour of the list items. 
*/


    export enum ListType {
        Active = "Active",
        Detail = "Detail",
        DetailAndActive = "DetailAndActive",
        Inactive = "Inactive",
        Navigation = "Navigation",
    }

    /** 
* Enumeration of possible load statuses. 
*/


    export enum LoadState {
        Disabled = "Disabled",
        Failed = "Failed",
        Loaded = "Loaded",
        Loading = "Loading",
    }

    /** 
* Different modes for a MenuButton (predefined types). 
*/


    export enum MenuButtonMode {
        Regular = "Regular",
        Split = "Split",
    }

    /**

*/
    export interface ObjectHeaderContainer {


    }


    /** 
* Predefined types for ObjectMarker. 
*/


    export enum ObjectMarkerType {
        Draft = "Draft",
        Favorite = "Favorite",
        Flagged = "Flagged",
        Locked = "Locked",
        LockedBy = "LockedBy",
        Unsaved = "Unsaved",
        UnsavedBy = "UnsavedBy",
    }

    /** 
* Predefined visibility for ObjectMarker. 
*/


    export enum ObjectMarkerVisibility {
        IconAndText = "IconAndText",
        IconOnly = "IconOnly",
        TextOnly = "TextOnly",
    }

    /** 
* Defines the priorities of the controls within {@link sap.m.OverflowToolbar}. 
*/


    export enum OverflowToolbarPriority {
        Always = "Always",
        AlwaysOverflow = "AlwaysOverflow",
        Disappear = "Disappear",
        High = "High",
        Low = "Low",
        Never = "Never",
        NeverOverflow = "NeverOverflow",
    }

    /** 
* Type of panels used in the personalization dialog. 
*/


    export enum P13nPanelType {
        columns = "columns",
        dimeasure = "dimeasure",
        filter = "filter",
        group = "group",
        sort = "sort",
    }

    /** 
* Available Page Background Design. 
*/


    export enum PageBackgroundDesign {
        List = "List",
        Solid = "Solid",
        Standard = "Standard",
        Transparent = "Transparent",
    }

    /** 
* Available Panel Accessible Landmark Roles. 
*/


    export enum PanelAccessibleRole {
        Complementary = "Complementary",
        Form = "Form",
        Region = "Region",
    }

    /** 
* Types for the placement of Popover control. 
*/


    export enum PlacementType {
        Auto = "Auto",
        Bottom = "Bottom",
        Horizontal = "Horizontal",
        HorizontalPreferedLeft = "HorizontalPreferedLeft",
        HorizontalPreferedRight = "HorizontalPreferedRight",
        HorizontalPreferredLeft = "HorizontalPreferredLeft",
        HorizontalPreferredRight = "HorizontalPreferredRight",
        Left = "Left",
        PreferredBottomOrFlip = "PreferredBottomOrFlip",
        PreferredLeftOrFlip = "PreferredLeftOrFlip",
        PreferredRightOrFlip = "PreferredRightOrFlip",
        PreferredTopOrFlip = "PreferredTopOrFlip",
        Right = "Right",
        Top = "Top",
        Vertical = "Vertical",
        VerticalPreferedBottom = "VerticalPreferedBottom",
        VerticalPreferedTop = "VerticalPreferedTop",
        VerticalPreferredBottom = "VerticalPreferredBottom",
        VerticalPreferredTop = "VerticalPreferredTop",
    }

    /** 
* A list of the default built-in views in a {@link sap.m.PlanningCalendar}, described by their keys. 
*/


    export enum PlanningCalendarBuiltInView {
    }

    /** 
* Defines the display of table pop-ins. 
*/


    export enum PopinDisplay {
        Block = "Block",
        Inline = "Inline",
        WithoutHeader = "WithoutHeader",
    }

    /** 
* Defines the layout options of the table popins. 
*/


    export enum PopinLayout {
        Block = "Block",
        GridLarge = "GridLarge",
        GridSmall = "GridSmall",
    }

    /**

*/
    export namespace PopupHelper {

    }
    /** 
* QuickViewGroupElement is a combination of one label and another control (Link or Text) associated to this label. 
*/


    export enum QuickViewGroupElementType {
        email = "email",
        link = "link",
        mobile = "mobile",
        pageLink = "pageLink",
        phone = "phone",
        text = "text",
    }

    /** 
* Possible values for the visualization of float values in the RatingIndicator control. 
*/


    export enum RatingIndicatorVisualMode {
        Full = "Full",
        Half = "Half",
    }

    /** 
* Breakpoint names for different screen sizes. 
*/


    export enum ScreenSize {
        Desktop = "Desktop",
        Large = "Large",
        Medium = "Medium",
        Phone = "Phone",
        Small = "Small",
        Tablet = "Tablet",
        XLarge = "XLarge",
        XSmall = "XSmall",
        XXLarge = "XXLarge",
        XXSmall = "XXSmall",
    }

    /** 
* Enumeration for different action levels in sap.m.SelectionDetails control. 
*/


    export enum SelectionDetailsActionLevel {
    }

    /** 
* Defines the keyboard navigation mode. 
*/


    export enum SelectListKeyboardNavigationMode {
        Delimited = "Delimited",
        None = "None",
    }

    /** 
* Enumeration for different Select types. 
*/


    export enum SelectType {
        Default = "Default",
        IconOnly = "IconOnly",
    }

    export namespace semantic {
        /**
        
        */
        export interface IFilter {


        }

    }

    export namespace semantic {
        /**
        
        */
        export interface IGroup {


        }

    }

    export namespace semantic {
        /**
        
        */
        export interface ISort {


        }

    }

    /** 
* Declares the type of semantic ruleset that will govern the styling and positioning of semantic content. 
*/

    export namespace semantic {
        export enum SemanticRuleSetType {
            Classic = "Classic",
            Optimized = "Optimized",
        }
    }

    /** 
* Enumeration of possible size settings. 
*/


    export enum Size {
        Auto = "Auto",
        L = "L",
        M = "M",
        Responsive = "Responsive",
        S = "S",
        XS = "XS",
    }

    /** 
* The mode of SplitContainer or SplitApp control to show/hide the master area. 
*/


    export enum SplitAppMode {
        HideMode = "HideMode",
        PopoverMode = "PopoverMode",
        ShowHideMode = "ShowHideMode",
        StretchCompressMode = "StretchCompressMode",
    }

    /** 
* Types for StandardTile. 
*/


    export enum StandardTileType {
        Create = "Create",
        Monitor = "Monitor",
        None = "None",
    }

    /** 
* Types of string filter operators. 
*/


    export enum StringFilterOperator {
        AnyWordStartsWith = "AnyWordStartsWith",
        Contains = "Contains",
        Equals = "Equals",
        StartsWith = "StartsWith",
    }

    /** 
* Directions for swipe event. 
*/


    export enum SwipeDirection {
        Both = "Both",
        LeftToRight = "LeftToRight",
        RightToLeft = "RightToLeft",
    }

    /** 
* Enumaration for different switch types. 
*/


    export enum SwitchType {
        AcceptReject = "AcceptReject",
        Default = "Default",
    }

    /** 
* Types of the Toolbar Design. 
*/


    export enum ToolbarDesign {
        Auto = "Auto",
        Info = "Info",
        Solid = "Solid",
        Transparent = "Transparent",
    }

    /**

*/
    export namespace touch {

        // Methods
        /**
            * Given a list of touches, count the number of touches related with the given element.
            */
        export function countContained(oTouchList: any, vElement: any | any | string): number;/**
    * Given a list of touch objects, find the touch that matches the given one.
    */
        export function find(oTouchList: any, oTouch: any | number): any | any;
    }
    /**

*/
    export namespace URLHelper {

        // Methods
        /**
            * Adds an event registration for redirect.
            */
        export function attachRedirect(fnFunction: Function, oListener?: any): any;/**
    * Detach already registered redirect event.
    */
        export function detachRedirect(fnFunction: Function, oListener?: any): any;/**
    * Builds Email URI from given parameter. Trims spaces from email addresses.
    */
        export function normalizeEmail(sEmail?: string, sSubject?: string, sBody?: string, sCC?: string, sBCC?: string): string;/**
    * Sanitizes the given telephone number and returns SMS URI scheme.
    */
        export function normalizeSms(sTel?: string): string;/**
    * Sanitizes the given telephone number and returns a telephone URI scheme.
    */
        export function normalizeTel(sTel?: string): string;/**
    * Redirects to the given URL. This method fires "redirect" event before opening the URL.
    */
        export function redirect(sURL: string, bNewWindow?: boolean): any;/**
    * Trigger email application to send email. Trims spaces from email addresses.
    */
        export function triggerEmail(sEmail?: string, sSubject?: string, sBody?: string, sCC?: string, sBCC?: string): any;/**
    * Trigger SMS application to send SMS to given telephone number.
    */
        export function triggerSms(sTel?: string): any;/**
    * Trigger telephone to call given telephone number.
    */
        export function triggerTel(sTel?: string): any;
    }
    /** 
* Enumeration of possible value color settings. 
*/


    export enum ValueColor {
        Critical = "Critical",
        Error = "Error",
        Good = "Good",
        Neutral = "Neutral",
    }

    /**

*/
    export namespace ValueCSSColor {

    }
    /** 
* Types for the placement of message Popover control. 
*/


    export enum VerticalPlacementType {
        Bottom = "Bottom",
        Top = "Top",
        Vertical = "Vertical",
    }

}
