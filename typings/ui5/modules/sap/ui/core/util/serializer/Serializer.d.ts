declare module "sap/ui/core/util/serializer/Serializer" {

    export = Serializer;




    /**
    
    */
    class Serializer extends sap.ui.base.EventProvider {

        /**
            * Serializer class. Iterates over all controls and call a given serializer delegate.
        */
        public constructor(oRootControl: sap.ui.core.Control | sap.ui.core.UIArea, serializeDelegate: any, bSkipRoot: boolean, fnSkipAggregations: Function, fnSkipElement: Function);


        /**
            * Creates a new subclass of class sap.ui.core.util.serializer.Serializer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.core.util.serializer.Serializer.
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
