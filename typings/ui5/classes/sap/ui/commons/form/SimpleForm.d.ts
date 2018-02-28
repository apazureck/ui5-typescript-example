declare module 'sap/ui/commons/form/SimpleForm' {
    import { SimpleFormLayout } from "sap/ui/layout/library";
    import Metadata from "sap/ui/base/Metadata";
    import * as base from 'sap/ui/layout/form/SimpleForm'

    export interface ISimpleFormSettings extends base.ISimpleFormSettings {
    }

    /**
    
    */
    export default class SimpleForm extends
        base.default {

        /**
            * Constructor for a new form/SimpleForm.
        */
        public constructor(sId?: string, mSettings?: ISimpleFormSettings);


        /**
            * Creates a new subclass of class sap.ui.commons.form.SimpleForm with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.SimpleForm.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Getter for property `layout`. The FormLayout that is used to render the SimpleForm
         * 
         * Default value is `ResponsiveLayout`
        */
        public getLayout(): SimpleFormLayout;

        /**
            * Returns a metadata object for class sap.ui.commons.form.SimpleForm.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Setter for property `layout`.
         * 
         * Default value is `ResponsiveLayout`
        */
        public setLayout(oLayout: SimpleFormLayout): this;

    }
}