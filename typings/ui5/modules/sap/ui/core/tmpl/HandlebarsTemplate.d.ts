declare module "sap/ui/core/tmpl/HandlebarsTemplate" {

    /**
    
    */
    export default abstract class HandlebarsTemplate extends sap.ui.core.tmpl.Template {


        /**
            * Creates and initializes a new handlebars template with the given `sId` and settings.
         * 
         * The set of allowed entries in the `mSettings` object depends on the concrete subclass and is described there.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.core.tmpl.HandlebarsTemplate with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.tmpl.Template.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.core.tmpl.HandlebarsTemplate.
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

    }

}
