declare namespace sap.ui.core {

    /**
    
    */
    export class EventBus extends sap.ui.base.Object {


        /**
            * Creates an instance of EventBus.
        */
        public constructor();


        /**
            * Cleans up the internal structures and removes all event handlers.
         * 
         * The object must not be used anymore after destroy was called.
        */
        public destroy(): any;

        /**
            * Creates a new subclass of class sap.ui.core.EventBus with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.core.EventBus.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Fires an event using the specified settings and notifies all attached event handlers.
        */
        public publish(sChannelId: string, sEventId: string, oData?: any): any;

        /**
            * Fires an event using the specified settings and notifies all attached event handlers.
        */
        public publish(sEventId: string, oData?: any): any;

        /**
            * Attaches an event handler to the event with the given identifier on the given event channel.
        */
        public subscribe(sEventId: string, fnFunction: Function, oListener?: any): sap.ui.core.EventBus;

        /**
            * Attaches an event handler to the event with the given identifier on the given event channel.
        */
        public subscribe(sChannelId: string, sEventId: string, fnFunction: Function, oListener?: any): sap.ui.core.EventBus;

        /**
            * Attaches an event handler, called one time only, to the event with the given identifier on the given event channel.
         * 
         * When the event occurs, the handler function is called and the handler registration is automatically removed afterwards.
        */
        public subscribeOnce(sEventId: string, fnFunction: Function, oListener?: any): sap.ui.core.EventBus;

        /**
            * Attaches an event handler, called one time only, to the event with the given identifier on the given event channel.
         * 
         * When the event occurs, the handler function is called and the handler registration is automatically removed afterwards.
        */
        public subscribeOnce(sChannelId: string, sEventId: string, fnFunction: Function, oListener?: any): sap.ui.core.EventBus;

        /**
            * Removes a previously subscribed event handler from the event with the given identifier on the given event channel.
         * 
         * The passed parameters must match those used for registration with {@link #subscribe } beforehand!
        */
        public unsubscribe(sEventId: string, fnFunction: Function, oListener?: any): sap.ui.core.EventBus;

        /**
            * Removes a previously subscribed event handler from the event with the given identifier on the given event channel.
         * 
         * The passed parameters must match those used for registration with {@link #subscribe } beforehand!
        */
        public unsubscribe(sChannelId: string, sEventId: string, fnFunction: Function, oListener?: any): sap.ui.core.EventBus;

    }
}