declare namespace sap.ui.base {

    /**
    
    */
    export abstract class EventProvider extends sap.ui.base.Object {


        /**
            * Creates an instance of EventProvider.
        */
        public constructor();


        /**
            * Attaches an event handler to the event with the given identifier.
        */
        public attachEvent(sEventId: string, fnFunction: Function, oListener?: any): sap.ui.base.EventProvider;

        /**
            * Attaches an event handler to the event with the given identifier.
        */
        public attachEvent(sEventId: string, oData: any, fnFunction: Function, oListener?: any): sap.ui.base.EventProvider;

        /**
            * Attaches an event handler, called one time only, to the event with the given identifier.
         * 
         * When the event occurs, the handler function is called and the handler registration is automatically removed afterwards.
        */
        public attachEventOnce(sEventId: string, fnFunction: Function, oListener?: any): sap.ui.base.EventProvider;

        /**
            * Attaches an event handler, called one time only, to the event with the given identifier.
         * 
         * When the event occurs, the handler function is called and the handler registration is automatically removed afterwards.
        */
        public attachEventOnce(sEventId: string, oData: any, fnFunction: Function, oListener?: any): sap.ui.base.EventProvider;

        /**
            * Cleans up the internal structures and removes all event handlers.
         * 
         * The object must not be used anymore after destroy was called.
        */
        public destroy(): any;

        /**
            * Removes a previously attached event handler from the event with the given identifier.
         * 
         * The passed parameters must match those used for registration with {@link #attachEvent} beforehand.
        */
        public detachEvent(sEventId: string, fnFunction: Function, oListener?: any): sap.ui.base.EventProvider;

        /**
            * Creates a new subclass of class sap.ui.base.EventProvider with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires an {@link sap.ui.base.Event event} with the given settings and notifies all attached event handlers.
        */
        protected fireEvent(sEventId: string, mParameters?: any, bAllowPreventDefault?: boolean, bEnableEventBubbling?: boolean): sap.ui.base.EventProvider | boolean;

        /**
            * Returns the parent in the eventing hierarchy of this object.
         * 
         * Per default this returns null, but if eventing is used in objects, which are hierarchically structured, this can be overwritten to make the object hierarchy visible to the eventing and enables the use of event bubbling within this object hierarchy.
        */
        protected getEventingParent(): sap.ui.base.EventProvider;

        /**
            * Returns a metadata object for class sap.ui.base.EventProvider.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns whether there are any registered event handlers for the event with the given identifier.
        */
        protected hasListeners(sEventId: string): boolean;

        /**
            * Returns a string representation of this object.
         * 
         * In case there is no class or id information, a simple static string is returned. Subclasses should override this method.
        */
        public toString(): string;

    }
}