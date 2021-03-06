declare module "sap/ui/commons/FormattedTextView" {
    import { FormattedTextViewControl } from "sap/ui/commons/library";

    /**
    
    */
    export default class FormattedTextView extends sap.ui.core.Control {


        /**
            * Constructor for a new FormattedTextView.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some control to the aggregation {@link #getControls controls}.
        */
        public addControl(oControl: sap.ui.core.Control): this;

        /**
            * Destroys all the controls in the aggregation {@link #getControls controls}.
        */
        public destroyControls(): this;

        /**
            * Creates a new subclass of class sap.ui.commons.FormattedTextView with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getAccessibleRole accessibleRole}.
         * 
         * The ARIA role for the control.
         * 
         * Default value is `Document`.
        */
        public getAccessibleRole(): sap.ui.core.AccessibleRole;

        /**
            * Gets content of aggregation {@link #getControls controls}.
         * 
         * Array of controls that should be replaced within htmlText.
        */
        public getControls(): any[];

        /**
            * Gets current value of property {@link #getHtmlText htmlText}.
         * 
         * Determines text with placeholders.
         * 
         * Default value is ``.
        */
        public getHtmlText(): string;

        /**
            * Returns a metadata object for class sap.ui.commons.FormattedTextView.
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
            * Indicates whether the FormattedTextView contains other controls.
        */
        public hasControls(): boolean;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getControls controls}. and returns its index if found or -1 otherwise.
        */
        public indexOfControl(oControl: sap.ui.core.Control): number;

        /**
            * Inserts a control into the aggregation {@link #getControls controls}.
        */
        public insertControl(oControl: sap.ui.core.Control, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getControls controls}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllControls(): any[];

        /**
            * Removes a control from the aggregation {@link #getControls controls}.
        */
        public removeControl(vControl: number | string | sap.ui.core.Control): sap.ui.core.Control;

        /**
            * Sets a new value for property {@link #getAccessibleRole accessibleRole}.
         * 
         * The ARIA role for the control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Document`.
        */
        public setAccessibleRole(sAccessibleRole: sap.ui.core.AccessibleRole): this;

        /**
            * Sets text with placeholders and given array of controls.
        */
        public setContent(sHtmlText: string, aControls: FormattedTextViewControl): any;

        /**
            * Sets the HTML text to be displayed.
        */
        public setHtmlText(sText: string): any;

    }

}
