declare module "sap/m/GrowingEnablement" {
    import ListBase from "sap/m/ListBase";

    export default class GrowingEnablement extends sap.ui.base.Object {


        /**
            * Creates a GrowingEnablement delegate that can be attached to ListBase Controls requiring capabilities for growing
        */
        public constructor(oControl: ListBase);


        /**
            * Creates a new subclass of class sap.m.GrowingEnablement with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.m.GrowingEnablement.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

    }

}
