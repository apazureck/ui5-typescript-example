declare namespace sap.ui.core.mvc {

    /**
    
    */
    export class XMLView extends sap.ui.core.mvc.View {


        /**
            * Constructor for a new mvc/XMLView.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
         * 
         * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.core.mvc.View#constructor sap.ui.core.mvc.View} can be used.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.core.mvc.XMLView with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.mvc.View.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.core.mvc.XMLView.
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
            * Register a preprocessor for all views of a specific type.
         * 
         * The preprocessor can be registered for several stages of view initialization, for xml views these are either the plain "xml" or the already initialized "controls" , see {@link sap.ui.core.mvc.XMLView.PreprocessorType}. For each type one preprocessor is executed. If there is a preprocessor passed to or activated at the view instance already, that one is used. When several preprocessors are registered for one hook, it has to be made sure, that they do not conflict when beeing processed serially.
         * 
         * It can be either a module name as string of an implementation of {@link sap.ui.core.mvc.View.Preprocessor} or a function with a signature according to {@link sap.ui.core.mvc.View.Preprocessor.process}.
         * 
         * ** Note **: Preprocessors work only in async views and will be ignored when the view is instantiated in sync mode by default, as this could have unexpected side effects. You may override this behaviour by setting the bSyncSupport flag to true.
        */
        protected static registerPreprocessor(sType: string | sap.ui.core.mvc.XMLView.PreprocessorType, vPreprocessor: string | Function, bSyncSupport: boolean, bOnDemand?: boolean, mSettings?: any): any;

        /**
            * Register a preprocessor for all views of a specific type.
         * 
         * The preprocessor can be registered for several stages of view initialization, which are dependent on the view type, e.g. "raw", "xml" or already initialized "controls". If there is a preprocessor passed to or activated at the view instance already, that one is used. When several preprocessors are registered for one hook, it has to be made sure that they do not conflict when being processed serially.
         * 
         * It can be either a module name as string of an implementation of {@link sap.ui.core.mvc.View.Preprocessor} or a function with a signature according to {@link sap.ui.core.mvc.View.Preprocessor.process}.
         * 
         * ** Note **: Preprocessors only work in async views and will be ignored when the view is instantiated in sync mode by default, as this could have unexpected side effects. You may override this behaviour by setting the `bSyncSupport` flag to `true`.
        */
        protected static registerPreprocessor(sType: string, vPreprocessor: string | Function, sViewType: string, bSyncSupport: boolean, bOnDemand?: boolean, mSettings?: any): any;

    }
}