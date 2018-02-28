declare module 'sap/ui/commons/layout/VerticalLayout' {
    import Metadata from "sap/ui/base/Metadata";
    import * as base from 'sap/ui/layout/VerticalLayout'

    export interface IVerticalLayoutSettings extends base.IVerticalLayoutSettings {
    }

    /**
    
    */
    export default class VerticalLayout extends
        base.default {

        /**
            * Constructor for a new layout/VerticalLayout.
        */
        public constructor(sId?: string, mSettings?: IVerticalLayoutSettings);


        /**
            * Creates a new subclass of class sap.ui.commons.layout.VerticalLayout with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.VerticalLayout.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.commons.layout.VerticalLayout.
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