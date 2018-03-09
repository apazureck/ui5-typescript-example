declare namespace sap.ui.model {

    /**
    
    */
    export abstract class Context extends sap.ui.base.Object {


        /**
            * Constructor for Context class.
        */
        public constructor(oModel: sap.ui.model.Model, sPath: string);


        /**
            * Creates a new subclass of class sap.ui.model.Context with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.model.Context.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Getter for model
        */
        public getModel(): sap.ui.model.Model;

        /**
            * Gets the (model dependent) object the context points to or the object with the given relative binding path
        */
        public getObject(sPath?: string, mParameters?: any): any;

        /**
            * Getter for path of the context itself or a subpath
        */
        public getPath(sPath: string): string;

        /**
            * Gets the property with the given relative binding path
        */
        public getProperty(sPath: string): any;

    }
}