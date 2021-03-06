declare namespace sap.ui.core.message {

    export class Message extends sap.ui.base.Object {


        /**
            * Constructor for a new Message.
        */
        public constructor(mParameters?: { id?: string, message?: string, description?: string, descriptionUrl?: string, additionalText?: string, type?: sap.ui.core.MessageType, code?: string, technical?: boolean, processor?: sap.ui.core.message.MessageProcessor, target?: string, persistent?: boolean, date?: number, });


        /**
            * Creates a new subclass of class sap.ui.core.message.Message with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns the messages additional text.
        */
        public getAdditionalText(): string;

        /**
            * Returns the message code
        */
        public getCode(): string;

        /**
            * Set the date of the message
        */
        public getDate(): number;

        /**
            * Returns the message description
        */
        public getDescription(): string;

        /**
            * Returns the message description URL which should be used to download the description content
        */
        public getDescriptionUrl(): string;

        /**
            * Returns the Message Id
        */
        public getId(): string;

        /**
            * Returns message text
        */
        public getMessage(): string;

        /**
            * Returns the message processor
        */
        public getMessageProcessor(): sap.ui.core.message.MessageProcessor;

        /**
            * Returns a metadata object for class sap.ui.core.message.Message.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the if Message is persistent
        */
        public getPersistent(): boolean;

        /**
            * Returns the message target
        */
        public getTarget(): string;

        /**
            * Returns the if Message set as technical message
        */
        public getTechnical(): boolean;

        /**
            * Returns the message type
        */
        public getType(): sap.ui.core.MessageType;

        /**
            * Sets the additionaltext for the message or merge different additionaltext strings
        */
        public setAdditionalText(sAdditionalText: string): any;

        /**
            * Set message code
        */
        public setCode(sCode: string): any;

        /**
            * Set the date of the message, this will automatically be set on message creation
        */
        public setDate(iDate: number): any;

        /**
            * Set message description
        */
        public setDescription(sDescription: string): any;

        /**
            * Set message description URL which should be used to download the description content
        */
        public setDescriptionUrl(sDescription: string): any;

        /**
            * Set message text
        */
        public setMessage(sMessage: string): any;

        /**
            * Set message processor
        */
        public setMessageProcessor(oMessageProcessor: sap.ui.core.message.MessageProcessor): any;

        /**
            * Set message persistent
        */
        public setPersistent(bPersistent: boolean): any;

        /**
            * Set message target: The syntax MessageProcessor dependent. See the documentation of the respective MessageProcessor.
        */
        public setTarget(sTarget: string): any;

        /**
            * Set message as technical message
        */
        public setTechnical(bTechnical: boolean): any;

        /**
            * Set message type
        */
        public setType(sType: sap.ui.core.MessageType): any;

    }
}