declare module "sap/m/ObjectMarker" {
    import { ObjectMarkerType } from "sap/m/library";
    import { ObjectMarkerVisibility } from "sap/m/library";

    /**
    
    */
    export default class ObjectMarker extends sap.ui.core.Control {


        /**
            * Constructor for a new ObjectMarker.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.ObjectMarker`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ObjectMarker` itself.
         * 
         * Event is fired when the `ObjectMarker` is interactive and the user taps/clicks on it.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.ObjectMarker`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ObjectMarker` itself.
         * 
         * Event is fired when the `ObjectMarker` is interactive and the user taps/clicks on it.
        */
        attachPress<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.m.ObjectMarker`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.m.ObjectMarker with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: any): this;

        /**
            * Gets current value of property {@link #getAdditionalInfo additionalInfo}.
         * 
         * Sets additional information to the displayed `type`.
         * 
         * ** Note: ** If no type is set, the additional information will not be displayed.
         * 
         * Default value is ``.
        */
        public getAdditionalInfo(): string;

        /**
            * Returns a metadata object for class sap.m.ObjectMarker.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

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
            * Gets current value of property {@link #getType type}.
         * 
         * Sets one of the predefined types.
         * 
         * ** Note **: If the `visibility` property is not specified explicitly, every `type` comes with predefined one as follows:  * For `Flagged` and `Favorite` the icon is visible and the text is not displayed * For `Draft` the text is visible and the icon is not displayed * For `Locked`, `LockedBy`, `Unsaved` and `UnsavedBy` - on screens larger than 600px both icon and text are visible, otherwise only the icon
         * 
         * 
        */
        public getType(): ObjectMarkerType;

        /**
            * Gets current value of property {@link #getVisibility visibility}.
         * 
         * Sets one of the visibility states. Visibility states are as follows:  * `IconOnly` - displays only icon, regardless of the screen size * `TextOnly` - displays only text, regardless of the screen size * `IconAndText` - displays both icon and text, regardless of the screen size 
        */
        public getVisibility(): ObjectMarkerVisibility;

        /**
            * Sets a new value for property {@link #getAdditionalInfo additionalInfo}.
         * 
         * Sets additional information to the displayed `type`.
         * 
         * ** Note: ** If no type is set, the additional information will not be displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setAdditionalInfo(sAdditionalInfo: string): this;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * Sets one of the predefined types.
         * 
         * ** Note **: If the `visibility` property is not specified explicitly, every `type` comes with predefined one as follows:  * For `Flagged` and `Favorite` the icon is visible and the text is not displayed * For `Draft` the text is visible and the icon is not displayed * For `Locked`, `LockedBy`, `Unsaved` and `UnsavedBy` - on screens larger than 600px both icon and text are visible, otherwise only the icon
         * 
         * 
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setType(sType: ObjectMarkerType): this;

        /**
            * Sets a new value for property {@link #getVisibility visibility}.
         * 
         * Sets one of the visibility states. Visibility states are as follows:  * `IconOnly` - displays only icon, regardless of the screen size * `TextOnly` - displays only text, regardless of the screen size * `IconAndText` - displays both icon and text, regardless of the screen size 
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setVisibility(sVisibility: ObjectMarkerVisibility): this;

    }

}
