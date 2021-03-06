declare namespace sap.ui.core {

    /**
    
    */
    export class UIArea extends sap.ui.base.ManagedObject {


        /**
            * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(oCore: sap.ui.core.Core, oRootNode?: any);


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: sap.ui.core.Control): sap.ui.core.UIArea;

        /**
            * Adds some dependent to the aggregation {@link #getDependents dependents}.
        */
        public addDependent(oDependent: sap.ui.core.Control): sap.ui.core.UIArea;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): sap.ui.core.UIArea;

        /**
            * Destroys all the dependents in the aggregation {@link #getDependents dependents}.
        */
        public destroyDependents(): sap.ui.core.UIArea;

        /**
            * Creates a new subclass of class sap.ui.core.UIArea with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Provide getBindingContext, as UIArea can be parent of an element.
        */
        public getBindingContext(): any | sap.ui.model.Context;

        /**
            * Get the binding context of this object for the given model name.
         * 
         * If the object does not have a binding context set on itself and has no own model set, it will use the first binding context defined in its parent hierarchy.
         * 
         * ** Note: ** to be compatible with future versions of this API, you must not use the following model names:  * `null` * empty string `""` * string literals `"null"` or `"undefined"`  Omitting the model name (or using the value `undefined`) is explicitly allowed and refers to the default model.
         * 
         * ** Note: ** A ManagedObject inherits binding contexts from the Core only when it is a descendant of a UIArea.
        */
        public getBindingContext(sModelName?: string): sap.ui.model.Context;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * Content that is displayed in the UIArea.
        */
        public getContent(): any[];

        /**
            * Gets content of aggregation {@link #getDependents dependents}.
         * 
         * Dependent objects whose lifecycle is bound to the UIarea but which are not automatically rendered by the UIArea.
        */
        public getDependents(): any[];

        /**
            * Returns the Core's event provider as new eventing parent to enable control event bubbling to the core to ensure compatibility with the core validation events.
        */
        protected getEventingParent(): sap.ui.base.EventProvider;

        /**
            * Returns this `UIArea`'s id (as determined from provided RootNode).
        */
        public getId(): string | any;

        /**
            * Returns the object's Id.
        */
        public getId(): string;

        /**
            * Returns a metadata object for class sap.ui.core.UIArea.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

        /**
            * Returns the content control of this `UIArea` at the specified index. If no index is given the first content control is returned.
        */
        public getRootControl(idx: number): sap.ui.core.Control;

        /**
            * Returns the Root Node hosting this instance of `UIArea`.
        */
        public getRootNode(): any;

        /**
            * Returns this UI area. Needed to stop recursive calls from an element to its parent.
        */
        protected getUIArea(): sap.ui.core.UIArea;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: sap.ui.core.Control): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getDependents dependents}. and returns its index if found or -1 otherwise.
        */
        public indexOfDependent(oDependent: sap.ui.core.Control): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: sap.ui.core.Control, iIndex: number): sap.ui.core.UIArea;

        /**
            * Inserts a dependent into the aggregation {@link #getDependents dependents}.
        */
        public insertDependent(oDependent: sap.ui.core.Control, iIndex: number): sap.ui.core.UIArea;

        /**
            * Will be used as end-point for invalidate-bubbling from controls up their hierarchy.
         *  Triggers re-rendering of the UIAreas content.
        */
        protected invalidate(): any;

        /**
            * Checks whether the control is still valid (is in the DOM)
        */
        protected isActive(): boolean;

        /**
            * Returns whether rerendering is currently suppressed on this UIArea
        */
        protected isInvalidateSuppressed(): any;

        /**
            * Returns the locked state of the `sap.ui.core.UIArea`
        */
        public isLocked(): boolean;

        /**
            * Locks this instance of UIArea.
         * 
         * Rerendering and eventing will not be active as long as no {@link #unlock} is called.
        */
        public lock(): any;

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): any[];

        /**
            * Removes all the controls from the aggregation {@link #getDependents dependents}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllDependents(): any[];

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control;

        /**
            * Removes a dependent from the aggregation {@link #getDependents dependents}.
        */
        public removeDependent(vDependent: number | string | sap.ui.core.Control): sap.ui.core.Control;

        /**
            * Sets the root control to be displayed in this UIArea.
         * 
         * First, all old content controls (if any) will be detached from this UIArea (e.g. their parent relationship to this UIArea will be cut off). Then the parent relationship for the new content control (if not empty) will be set to this UIArea and finally, the UIArea will be marked for re-rendering.
         * 
         * The real re-rendering happens whenever the re-rendering is called. Either implicitly at the end of any control event or by calling sap.ui.getCore().applyChanges().
        */
        public setRootControl(oRootControl: sap.ui.base.Interface | sap.ui.core.Control): any;

        /**
            * Allows setting the Root Node hosting this instance of `UIArea`.
         *  The Dom Ref must have an Id that will be used as Id for this instance of `UIArea`.
        */
        public setRootNode(oRootNode: any): any;

        /**
            * Un-Locks this instance of UIArea.
         * 
         * Rerendering and eventing will now be enabled again.
        */
        public unlock(): any;

    }
}