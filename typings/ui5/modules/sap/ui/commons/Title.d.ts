declare module "sap/ui/commons/Title" {
    import sap_ui_core_Title from "sap/ui/core/Title";

    import TitleBase from 'sap/ui/core/Title'

    /**
    
    */
    export default class Title extends TitleBase {


        /**
            * Constructor for a new Title.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.commons.Title with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Title.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Getter for property `level`. Defines the level of the title. If set to auto the level of the title is chosen by the control rendering the title.
         * 
         * Currently not all controls using the Title.control supporting this property.
         * 
         * Default value is `Auto`
        */
        public getLevel(): sap.ui.core.TitleLevel;

        /**
            * Returns a metadata object for class sap.ui.commons.Title.
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
            * Setter for property `level`.
         * 
         * Default value is `Auto`
        */
        public setLevel(oLevel: sap.ui.core.TitleLevel): this;

    }

}
