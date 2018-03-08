declare module "sap/m/SuggestionItem" {
    import Item from "sap/ui/core/Item";

    export = SuggestionItem;




    /**
    
    */
    class SuggestionItem extends Item {

        /**
            * Constructor for a new SuggestionItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.m.SuggestionItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getDescription description}.
         * 
         * Additional text of type string, optionally to be displayed along with this item.
         * 
         * Default value is ``.
        */
        public getDescription(): string;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * The icon belonging to this list item instance. This can be a URI to an image or an icon font URI.
         * 
         * Default value is ``.
        */
        public getIcon(): string;

        /**
            * Returns a metadata object for class sap.m.SuggestionItem.
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
            * Return suggestion text. By default, it is the value of the `text` property.
         * 
         * Subclasses may override this function.
        */
        protected getSuggestionText(): string;

        /**
            * Produces the HTML of the suggestion item and writes it to render-output-buffer.
         * 
         * Subclasses may override this function.
        */
        protected render(oRenderManager: sap.ui.core.RenderManager, oItem: this, sSearch: string, bSelected: boolean): any;

        /**
            * Sets a new value for property {@link #getDescription description}.
         * 
         * Additional text of type string, optionally to be displayed along with this item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setDescription(sDescription: string): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * The icon belonging to this list item instance. This can be a URI to an image or an icon font URI.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setIcon(sIcon: string): this;

    }


}
