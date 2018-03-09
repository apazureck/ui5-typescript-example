declare namespace sap.ui.core.message {

    export class MessageManager extends sap.ui.base.EventProvider {


        /**
            * Constructor for a new MessageManager.
        */
        public constructor();


        /**
            * Add messages to MessageManager
        */
        public addMessages(vMessages: sap.ui.core.message.Message | any[]): any;

        /**
            * destroy MessageManager
        */
        public destroy(): any;

        /**
            * Creates a new subclass of class sap.ui.core.message.MessageManager with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Get the MessageModel
        */
        public getMessageModel(): sap.ui.model.message.MessageModel;

        /**
            * Returns a metadata object for class sap.ui.core.message.MessageManager.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Register MessageProcessor
        */
        public registerMessageProcessor(oProcessor: sap.ui.core.message.MessageProcessor): any;

        /**
            * Register ManagedObject: Validation and Parse errors are handled by the MessageManager for this object
        */
        public registerObject(oObject: sap.ui.base.ManagedObject, bHandleValidation: boolean): any;

        /**
            * Remove all messages
        */
        public removeAllMessages(): any;

        /**
            * Remove given Messages
        */
        public removeMessages(vMessages: sap.ui.core.message.Message | any[]): any;

        /**
            * Deregister MessageProcessor
        */
        public unregisterMessageProcessor(oProcessor: sap.ui.core.message.MessageProcessor): any;

        /**
            * Unregister ManagedObject
        */
        public unregisterObject(oObject: sap.ui.base.ManagedObject): any;

    }
}