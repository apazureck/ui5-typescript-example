declare module "sap/ui/core/History" {

    export = History;




    /**
    
    */
    class History extends sap.ui.base.Object {

        /**
            * Creates an instance of the History.
         * 
         * Attention: The Web Storage API which is used by this class stores the data on the client. Therefore do not use this API for confidential information.
        */
        public constructor(sId: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.core.History with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.core.History.
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
