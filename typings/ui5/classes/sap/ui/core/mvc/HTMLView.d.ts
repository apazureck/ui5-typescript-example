declare module 'sap/ui/core/mvc/HTMLView' {
    import Metadata from "sap/ui/base/Metadata";
    import View, { IViewSettings } from 'sap/ui/core/mvc/View';

    export interface IHTMLViewSettings extends IViewSettings {
    }

    /**
    
    */
    export default class HTMLView extends View {

        /**
            * Constructor for a new mvc/HTMLView.
        */
        public constructor(sId?: string, mSettings?: IHTMLViewSettings);


        /**
            * Creates a new subclass of class sap.ui.core.mvc.HTMLView with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.mvc.View.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.core.mvc.HTMLView.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

    }
}