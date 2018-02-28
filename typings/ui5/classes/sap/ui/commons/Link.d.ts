declare module 'sap/ui/commons/Link' {
    import Event from "sap/ui/base/Event";
    import Metadata from "sap/ui/base/Metadata";
    import Control, { IControlSettings } from 'sap/ui/core/Control';

    export interface ILinkSettings extends IControlSettings {
        text?: string;
        enabled?: boolean;
        helpId?: string;
        href?: sap.ui.core.URI;
        target?: string;
        width?: sap.ui.core.CSSSize;
    }

    /**
    
    */
    export default class Link extends Control {

        /**
            * Constructor for a new Link.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: ILinkSettings);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.commons.Link`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Link` itself.
         * 
         * Event is fired when the user clicks the control.
        */
        attachPress<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.commons.Link`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Link` itself.
         * 
         * Event is fired when the user clicks the control.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.commons.Link`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.ui.commons.Link with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:press press} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected firePress(mParameters?: any): boolean;

        /**
            * Puts the focus to the link.
        */
        public focus(): any;

        /**
            
        */
        protected getAccessibilityInfo(): any;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): any[];

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): any[];

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Whether the link can be triggered by the user.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets current value of property {@link #getHelpId helpId}.
         * 
         * Unique identifier used for help service.
         * 
         * Default value is ``.
        */
        public getHelpId(): string;

        /**
            * Gets current value of property {@link #getHref href}.
         * 
         * The link target URI. Supports standard hyperlink behavior. If an action should be triggered, this should not be set, but instead an event handler for the "press" event should be registered.
        */
        public getHref(): sap.ui.core.URI;

        /**
            * Returns a metadata object for class sap.ui.commons.Link.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Gets current value of property {@link #getTarget target}.
         * 
         * Options are _self, _top, _blank, _parent, _search. Alternatively, a frame name can be entered.
        */
        public getTarget(): string;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Link text to be displayed.
         * 
         * Default value is ``.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Width of text link. When it is set (CSS-size such as % or px), this is the exact size. When left blank, the text defines the size.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAllAriaDescribedBy(): any[];

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): any[];

        /**
            * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Whether the link can be triggered by the user.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getHelpId helpId}.
         * 
         * Unique identifier used for help service.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setHelpId(sHelpId: string): this;

        /**
            * Sets a new value for property {@link #getHref href}.
         * 
         * The link target URI. Supports standard hyperlink behavior. If an action should be triggered, this should not be set, but instead an event handler for the "press" event should be registered.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHref(sHref: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getTarget target}.
         * 
         * Options are _self, _top, _blank, _parent, _search. Alternatively, a frame name can be entered.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTarget(sTarget: string): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Link text to be displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Width of text link. When it is set (CSS-size such as % or px), this is the exact size. When left blank, the text defines the size.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}