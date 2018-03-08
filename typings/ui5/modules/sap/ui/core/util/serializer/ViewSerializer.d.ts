declare module "sap/ui/core/util/serializer/ViewSerializer" {

    export = ViewSerializer;




    /**
    
    */
    class ViewSerializer extends sap.ui.base.EventProvider {

        /**
            * View serializer class. Iterates over all controls and serializes all found views by calling the corresponding view type serializer.
        */
        public constructor(oRootControl: sap.ui.core.Control | sap.ui.core.UIArea, oWindow?: any, sDefaultXmlNamespace?: string);


        /**
            * Creates a new subclass of class sap.ui.core.util.serializer.ViewSerializer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.core.util.serializer.ViewSerializer.
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
