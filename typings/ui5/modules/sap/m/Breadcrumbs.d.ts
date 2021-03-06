declare module "sap/m/Breadcrumbs" {
    import Link from "sap/m/Link";

    /**
    
    */
    export default class Breadcrumbs extends sap.ui.core.Control {


        /**
            * Constructor for a new Breadcrumbs
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some link to the aggregation {@link #getLinks links}.
        */
        public addLink(oLink: Link): this;

        /**
            * Destroys all the links in the aggregation {@link #getLinks links}.
        */
        public destroyLinks(): this;

        /**
            * Creates a new subclass of class sap.m.Breadcrumbs with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getCurrentLocationText currentLocationText}.
         * 
         * Determines the text of current/last element in the Breadcrumbs path.
        */
        public getCurrentLocationText(): string;

        /**
            * Gets content of aggregation {@link #getLinks links}.
         * 
         * A list of all the active link elements in the Breadcrumbs control. ** Note: ** Enabling the property `wrapping` of the link will not work since it's incompatible with the concept of the control. The other properties will work, but their effect may be undesirable.
        */
        public getLinks(): any[];

        /**
            * Returns a metadata object for class sap.m.Breadcrumbs.
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
            * Checks for the provided `sap.m.Link` in the aggregation {@link #getLinks links}. and returns its index if found or -1 otherwise.
        */
        public indexOfLink(oLink: Link): number;

        /**
            * Inserts a link into the aggregation {@link #getLinks links}.
        */
        public insertLink(oLink: Link, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getLinks links}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllLinks(): any[];

        /**
            * Removes a link from the aggregation {@link #getLinks links}.
        */
        public removeLink(vLink: number | string | Link): Link;

        /**
            * Sets a new value for property {@link #getCurrentLocationText currentLocationText}.
         * 
         * Determines the text of current/last element in the Breadcrumbs path.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setCurrentLocationText(sCurrentLocationText: string): this;

    }

}
