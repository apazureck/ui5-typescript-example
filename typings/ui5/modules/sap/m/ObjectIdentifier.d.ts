declare module "sap/m/ObjectIdentifier" {

    /**
    
    */
    export default class ObjectIdentifier extends sap.ui.core.Control {


        /**
            * Constructor for a new ObjectIdentifier.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:titlePress titlePress} event of this `sap.m.ObjectIdentifier`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ObjectIdentifier` itself.
         * 
         * Fires when the title is active and the user taps/clicks on it.
        */
        attachTitlePress<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * DOM reference of the object identifier's title. */
            domRef: any,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:titlePress titlePress} event of this `sap.m.ObjectIdentifier`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ObjectIdentifier` itself.
         * 
         * Fires when the title is active and the user taps/clicks on it.
        */
        attachTitlePress<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * DOM reference of the object identifier's title. */
            domRef: any,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:titlePress titlePress} event of this `sap.m.ObjectIdentifier`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachTitlePress(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.m.ObjectIdentifier with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:titlePress titlePress} to attached listeners.
        */
        protected fireTitlePress(mParameters?: { domRef?: any, }): this;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): any[];

        /**
            * Gets current value of property {@link #getBadgeAttachments badgeAttachments}.
         * 
         * Indicates whether or not the attachments icon is displayed.
        */
        public getBadgeAttachments(): boolean;

        /**
            * Gets current value of property {@link #getBadgeNotes badgeNotes}.
         * 
         * Indicates whether or not the notes icon is displayed.
        */
        public getBadgeNotes(): boolean;

        /**
            * Gets current value of property {@link #getBadgePeople badgePeople}.
         * 
         * Indicates whether or not the address book icon is displayed.
        */
        public getBadgePeople(): boolean;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.m.ObjectIdentifier.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Defines the object text.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getTextDirection textDirection}.
         * 
         * Specifies the element's text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * Default value is `Inherit`.
        */
        public getTextDirection(): sap.ui.core.TextDirection;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Defines the object title.
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getTitleActive titleActive}.
         * 
         * Indicates if the ObjectIdentifier's title is clickable.
         * 
         * Default value is `false`.
        */
        public getTitleActive(): boolean;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Indicates if the ObjectIdentifier is visible. An invisible ObjectIdentifier is not being rendered.
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
            * Sets a new value for property {@link #getBadgeAttachments badgeAttachments}.
         * 
         * Indicates whether or not the attachments icon is displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setBadgeAttachments(bBadgeAttachments: boolean): this;

        /**
            * Sets a new value for property {@link #getBadgeNotes badgeNotes}.
         * 
         * Indicates whether or not the notes icon is displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setBadgeNotes(bBadgeNotes: boolean): this;

        /**
            * Sets a new value for property {@link #getBadgePeople badgePeople}.
         * 
         * Indicates whether or not the address book icon is displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setBadgePeople(bBadgePeople: boolean): this;

        /**
            * Sets text. Default value is empty/undefined.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getTextDirection textDirection}.
         * 
         * Specifies the element's text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTextDirection(sTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Sets the title. Default value is empty/undefined.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets property titleActive. Default value is false.
        */
        public setTitleActive(bValue: boolean): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Indicates if the ObjectIdentifier is visible. An invisible ObjectIdentifier is not being rendered.
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
