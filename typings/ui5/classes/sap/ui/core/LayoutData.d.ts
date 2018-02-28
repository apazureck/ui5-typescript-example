declare module 'sap/ui/core/LayoutData' {
    import Metadata from "sap/ui/base/Metadata";
    import Element, { IElementSettings } from 'sap/ui/core/Element';

    export interface ILayoutDataSettings extends IElementSettings {
    }

    /**
    
    */
    export default class LayoutData extends Element {

        /**
            * Constructor for a new LayoutData.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
         * 
         * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element} can be used.
        */
        public constructor(sId?: string, mSettings?: ILayoutDataSettings);


        /**
            * Creates a new subclass of class sap.ui.core.LayoutData with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.core.LayoutData.
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