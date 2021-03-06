declare module "sap/ui/commons/ApplicationHeader" {

    /**
    
    */
    export default class ApplicationHeader extends sap.ui.core.Control {


        /**
            * Constructor for a new ApplicationHeader.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:logoff logoff} event of this `sap.ui.commons.ApplicationHeader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.ApplicationHeader` itself.
         * 
         * Fires an event to log off the user from the application. No parameters.
        */
        attachLogoff<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:logoff logoff} event of this `sap.ui.commons.ApplicationHeader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.ApplicationHeader` itself.
         * 
         * Fires an event to log off the user from the application. No parameters.
        */
        attachLogoff<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:logoff logoff} event of this `sap.ui.commons.ApplicationHeader`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachLogoff(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.ui.commons.ApplicationHeader with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:logoff logoff} to attached listeners.
        */
        protected fireLogoff(mParameters?: any): this;

        /**
            * Gets current value of property {@link #getDisplayLogoff displayLogoff}.
         * 
         * Determines if the logoff area will be displayed at the right hand side of the application header.
         * 
         * Default value is `true`.
        */
        public getDisplayLogoff(): boolean;

        /**
            * Gets current value of property {@link #getDisplayWelcome displayWelcome}.
         * 
         * Determines if the welcome text is displayed
         * 
         * Default value is `true`.
        */
        public getDisplayWelcome(): boolean;

        /**
            * Gets current value of property {@link #getLogoSrc logoSrc}.
         * 
         * Path (src) to the logo icon to be displayed in the application header.
        */
        public getLogoSrc(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getLogoText logoText}.
         * 
         * The text that will be displayed beside the logo in the application header. This property is optional.
        */
        public getLogoText(): string;

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
            * Returns a metadata object for class sap.ui.commons.ApplicationHeader.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Gets current value of property {@link #getUserName userName}.
         * 
         * User name that will be displayed beside the welcome text
        */
        public getUserName(): string;

        /**
            * Sets a new value for property {@link #getDisplayLogoff displayLogoff}.
         * 
         * Determines if the logoff area will be displayed at the right hand side of the application header.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setDisplayLogoff(bDisplayLogoff: boolean): this;

        /**
            * Sets a new value for property {@link #getDisplayWelcome displayWelcome}.
         * 
         * Determines if the welcome text is displayed
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setDisplayWelcome(bDisplayWelcome: boolean): this;

        /**
            * Sets a new value for property {@link #getLogoSrc logoSrc}.
         * 
         * Path (src) to the logo icon to be displayed in the application header.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setLogoSrc(sLogoSrc: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getLogoText logoText}.
         * 
         * The text that will be displayed beside the logo in the application header. This property is optional.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setLogoText(sLogoText: string): this;

        /**
            * Sets a new value for property {@link #getUserName userName}.
         * 
         * User name that will be displayed beside the welcome text
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setUserName(sUserName: string): this;

    }

}
