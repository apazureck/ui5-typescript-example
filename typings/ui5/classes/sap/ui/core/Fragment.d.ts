declare namespace sap.ui.core {

    /**
    
    */
    export class Fragment extends sap.ui.base.ManagedObject {


        /**
            * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor();


        /**
            * Returns an Element/Control by its ID in the context of the Fragment with the given ID
        */
        public static byId(sFragmentId: string, sId: string): any;

        /**
            * Returns the ID which a Control with the given ID in the context of the Fragment with the given ID would have
        */
        public static createId(sFragmentId: string, sId: string): any;

        /**
            * Creates a new subclass of class sap.ui.core.Fragment with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.core.Fragment.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

        /**
            * Gets current value of property {@link #getType type}.
        */
        public getType(): string;

        /**
            * Registers a new Fragment type
        */
        public static registerType(sType: string, oFragmentImpl: any): any;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setType(sType: string): sap.ui.core.Fragment;

    }
}