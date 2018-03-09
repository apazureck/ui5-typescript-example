declare namespace sap.ui.model.message {

    /**
    
    */
    export class MessageModel extends sap.ui.model.ClientModel {


        /**
            * Constructor for a new JSONModel.
        */
        public constructor(oMessageManager: sap.ui.core.message.MessageManager);


        /**
            * Creates a new subclass of class sap.ui.model.message.MessageModel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.ClientModel.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.model.message.MessageModel.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the value for the property with the given `sPropertyName`
        */
        public getProperty(sPath: string, oContext?: any): any;

        /**
            * Sets the message data to the model.
        */
        public setData(oData: any): any;

        /**
            * Sets a new value for the given property `sPropertyName` in the model. If the model value changed all interested parties are informed.
        */
        public setProperty(sPath: string, oValue: any, oContext?: any): any;

    }
}