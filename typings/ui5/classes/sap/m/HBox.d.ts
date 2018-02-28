declare module 'sap/m/HBox' {
    import Metadata from "sap/ui/base/Metadata";
    import FlexBox, { IFlexBoxSettings } from 'sap/m/FlexBox';

    export interface IHBoxSettings extends IFlexBoxSettings {
    }

    /**
    
    */
    export default class HBox extends FlexBox {

        /**
            * Constructor for a new HBox.
        */
        public constructor(sId?: string, mSettings?: IHBoxSettings);


        /**
            * Creates a new subclass of class sap.m.HBox with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.FlexBox.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.m.HBox.
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