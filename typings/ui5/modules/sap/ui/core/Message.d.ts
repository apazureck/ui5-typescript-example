declare module "sap/ui/core/Message" {

    /**
    
    */
    export default class Message extends sap.ui.core.Element {


        /**
            * Constructor for a new Message.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Compares the given message with `this` message. The types of {@link sap.ui.core.MessageType} are ordered from "Error" > "Warning" > "Success" > "Information" > "None".
         * 
         * See {@link sap.ui.core.Message.compareByType}
        */
        public compareByType(oOther: this): number;

        /**
            * Compares two given messages with each other.
         * 
         * The types of {@link sap.ui.core.MessageType} are ordered from "Error" > "Warning" > "Success" > "Information" > "None".
        */
        public static compareByType(oMessage1: Message, oMessage2: Message): number;

        /**
            * Creates a new subclass of class sap.ui.core.Message with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns the icon's default URI depending on given size.
         * 
         * There are default icons for messages available that can be used this way. If no parameter is given, the size will be 16x16 per default. If larger icons are needed, the parameter "32x32" might be given.
        */
        public getDefaultIcon(sSize: string): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * A possible icon URI of the message
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getLevel level}.
         * 
         * Setting the message's level.
         * 
         * Default value is `None`.
        */
        public getLevel(): sap.ui.core.MessageType;

        /**
            * Returns a metadata object for class sap.ui.core.Message.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Gets current value of property {@link #getReadOnly readOnly}.
         * 
         * Determines whether the message should be read only. This helps the application to handle a message a different way if the application differentiates between read-only and common messages.
         * 
         * Default value is `false`.
        */
        public getReadOnly(): boolean;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Message text
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getTimestamp timestamp}.
         * 
         * Message's timestamp. It is just a simple String that will be used without any transformation. So the application that uses messages needs to format the timestamp to its own needs.
        */
        public getTimestamp(): string;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * A possible icon URI of the message
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getLevel level}.
         * 
         * Setting the message's level.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setLevel(sLevel: sap.ui.core.MessageType): this;

        /**
            * Sets a new value for property {@link #getReadOnly readOnly}.
         * 
         * Determines whether the message should be read only. This helps the application to handle a message a different way if the application differentiates between read-only and common messages.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setReadOnly(bReadOnly: boolean): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Message text
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getTimestamp timestamp}.
         * 
         * Message's timestamp. It is just a simple String that will be used without any transformation. So the application that uses messages needs to format the timestamp to its own needs.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTimestamp(sTimestamp: string): this;

    }

}
