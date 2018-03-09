declare module "sap/ui/demokit/HexagonButtonGroup" {
    import HexagonButton from "sap/ui/demokit/HexagonButton";

    /**
    
    */
    export default class HexagonButtonGroup extends sap.ui.core.Control {


        /**
            * Constructor for a new HexagonButtonGroup.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some button to the aggregation {@link #getButtons buttons}.
        */
        public addButton(oButton: HexagonButton): this;

        /**
            * Destroys all the buttons in the aggregation {@link #getButtons buttons}.
        */
        public destroyButtons(): this;

        /**
            * Creates a new subclass of class sap.ui.demokit.HexagonButtonGroup with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets content of aggregation {@link #getButtons buttons}.
         * 
         * The buttons to layout in a grid
        */
        public getButtons(): any[];

        /**
            * Gets current value of property {@link #getColspan colspan}.
         * 
         * How many buttons might be placed in the same row of the grid
         * 
         * Default value is `3`.
        */
        public getColspan(): number;

        /**
            * Returns a metadata object for class sap.ui.demokit.HexagonButtonGroup.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Checks for the provided `sap.ui.demokit.HexagonButton` in the aggregation {@link #getButtons buttons}. and returns its index if found or -1 otherwise.
        */
        public indexOfButton(oButton: HexagonButton): number;

        /**
            * Inserts a button into the aggregation {@link #getButtons buttons}.
        */
        public insertButton(oButton: HexagonButton, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getButtons buttons}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllButtons(): any[];

        /**
            * Removes a button from the aggregation {@link #getButtons buttons}.
        */
        public removeButton(vButton: number | string | HexagonButton): HexagonButton;

        /**
            * Sets a new value for property {@link #getColspan colspan}.
         * 
         * How many buttons might be placed in the same row of the grid
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `3`.
        */
        public setColspan(iColspan: number): this;

    }

}
