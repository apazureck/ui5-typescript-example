declare module "sap/ui/Device" {

    export = Device;

    namespace Device {

    }

    namespace Device {

        namespace browser {

            // Fields
            /**
            * If this flag is set to `true`, the Google Chrome browser is used.
            */
            export const chrome: boolean;
            // Fields
            /**
            * If this flag is set to `true`, the Microsoft Edge browser is used.
            */
            export const edge: boolean;
            // Fields
            /**
            * If this flag is set to `true`, the Mozilla Firefox browser is used.
            */
            export const firefox: boolean;
            // Fields
            /**
            * If this flag is set to `true`, the Safari browser runs in standalone fullscreen mode on iOS.
         * 
         * ** Note: ** This flag is only available if the Safari browser was detected. Furthermore, if this mode is detected, technically not a standard Safari is used. There might be slight differences in behavior and detection, e.g. the availability of {@link sap.ui.Device.browser.version}.
            */
            export const fullscreen: boolean;
            // Fields
            /**
            * If this flag is set to `true`, the Microsoft Internet Explorer browser is used.
            */
            export const internet_explorer: boolean;
            // Fields
            /**
            * If this flag is set to `true`, the mobile variant of the browser is used or a tablet or phone device is detected.
         * 
         * ** Note: ** This information might not be available for all browsers.
            */
            export const mobile: boolean;
            // Fields
            /**
            * If this flag is set to `true`, a browser featuring a Mozilla engine is used.
            */
            export const mozilla: boolean;
            // Fields
            /**
            * If this flag is set to `true`, the Microsoft Internet Explorer browser is used.
            */
            export const msie: boolean;
            // Fields
            /**
            * The name of the browser.
            */
            export const name: string;
            // Fields
            /**
            * If this flag is set to `true`, the Apple Safari browser is used.
         * 
         * ** Note: ** This flag is also `true` when the standalone (fullscreen) mode or webview is used on iOS devices. Please also note the flags {@link sap.ui.Device.browser.fullscreen} and {@link sap.ui.Device.browser.webview}.
            */
            export const safari: boolean;
            // Fields
            /**
            * The version of the browser as `float`.
         * 
         * Might be `-1` if no version can be determined.
            */
            export const version: number;
            // Fields
            /**
            * The version of the browser as `string`.
         * 
         * Might be empty if no version can be determined.
            */
            export const versionStr: string;
            // Fields
            /**
            * If this flag is set to `true`, a browser featuring a Webkit engine is used.
            */
            export const webkit: boolean;
            // Fields
            /**
            * If this flag is set to `true`, the Safari browser runs in webview mode on iOS.
         * 
         * ** Note: ** This flag is only available if the Safari browser was detected. Furthermore, if this mode is detected, technically not a standard Safari is used. There might be slight differences in behavior and detection, e.g. the availability of {@link sap.ui.Device.browser.version}.
            */
            export const webview: boolean;
        }
        namespace BROWSER {

            // Fields
            /**
            * Android stock browser name.
            */
            export const ANDROID: any;
            // Fields
            /**
            * Chrome browser name.
            */
            export const CHROME: any;
            // Fields
            /**
            * Edge browser name.
            */
            export const EDGE: any;
            // Fields
            /**
            * Firefox browser name.
            */
            export const FIREFOX: any;
            // Fields
            /**
            * Internet Explorer browser name.
            */
            export const INTERNET_EXPLORER: any;
            // Fields
            /**
            * Safari browser name.
            */
            export const SAFARI: any;
        }
        namespace media {

            // Methods
            /**
                * Registers the given event handler to change events of the screen width based on the range set with the specified name.
             * 
             * The event is fired whenever the screen width changes and the current screen width is in a different interval of the given range set than before the width change.
             * 
             * The event handler is called with a single argument: a map `mParams` which provides the following information about the entered interval:  * `mParams.from`: The start value (inclusive) of the entered interval as a number * `mParams.to`: The end value (exclusive) range of the entered interval as a number or undefined for the last interval (infinity) * `mParams.unit`: The unit used for the values above, e.g. `"px"` * `mParams.name`: The name of the entered interval, if available 
                */
            export function attachHandler(fnFunction: Function, sName: string): any;/**
    * Registers the given event handler to change events of the screen width based on the range set with the specified name.
 * 
 * The event is fired whenever the screen width changes and the current screen width is in a different interval of the given range set than before the width change.
 * 
 * The event handler is called with a single argument: a map `mParams` which provides the following information about the entered interval:  * `mParams.from`: The start value (inclusive) of the entered interval as a number * `mParams.to`: The end value (exclusive) range of the entered interval as a number or undefined for the last interval (infinity) * `mParams.unit`: The unit used for the values above, e.g. `"px"` * `mParams.name`: The name of the entered interval, if available 
    */
            export function attachHandler(fnFunction: Function, oListener: any, sName: string): any;/**
    * Removes a previously attached event handler from the change events of the screen width.
 * 
 * The passed parameters must match those used for registration with {@link #.attachHandler} beforehand.
    */
            export function detachHandler(fnFunction: Function, sName: string): any;/**
    * Removes a previously attached event handler from the change events of the screen width.
 * 
 * The passed parameters must match those used for registration with {@link #.attachHandler} beforehand.
    */
            export function detachHandler(fnFunction: Function, oListener: any, sName: string): any;/**
    * Returns information about the current active range of the range set with the given name.
 * 
 * If the optional parameter `iWidth</iWidth> is given, the active range will be determined for that width, otherwise it is determined for the current window size.
    */
            export function getCurrentRange(sName: string, iWidth?: number): any;/**
    * Returns `true` if a range set with the given name is already initialized.
    */
            export function hasRangeSet(sName: string): boolean;/**
    * Initializes a screen width media query range set.
 * 
 * This initialization step makes the range set ready to be used for one of the other functions in namespace `sap.ui.Device.media`. The most important {@link sap.ui.Device.media.RANGESETS predefined range sets} are initialized automatically.
 * 
 * To make a not yet initialized {@link sap.ui.Device.media.RANGESETS predefined range set} ready to be used, call this function with the name of the range set to be initialized: `sap.ui.Device.media.initRangeSet(sap.ui.Device.media.RANGESETS.SAP_3STEPS);`
 * 
 * Alternatively it is possible to define custom range sets as shown in the following example: `sap.ui.Device.media.initRangeSet("MyRangeSet", [200, 400], "px", ["Small", "Medium", "Large"]);` This example defines the following named ranges:  * `"Small"`: For screens smaller than 200 pixels. * `"Medium"`: For screens greater than or equal to 200 pixels and smaller than 400 pixels. * `"Large"`: For screens greater than or equal to 400 pixels.  The range names are optional. If they are specified a CSS class (e.g. `sapUiMedia-MyRangeSet-Small`) is also added to the document root depending on the current active range. This can be suppressed via parameter `bSuppressClasses`.
    */
            export function initRangeSet(sName: string, aRangeBorders?: any[], sUnit?: string, aRangeNames?: any[], bSuppressClasses?: boolean): any;
        }
        namespace RANGESETS {

            // Fields
            /**
            * A 3-step range set (S-L).
         * 
         * The ranges of this set are:  * `"S"`: For screens smaller than 520 pixels. * `"M"`: For screens greater than or equal to 520 pixels and smaller than 960 pixels. * `"L"`: For screens greater than or equal to 960 pixels. 
         * 
         * To use this range set, you must initialize it explicitly ({@link sap.ui.Device.media.initRangeSet}).
         * 
         * If this range set is initialized, a CSS class is added to the page root (`html` tag) which indicates the current screen width range: `sapUiMedia-3Step-* NAME_OF_THE_INTERVAL *`.
            */
            export const SAP_3STEPS: any;
            // Fields
            /**
            * A 4-step range set (S-XL).
         * 
         * The ranges of this set are:  * `"S"`: For screens smaller than 520 pixels. * `"M"`: For screens greater than or equal to 520 pixels and smaller than 760 pixels. * `"L"`: For screens greater than or equal to 760 pixels and smaller than 960 pixels. * `"XL"`: For screens greater than or equal to 960 pixels. 
         * 
         * To use this range set, you must initialize it explicitly ({@link sap.ui.Device.media.initRangeSet}).
         * 
         * If this range set is initialized, a CSS class is added to the page root (`html` tag) which indicates the current screen width range: `sapUiMedia-4Step-* NAME_OF_THE_INTERVAL *`.
            */
            export const SAP_4STEPS: any;
            // Fields
            /**
            * A 6-step range set (XS-XXL).
         * 
         * The ranges of this set are:  * `"XS"`: For screens smaller than 241 pixels. * `"S"`: For screens greater than or equal to 241 pixels and smaller than 400 pixels. * `"M"`: For screens greater than or equal to 400 pixels and smaller than 541 pixels. * `"L"`: For screens greater than or equal to 541 pixels and smaller than 768 pixels. * `"XL"`: For screens greater than or equal to 768 pixels and smaller than 960 pixels. * `"XXL"`: For screens greater than or equal to 960 pixels. 
         * 
         * To use this range set, you must initialize it explicitly ({@link sap.ui.Device.media.initRangeSet}).
         * 
         * If this range set is initialized, a CSS class is added to the page root (`html` tag) which indicates the current screen width range: `sapUiMedia-6Step-* NAME_OF_THE_INTERVAL *`.
            */
            export const SAP_6STEPS: any;
            // Fields
            /**
            * A 3-step range set (Phone, Tablet, Desktop).
         * 
         * The ranges of this set are:  * `"Phone"`: For screens smaller than 600 pixels. * `"Tablet"`: For screens greater than or equal to 600 pixels and smaller than 1024 pixels. * `"Desktop"`: For screens greater than or equal to 1024 pixels. 
         * 
         * This range set is initialized by default. An initialization via {@link sap.ui.Device.media.initRangeSet} is not needed.
         * 
         * A CSS class is added to the page root (`html` tag) which indicates the current screen width range: `sapUiMedia-Std-* NAME_OF_THE_INTERVAL *`. Furthermore there are 5 additional CSS classes to hide elements based on the width of the screen:  * `sapUiHideOnPhone`: Will be hidden if the screen has 600px or more * `sapUiHideOnTablet`: Will be hidden if the screen has less than 600px or more than 1023px * `sapUiHideOnDesktop`: Will be hidden if the screen is smaller than 1024px * `sapUiVisibleOnlyOnPhone`: Will be visible if the screen has less than 600px * `sapUiVisibleOnlyOnTablet`: Will be visible if the screen has 600px or more but less than 1024px * `sapUiVisibleOnlyOnDesktop`: Will be visible if the screen has 1024px or more 
            */
            export const SAP_STANDARD: any;
            // Fields
            /**
            * A 4-step range set (Phone, Tablet, Desktop, LargeDesktop).
         * 
         * The ranges of this set are:  * `"Phone"`: For screens smaller than 600 pixels. * `"Tablet"`: For screens greater than or equal to 600 pixels and smaller than 1024 pixels. * `"Desktop"`: For screens greater than or equal to 1024 pixels and smaller than 1440 pixels. * `"LargeDesktop"`: For screens greater than or equal to 1440 pixels. 
         * 
         * This range set is initialized by default. An initialization via {@link sap.ui.Device.media.initRangeSet} is not needed.
         * 
         * A CSS class is added to the page root (`html` tag) which indicates the current screen width range: `sapUiMedia-StdExt-* NAME_OF_THE_INTERVAL *`.
            */
            export const SAP_STANDARD_EXTENDED: any;
        }
        namespace orientation {

            // Methods
            /**
                * Registers the given event handler to orientation change events of the document's window.
             * 
             * The event is fired whenever the screen orientation changes and the width of the document's window becomes greater than its height or the other way round.
             * 
             * The event handler is called with a single argument: a map `mParams` which provides the following information:  * `mParams.landscape`: If this flag is set to `true`, the screen is currently in landscape mode, otherwise in portrait mode. 
                */
            export function attachHandler(fnFunction: Function, oListener?: any): any;/**
    * Removes a previously attached event handler from the orientation change events.
 * 
 * The passed parameters must match those used for registration with {@link #.attachHandler} beforehand.
    */
            export function detachHandler(fnFunction: Function, oListener?: any): any;    // Fields
            /**
            * If this flag is set to `true`, the screen is currently in landscape mode (the width is greater than the height).
            */
            export const landscape: boolean;
            // Fields
            /**
            * If this flag is set to `true`, the screen is currently in portrait mode (the height is greater than the width).
            */
            export const portrait: boolean;
        }
        namespace os {

            // Fields
            /**
            * If this flag is set to `true`, an Android operating system is used.
            */
            export const android: boolean;
            // Fields
            /**
            * If this flag is set to `true`, a Blackberry operating system is used.
            */
            export const blackberry: boolean;
            // Fields
            /**
            * If this flag is set to `true`, an iOS operating system is used.
            */
            export const ios: boolean;
            // Fields
            /**
            * If this flag is set to `true`, a Linux operating system is used.
            */
            export const linux: boolean;
            // Fields
            /**
            * If this flag is set to `true`, a Mac operating system is used.
            */
            export const macintosh: boolean;
            // Fields
            /**
            * The name of the operating system.
            */
            export const name: string;
            // Fields
            /**
            * The version of the operating system as `float`.
         * 
         * Might be `-1` if no version can be determined.
            */
            export const version: number;
            // Fields
            /**
            * The version of the operating system as `string`.
         * 
         * Might be empty if no version can be determined.
            */
            export const versionStr: string;
            // Fields
            /**
            * If this flag is set to `true`, a Windows operating system is used.
            */
            export const windows: boolean;
            // Fields
            /**
            * If this flag is set to `true`, a Windows Phone operating system is used.
            */
            export const windows_phone: boolean;
        }
        namespace OS {

            // Fields
            /**
            * Android operating system name.
            */
            export const ANDROID: any;
            // Fields
            /**
            * Blackberry operating system name.
            */
            export const BLACKBERRY: any;
            // Fields
            /**
            * iOS operating system name.
            */
            export const IOS: any;
            // Fields
            /**
            * Linux operating system name.
            */
            export const LINUX: any;
            // Fields
            /**
            * MAC operating system name.
            */
            export const MACINTOSH: any;
            // Fields
            /**
            * Windows operating system name.
            */
            export const WINDOWS: any;
            // Fields
            /**
            * Windows Phone operating system name.
            */
            export const WINDOWS_PHONE: any;
        }
        namespace resize {

            // Methods
            /**
                * Registers the given event handler to resize change events of the document's window.
             * 
             * The event is fired whenever the document's window size changes.
             * 
             * The event handler is called with a single argument: a map `mParams` which provides the following information:  * `mParams.height`: The height of the document's window in pixels. * `mParams.width`: The width of the document's window in pixels. 
                */
            export function attachHandler(fnFunction: Function, oListener?: any): any;/**
    * Removes a previously attached event handler from the resize events.
 * 
 * The passed parameters must match those used for registration with {@link #.attachHandler} beforehand.
    */
            export function detachHandler(fnFunction: Function, oListener?: any): any;    // Fields
            /**
            * The current height of the document's window in pixels.
            */
            export const height: number;
            // Fields
            /**
            * The current width of the document's window in pixels.
            */
            export const width: number;
        }
        namespace support {

            // Fields
            /**
            * If this flag is set to `true`, the used browser natively supports media queries via JavaScript.
         * 
         * ** Note: ** The {@link sap.ui.Device.media media queries API} of the device API can also be used when there is no native support.
            */
            export const matchmedia: boolean;
            // Fields
            /**
            * If this flag is set to `true`, the used browser natively supports events of media queries via JavaScript.
         * 
         * ** Note: ** The {@link sap.ui.Device.media media queries API} of the device API can also be used when there is no native support.
            */
            export const matchmedialistener: boolean;
            // Fields
            /**
            * If this flag is set to `true`, the used browser natively supports the `orientationchange` event.
         * 
         * ** Note: ** The {@link sap.ui.Device.orientation orientation event} of the device API can also be used when there is no native support.
            */
            export const orientation: boolean;
            // Fields
            /**
            * If this flag is set to `true`, the used browser supports pointer events.
            */
            export const pointer: boolean;
            // Fields
            /**
            * If this flag is set to `true`, the device has a display with a high resolution.
            */
            export const retina: boolean;
            // Fields
            /**
            * If this flag is set to `true`, the used browser supports touch events.
         * 
         * ** Note: ** This flag indicates whether the used browser supports touch events or not. This does not necessarily mean that the used device has a touchable screen.
            */
            export const touch: boolean;
            // Fields
            /**
            * If this flag is set to `true`, the used browser supports web sockets.
            */
            export const websocket: boolean;
        }
        namespace system {

            // Fields
            /**
            * If this flag is set to `true`, the device is recognized as a combination of a desktop system and tablet.
         * 
         * Furthermore, a CSS class `sap-combi` is added to the document root element.
         * 
         * ** Note: ** This property is mainly for Microsoft Windows 8 (and following) devices where the mouse and touch event may be supported natively by the browser being used. This property is set to `true` only when both mouse and touch event are natively supported.
            */
            export const combi: boolean;
            // Fields
            /**
            * If this flag is set to `true`, the device is recognized as a desktop system.
         * 
         * Furthermore, a CSS class `sap-desktop` is added to the document root element.
            */
            export const desktop: boolean;
            // Fields
            /**
            * If this flag is set to `true`, the device is recognized as a phone.
         * 
         * Furthermore, a CSS class `sap-phone` is added to the document root element.
            */
            export const phone: boolean;
            // Fields
            /**
            * If this flag is set to `true`, the device is recognized as a tablet.
         * 
         * Furthermore, a CSS class `sap-tablet` is added to the document root element.
         * 
         * ** Note: ** This flag is also true for some browsers on desktop devices running on Windows 8 or higher. Also see the documentation for {@link sap.ui.Device.system.combi} devices. You can use the following logic to ensure that the current device is a tablet device:
         * 
         * `if(sap.ui.Device.system.tablet && !sap.ui.Device.system.desktop){
         * 	...tablet related commands...
         * }`
            */
            export const tablet: boolean;
        }

    }
}
