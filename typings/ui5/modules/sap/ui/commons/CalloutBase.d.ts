declare module "sap/ui/commons/CalloutBase" {

    /**
    
    */
    export default class CalloutBase extends sap.ui.core.TooltipBase {


        /**
            * Constructor for a new CalloutBase.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adjust position of the already opened Callout window. Call this method each time when the size of the opened Callout window may be changed due to new or changed contents.
        */
        public adjustPosition(): any;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.ui.commons.CalloutBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         * 
         * Event is fired before a Callout is displayed. Call the preventDefault method of the event object to postpone opening. Application may use this event to start asynchronous Ajax call to load the Callout content
        */
        attachBeforeOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Parent control that has this Callout as a tooltip */
            parent: sap.ui.core.Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.ui.commons.CalloutBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         * 
         * Event is fired before a Callout is displayed. Call the preventDefault method of the event object to postpone opening. Application may use this event to start asynchronous Ajax call to load the Callout content
        */
        attachBeforeOpen<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Parent control that has this Callout as a tooltip */
            parent: sap.ui.core.Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.commons.CalloutBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         * 
         * Event is fired when the Callout window is closed.
        */
        attachClose<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.commons.CalloutBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         * 
         * Event is fired when the Callout window is closed.
        */
        attachClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:open open} event of this `sap.ui.commons.CalloutBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         * 
         * The event is fired when the popup is opened.
        */
        attachOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Parent control that has this Callout as a tooltip */
            parent: sap.ui.core.Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:open open} event of this `sap.ui.commons.CalloutBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         * 
         * The event is fired when the popup is opened.
        */
        attachOpen<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Parent control that has this Callout as a tooltip */
            parent: sap.ui.core.Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:opened opened} event of this `sap.ui.commons.CalloutBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         * 
         * Is fired when the Callout has been opened
        */
        attachOpened<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:opened opened} event of this `sap.ui.commons.CalloutBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         * 
         * Is fired when the Callout has been opened
        */
        attachOpened<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Closes Callout
        */
        public close(): any;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeOpen beforeOpen} event of this `sap.ui.commons.CalloutBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeOpen(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:close close} event of this `sap.ui.commons.CalloutBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachClose(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:open open} event of this `sap.ui.commons.CalloutBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachOpen(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:opened opened} event of this `sap.ui.commons.CalloutBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachOpened(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.ui.commons.CalloutBase with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.TooltipBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:beforeOpen beforeOpen} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireBeforeOpen(mParameters?: { parent?: sap.ui.core.Control, }): boolean;

        /**
            * Fires event {@link #event:close close} to attached listeners.
        */
        protected fireClose(mParameters?: any): this;

        /**
            * Fires event {@link #event:open open} to attached listeners.
        */
        protected fireOpen(mParameters?: { parent?: sap.ui.core.Control, }): this;

        /**
            * Fires event {@link #event:opened opened} to attached listeners.
        */
        protected fireOpened(mParameters?: any): this;

        /**
            * Returns a metadata object for class sap.ui.commons.CalloutBase.
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
            * Set position of the Callout window relative to the parent control. This function automatically calculates and sets the correct offset, use it instead of `setMyPosition/setAtPosition`.
        */
        public setPosition(myPosition: sap.ui.core.Dock, atPosition: sap.ui.core.Dock): this;

    }

}
