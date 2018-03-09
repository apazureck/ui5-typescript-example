declare module "sap/ui/layout/PaneContainer" {

    /**
    
    */
    export default class PaneContainer extends sap.ui.core.Element {


        /**
            * Constructor for a new PaneContainer.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some pane to the aggregation {@link #getPanes panes}.
        */
        public addPane(oPane: sap.ui.core.Element): this;

        /**
            * Destroys all the panes in the aggregation {@link #getPanes panes}.
        */
        public destroyPanes(): this;

        /**
            * Creates a new subclass of class sap.ui.layout.PaneContainer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

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
            * Returns a metadata object for class sap.ui.layout.PaneContainer.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Gets current value of property {@link #getOrientation orientation}.
         * 
         * The orientation of the Splitter
         * 
         * Default value is `Horizontal`.
        */
        public getOrientation(): sap.ui.core.Orientation;

        /**
            * Gets content of aggregation {@link #getPanes panes}.
         * 
         * The Pane that will be shown when there is no suitable pane for ResponsiveSplitter's current width.
        */
        public getPanes(): any[];

        /**
            * Checks for the provided `sap.ui.core.Element` in the aggregation {@link #getPanes panes}. and returns its index if found or -1 otherwise.
        */
        public indexOfPane(oPane: sap.ui.core.Element): number;

        /**
            * Pane insertion
        */
        public insertPane(oObject: any, iIndex: any): sap.ui.base.ManagedObject;

        /**
            * Removes all the controls from the aggregation {@link #getPanes panes}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllPanes(): any[];

        /**
            * Pane removal
        */
        public removePane(oObject: any): sap.ui.base.ManagedObject;

        /**
            * Setter for property layoutData.
        */
        public setLayoutData(oLayoutData: sap.ui.core.LayoutData): this;

        /**
            * Sets the {@link sap.ui.core.LayoutData} defining the layout constraints for this control when it is used inside a layout.
        */
        public setLayoutData(oLayoutData: sap.ui.core.LayoutData): any;

        /**
            * Setter for property orientation. Default value is sap.ui.core.Orientation.Horizontal
        */
        public setOrientation(sOrientation: sap.ui.core.Orientation): this;

    }

}
