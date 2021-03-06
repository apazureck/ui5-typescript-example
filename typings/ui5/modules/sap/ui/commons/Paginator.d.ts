declare module "sap/ui/commons/Paginator" {
    import { PaginatorEvent } from "sap/ui/commons/library";

    /**
    
    */
    export default class Paginator extends sap.ui.core.Control {


        /**
            * Constructor for a new Paginator.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:page page} event of this `sap.ui.commons.Paginator`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Paginator` itself.
         * 
         * Event is fired when the user navigates to another page by selecting it directly, or by jumping forward/backward.
        */
        attachPage<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The page which is the current one before the page event is fired (and another page is displayed) */
            srcPage: number, /* * The page that shall be displayed next after the page event is fired.
 * 
 * The page number is 1-based: the first page has index 1, not 0, to match the number visible in the UI. */
            targetPage: number, /* * Provides the values 'First', 'Last', 'Next', 'Previous', 'Goto'. The event parameter informs the application how the user navigated to the new page: Whether the 'Next' button was used, or another button, or whether the page was directly selected */
            type: PaginatorEvent,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:page page} event of this `sap.ui.commons.Paginator`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Paginator` itself.
         * 
         * Event is fired when the user navigates to another page by selecting it directly, or by jumping forward/backward.
        */
        attachPage<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, { /* * The page which is the current one before the page event is fired (and another page is displayed) */
            srcPage: number, /* * The page that shall be displayed next after the page event is fired.
 * 
 * The page number is 1-based: the first page has index 1, not 0, to match the number visible in the UI. */
            targetPage: number, /* * Provides the values 'First', 'Last', 'Next', 'Previous', 'Goto'. The event parameter informs the application how the user navigated to the new page: Whether the 'Next' button was used, or another button, or whether the page was directly selected */
            type: PaginatorEvent,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:page page} event of this `sap.ui.commons.Paginator`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPage(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.ui.commons.Paginator with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:page page} to attached listeners.
        */
        protected firePage(mParameters?: { srcPage?: number, targetPage?: number, type?: PaginatorEvent, }): this;

        /**
            * Gets current value of property {@link #getCurrentPage currentPage}.
         * 
         * Represents the current page (first page has index 1, not 0, to match the visual number)
         * 
         * Default value is `1`.
        */
        public getCurrentPage(): number;

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
            * Returns a metadata object for class sap.ui.commons.Paginator.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Gets current value of property {@link #getNumberOfPages numberOfPages}.
         * 
         * Represents the overall number of pages that are embedded into the parent control
        */
        public getNumberOfPages(): number;

        /**
            * Sets a new value for property {@link #getCurrentPage currentPage}.
         * 
         * Represents the current page (first page has index 1, not 0, to match the visual number)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setCurrentPage(iCurrentPage: number): this;

        /**
            * Sets a new value for property {@link #getNumberOfPages numberOfPages}.
         * 
         * Represents the overall number of pages that are embedded into the parent control
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setNumberOfPages(iNumberOfPages: number): this;

    }

}
