declare module 'sap/ui/commons/form/FormElement' {
    import Metadata from "sap/ui/base/Metadata";
    import * as base from 'sap/ui/layout/form/FormElement'

    export interface IFormElementSettings extends base.IFormElementSettings {
    }

    /**
    
    */
    export default class FormElement extends
        base.default {

        /**
            * Constructor for a new form/FormElement.
        */
        public constructor(sId?: string, mSettings?: IFormElementSettings);


        /**
            * Creates a new subclass of class sap.ui.commons.form.FormElement with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.FormElement.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.commons.form.FormElement.
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
            * Getter for property `visible`. Invisible FormElements are not rendered.
         * 
         * Default value is `true`
        */
        public getVisible(): boolean;

        /**
            * Setter for property `visible`.
         * 
         * Default value is `true`
        */
        public setVisible(bVisible: boolean): this;

    }
}