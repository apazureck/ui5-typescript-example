declare module "sap/m/NotificationListItem" {
    import NotificationListBase from "sap/m/NotificationListBase";
    import MessageStrip from "sap/m/MessageStrip";

    export = NotificationListItem;




    /**
    
    */
    class NotificationListItem extends NotificationListBase {

        /**
            * Constructor for a new NotificationListItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Registers resize handler.
        */
        public _registerResize(): any;

        /**
            * Clones a tree of objects starting with the object on which clone is called first (root object).
         * 
         * The IDs within the newly created clone tree are derived from the original IDs by appending the given `sIdSuffix` (if no suffix is given, one will be created; it will be unique across multiple clone calls).
         * 
         * The `oOptions` configuration object can have the following properties:  * The boolean value `cloneChildren` specifies whether associations/aggregations will be cloned * The boolean value `cloneBindings` specifies if bindings will be cloned 
         * 
         * For each cloned object the following settings are cloned based on the metadata of the object and the defined options:  * all properties that are not bound. If `cloneBinding` is `false`, even these properties will be cloned; the values are used by reference, they are not cloned * all aggregated objects that are not bound. If `cloneBinding` is `false`, even the ones that are bound will be cloned; they are all cloned recursively using the same `sIdSuffix` * all associated controls; when an association points to an object inside the cloned object tree, then the cloned association will be modified to that it points to the clone of the target object. When the association points to a managed object outside of the cloned object tree, then its target won't be changed. * all models set via `setModel()`; used by reference * all property and aggregation bindings (if `cloneBindings` is `true`); the pure binding information (path, model name) is cloned, but all other information like template control or factory function, data type or formatter function are copied by reference. The bindings themselves are created anew as they are specific for the combination (object, property, model). As a result, any later changes to a binding of the original object are not reflected in the clone, but changes to e.g the type or template etc. are. 
         * 
         * Each clone is created by first collecting the above mentioned settings and then creating a new instance with the normal constructor function. As a result, any side effects of mutator methods (`setProperty` etc.) or init hooks are repeated during clone creation. There is no need to override `clone()` just to reproduce these internal settings!
         * 
         * Custom controls however can override `clone()` to implement additional clone steps. They usually will first call `clone()` on the super class and then modify the returned clone accordingly.
         * 
         * Applications ** must never provide ** the second parameter `aLocaleIds`. It is determined automatically for the root object (and its non-existence also serves as an indicator for the root object). Specifying it will break the implementation of `clone()`.
        */
        protected clone(sIdSuffix?: string, aLocalIds?: any[], oOptions?: any, cloneChildren?: boolean, cloneBindings?: boolean): sap.ui.base.ManagedObject;

        /**
            * Overrides {@link sap.ui.core.Element#clone Element.clone} to clone additional internal state.
         * 
         * The additionally cloned information contains:  <li>browser event handlers attached with {@link #attachBrowserEvent} <li>text selection behavior <li>style classes added with {@link #addStyleClass} 
        */
        protected clone(sIdSuffix?: string, aLocalIds?: any[]): sap.ui.core.Element | sap.ui.base.ManagedObject;

        /**
            * Clones list item.
        */
        protected clone(): this;

        /**
            * Destroys the processingMessage in the aggregation {@link #getProcessingMessage processingMessage}.
        */
        public destroyProcessingMessage(): this;

        /**
            * Creates a new subclass of class sap.m.NotificationListItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.NotificationListBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getDescription description}.
         * 
         * Determines the description of the NotificationListItem.
         * 
         * Default value is ``.
        */
        public getDescription(): string;

        /**
            * Gets current value of property {@link #getHideShowMoreButton hideShowMoreButton}.
         * 
         * Determines if the "Show More" button should be hidden.
         * 
         * Default value is `false`.
        */
        public getHideShowMoreButton(): boolean;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Returns a metadata object for class sap.m.NotificationListItem.
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
            * Gets content of aggregation {@link #getProcessingMessage processingMessage}.
         * 
         * The sap.m.MessageStrip control that holds the information about any error that may occur when pressing the notification buttons
        */
        public getProcessingMessage(): MessageStrip;

        /**
            * Gets current value of property {@link #getTruncate truncate}.
         * 
         * Determines if the text in the title and the description of the notification are truncated to the first two lines.
         * 
         * Default value is `true`.
        */
        public getTruncate(): boolean;

        /**
            * Initializes the element instance after creation.
         * 
         * Applications must not call this hook method directly, it is called by the framework while the constructor of an element is executed.
         * 
         * Subclasses of Element should override this hook to implement any necessary initialization.
        */
        protected init(): any;

        /**
            * Sets initial values for the control.
        */
        protected init(): any;

        /**
            * Function is called when the rendering of the control is completed.
         * 
         * Applications must not call this hook method directly, it is called by the framework.
         * 
         * Subclasses of Control should override this hook to implement any necessary actions after the rendering.
        */
        protected onAfterRendering(): any;

        /**
            * Overwrites onAfterRendering
        */
        protected onAfterRendering(): any;

        /**
            * Function is called before the rendering of the control is started.
         * 
         * Applications must not call this hook method directly, it is called by the framework.
         * 
         * Subclasses of Control should override this hook to implement any necessary actions before the rendering.
        */
        protected onBeforeRendering(): any;

        /**
            * Overwrites onBeforeRendering
        */
        protected onBeforeRendering(): any;

        /**
            * Sets the author picture for list item.
        */
        public setAuthorPicture(authorPicture: string, suppressInvalidation?: boolean): this;

        /**
            * Overwrites the setter for the datetime property.
        */
        public setDatetime(dateTime: string): string;

        /**
            * Sets the DateTime.
        */
        public setDatetime(dateTime: any): this;

        /**
            * Sets a new value for property {@link #getDatetime datetime}.
         * 
         * Determines the due date of the NotificationListItem.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setDatetime(sDatetime: string): this;

        /**
            * Sets a new value for property {@link #getDescription description}.
         * 
         * Determines the description of the NotificationListItem.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setDescription(sDescription: string): this;

        /**
            * Sets the description.
        */
        public setDescription(description: string): this;

        /**
            * Sets a new value for property {@link #getHideShowMoreButton hideShowMoreButton}.
         * 
         * Determines if the "Show More" button should be hidden.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setHideShowMoreButton(bHideShowMoreButton: boolean): this;

        /**
            * Sets the priority of the list item.
        */
        public setPriority(priority: string, suppressInvalidation?: boolean): this;

        /**
            * Sets the aggregated {@link #getProcessingMessage processingMessage}.
        */
        public setProcessingMessage(oProcessingMessage: MessageStrip): this;

        /**
            * Sets a new value for property {@link #getTruncate truncate}.
         * 
         * Determines if the text in the title and the description of the notification are truncated to the first two lines.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setTruncate(bTruncate: boolean): this;

        /**
            * Sets the unread text.
        */
        public setUnread(unread: boolean): this;

    }


}
