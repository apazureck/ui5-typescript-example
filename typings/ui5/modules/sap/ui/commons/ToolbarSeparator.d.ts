declare module "sap/ui/commons/ToolbarSeparator" {
    import { ToolbarSeparatorDesign } from "sap/ui/commons/library";

    /**
    
    */
    export default class ToolbarSeparator extends sap.ui.core.Element {


        /**
            * Constructor for a new ToolbarSeparator.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.commons.ToolbarSeparator with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getDesign design}.
         * 
         * Design of the Separator.
        */
        public getDesign(): ToolbarSeparatorDesign;

        /**
            * Gets current value of property {@link #getDisplayVisualSeparator displayVisualSeparator}.
         * 
         * When set to false, there is no visual indication of separation by a vertical line but by a wider space.
         * 
         * Default value is `true`.
        */
        public getDisplayVisualSeparator(): boolean;

        /**
            * Returns a metadata object for class sap.ui.commons.ToolbarSeparator.
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
            * Sets a new value for property {@link #getDesign design}.
         * 
         * Design of the Separator.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDesign(sDesign: ToolbarSeparatorDesign): this;

        /**
            * Sets a new value for property {@link #getDisplayVisualSeparator displayVisualSeparator}.
         * 
         * When set to false, there is no visual indication of separation by a vertical line but by a wider space.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setDisplayVisualSeparator(bDisplayVisualSeparator: boolean): this;

    }

}
