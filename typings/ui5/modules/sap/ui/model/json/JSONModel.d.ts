declare module "sap/ui/model/json/JSONModel" {
    /**

*/
    namespace json {

    }

    /**
    
    */
    export default class JSONModel extends sap.ui.model.ClientModel {


        /**
            * Constructor for a new JSONModel.
        */
        public constructor(oData: any, bObserve: boolean);


        /**
            * Creates a new subclass of class sap.ui.model.json.JSONModel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.ClientModel.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Serializes the current JSON data of the model into a string. Note: May not work in Internet Explorer 8 because of lacking JSON support (works only if IE 8 mode is enabled)
        */
        public getJSON(): string;

        /**
            * Returns a metadata object for class sap.ui.model.json.JSONModel.
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
        public getProperty(sPath: string, oContext?: sap.ui.model.Context): any;

        /**
            * Implement in inheriting classes
        */
        public getProperty(sPath: string, oContext?: any): any;

        /**
            * Load JSON-encoded data from the server using a GET HTTP request and store the resulting JSON data in the model. Note: Due to browser security restrictions, most "Ajax" requests are subject to the same origin policy, the request can not successfully retrieve data from a different domain, subdomain, or protocol.
        */
        public loadData(sURL: string, oParameters?: any | string, bAsync?: boolean, sType?: string, bMerge?: boolean, bCache?: string, mHeaders?: any): any;

        /**
            * Sets the JSON encoded data to the model.
        */
        public setData(oData: any, bMerge?: boolean): any;

        /**
            * Sets the JSON encoded string data to the model.
        */
        public setJSON(sJSONText: string, bMerge?: boolean): any;

        /**
            * Sets a new value for the given property `sPropertyName` in the model. If the model value changed all interested parties are informed.
        */
        public setProperty(sPath: string, oValue: any, oContext?: any, bAsyncUpdate?: boolean): boolean;

    }

}
