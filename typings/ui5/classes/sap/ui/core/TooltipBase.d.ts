declare namespace sap.ui.core {

    /**
    
    */
    export class TooltipBase extends sap.ui.core.Control {

        /**
            * Constructor for a new TooltipBase.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: any);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.core.TooltipBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.TooltipBase` itself.
         * 
         * This event is fired when the Tooltip has been closed
        */
        attachClosed<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.core.TooltipBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.TooltipBase` itself.
         * 
         * This event is fired when the Tooltip has been closed
        */
        attachClosed<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:closed closed} event of this `sap.ui.core.TooltipBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachClosed(fnFunction: Function, oListener: any): sap.ui.core.TooltipBase;

        /**
            * Creates a new subclass of class sap.ui.core.TooltipBase with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:closed closed} to attached listeners.
        */
        protected fireClosed(mParameters?: any): sap.ui.core.TooltipBase;

        /**
            * Gets current value of property {@link #getAtPosition atPosition}.
         * 
         * Optional. At position defines which position on the target control to align the positioned tooltip.
         * 
         * Default value is `begin bottom`.
        */
        public getAtPosition(): sap.ui.core.Dock;

        /**
            * Gets current value of property {@link #getCloseDelay closeDelay}.
         * 
         * Closing delay of the tooltip in milliseconds
         * 
         * Default value is `100`.
        */
        public getCloseDelay(): number;

        /**
            * Gets current value of property {@link #getCloseDuration closeDuration}.
         * 
         * Optional. Close Duration in milliseconds.
         * 
         * Default value is `200`.
        */
        public getCloseDuration(): number;

        /**
            * Gets current value of property {@link #getCollision collision}.
         * 
         * Optional. Collision - when the positioned element overflows the window in some direction, move it to an alternative position.
         * 
         * Default value is `flip`.
        */
        public getCollision(): sap.ui.core.Collision;

        /**
            * Returns a metadata object for class sap.ui.core.TooltipBase.
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
            * Gets current value of property {@link #getMyPosition myPosition}.
         * 
         * Optional. My position defines which position on the extended tooltip being positioned to align with the target control.
         * 
         * Default value is `begin top`.
        */
        public getMyPosition(): sap.ui.core.Dock;

        /**
            * Gets current value of property {@link #getOffset offset}.
         * 
         * Optional. Offset adds these left-top values to the calculated position. Example: "10 3".
         * 
         * Default value is `10 3`.
        */
        public getOffset(): string;

        /**
            * Gets current value of property {@link #getOpenDelay openDelay}.
         * 
         * Opening delay of the tooltip in milliseconds
         * 
         * Default value is `500`.
        */
        public getOpenDelay(): number;

        /**
            * Gets current value of property {@link #getOpenDuration openDuration}.
         * 
         * Optional. Open Duration in milliseconds.
         * 
         * Default value is `200`.
        */
        public getOpenDuration(): number;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * The text that is shown in the tooltip that extends the TooltipBase class, for example in RichTooltip.
         * 
         * Default value is ``.
        */
        public getText(): string;

        /**
            * Sets a new value for property {@link #getAtPosition atPosition}.
         * 
         * Optional. At position defines which position on the target control to align the positioned tooltip.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `begin bottom`.
        */
        public setAtPosition(sAtPosition: sap.ui.core.Dock): sap.ui.core.TooltipBase;

        /**
            * Sets a new value for property {@link #getCloseDelay closeDelay}.
         * 
         * Closing delay of the tooltip in milliseconds
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100`.
        */
        public setCloseDelay(iCloseDelay: number): sap.ui.core.TooltipBase;

        /**
            * Sets a new value for property {@link #getCloseDuration closeDuration}.
         * 
         * Optional. Close Duration in milliseconds.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `200`.
        */
        public setCloseDuration(iCloseDuration: number): sap.ui.core.TooltipBase;

        /**
            * Sets a new value for property {@link #getCollision collision}.
         * 
         * Optional. Collision - when the positioned element overflows the window in some direction, move it to an alternative position.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `flip`.
        */
        public setCollision(sCollision: sap.ui.core.Collision): sap.ui.core.TooltipBase;

        /**
            * Sets a new value for property {@link #getMyPosition myPosition}.
         * 
         * Optional. My position defines which position on the extended tooltip being positioned to align with the target control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `begin top`.
        */
        public setMyPosition(sMyPosition: sap.ui.core.Dock): sap.ui.core.TooltipBase;

        /**
            * Sets a new value for property {@link #getOffset offset}.
         * 
         * Optional. Offset adds these left-top values to the calculated position. Example: "10 3".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `10 3`.
        */
        public setOffset(sOffset: string): sap.ui.core.TooltipBase;

        /**
            * Sets a new value for property {@link #getOpenDelay openDelay}.
         * 
         * Opening delay of the tooltip in milliseconds
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `500`.
        */
        public setOpenDelay(iOpenDelay: number): sap.ui.core.TooltipBase;

        /**
            * Sets a new value for property {@link #getOpenDuration openDuration}.
         * 
         * Optional. Open Duration in milliseconds.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `200`.
        */
        public setOpenDuration(iOpenDuration: number): sap.ui.core.TooltipBase;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * The text that is shown in the tooltip that extends the TooltipBase class, for example in RichTooltip.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setText(sText: string): sap.ui.core.TooltipBase;

    }
}