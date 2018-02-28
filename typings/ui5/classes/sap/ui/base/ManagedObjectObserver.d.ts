declare module 'sap/ui/base/ManagedObjectObserver' {
    import Metadata from "sap/ui/base/Metadata";
    import ManagedObject from "sap/ui/base/ManagedObject";


    export interface IManagedObjectObserverSettings {
    }

    /**
    
    */
    export default class ManagedObjectObserver {


        /**
            * Disconnect the observer from all objects.
        */
        private disconnect(): any;

        /**
            * Creates a new subclass of class sap.ui.base.ManagedObjectObserver with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.base.ManagedObjectObserver.
        */
        public static getMetadata(): Metadata;

        /**
            * Checks whether a given configuration set for a control is observed.
         * 
         * All given settings must be observed for the method to return true.
        */
        private isObserved(oObject: ManagedObject, oConfiguration: { properties?: boolean | any[], aggregations?: boolean | any[], associations?: boolean | any[], }): boolean;

        /**
            * Starts observing the given object. A configuration is used to specify the meta data settings that should be observed. Configuration should be as specific as possible to avoid negative performance impact. Observing all settings (properties, aggregations, associations) should be avoided.
        */
        private observe(oObject: ManagedObject, oConfiguration: { properties?: boolean | any[], aggregations?: boolean | any[], associations?: boolean | any[], bindings?: boolean | any[], events?: boolean | any[], destroy?: boolean, }): any;

        /**
            * Stops observing the given object. A configuration is used to specify the meta data settings that should be ignored. Configuration should be as specific as possible to avoid negative performance impact.
        */
        private unobserve(oObject: ManagedObject, oConfiguration: { properties?: boolean | any[], aggregations?: boolean | any[], associations?: boolean | any[], bindings?: boolean | any[], events?: boolean | any[], destroy?: boolean, }): any;

    }
}