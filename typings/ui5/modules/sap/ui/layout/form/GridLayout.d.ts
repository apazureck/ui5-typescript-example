declare module "sap/ui/layout/form/GridLayout" {
    import FormLayout from "sap/ui/layout/form/FormLayout";

    export = GridLayout;




    /**
    
    */
    class GridLayout extends FormLayout {

        /**
            * Constructor for a new sap.ui.layout.form.GridLayout.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.layout.form.GridLayout with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.layout.form.GridLayout.
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
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Gets current value of property {@link #getSingleColumn singleColumn}.
         * 
         * If set, the grid renders only one `FormContainer` per column. That means one `FormContainer` is below the other. The whole grid has 8 cells per row.
         * 
         * If not set, `FormContainer` can use the full width of the grid or two `FormContainers` can be placed beside each other. In this case the whole grid has 16 cells per row.
         * 
         * Default value is `false`.
        */
        public getSingleColumn(): boolean;

        /**
            * Sets a new value for property {@link #getSingleColumn singleColumn}.
         * 
         * If set, the grid renders only one `FormContainer` per column. That means one `FormContainer` is below the other. The whole grid has 8 cells per row.
         * 
         * If not set, `FormContainer` can use the full width of the grid or two `FormContainers` can be placed beside each other. In this case the whole grid has 16 cells per row.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setSingleColumn(bSingleColumn: boolean): this;

    }


}
