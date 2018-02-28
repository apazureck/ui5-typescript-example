declare module "sap/ui/Device" {


    export namespace os {

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
} declare module "sap/ui/Device" {


    export namespace os.OS {

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
}