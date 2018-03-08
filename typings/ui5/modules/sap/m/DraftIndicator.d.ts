declare module "sap/m/DraftIndicator" {
    import sapmlibrary from "sap/m/library";
    type DraftIndicatorState = sapmlibrary.DraftIndicatorState;

    export = DraftIndicator;




    /**
    
    */
    class DraftIndicator extends sap.ui.core.Control {

        /**
            * Constructor for a new DraftIndicator.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string);


        /**
            * Clears the indicator state
        */
        public clearDraftState(): any;

        /**
            * Creates a new subclass of class sap.m.DraftIndicator with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.m.DraftIndicator.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

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
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Gets current value of property {@link #getMinDisplayTime minDisplayTime}.
         * 
         * Minimum time in milliseconds for showing the draft indicator
         * 
         * Default value is `1500`.
        */
        public getMinDisplayTime(): number;

        /**
            * Gets current value of property {@link #getState state}.
         * 
         * State of the indicator. Could be "Saving", "Saved" and "Clear".
         * 
         * Default value is `Clear`.
        */
        public getState(): DraftIndicatorState;

        /**
            * Sets a new value for property {@link #getMinDisplayTime minDisplayTime}.
         * 
         * Minimum time in milliseconds for showing the draft indicator
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1500`.
        */
        public setMinDisplayTime(iMinDisplayTime: number): this;

        /**
            * Sets the indicator in "Saved" state
        */
        public showDraftSaved(): any;

        /**
            * Sets the indicator in "Saving..." state
        */
        public showDraftSaving(): any;

    }


}
