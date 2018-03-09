declare module "sap/ui/demokit/CodeViewer" {

    /**
    
    */
    export default class CodeViewer extends sap.ui.core.Control {


        /**
            * Constructor for a new CodeViewer.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.demokit.CodeViewer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.demokit.CodeViewer` itself.
         * 
         * Called when the mouse button is clicked over the non-editable(!) control
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.demokit.CodeViewer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.demokit.CodeViewer` itself.
         * 
         * Called when the mouse button is clicked over the non-editable(!) control
        */
        attachPress<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:save save} event of this `sap.ui.demokit.CodeViewer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.demokit.CodeViewer` itself.
         * 
         * Called when the editor is active and should be saved
        */
        attachSave<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:save save} event of this `sap.ui.demokit.CodeViewer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.demokit.CodeViewer` itself.
         * 
         * Called when the editor is active and should be saved
        */
        attachSave<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.demokit.CodeViewer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:save save} event of this `sap.ui.demokit.CodeViewer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSave(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.ui.demokit.CodeViewer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: any): this;

        /**
            * Fires event {@link #event:save save} to attached listeners.
        */
        protected fireSave(mParameters?: any): this;

        /**
            * Gets current value of property {@link #getEditable editable}.
         * 
         * Whether the code can be edited or not
         * 
         * Default value is `false`.
        */
        public getEditable(): boolean;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * The CSS height property
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getLineNumbering lineNumbering}.
         * 
         * Whether the code to have line numbering or not
         * 
         * Default value is `false`.
        */
        public getLineNumbering(): boolean;

        /**
            * Returns a metadata object for class sap.ui.demokit.CodeViewer.
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
            * Gets current value of property {@link #getSource source}.
         * 
         * The source code to display.
        */
        public getSource(): string;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Whether the code viewer should be visible
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * The CSS width property
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Sets a new value for property {@link #getEditable editable}.
         * 
         * Whether the code can be edited or not
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEditable(bEditable: boolean): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * The CSS height property
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getLineNumbering lineNumbering}.
         * 
         * Whether the code to have line numbering or not
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setLineNumbering(bLineNumbering: boolean): this;

        /**
            * Sets a new value for property {@link #getSource source}.
         * 
         * The source code to display.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSource(sSource: string): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Whether the code viewer should be visible
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
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

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * The CSS width property
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }

}
