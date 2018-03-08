declare module "sap/ui/commons/layout/ResponsiveFlowLayoutData" {
    import sap_ui_layout_ResponsiveFlowLayoutData from "sap/ui/layout/ResponsiveFlowLayoutData";

    export = ResponsiveFlowLayoutData;




    import ResponsiveFlowLayoutDataBase from 'sap/ui/layout/ResponsiveFlowLayoutData'

    /**
    
    */
    class ResponsiveFlowLayoutData extends ResponsiveFlowLayoutDataBase {

        /**
            * Constructor for a new layout/ResponsiveFlowLayoutData.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.ui.commons.layout.ResponsiveFlowLayoutData with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.ResponsiveFlowLayoutData.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Getter for property `margin`. This property prevents any margin of the element if set to false
         * 
         * Default value is `true`
        */
        public getMargin(): boolean;

        /**
            * Returns a metadata object for class sap.ui.commons.layout.ResponsiveFlowLayoutData.
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
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Setter for property `margin`.
         * 
         * Default value is `true`
        */
        public setMargin(bMargin: boolean): this;

    }


}
