declare module "sap/ui/ux3/ThingAction" {

    /**
    
    */
    export default class ThingAction extends sap.ui.core.Element {


        /**
            * Constructor for a new ThingAction.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.ux3.ThingAction`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ThingAction` itself.
         * 
         * Event will be fired when the action was triggered.
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Id of selected action */
            id: string, /* * Selected Thing Action */
            action: ThingAction,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.ux3.ThingAction`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ThingAction` itself.
         * 
         * Event will be fired when the action was triggered.
        */
        attachSelect<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Id of selected action */
            id: string, /* * Selected Thing Action */
            action: ThingAction,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.ux3.ThingAction`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.ThingAction with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:select select} to attached listeners.
        */
        protected fireSelect(mParameters?: { id?: string, action?: ThingAction, }): this;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * action enabled (true/false)
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

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
            * Returns a metadata object for class sap.ui.ux3.ThingAction.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * text of action
        */
        public getText(): string;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * action enabled (true/false)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * text of action
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

    }

}
