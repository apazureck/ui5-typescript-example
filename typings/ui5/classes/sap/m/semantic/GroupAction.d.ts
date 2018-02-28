declare module 'sap/m/semantic/GroupAction' {
    import Metadata from "sap/ui/base/Metadata";
    import SemanticButton, { ISemanticButtonSettings } from 'sap/m/semantic/SemanticButton';

    export interface IGroupActionSettings extends ISemanticButtonSettings {
    }

    /**
    
    */
    export default class GroupAction extends SemanticButton {

        /**
            * Constructor for a new GroupAction.
        */
        public constructor(sId?: string, mSettings?: IGroupActionSettings);


        /**
            * Creates a new subclass of class sap.m.semantic.GroupAction with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.semantic.SemanticButton.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.m.semantic.GroupAction.
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