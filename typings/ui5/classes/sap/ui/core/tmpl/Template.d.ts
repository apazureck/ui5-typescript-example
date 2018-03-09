declare namespace sap.ui.core.tmpl {

    /**
    
    */
    export abstract class Template extends sap.ui.base.ManagedObject {


        /**
            * Creates and initializes a new template with the given `sId` and settings.
         * 
         * The set of allowed entries in the `mSettings` object depends on the concrete subclass and is described there.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Returns the registered template for the given ID, if any.
        */
        public static byId(sId: string): sap.ui.core.tmpl.Template;

        /**
            * Creates an anonymous TemplateControl for the Template.
        */
        public createControl(sId: string, oContext: any, oView: sap.ui.core.mvc.View): sap.ui.core.tmpl.TemplateControl;

        /**
            * Creates an anonymous TemplateControl for the Template.
        */
        public createControl(sId: string, oView: sap.ui.core.mvc.View): sap.ui.core.tmpl.TemplateControl;

        /**
            * Declares a new control based on this template and returns the created class / constructor function. The class is based on the information coming from the abstract functions `createMetadata` and `createRenderer`.
        */
        public declareControl(sControl: string): Function;

        /**
            * Creates a new subclass of class sap.ui.core.tmpl.Template with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getContent content}.
         * 
         * The Template definition as a String.
        */
        public getContent(): string;

        /**
            
        */
        public getInterface(): any | sap.ui.base.Interface;

        /**
            * Returns the public interface of the object.
        */
        public getInterface(): sap.ui.base.Interface;

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
            * Returns a metadata object for class sap.ui.core.tmpl.Template.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * parses the given path and extracts the model and path
        */
        protected static parsePath(sPath: string): any;

        /**
            * Creates an anonymous TemplateControl for the Template and places the control into the specified DOM element.
        */
        public placeAt(oRef: string | any, oContext: any, vPosition: string | number, bInline: boolean): sap.ui.core.tmpl.TemplateControl;

        /**
            * Creates an anonymous TemplateControl for the Template and places the control into the specified DOM element.
        */
        public placeAt(oRef: string | any, oContext: any, bInline: boolean): sap.ui.core.tmpl.TemplateControl;

        /**
            * Creates an anonymous TemplateControl for the Template and places the control into the specified DOM element.
        */
        public placeAt(oRef: string | any, vPosition: string | number, bInline: boolean): sap.ui.core.tmpl.TemplateControl;

        /**
            * Sets a new value for property {@link #getContent content}.
         * 
         * The Template definition as a String.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setContent(sContent: string): sap.ui.core.tmpl.Template;

    }
}