declare module "sap/ui/test/OpaExtension" {

    /**
    
    */
    export default class OpaExtension {


        /**
            * OPA extension interface.
        */
        public constructor();


        /**
            * Creates a new subclass of class sap.ui.test.OpaExtension with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Return the custom assertions provided by this extension. The default QUnit assertion object will be augmented with them. Subsequent waitFor's will wait for the returned promise to be resolved.
        */
        public static getAssertions(): any;

        /**
            * Returns a metadata object for class sap.ui.test.OpaExtension.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Startup hook, executed after startup of the application under test. Executed in the application frame. Subsequent waitFor's will wait for the returned promise to be resolved.
        */
        public static onAfterInit(): any;

        /**
            * Shutdown hook, executed before shutdown of the application under test. Executed in the application frame. Subsequent waitFor's will wait for the returned promise to be resolved.
        */
        public static onBeforeExit(): any;

    }

}
