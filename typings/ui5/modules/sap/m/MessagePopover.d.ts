declare module "sap/m/MessagePopover" {
    import MessagePopoverItem from "sap/m/MessagePopoverItem";
    import MessageItem from "sap/m/MessageItem";
    import Button from "sap/m/Button";
    import { VerticalPlacementType } from "sap/m/library";
    import { PlacementType } from "sap/m/library";

    /**
    
    */
    export default class MessagePopover extends sap.ui.core.Control {


        /**
            * Constructor for a new MessagePopover.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(vItem: MessageItem | MessagePopoverItem): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterClose afterClose} event of this `sap.m.MessagePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessagePopover` itself.
         * 
         * This event will be fired after the popover is closed
        */
        attachAfterClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Refers to the control which opens the popover */
            openBy: sap.ui.core.Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterClose afterClose} event of this `sap.m.MessagePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessagePopover` itself.
         * 
         * This event will be fired after the popover is closed
        */
        attachAfterClose<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Refers to the control which opens the popover */
            openBy: sap.ui.core.Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterOpen afterOpen} event of this `sap.m.MessagePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessagePopover` itself.
         * 
         * This event will be fired after the popover is opened
        */
        attachAfterOpen<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * This refers to the control which opens the popover */
            openBy: sap.ui.core.Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterOpen afterOpen} event of this `sap.m.MessagePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessagePopover` itself.
         * 
         * This event will be fired after the popover is opened
        */
        attachAfterOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * This refers to the control which opens the popover */
            openBy: sap.ui.core.Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeClose beforeClose} event of this `sap.m.MessagePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessagePopover` itself.
         * 
         * This event will be fired before the popover is closed
        */
        attachBeforeClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Refers to the control which opens the popover See sap.ui.core.MessageType enum values for types */
            openBy: sap.ui.core.Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeClose beforeClose} event of this `sap.m.MessagePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessagePopover` itself.
         * 
         * This event will be fired before the popover is closed
        */
        attachBeforeClose<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Refers to the control which opens the popover See sap.ui.core.MessageType enum values for types */
            openBy: sap.ui.core.Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.m.MessagePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessagePopover` itself.
         * 
         * This event will be fired before the popover is opened
        */
        attachBeforeOpen<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Refers to the control which opens the popover */
            openBy: sap.ui.core.Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.m.MessagePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessagePopover` itself.
         * 
         * This event will be fired before the popover is opened
        */
        attachBeforeOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Refers to the control which opens the popover */
            openBy: sap.ui.core.Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.m.MessagePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessagePopover` itself.
         * 
         * This event will be fired when description is shown
        */
        attachItemSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Refers to the message popover item that is being presented */
            item: MessagePopoverItem, /* * Refers to the type of messages being shown See sap.ui.core.MessageType values for types */
            messageTypeFilter: sap.ui.core.MessageType,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.m.MessagePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessagePopover` itself.
         * 
         * This event will be fired when description is shown
        */
        attachItemSelect<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Refers to the message popover item that is being presented */
            item: MessagePopoverItem, /* * Refers to the type of messages being shown See sap.ui.core.MessageType values for types */
            messageTypeFilter: sap.ui.core.MessageType,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:listSelect listSelect} event of this `sap.m.MessagePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessagePopover` itself.
         * 
         * This event will be fired when one of the lists is shown when (not) filtered by type
        */
        attachListSelect<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * This parameter refers to the type of messages being shown. */
            messageTypeFilter: sap.ui.core.MessageType,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:listSelect listSelect} event of this `sap.m.MessagePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessagePopover` itself.
         * 
         * This event will be fired when one of the lists is shown when (not) filtered by type
        */
        attachListSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * This parameter refers to the type of messages being shown. */
            messageTypeFilter: sap.ui.core.MessageType,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:longtextLoaded longtextLoaded} event of this `sap.m.MessagePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessagePopover` itself.
         * 
         * This event will be fired when the long text description data from a remote URL is loaded
        */
        attachLongtextLoaded<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:longtextLoaded longtextLoaded} event of this `sap.m.MessagePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessagePopover` itself.
         * 
         * This event will be fired when the long text description data from a remote URL is loaded
        */
        attachLongtextLoaded<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:urlValidated urlValidated} event of this `sap.m.MessagePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessagePopover` itself.
         * 
         * This event will be fired when a validation of a URL from long text description is ready
        */
        attachUrlValidated<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:urlValidated urlValidated} event of this `sap.m.MessagePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessagePopover` itself.
         * 
         * This event will be fired when a validation of a URL from long text description is ready
        */
        attachUrlValidated<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Closes the MessagePopover
        */
        public close(): this;

        /**
            * Destroys the headerButton in the aggregation {@link #getHeaderButton headerButton}.
        */
        public destroyHeaderButton(): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterClose afterClose} event of this `sap.m.MessagePopover`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterClose(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterOpen afterOpen} event of this `sap.m.MessagePopover`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterOpen(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeClose beforeClose} event of this `sap.m.MessagePopover`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeClose(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeOpen beforeOpen} event of this `sap.m.MessagePopover`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeOpen(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:itemSelect itemSelect} event of this `sap.m.MessagePopover`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachItemSelect(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:listSelect listSelect} event of this `sap.m.MessagePopover`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachListSelect(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:longtextLoaded longtextLoaded} event of this `sap.m.MessagePopover`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachLongtextLoaded(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:urlValidated urlValidated} event of this `sap.m.MessagePopover`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachUrlValidated(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.m.MessagePopover with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:afterClose afterClose} to attached listeners.
        */
        protected fireAfterClose(mParameters?: { openBy?: sap.ui.core.Control, }): this;

        /**
            * Fires event {@link #event:afterOpen afterOpen} to attached listeners.
        */
        protected fireAfterOpen(mParameters?: { openBy?: sap.ui.core.Control, }): this;

        /**
            * Fires event {@link #event:beforeClose beforeClose} to attached listeners.
        */
        protected fireBeforeClose(mParameters?: { openBy?: sap.ui.core.Control, }): this;

        /**
            * Fires event {@link #event:beforeOpen beforeOpen} to attached listeners.
        */
        protected fireBeforeOpen(mParameters?: { openBy?: sap.ui.core.Control, }): this;

        /**
            * Fires event {@link #event:itemSelect itemSelect} to attached listeners.
        */
        protected fireItemSelect(mParameters?: { item?: MessagePopoverItem, messageTypeFilter?: sap.ui.core.MessageType, }): this;

        /**
            * Fires event {@link #event:listSelect listSelect} to attached listeners.
        */
        protected fireListSelect(mParameters?: { messageTypeFilter?: sap.ui.core.MessageType, }): this;

        /**
            * Fires event {@link #event:longtextLoaded longtextLoaded} to attached listeners.
        */
        protected fireLongtextLoaded(mParameters?: any): this;

        /**
            * Fires event {@link #event:urlValidated urlValidated} to attached listeners.
        */
        protected fireUrlValidated(mParameters?: any): this;

        /**
            * Gets current value of property {@link #getAsyncDescriptionHandler asyncDescriptionHandler}.
         * 
         * Callback function for resolving a promise after description has been asynchronously loaded inside this function
        */
        public getAsyncDescriptionHandler(): any;

        /**
            * Gets current value of property {@link #getAsyncURLHandler asyncURLHandler}.
         * 
         * Callback function for resolving a promise after a link has been asynchronously validated inside this function
        */
        public getAsyncURLHandler(): any;

        /**
            * Gets content of aggregation {@link #getHeaderButton headerButton}.
         * 
         * A custom header button
        */
        public getHeaderButton(): Button;

        /**
            * Gets current value of property {@link #getInitiallyExpanded initiallyExpanded}.
         * 
         * Sets the initial state of the control - expanded or collapsed. By default the control opens as expanded.
         * 
         * Default value is `true`.
        */
        public getInitiallyExpanded(): boolean;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * A list with message items
        */
        public getItems(): any[];

        /**
            * Returns a metadata object for class sap.m.MessagePopover.
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
            * Gets current value of property {@link #getPlacement placement}.
         * 
         * Determines the position, where the control will appear on the screen. Possible values are: sap.m.VerticalPlacementType.Top, sap.m.VerticalPlacementType.Bottom and sap.m.VerticalPlacementType.Vertical. The default value is sap.m.VerticalPlacementType.Vertical. Setting this property while the control is open, will not cause any re-rendering and changing of the position. Changes will only be applied with the next interaction.
         * 
         * Default value is `Vertical`.
        */
        public getPlacement(): VerticalPlacementType;

        /**
            * Checks for the provided `sap.m.MessageItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(vItem: MessageItem | MessagePopoverItem): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(vItem: MessageItem | MessagePopoverItem, iIndex: number): this;

        /**
            * The method checks if the MessagePopover is open. It returns true when the MessagePopover is currently open (this includes opening and closing animations), otherwise it returns false
        */
        public isOpen(): boolean;

        /**
            * Opens the MessagePopover
        */
        public openBy(oControl: sap.ui.core.Control): this;

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): any[];

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | MessageItem | MessagePopoverItem): MessageItem | MessagePopoverItem;

        /**
            * Sets a new value for property {@link #getAsyncDescriptionHandler asyncDescriptionHandler}.
         * 
         * Callback function for resolving a promise after description has been asynchronously loaded inside this function
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAsyncDescriptionHandler(oAsyncDescriptionHandler: any): this;

        /**
            * Sets a new value for property {@link #getAsyncURLHandler asyncURLHandler}.
         * 
         * Callback function for resolving a promise after a link has been asynchronously validated inside this function
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAsyncURLHandler(oAsyncURLHandler: any): this;

        /**
            * Setter for default description and URL validation callbacks across all instances of MessagePopover
        */
        protected setDefaultHandlers(mDefaultHandlers: { asyncDescriptionHandler: Function, asyncURLHandler: Function, }): any;

        /**
            * Sets the aggregated {@link #getHeaderButton headerButton}.
        */
        public setHeaderButton(oHeaderButton: Button): this;

        /**
            * Sets a new value for property {@link #getInitiallyExpanded initiallyExpanded}.
         * 
         * Sets the initial state of the control - expanded or collapsed. By default the control opens as expanded.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setInitiallyExpanded(bInitiallyExpanded: boolean): this;

        /**
            * The method sets the placement position of the MessagePopover. Only accepted Values are: sap.m.PlacementType.Top, sap.m.PlacementType.Bottom and sap.m.PlacementType.Vertical
        */
        public setPlacement(sPlacement: PlacementType): this;

        /**
            * This method toggles between open and closed state of the MessagePopover instance. oControl parameter is mandatory in the same way as in 'openBy' method
        */
        public toggle(oControl: sap.ui.core.Control): this;

    }

}
