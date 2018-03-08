declare module "sap/ui/base/ObjectPool" {

    export = ObjectPool;




    /**
    
    */
    class ObjectPool extends sap.ui.base.Object {

        /**
            * Creates an ObjectPool instance based on the given oObjectClass.&lt;br/&gt; If there is a free pooled instance, returns that one, otherwise creates a new one.&lt;br/&gt; In order to be maintained by the ObjectPool, oObjectClass must implement methods described in the class description.
        */
        public constructor(oObjectClass: Function);


        /**
            * Borrows a free object from the pool. Any arguments to this method are forwarded to the init method of the borrowed object.
        */
        public borrowObject(any?: any): any;

        /**
            * Creates a new subclass of class sap.ui.base.ObjectPool with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.base.ObjectPool.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns an object to the pool. The object must have been borrowed from this pool beforehand. The reset method is called on the object before it is added to the set of free objects.
        */
        public returnObject(oObject: any): any;

    }


}
