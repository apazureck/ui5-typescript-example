declare module "sap/ui/commons/MessageBar" {

    export = MessageBar;




    /**
    
    */
    class MessageBar extends sap.ui.core.Control {

        /**
            * Constructor for a new MessageBar.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds/updates a supplied list of messages. The MessageBar will appear if at least one message exists.
        */
        public addMessages(aAMessages: any[]): any;

        /**
            * Deletes all messages.
        */
        public deleteAllMessages(): this;

        /**
            * Deletes a supplied list of messages. The MessageBar will disappear when no message remains.
        */
        public deleteMessages(aIds: any[]): any;

        /**
            * Creates a new subclass of class sap.ui.commons.MessageBar with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getAnchorID anchorID}.
         * 
         * Element ID upon which the MessageBar will be initially positioned.
         * 
         * Default value is ``.
        */
        public getAnchorID(): string;

        /**
            * Gets current value of property {@link #getAnchorSnapPoint anchorSnapPoint}.
         * 
         * Type: sap.ui.core.Popup.Dock SnapPoint of MessageBar over anchorId. Note: Use "begin" or "end" for RTL support. Note: "center" is not indicated, as positioning is only set once, either via the css "left" or the "right" attribute. Therefore a MessageBar will only be extended in one direction, as Messages come in.
         * 
         * Default value is `begin top`.
        */
        public getAnchorSnapPoint(): string;

        /**
            * Gets current value of property {@link #getMaxListed maxListed}.
         * 
         * Maximum number of messages being displayed in the List before a scrollbar appears. Value '0' means no limit.
         * 
         * Default value is `7`.
        */
        public getMaxListed(): number;

        /**
            * Gets current value of property {@link #getMaxToasted maxToasted}.
         * 
         * Maximum number of simultaneous messages being toasted in a row. Value '0' means this dynamic part is switched off.
         * 
         * Default value is `3`.
        */
        public getMaxToasted(): number;

        /**
            * Returns a metadata object for class sap.ui.commons.MessageBar.
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
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Specifies whether or not the MessageBar is visible. Invisible controls are not rendered.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Sets a new value for property {@link #getAnchorID anchorID}.
         * 
         * Element ID upon which the MessageBar will be initially positioned.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setAnchorID(sAnchorID: string): this;

        /**
            * Sets a new value for property {@link #getAnchorSnapPoint anchorSnapPoint}.
         * 
         * Type: sap.ui.core.Popup.Dock SnapPoint of MessageBar over anchorId. Note: Use "begin" or "end" for RTL support. Note: "center" is not indicated, as positioning is only set once, either via the css "left" or the "right" attribute. Therefore a MessageBar will only be extended in one direction, as Messages come in.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `begin top`.
        */
        public setAnchorSnapPoint(sAnchorSnapPoint: string): this;

        /**
            * Sets a new value for property {@link #getMaxListed maxListed}.
         * 
         * Maximum number of messages being displayed in the List before a scrollbar appears. Value '0' means no limit.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `7`.
        */
        public setMaxListed(iMaxListed: number): this;

        /**
            * Sets a new value for property {@link #getMaxToasted maxToasted}.
         * 
         * Maximum number of simultaneous messages being toasted in a row. Value '0' means this dynamic part is switched off.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `3`.
        */
        public setMaxToasted(iMaxToasted: number): this;

        /**
            * Setter for property `visible`.
         * 
         * Default value is `true`
         * 
         * The default implementation of function `setVisible()` is enhanced in order to toggle the `visibility:hidden;` attribute over the control.
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
