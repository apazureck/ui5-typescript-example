declare module "sap/m/MultiInput" {
    import Input from "sap/m/Input";
    import Token from "sap/m/Token";

    /**
    
    */
    export default class MultiInput extends Input {


        /**
            * Constructor for a new MultiInput.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some token to the aggregation {@link #getTokens tokens}.
        */
        public addToken(oToken: Token): this;

        /**
            * Function adds a validation callback called before any new token gets added to the tokens aggregation
        */
        public addValidator(fValidator: Function): any;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:tokenChange tokenChange} event of this `sap.m.MultiInput`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MultiInput` itself.
         * 
         * Fired when the tokens aggregation changed (add / remove token)
        */
        attachTokenChange<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Type of tokenChange event. There are four TokenChange types: "added", "removed", "removedAll", "tokensChanged". Use Tokenizer.TokenChangeType.Added for "added", Tokenizer.TokenChangeType.Removed for "removed", Tokenizer.TokenChangeType.RemovedAll for "removedAll" and Tokenizer.TokenChangeType.TokensChanged for "tokensChanged". */
            type: string, /* * The added token or removed token. This parameter is used when tokenChange type is "added" or "removed". */
            token: Token, /* * The array of removed tokens. This parameter is used when tokenChange type is "removedAll". */
            tokens: any[], /* * The array of tokens that are added. This parameter is used when tokenChange type is "tokenChanged". */
            addedTokens: any[], /* * The array of tokens that are removed. This parameter is used when tokenChange type is "tokenChanged". */
            removedTokens: any[],
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:tokenChange tokenChange} event of this `sap.m.MultiInput`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MultiInput` itself.
         * 
         * Fired when the tokens aggregation changed (add / remove token)
        */
        attachTokenChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Type of tokenChange event. There are four TokenChange types: "added", "removed", "removedAll", "tokensChanged". Use Tokenizer.TokenChangeType.Added for "added", Tokenizer.TokenChangeType.Removed for "removed", Tokenizer.TokenChangeType.RemovedAll for "removedAll" and Tokenizer.TokenChangeType.TokensChanged for "tokensChanged". */
            type: string, /* * The added token or removed token. This parameter is used when tokenChange type is "added" or "removed". */
            token: Token, /* * The array of removed tokens. This parameter is used when tokenChange type is "removedAll". */
            tokens: any[], /* * The array of tokens that are added. This parameter is used when tokenChange type is "tokenChanged". */
            addedTokens: any[], /* * The array of tokens that are removed. This parameter is used when tokenChange type is "tokenChanged". */
            removedTokens: any[],
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:tokenUpdate tokenUpdate} event of this `sap.m.MultiInput`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MultiInput` itself.
         * 
         * Fired when the tokens aggregation changed (add / remove token)
        */
        attachTokenUpdate<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Type of tokenChange event. There are two TokenUpdate types: "added", "removed" Use Tokenizer.TokenUpdateType.Added for "added" and Tokenizer.TokenUpdateType.Removed for "removed". */
            type: string, /* * The array of tokens that are added. This parameter is used when tokenUpdate type is "added". */
            addedTokens: any[], /* * The array of tokens that are removed. This parameter is used when tokenUpdate type is "removed". */
            removedTokens: any[],
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:tokenUpdate tokenUpdate} event of this `sap.m.MultiInput`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MultiInput` itself.
         * 
         * Fired when the tokens aggregation changed (add / remove token)
        */
        attachTokenUpdate<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * Type of tokenChange event. There are two TokenUpdate types: "added", "removed" Use Tokenizer.TokenUpdateType.Added for "added" and Tokenizer.TokenUpdateType.Removed for "removed". */
            type: string, /* * The array of tokens that are added. This parameter is used when tokenUpdate type is "added". */
            addedTokens: any[], /* * The array of tokens that are removed. This parameter is used when tokenUpdate type is "removed". */
            removedTokens: any[],
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

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
            * Function overwrites clone function to add tokens to MultiInput
        */
        protected clone(): this;

        /**
            * Close multi-line MultiInput in multi-line mode
        */
        public closeMultiLine(): any;

        /**
            * Destroys all the tokens in the aggregation {@link #getTokens tokens}.
        */
        public destroyTokens(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:tokenChange tokenChange} event of this `sap.m.MultiInput`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachTokenChange(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:tokenUpdate tokenUpdate} event of this `sap.m.MultiInput`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachTokenUpdate(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.m.MultiInput with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Input.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:tokenChange tokenChange} to attached listeners.
        */
        protected fireTokenChange(mParameters?: { type?: string, token?: Token, tokens?: any[], addedTokens?: any[], removedTokens?: any[], }): this;

        /**
            * Fires event {@link #event:tokenUpdate tokenUpdate} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireTokenUpdate(mParameters?: { type?: string, addedTokens?: any[], removedTokens?: any[], }): boolean;

        /**
            
        */
        protected getAccessibilityInfo(): any;

        /**
            * Get the reference element which the message popup should dock to
        */
        protected getDomRefForValueStateMessage(): any;

        /**
            * Gets current value of property {@link #getEnableMultiLineMode enableMultiLineMode}.
         * 
         * If set to true, the MultiInput will be displayed in multi-line display mode. In multi-line display mode, all tokens can be fully viewed and easily edited in the MultiInput. The default value is false. ** Note: ** This property does not take effect on smartphones or when the editable property is set to false. ** Caution: ** Do not enable multi-line mode in tables and forms.
         * 
         * Default value is `false`.
        */
        public getEnableMultiLineMode(): boolean;

        /**
            * Gets current value of property {@link #getMaxTokens maxTokens}.
         * 
         * The max number of tokens that is allowed in MultiInput.
        */
        public getMaxTokens(): number;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

        /**
            * Returns a metadata object for class sap.m.MultiInput.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Function returns domref which acts as reference point for the opening suggestion menu
        */
        public getPopupAnchorDomRef(): any;

        /**
            * Gets content of aggregation {@link #getTokens tokens}.
         * 
         * The currently displayed tokens
        */
        public getTokens(): any[];

        /**
            * Checks for the provided `sap.m.Token` in the aggregation {@link #getTokens tokens}. and returns its index if found or -1 otherwise.
        */
        public indexOfToken(oToken: Token): number;

        /**
            * Inserts a token into the aggregation {@link #getTokens tokens}.
        */
        public insertToken(oToken: Token, iIndex: number): this;

        /**
            * Focus is on MultiInput
        */
        public onfocusin(oEvent: jQuery.Event): any;

        /**
            * When press ESC, deselect all tokens and all texts
        */
        public onsapescape(oEvent: jQuery.Event): any;

        /**
            * When tap on text field, deselect all tokens
        */
        public ontap(oEvent: jQuery.Event): any;

        /**
            * Expand multi-line MultiInput in multi-line mode
        */
        public openMultiLine(): any;

        /**
            * Removes all the controls from the aggregation {@link #getTokens tokens}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllTokens(): any[];

        /**
            * Function removes all validation callbacks
        */
        public removeAllValidators(): any;

        /**
            * Removes a token from the aggregation {@link #getTokens tokens}.
        */
        public removeToken(vToken: number | string | Token): Token;

        /**
            * Function removes a validation callback
        */
        public removeValidator(fValidator: Function): any;

        /**
            * Setter for property `enableMultiLineMode`.
        */
        public setEnableMultiLineMode(bMultiLineMode: boolean): any;

        /**
            * Sets a new value for property {@link #getMaxTokens maxTokens}.
         * 
         * The max number of tokens that is allowed in MultiInput.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMaxTokens(iMaxTokens: number): this;

        /**
            * Function sets an array of tokens, existing tokens will get overridden
        */
        public setTokens(aTokens: any[]): this;

        /**
            * Updates the inner input field.
        */
        protected updateInputField(): any;

    }

}
