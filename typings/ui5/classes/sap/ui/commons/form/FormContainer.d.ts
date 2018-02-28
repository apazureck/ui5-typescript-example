declare module 'sap/ui/commons/form/FormContainer' {
    import Metadata from "sap/ui/base/Metadata";
    import * as base from 'sap/ui/layout/form/FormContainer'

    export interface IFormContainerSettings extends base.IFormContainerSettings {
    }

    /**
    
    */
    export default class FormContainer extends
        base.default {

        /**
            * Constructor for a new form/FormContainer.
        */
        public constructor(sId?: string, mSettings?: IFormContainerSettings);


        /**
            * Creates a new subclass of class sap.ui.commons.form.FormContainer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.FormContainer.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.commons.form.FormContainer.
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
            * Getter for property `visible`. Invisible FormContainers are not rendered.
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