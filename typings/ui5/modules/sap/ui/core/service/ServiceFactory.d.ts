declare module "sap/ui/core/service/ServiceFactory" {

    export = ServiceFactory;




    /**
    
    */
    class ServiceFactory extends sap.ui.base.Object {

        /**
            * Creates a service factory.
        */
        public constructor(vService?: Function | any);


        /**
            * Creates a new instance of a service. When used as a generic service factory by providing a service constructor function it will create a new service instance otherwise the function will fail. For custom service factories this function has to be overridden and should return a `Promise`.
        */
        protected createInstance(oServiceContext: { scopeObject: any, scopeType: string, settings: string, }): any;

        /**
            * Lifecycle method to destroy the service factory instance.
        */
        public destroy(): any;

        /**
            * Destructor method for objects
        */
        public destroy(): any;

        /**
            * Creates a new subclass of class sap.ui.core.service.ServiceFactory with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.core.service.ServiceFactory.
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
