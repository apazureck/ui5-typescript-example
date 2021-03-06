declare module "sap/ui/commons/Tab" {
    import Panel from "sap/ui/commons/Panel";

    /**
    
    */
    export default class Tab extends Panel {


        /**
            * Constructor for a new Tab.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.commons.Tab with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.Panel.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getClosable closable}.
         * 
         * Specifies whether the tab contains a close button.
         * 
         * Default value is `false`.
        */
        public getClosable(): boolean;

        /**
            * Gets current value of property {@link #getHorizontalScrolling horizontalScrolling}.
         * 
         * Specifies the horizontal scrolling.
         * 
         * Default value is `None`.
        */
        public getHorizontalScrolling(): sap.ui.core.Scrolling;

        /**
            * Returns a metadata object for class sap.ui.commons.Tab.
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
            * Gets current value of property {@link #getSelected selected}.
         * 
         * Defines whether the tab is the active one.
         * 
         * Default value is `false`.
        */
        public getSelected(): boolean;

        /**
            * Gets current value of property {@link #getVerticalScrolling verticalScrolling}.
         * 
         * Specifies the vertical scrolling.
         * 
         * Default value is `None`.
        */
        public getVerticalScrolling(): sap.ui.core.Scrolling;

        /**
            * Sets a new value for property {@link #getClosable closable}.
         * 
         * Specifies whether the tab contains a close button.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setClosable(bClosable: boolean): this;

        /**
            * Sets a new value for property {@link #getHorizontalScrolling horizontalScrolling}.
         * 
         * Specifies the horizontal scrolling.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setHorizontalScrolling(sHorizontalScrolling: sap.ui.core.Scrolling): this;

        /**
            * Sets a new value for property {@link #getSelected selected}.
         * 
         * Defines whether the tab is the active one.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setSelected(bSelected: boolean): this;

        /**
            * Sets a new value for property {@link #getVerticalScrolling verticalScrolling}.
         * 
         * Specifies the vertical scrolling.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setVerticalScrolling(sVerticalScrolling: sap.ui.core.Scrolling): this;

    }

}
