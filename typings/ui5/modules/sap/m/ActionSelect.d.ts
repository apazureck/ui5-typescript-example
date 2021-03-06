declare module "sap/m/ActionSelect" {
    import Select from "sap/m/Select";
    import Button from "sap/m/Button";

    /**
    
    */
    export default class ActionSelect extends Select {


        /**
            * Constructor for a new ActionSelect.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some button into the association {@link #getButtons buttons}.
        */
        public addButton(vButton: sap.ui.core.ID | Button): this;

        /**
            * Creates a new subclass of class sap.m.ActionSelect with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Select.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getButtons buttons}.
        */
        public getButtons(): any[];

        /**
            * Returns a metadata object for class sap.m.ActionSelect.
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
            * Remove all buttons from the ActionSelect.
        */
        public removeAllButtons(): any[];

        /**
            * Button to be removed from the ActionSelect content.
        */
        public removeButton(vButton: number | string | Button): string;

    }

}
