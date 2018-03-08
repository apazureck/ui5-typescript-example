declare module "sap/ui/core/util/serializer/delegate/Delegate" {

    export = Delegate;




    /**
    
    */
    class Delegate extends sap.ui.base.EventProvider {

        /**
            * Abstract serializer delegate class. All delegates must extend from this class and implement the abstract methods.
        */
        public constructor();


        /**
            * Creates a new subclass of class sap.ui.core.util.serializer.delegate.Delegate with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.core.util.serializer.delegate.Delegate.
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
