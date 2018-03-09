declare module "sap/ui/commons/MessageList" {

    /**
    
    */
    export default class MessageList extends sap.ui.core.Control {


        /**
            * Constructor for a new MessageList.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.commons.MessageList with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getAnchorId anchorId}.
         * 
         * ID of the anchor under which the MessageList will render.
        */
        public getAnchorId(): string;

        /**
            * Gets current value of property {@link #getMaxListed maxListed}.
         * 
         * Maximum number of messages being display in the List before a scrollbar appears. Value '0' means no limit.
         * 
         * Default value is `7`.
        */
        public getMaxListed(): string;

        /**
            * Returns a metadata object for class sap.ui.commons.MessageList.
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
         * Specifies whether or not the MessageList is visible. Invisible controls are not rendered.
         * 
         * Default value is `false`.
        */
        public getVisible(): boolean;

        /**
            * Sets a new value for property {@link #getAnchorId anchorId}.
         * 
         * ID of the anchor under which the MessageList will render.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAnchorId(sAnchorId: string): this;

        /**
            * Sets a new value for property {@link #getMaxListed maxListed}.
         * 
         * Maximum number of messages being display in the List before a scrollbar appears. Value '0' means no limit.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `7`.
        */
        public setMaxListed(sMaxListed: string): this;

        /**
            * Sets the list of Messages to be displayed and re-renders this Control if it is visible.
        */
        public setMessages(aMessages: any[]): any;

        /**
            * Setter for property `visible`.
         * 
         * Default value is `true`
         * 
         * The default implementation of function "setVisible()" is overwritten in order to invoke the open() and close() of the MessageList Popup.
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
