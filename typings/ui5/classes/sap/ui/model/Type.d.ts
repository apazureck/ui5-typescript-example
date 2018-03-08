declare namespace sap.ui.model {

    /**
    
    */
    export class Type extends sap.ui.base.Object {

        /**
            * Constructor for a new Type.
        */
        public constructor();


        /**
            * Creates a new subclass of class sap.ui.model.Type with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.model.Type.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the name of this type.
        */
        public getName(): string;

        /**
            * Returns a simple string representation of this type.
         * 
         * Mainly useful for tracing purposes.
        */
        public toString(): string;

    }
}