declare module 'sap/m/MessagePopoverItem' {
    import Metadata from "sap/ui/base/Metadata";
    import Item, { IItemSettings } from 'sap/ui/core/Item';

    export interface IMessagePopoverItemSettings extends IItemSettings {
    }

    /**
    
    */
    export default class MessagePopoverItem extends Item {

        /**
            * Constructor for a new MessagePopoverItem.
        */
        public constructor(sId?: string, mSettings?: IMessagePopoverItemSettings);


        /**
            * Creates a new subclass of class sap.m.MessagePopoverItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.m.MessagePopoverItem.
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