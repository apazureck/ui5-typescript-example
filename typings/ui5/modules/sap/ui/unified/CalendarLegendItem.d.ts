declare module "sap/ui/unified/CalendarLegendItem" {
    import { CalendarDayType } from "sap/ui/unified/library";

    /**
    
    */
    export default class CalendarLegendItem extends sap.ui.core.Element {


        /**
            * Constructor for a new CalendarLegendItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.unified.CalendarLegendItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getColor color}.
         * 
         * Overrides the color derived from the `type` property.
        */
        public getColor(): sap.ui.core.CSSColor;

        /**
            * Returns a metadata object for class sap.ui.unified.CalendarLegendItem.
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
            * Gets current value of property {@link #getText text}.
         * 
         * Text to be displayed for the item.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * Type of the item. If not set the type is automatically determined from the order of the items in the CalendarLegend.
         * 
         * Default value is `None`.
        */
        public getType(): CalendarDayType;

        /**
            * Sets a new value for property {@link #getColor color}.
         * 
         * Overrides the color derived from the `type` property.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setColor(sColor: sap.ui.core.CSSColor): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Text to be displayed for the item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * Type of the item. If not set the type is automatically determined from the order of the items in the CalendarLegend.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setType(sType: CalendarDayType): this;

    }

}
