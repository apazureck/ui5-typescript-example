declare module "sap/tnt/ToolPage" {
    import ToolHeader from "sap/tnt/ToolHeader";
    import SideNavigation from "sap/tnt/SideNavigation";

    export = ToolPage;




    /**
    
    */
    class ToolPage extends sap.ui.core.Control {

        /**
            * Constructor for a new ToolPage.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some mainContent to the aggregation {@link #getMainContents mainContents}.
        */
        public addMainContent(oMainContent: sap.ui.core.Control): this;

        /**
            * Destroys the header in the aggregation {@link #getHeader header}.
        */
        public destroyHeader(): this;

        /**
            * Destroys all the mainContents in the aggregation {@link #getMainContents mainContents}.
        */
        public destroyMainContents(): this;

        /**
            * Destroys the sideContent in the aggregation {@link #getSideContent sideContent}.
        */
        public destroySideContent(): this;

        /**
            * Creates a new subclass of class sap.tnt.ToolPage with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets content of aggregation {@link #getHeader header}.
         * 
         * The control to appear in the header area.
        */
        public getHeader(): ToolHeader;

        /**
            * Gets content of aggregation {@link #getMainContents mainContents}.
         * 
         * The content section.
        */
        public getMainContents(): any[];

        /**
            * Returns a metadata object for class sap.tnt.ToolPage.
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
            * Gets content of aggregation {@link #getSideContent sideContent}.
         * 
         * The side menu of the layout.
        */
        public getSideContent(): SideNavigation;

        /**
            * Gets current value of property {@link #getSideExpanded sideExpanded}.
         * 
         * Indicates if the side area is expanded. Overrides the expanded property of the sideContent aggregation.
         * 
         * Default value is `true`.
        */
        public getSideExpanded(): boolean;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getMainContents mainContents}. and returns its index if found or -1 otherwise.
        */
        public indexOfMainContent(oMainContent: sap.ui.core.Control): number;

        /**
            * Inserts a mainContent into the aggregation {@link #getMainContents mainContents}.
        */
        public insertMainContent(oMainContent: sap.ui.core.Control, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getMainContents mainContents}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllMainContents(): any[];

        /**
            * Removes a mainContent from the aggregation {@link #getMainContents mainContents}.
        */
        public removeMainContent(vMainContent: number | string | sap.ui.core.Control): sap.ui.core.Control;

        /**
            * Sets the aggregated {@link #getHeader header}.
        */
        public setHeader(oHeader: ToolHeader): this;

        /**
            * Sets the aggregated {@link #getSideContent sideContent}.
        */
        public setSideContent(oSideContent: SideNavigation): this;

        /**
            * Sets the expand/collapse state of the SideContent.
        */
        public setSideExpanded(isSideExpanded: boolean): this;

        /**
            * Toggles the expand/collapse state of the SideContent.
        */
        public toggleSideContentMode(): this;

    }


}
