declare module 'sap/ui/commons/Menu' {
    import Metadata from "sap/ui/base/Metadata";
    import * as base from 'sap/ui/unified/Menu'

    export interface IMenuSettings extends base.IMenuSettings {
    }

    /**
    
    */
    export default class Menu extends
        base.default {

        /**
            * Constructor for a new Menu control.
        */
        public constructor(sId?: string, mSettings?: IMenuSettings);


        /**
            * Creates a new subclass of class sap.ui.commons.Menu with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.Menu.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.commons.Menu.
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