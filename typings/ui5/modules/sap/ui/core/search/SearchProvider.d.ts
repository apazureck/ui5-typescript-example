declare module "sap/ui/core/search/SearchProvider" {

    /**
    
    */
    export default class SearchProvider extends sap.ui.core.Element {


        /**
            * Constructor for a new search/SearchProvider.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.core.search.SearchProvider with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Icon of the Search Provider
        */
        public getIcon(): string;

        /**
            * Returns a metadata object for class sap.ui.core.search.SearchProvider.
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
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Icon of the Search Provider
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: string): this;

        /**
            * Call this function to get suggest values from the search provider. The given callback function is called with the suggest value (type 'string', 1st parameter) and an array of the suggestions (type '[string]', 2nd parameter).
        */
        public suggest(sValue: string, fnCallback: Function): any;

    }

}
