declare module 'sap/ui/commons/form/GridContainerData' {
    import Metadata from "sap/ui/base/Metadata";
    import * as base from 'sap/ui/layout/form/GridContainerData'

    export interface IGridContainerDataSettings extends base.IGridContainerDataSettings {
    }

    /**
    
    */
    export default class GridContainerData extends
        base.default {

        /**
            * Constructor for a new form/GridContainerData.
        */
        public constructor(sId?: string, mSettings?: IGridContainerDataSettings);


        /**
            * Creates a new subclass of class sap.ui.commons.form.GridContainerData with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.GridContainerData.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.commons.form.GridContainerData.
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

    }
}