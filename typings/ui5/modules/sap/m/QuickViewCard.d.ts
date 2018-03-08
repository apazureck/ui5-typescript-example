declare module "sap/m/QuickViewCard" {
    import QuickViewBase from "sap/m/QuickViewBase";

    export = QuickViewCard;




    /**
    
    */
    class QuickViewCard extends QuickViewBase {

        /**
            * Constructor for a new QuickViewCard.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.m.QuickViewCard with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.QuickViewBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.m.QuickViewCard.
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
            * Gets current value of property {@link #getShowVerticalScrollBar showVerticalScrollBar}.
         * 
         * Determines whether the browser displays the vertical scroll bar or simply cuts the content of the QuickViewCard.
         * 
         * Default value is `true`.
        */
        public getShowVerticalScrollBar(): boolean;

        /**
            * Sets a new value for property {@link #getShowVerticalScrollBar showVerticalScrollBar}.
         * 
         * Determines whether the browser displays the vertical scroll bar or simply cuts the content of the QuickViewCard.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowVerticalScrollBar(bShowVerticalScrollBar: boolean): this;

    }


}
