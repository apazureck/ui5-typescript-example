declare module 'sap/ui/commons/MenuItem' {
    import Metadata from "sap/ui/base/Metadata";
    import * as base from 'sap/ui/unified/MenuItem'

    export interface IMenuItemSettings extends base.IMenuItemSettings {
    }

    /**
    
    */
    export default class MenuItem extends
        base.default {

        /**
            * Constructor for a new MenuItem element.
        */
        public constructor(sId?: string, mSettings?: IMenuItemSettings);


        /**
            * Creates a new subclass of class sap.ui.commons.MenuItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.MenuItem.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.commons.MenuItem.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

    }
}