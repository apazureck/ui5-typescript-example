declare module 'sap/m/SelectionDetailsFacade' {
    import Item from "sap/ui/core/Item";
    import SelectionDetails from "sap/m/SelectionDetails";
    import Control from "sap/ui/core/Control";


    export interface ISelectionDetailsFacadeSettings {
    }

    /**
    
    */
    export default class SelectionDetailsFacade {


        /**
            * Adds some action to the aggregation {@link #getActions actions}.
        */
        public addAction(oAction: Item): SelectionDetails;

        /**
            * Adds some actionGroup to the aggregation {@link #getActionGroups actionGroups}.
        */
        public addActionGroup(oActionGroup: Item): SelectionDetails;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:actionPress actionPress} event of this `sap.m.SelectionDetails`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SelectionDetails` itself.
         * 
         * Event is triggered when a custom action is pressed.
        */
        public attachActionPress(fnFunction: Function, oListener?: any): SelectionDetails;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:actionPress actionPress} event of this `sap.m.SelectionDetails`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SelectionDetails` itself.
         * 
         * Event is triggered when a custom action is pressed.
        */
        public attachActionPress(oData: any, fnFunction: Function, oListener?: any): SelectionDetails;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeClose beforeClose} event of this `sap.m.SelectionDetails`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SelectionDetails` itself.
         * 
         * Event is triggered before the popover is closed.
        */
        public attachBeforeClose(fnFunction: Function, oListener?: any): SelectionDetails;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeClose beforeClose} event of this `sap.m.SelectionDetails`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SelectionDetails` itself.
         * 
         * Event is triggered before the popover is closed.
        */
        public attachBeforeClose(oData: any, fnFunction: Function, oListener?: any): SelectionDetails;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.m.SelectionDetails`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SelectionDetails` itself.
         * 
         * Event is triggered before the popover is open.
        */
        public attachBeforeOpen(fnFunction: Function, oListener?: any): SelectionDetails;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.m.SelectionDetails`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SelectionDetails` itself.
         * 
         * Event is triggered before the popover is open.
        */
        public attachBeforeOpen(oData: any, fnFunction: Function, oListener?: any): SelectionDetails;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.m.SelectionDetails`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SelectionDetails` itself.
         * 
         * Event is triggered after a list item of {@link sap.m.SelectionDetailsItem} is pressed.
        */
        public attachNavigate(fnFunction: Function, oListener?: any): SelectionDetails;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.m.SelectionDetails`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SelectionDetails` itself.
         * 
         * Event is triggered after a list item of {@link sap.m.SelectionDetailsItem} is pressed.
        */
        public attachNavigate(oData: any, fnFunction: Function, oListener?: any): SelectionDetails;

        /**
            * Closes SelectionDetails if open.
        */
        public close(): SelectionDetails;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:actionPress actionPress} event of this `sap.m.SelectionDetails`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachActionPress(fnFunction: Function, oListener: any): SelectionDetails;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeClose beforeClose} event of this `sap.m.SelectionDetails`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeClose(fnFunction: Function, oListener: any): SelectionDetails;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeOpen beforeOpen} event of this `sap.m.SelectionDetails`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeOpen(fnFunction: Function, oListener: any): SelectionDetails;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:navigate navigate} event of this `sap.m.SelectionDetails`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachNavigate(fnFunction: Function, oListener: any): SelectionDetails;

        /**
            * Returns true if the SelectionDetails is enabled, otherwise false.
        */
        public isEnabled(): boolean;

        /**
            * Returns true if the SelectionDetails is open, otherwise false.
        */
        public isOpen(): boolean;

        /**
            * Wraps the given content in {@link sap.m.Page page}, adds it to existing {@link sap.m.NavContainer NavContainer} and navigates to this newly created page. Has no effect if the SelectionDetails is closed. Lazily processes dependencies for the navigation event.
        */
        public navTo(title: string, content: Control): SelectionDetails;

        /**
            * Removes a action from the aggregation {@link #getActions actions}.
        */
        public removeAction(vAction: number | string | Item): Item;

        /**
            * Removes a actionGroup from the aggregation {@link #getActionGroups actionGroups}.
        */
        public removeActionGroup(vActionGroup: number | string | Item): Item;

        /**
            * Removes all the controls from the aggregation {@link #getActionGroups actionGroups}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllActionGroups(): any[];

        /**
            * Removes all the controls from the aggregation {@link #getActions actions}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllActions(): any[];

    }
}