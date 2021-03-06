declare module "sap/m/QuickViewGroup" {
    import QuickViewGroupElement from "sap/m/QuickViewGroupElement";

    /**
    
    */
    export default class QuickViewGroup extends sap.ui.core.Element {


        /**
            * Constructor for a new QuickViewGroup.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some element to the aggregation {@link #getElements elements}.
        */
        public addElement(oElement: QuickViewGroupElement): this;

        /**
            * Binds aggregation {@link #getElements elements} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindElements(oBindingInfo: any): this;

        /**
            * Destroys all the elements in the aggregation {@link #getElements elements}.
        */
        public destroyElements(): this;

        /**
            * Creates a new subclass of class sap.m.QuickViewGroup with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets content of aggregation {@link #getElements elements}.
         * 
         * A combination of one label and another control (Link or Text) associated to this label.
        */
        public getElements(): any[];

        /**
            * Gets current value of property {@link #getHeading heading}.
         * 
         * The title of the group
         * 
         * Default value is ``.
        */
        public getHeading(): string;

        /**
            * Returns a metadata object for class sap.m.QuickViewGroup.
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
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Determines whether the group is visible on the screen.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Checks for the provided `sap.m.QuickViewGroupElement` in the aggregation {@link #getElements elements}. and returns its index if found or -1 otherwise.
        */
        public indexOfElement(oElement: QuickViewGroupElement): number;

        /**
            * Inserts a element into the aggregation {@link #getElements elements}.
        */
        public insertElement(oElement: QuickViewGroupElement, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getElements elements}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllElements(): any[];

        /**
            * Removes a element from the aggregation {@link #getElements elements}.
        */
        public removeElement(vElement: number | string | QuickViewGroupElement): QuickViewGroupElement;

        /**
            * Sets a new value for property {@link #getHeading heading}.
         * 
         * The title of the group
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setHeading(sHeading: string): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Determines whether the group is visible on the screen.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

        /**
            * Unbinds aggregation {@link #getElements elements} from model data.
        */
        public unbindElements(): this;

    }

}
