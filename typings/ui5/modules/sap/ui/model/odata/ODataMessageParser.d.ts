declare module "sap/ui/model/odata/ODataMessageParser" {
    import MessageParser from "sap/ui/core/message/MessageParser";

    /**
    
    */
    export default abstract class ODataMessageParser extends MessageParser {


        /**
            * OData implementation of the sap.ui.core.message.MessageParser class. Parses message responses from the back-end.
        */
        public constructor();


        /**
            * Creates a new subclass of class sap.ui.model.odata.ODataMessageParser with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.message.MessageParser.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns the name of the header field that is used to parse the server messages
        */
        public getHeaderField(): string;

        /**
            * Returns a metadata object for class sap.ui.model.odata.ODataMessageParser.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Parses the given response for messages, calculates the delta and fires the messageChange-event on the MessageProcessor if messages are found.
        */
        public parse(oResponse: any, oRequest: any, mGetEntities: any, mChangeEntities: any): any;
        public parse(): any;


        /**
            * Sets the header field name that should be used for parsing the JSON messages
        */
        public setHeaderField(sFieldName: string): this;

    }

}
