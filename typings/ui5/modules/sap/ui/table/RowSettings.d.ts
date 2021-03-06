declare module "sap/ui/table/RowSettings" {

    /**
    
    */
    export default class RowSettings extends sap.ui.core.Element {


        /**
            * Constructor for new RowSettings.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.table.RowSettings with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getHighlight highlight}.
         * 
         * The highlight state of the rows. If the highlight is set to {@link sap.ui.core.MessageType.None} (default), no highlights are visible.
         * 
         * Default value is `None`.
        */
        public getHighlight(): sap.ui.core.MessageType;

        /**
            * Returns a metadata object for class sap.ui.table.RowSettings.
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
            * Sets a new value for property {@link #getHighlight highlight}.
         * 
         * The highlight state of the rows. If the highlight is set to {@link sap.ui.core.MessageType.None} (default), no highlights are visible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setHighlight(sHighlight: sap.ui.core.MessageType): this;

    }

}
