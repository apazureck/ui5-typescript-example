declare module "sap/ui/core/service/Service" {

    /**
    
    */
    export default abstract class Service extends sap.ui.base.Object {


        /**
            * Creates a service for the given context.
        */
        public constructor(oServiceContext: { scopeObject: any, scopeType: string, });


        /**
            * Lifecycle method to destroy the service instance.
         * 
         * This function is not available on the service interface.
        */
        public destroy(): any;

        /**
            * Destructor method for objects
        */
        public destroy(): any;

        /**
            * Cleans up the service instance before destruction.
         * 
         * Applications must not call this hook method directly, it is called by the framework when the service is {@link #destroy destroyed}.
         * 
         * Subclasses of service should override this hook to implement any necessary clean-up.
        */
        protected exit(): any;

        /**
            * Creates a new subclass of class sap.ui.core.service.Service with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns the context of the service: `{
         *   "scopeObject": oComponent, // the Component instance
         *   "scopeType": "component",   // the stereotype of the scopeObject
         *   "settings": {} // the provided service settings
         * }`
         * 
         * This function is not available on the service interface.
        */
        protected getContext(): any;

        /**
            * Returns the public interface of the service. By default, this filters the internal functions like `getInterface`, `getContext` and all other functions starting with "_". Additionally the lifecycle functions `init`, `exit` and `destroy` will be filtered for the service interface. This function can be overridden in order to self-create a service interface.
         * 
         * This function is not available on the service interface.
        */
        public getInterface(): any | sap.ui.base.Interface;

        /**
            * Returns the public interface of the object.
        */
        public getInterface(): sap.ui.base.Interface;

        /**
            * Returns a metadata object for class sap.ui.core.service.Service.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Initializes the service instance after creation.
         * 
         * Applications must not call this hook method directly, it is called by the framework while the constructor of a service is executed.
         * 
         * Subclasses of service should override this hook to implement any necessary initialization.
        */
        protected init(): any;

    }

}
