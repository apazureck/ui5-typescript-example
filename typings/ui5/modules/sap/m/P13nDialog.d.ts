declare module "sap/m/P13nDialog" {
    import Dialog from "sap/m/Dialog";
    import P13nPanel from "sap/m/P13nPanel";

    export = P13nDialog;




    /**
    
    */
    class P13nDialog extends Dialog {

        /**
            * Constructor for a new P13nDialog.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some panel to the aggregation {@link #getPanels panels}.
        */
        public addPanel(oPanel: P13nPanel): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.m.P13nDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nDialog` itself.
         * 
         * Event fired if the 'cancel' button in `P13nDialog` is clicked.
        */
        attachCancel<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.m.P13nDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nDialog` itself.
         * 
         * Event fired if the 'cancel' button in `P13nDialog` is clicked.
        */
        attachCancel<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:ok ok} event of this `sap.m.P13nDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nDialog` itself.
         * 
         * Event fired if the 'ok' button in `P13nDialog` is clicked.
        */
        attachOk<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:ok ok} event of this `sap.m.P13nDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nDialog` itself.
         * 
         * Event fired if the 'ok' button in `P13nDialog` is clicked.
        */
        attachOk<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:reset reset} event of this `sap.m.P13nDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nDialog` itself.
         * 
         * Event fired if the 'reset' button in `P13nDialog` is clicked.
        */
        attachReset<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:reset reset} event of this `sap.m.P13nDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nDialog` itself.
         * 
         * Event fired if the 'reset' button in `P13nDialog` is clicked.
        */
        attachReset<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getPanels panels} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindPanels(oBindingInfo: any): this;

        /**
            * Destroys all the panels in the aggregation {@link #getPanels panels}.
        */
        public destroyPanels(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:cancel cancel} event of this `sap.m.P13nDialog`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachCancel(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:ok ok} event of this `sap.m.P13nDialog`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachOk(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:reset reset} event of this `sap.m.P13nDialog`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachReset(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.m.P13nDialog with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Dialog.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:cancel cancel} to attached listeners.
        */
        protected fireCancel(mParameters?: any): this;

        /**
            * Fires event {@link #event:ok ok} to attached listeners.
        */
        protected fireOk(mParameters?: any): this;

        /**
            * Fires event {@link #event:reset reset} to attached listeners.
        */
        protected fireReset(mParameters?: any): this;

        /**
            * Gets current value of property {@link #getInitialVisiblePanelType initialVisiblePanelType}.
         * 
         * This property determines which panel is initially shown when dialog is opened. Due to extensibility reason the type should be `string`. So it is feasible to add a custom panel without expanding the type.
        */
        public getInitialVisiblePanelType(): string;

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
            * Returns a metadata object for class sap.m.P13nDialog.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Gets content of aggregation {@link #getPanels panels}.
         * 
         * The dialog panels displayed in the dialog.
        */
        public getPanels(): any[];

        /**
            * Gets current value of property {@link #getShowReset showReset}.
         * 
         * This property determines whether the 'Restore' button is shown inside the dialog. If this property is set to true, clicking the 'Reset' button will trigger the `reset` event sending a notification that model data must be reset.
         * 
         * Default value is `false`.
        */
        public getShowReset(): boolean;

        /**
            * Gets current value of property {@link #getShowResetEnabled showResetEnabled}.
         * 
         * This property determines whether the 'Restore' button is enabled and is taken into account only if `showReset` is set to `true`.
         * 
         * Default value is `false`.
        */
        public getShowResetEnabled(): boolean;

        /**
            * Gets current value of property {@link #getValidationExecutor validationExecutor}.
         * 
         * Calls the validation listener once all panel-relevant validation checks have been done. This callback function is called in order to perform cross-model validation checks.
        */
        public getValidationExecutor(): any;

        /**
            * Returns visible panel.
        */
        public getVisiblePanel(): P13nPanel | any;

        /**
            * Checks for the provided `sap.m.P13nPanel` in the aggregation {@link #getPanels panels}. and returns its index if found or -1 otherwise.
        */
        public indexOfPanel(oPanel: P13nPanel): number;

        /**
            * Inserts a panel into the aggregation {@link #getPanels panels}.
        */
        public insertPanel(oPanel: P13nPanel, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getPanels panels}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllPanels(): any[];

        /**
            * Removes a panel from the aggregation {@link #getPanels panels}.
        */
        public removePanel(vPanel: number | string | P13nPanel): P13nPanel;

        /**
            * Sets a new value for property {@link #getInitialVisiblePanelType initialVisiblePanelType}.
         * 
         * This property determines which panel is initially shown when dialog is opened. Due to extensibility reason the type should be `string`. So it is feasible to add a custom panel without expanding the type.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setInitialVisiblePanelType(sInitialVisiblePanelType: string): this;

        /**
            * Sets a new value for property {@link #getShowReset showReset}.
         * 
         * This property determines whether the 'Restore' button is shown inside the dialog. If this property is set to true, clicking the 'Reset' button will trigger the `reset` event sending a notification that model data must be reset.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowReset(bShowReset: boolean): this;

        /**
            * Sets a new value for property {@link #getShowResetEnabled showResetEnabled}.
         * 
         * This property determines whether the 'Restore' button is enabled and is taken into account only if `showReset` is set to `true`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowResetEnabled(bShowResetEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getValidationExecutor validationExecutor}.
         * 
         * Calls the validation listener once all panel-relevant validation checks have been done. This callback function is called in order to perform cross-model validation checks.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValidationExecutor(oValidationExecutor: any): this;

        /**
            * Unbinds aggregation {@link #getPanels panels} from model data.
        */
        public unbindPanels(): this;

    }


}
