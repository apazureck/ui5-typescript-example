declare module "sap/m/OverflowToolbar" {
    import Toolbar from "sap/m/Toolbar";

    /**
    
    */
    export default class OverflowToolbar extends Toolbar {


        /**
            * Constructor for a new `OverflowToolbar`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Returns all the controls from the `sap.m.OverflowToolbar`, that are not in the overflow area and their `visible` property is `true`.
        */
        private _getVisibleAndNonOverflowContent(): any | any[];

        /**
            * Closes the overflow area. Useful to manually close the overflow after having suppressed automatic closing with "closeOverflowOnInteraction=false".
        */
        public closeOverflow(): any;

        /**
            * Creates a new subclass of class sap.m.OverflowToolbar with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Toolbar.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.m.OverflowToolbar.
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

    }

}
