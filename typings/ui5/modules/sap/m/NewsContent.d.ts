declare module "sap/m/NewsContent" {
    import { Size } from "sap/m/library";

    /**
    
    */
    export default class NewsContent extends sap.ui.core.Control {


        /**
            * Constructor for a new sap.m.NewsContent control.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.NewsContent`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.NewsContent` itself.
         * 
         * The event is triggered when the News Content is pressed.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.NewsContent`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.NewsContent` itself.
         * 
         * The event is triggered when the News Content is pressed.
        */
        attachPress<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.m.NewsContent`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.m.NewsContent with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: any): this;

        /**
            * Gets current value of property {@link #getContentText contentText}.
         * 
         * The content text.
        */
        public getContentText(): string;

        /**
            * Returns a metadata object for class sap.m.NewsContent.
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
            * Gets current value of property {@link #getSize size}.
         * 
         * Updates the size of the chart. If not set then the default size is applied based on the device tile.
         * 
         * Default value is `Auto`.
        */
        public getSize(): Size;

        /**
            * Gets current value of property {@link #getSubheader subheader}.
         * 
         * The subheader.
        */
        public getSubheader(): string;

        /**
            * Sets a new value for property {@link #getContentText contentText}.
         * 
         * The content text.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setContentText(sContentText: string): this;

        /**
            * Sets a new value for property {@link #getSize size}.
         * 
         * Updates the size of the chart. If not set then the default size is applied based on the device tile.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Auto`.
        */
        public setSize(sSize: Size): this;

        /**
            * Sets a new value for property {@link #getSubheader subheader}.
         * 
         * The subheader.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSubheader(sSubheader: string): this;

    }

}
