declare module "sap/m/ViewSettingsCustomItem" {
    import ViewSettingsItem from "sap/m/ViewSettingsItem";

    export = ViewSettingsCustomItem;




    /**
    
    */
    class ViewSettingsCustomItem extends ViewSettingsItem {

        /**
            * Constructor for a new ViewSettingsCustomItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a clone of the ViewSettingsCustomItem instance.
        */
        protected clone(sIdSuffix?: string, aLocalIds?: any[], oOptions?: any): sap.ui.base.ManagedObject;

        /**
            * Destroys the customControl in the aggregation {@link #getCustomControl customControl}.
        */
        public destroyCustomControl(): this;

        /**
            * Creates a new subclass of class sap.m.ViewSettingsCustomItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ViewSettingsItem.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Internally the control is handled as a managed object instead of an aggregation because this control is sometimes aggregated in other controls like a popover or a dialog.
        */
        public getCustomControl(): sap.ui.core.Control;

        /**
            * Gets current value of property {@link #getFilterCount filterCount}.
         * 
         * The number of currently active filters for this custom filter item. It will be displayed in the filter list of the ViewSettingsDialog to represent the filter state of the custom control.
         * 
         * Default value is `0`.
        */
        public getFilterCount(): number;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.m.ViewSettingsCustomItem.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Internally the control is handled as a managed object instead of an aggregation as this control is sometimes aggregated in other controls like a popover or a dialog.
        */
        public setCustomControl(oControl: sap.ui.core.Control): this;

        /**
            * Sets the filterCount without invalidating the control as it is never rendered directly.
        */
        public setFilterCount(iValue: number): ViewSettingsItem;

    }


}
