declare module "sap/ui/core/util/serializer/XMLViewSerializer" {

    export = XMLViewSerializer;




    /**
    
    */
    class XMLViewSerializer extends sap.ui.base.EventProvider {

        /**
            * XML view serializer class. Serializes a given view.
        */
        public constructor(oView: sap.ui.core.mvc.XMLView, sDefaultXmlNamespace: string, fnGetControlId: Function, fnGetEventHandlerName: Function);

        /**
            * XML view serializer class. Serializes a given view.
        */
        public constructor(oView: sap.ui.core.mvc.XMLView, oWindow: any, fnGetControlId: Function, fnGetEventHandlerName: Function);

        /**
            * XML view serializer class. Serializes a given view.
        */
        public constructor(oView: sap.ui.core.mvc.XMLView, oWindow: any, sDefaultXmlNamespace: string, fnGetControlId: Function, fnGetEventHandlerName: Function);


        /**
            * Creates a new subclass of class sap.ui.core.util.serializer.XMLViewSerializer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.core.util.serializer.XMLViewSerializer.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

    }


}
