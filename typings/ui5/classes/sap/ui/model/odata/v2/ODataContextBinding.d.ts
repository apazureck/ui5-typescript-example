declare module 'sap/ui/model/odata/v2/ODataContextBinding' {
    import Metadata from "sap/ui/base/Metadata";
    import Model from "sap/ui/model/Model";
    import ContextBinding, { IContextBindingSettings } from 'sap/ui/model/ContextBinding';

    export interface IODataContextBindingSettings extends IContextBindingSettings {
    }

    /**
    
    */
    export default class ODataContextBinding extends ContextBinding {

        /**
            * Constructor for odata.ODataContextBinding
        */
        public constructor(oModel: Model, sPath: string, oContext: any, mParameters?: { expand?: string, select?: string, custom?: any, });


        /**
            * Creates a new subclass of class sap.ui.model.odata.v2.ODataContextBinding with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.ContextBinding.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.model.odata.v2.ODataContextBinding.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            
        */
        public refresh(bForceUpdate?: boolean, sGroupId?: string): any;

    }
}