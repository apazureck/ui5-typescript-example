declare module "sap/ui/commons/ValueHelpField" {
    import TextField from "sap/ui/commons/TextField";

    /**
    
    */
    export default class ValueHelpField extends TextField {


        /**
            * Constructor for a new ValueHelpField.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:valueHelpRequest valueHelpRequest} event of this `sap.ui.commons.ValueHelpField`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.ValueHelpField` itself.
         * 
         * Event which is fired when the ValueHelp is requested.
        */
        attachValueHelpRequest<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:valueHelpRequest valueHelpRequest} event of this `sap.ui.commons.ValueHelpField`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.ValueHelpField` itself.
         * 
         * Event which is fired when the ValueHelp is requested.
        */
        attachValueHelpRequest<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:valueHelpRequest valueHelpRequest} event of this `sap.ui.commons.ValueHelpField`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachValueHelpRequest(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.ui.commons.ValueHelpField with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.TextField.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:valueHelpRequest valueHelpRequest} to attached listeners.
        */
        protected fireValueHelpRequest(mParameters?: any): this;

        /**
            * Gets current value of property {@link #getIconDisabledURL iconDisabledURL}.
         * 
         * URL of the icon for the value help when disabled. If no parameter is supplied the default icon image will be shown. If an icon font icon is used, this property is ignored.
        */
        public getIconDisabledURL(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconHoverURL iconHoverURL}.
         * 
         * URL of the icon for the value help when hovered. If no parameter is supplied the standard icon image will be shown. If an icon font icon is used, this property is ignored.
        */
        public getIconHoverURL(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconURL iconURL}.
         * 
         * URL of the standard icon for the value help. If no parameter is supplied the default icon image will be shown. This can be a URI to an image or an icon font URI.
        */
        public getIconURL(): sap.ui.core.URI;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

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
            * Returns a metadata object for class sap.ui.commons.ValueHelpField.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Handle F4 event
        */
        protected onsapshow(oEvent: jQuery.Event): any;

        /**
            * Sets a new value for property {@link #getIconDisabledURL iconDisabledURL}.
         * 
         * URL of the icon for the value help when disabled. If no parameter is supplied the default icon image will be shown. If an icon font icon is used, this property is ignored.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIconDisabledURL(sIconDisabledURL: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconHoverURL iconHoverURL}.
         * 
         * URL of the icon for the value help when hovered. If no parameter is supplied the standard icon image will be shown. If an icon font icon is used, this property is ignored.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIconHoverURL(sIconHoverURL: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconURL iconURL}.
         * 
         * URL of the standard icon for the value help. If no parameter is supplied the default icon image will be shown. This can be a URI to an image or an icon font URI.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIconURL(sIconURL: sap.ui.core.URI): this;

    }

}
