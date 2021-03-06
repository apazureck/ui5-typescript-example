declare module "sap/m/ListItemBase" {
    import { ListType } from "sap/m/library";

    /**
    
    */
    export default class ListItemBase extends sap.ui.core.Control {


        /**
            * Constructor for a new ListItemBase.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:detailPress detailPress} event of this `sap.m.ListItemBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListItemBase` itself.
         * 
         * Fires when the user clicks on the detail button of the control.
        */
        attachDetailPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:detailPress detailPress} event of this `sap.m.ListItemBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListItemBase` itself.
         * 
         * Fires when the user clicks on the detail button of the control.
        */
        attachDetailPress<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:detailTap detailTap} event of this `sap.m.ListItemBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListItemBase` itself.
         * 
         * Fires when the user taps on the detail button of the control.
        */
        attachDetailTap<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:detailTap detailTap} event of this `sap.m.ListItemBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListItemBase` itself.
         * 
         * Fires when the user taps on the detail button of the control.
        */
        attachDetailTap<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.ListItemBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListItemBase` itself.
         * 
         * Fires when the user clicks on the control. ** Note: ** This event is not fired when the parent `mode` is `SingleSelectMaster` or when the `includeItemInSelection` property is set to `true`. If there is an interactive element that handles its own `press` event then the list item's `press` event is not fired. Also see {@link sap.m.ListBase#attachItemPress}.
        */
        attachPress<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.ListItemBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListItemBase` itself.
         * 
         * Fires when the user clicks on the control. ** Note: ** This event is not fired when the parent `mode` is `SingleSelectMaster` or when the `includeItemInSelection` property is set to `true`. If there is an interactive element that handles its own `press` event then the list item's `press` event is not fired. Also see {@link sap.m.ListBase#attachItemPress}.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:tap tap} event of this `sap.m.ListItemBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListItemBase` itself.
         * 
         * Fires when the user taps on the control.
        */
        attachTap<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:tap tap} event of this `sap.m.ListItemBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListItemBase` itself.
         * 
         * Fires when the user taps on the control.
        */
        attachTap<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:detailPress detailPress} event of this `sap.m.ListItemBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachDetailPress(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:detailTap detailTap} event of this `sap.m.ListItemBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachDetailTap(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.m.ListItemBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:tap tap} event of this `sap.m.ListItemBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachTap(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.m.ListItemBase with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:detailPress detailPress} to attached listeners.
        */
        protected fireDetailPress(mParameters?: any): this;

        /**
            * Fires event {@link #event:detailTap detailTap} to attached listeners.
        */
        protected fireDetailTap(mParameters?: any): this;

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: any): this;

        /**
            * Fires event {@link #event:tap tap} to attached listeners.
        */
        protected fireTap(mParameters?: any): this;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): any[];

        /**
            * Gets current value of property {@link #getCounter counter}.
         * 
         * Defines the counter value of the list items.
        */
        public getCounter(): number;

        /**
            * Gets current value of property {@link #getHighlight highlight}.
         * 
         * Defines the highlight state of the list items.
         * 
         * Default value is `None`.
        */
        public getHighlight(): sap.ui.core.MessageType;

        /**
            * Returns a metadata object for class sap.m.ListItemBase.
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
            * Returns the accessibility announcement for the content Hook for the subclasses.
        */
        protected getMode(): string;

        /**
            * Gets current value of property {@link #getSelected selected}.
         * 
         * Defines the selected state of the list items. ** Note: ** Binding the `selected` property in single selection modes may cause unwanted results if you have more than one selected items in your binding.
         * 
         * Default value is `false`.
        */
        public getSelected(): boolean;

        /**
            * Returns the tabbable DOM elements as a jQuery collection
        */
        protected getTabbables(): any;

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * Defines the visual indication and behavior of the list items, e.g. `Active`, `Navigation`, `Detail`.
         * 
         * Default value is `Inactive`.
        */
        public getType(): ListType;

        /**
            * Gets current value of property {@link #getUnread unread}.
         * 
         * Activates the unread indicator for the list item, if set to `true`. ** Note: ** This flag is ignored when the `showUnread` property of the parent is set to `false`.
         * 
         * Default value is `false`.
        */
        public getUnread(): boolean;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Whether the control should be visible on the screen. If set to false, a placeholder is rendered instead of the real control.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): any[];

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;

        /**
            * Sets a new value for property {@link #getCounter counter}.
         * 
         * Defines the counter value of the list items.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setCounter(iCounter: number): this;

        /**
            * Sets a new value for property {@link #getHighlight highlight}.
         * 
         * Defines the highlight state of the list items.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setHighlight(sHighlight: sap.ui.core.MessageType): this;

        /**
            * Sets a new value for property {@link #getSelected selected}.
         * 
         * Defines the selected state of the list items. ** Note: ** Binding the `selected` property in single selection modes may cause unwanted results if you have more than one selected items in your binding.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setSelected(bSelected: boolean): this;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * Defines the visual indication and behavior of the list items, e.g. `Active`, `Navigation`, `Detail`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inactive`.
        */
        public setType(sType: ListType): this;

        /**
            * Sets a new value for property {@link #getUnread unread}.
         * 
         * Activates the unread indicator for the list item, if set to `true`. ** Note: ** This flag is ignored when the `showUnread` property of the parent is set to `false`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setUnread(bUnread: boolean): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Whether the control should be visible on the screen. If set to false, a placeholder is rendered instead of the real control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Whether the control should be visible on the screen.
         * 
         * If set to false, a placeholder will be rendered to mark the location of the invisible control in the DOM of the current page. The placeholder will be hidden and have zero dimensions (`display: none`).
         * 
         * See {@link sap.ui.core.RenderManager#writeInvisiblePlaceholderData RenderManager#writeInvisiblePlaceholderData} for details.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): sap.ui.core.Control;

    }

}
