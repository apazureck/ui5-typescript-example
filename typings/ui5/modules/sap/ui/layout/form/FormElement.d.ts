declare module "sap/ui/layout/form/FormElement" {

    export = FormElement;




    /**
    
    */
    class FormElement extends sap.ui.core.Element {

        /**
            * Constructor for a new sap.ui.layout.form.FormElement.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some field to the aggregation {@link #getFields fields}.
        */
        public addField(oField: sap.ui.core.Control): this;

        /**
            * Destroys all the fields in the aggregation {@link #getFields fields}.
        */
        public destroyFields(): this;

        /**
            * Destroys the label in the aggregation {@link #getLabel label}.
        */
        public destroyLabel(): this;

        /**
            * Creates a new subclass of class sap.ui.layout.form.FormElement with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets content of aggregation {@link #getFields fields}.
         * 
         * Formular controls that belong together to be displayed in one row of a `Form`.
         * 
         * ** Note: ** Do not put any layout controls in here. This could destroy the visual layout, keyboard support and screen-reader support.
        */
        public getFields(): any[];

        /**
            * Gets content of aggregation {@link #getLabel label}.
         * 
         * Label of the fields. Can either be a `Label` control or a string. If a `Label` control is used, the properties of the `Label` can be set. If no assignment between `Label` and the fields is set via (`labelFor` property of the `Label`), it will be done automatically by the `FormElement`. In this case the `Label` is assigned to the fields of the `FormElement`.
        */
        public getLabel(): sap.ui.core.Label | string;

        /**
            * Returns the `Label` of the `FormElement`, even if the `Label` is assigned as string. The `FormLayout` needs the information of the label to render the `Form`.
        */
        public getLabelControl(): sap.ui.core.Label;

        /**
            * Returns a metadata object for class sap.ui.layout.form.FormElement.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * If set to `false`, the `FormElement` is not rendered.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getFields fields}. and returns its index if found or -1 otherwise.
        */
        public indexOfField(oField: sap.ui.core.Control): number;

        /**
            * Inserts a field into the aggregation {@link #getFields fields}.
        */
        public insertField(oField: sap.ui.core.Control, iIndex: number): this;

        /**
            * Determines if the `FormElement` is visible or not. Per default it just returns the value of the `visible` property. But this might be overwritten by inherited elements.
         * 
         * For rendering by `FormLayouts` this function has to be used instead of `getVisible`.
        */
        public isVisible(): boolean;

        /**
            * Removes all the controls from the aggregation {@link #getFields fields}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllFields(): any[];

        /**
            * Removes a field from the aggregation {@link #getFields fields}.
        */
        public removeField(vField: number | string | sap.ui.core.Control): sap.ui.core.Control;

        /**
            * Sets the aggregated {@link #getLabel label}.
        */
        public setLabel(vLabel: sap.ui.core.Label | string): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * If set to `false`, the `FormElement` is not rendered.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

    }


}
