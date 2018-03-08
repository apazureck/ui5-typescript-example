declare module "sap/ui/test/gherkin/StepDefinitions" {

    export = StepDefinitions;




    class StepDefinitions extends sap.ui.base.Object {

        /**
            * A Gherkin feature file is human-readable, and the computer does not know how to execute its steps. This StepDefinitions class provides the interface between human and machine. It defines what each step in the Gherkin feature file will actually do when it is executed.
         * 
         * Meant to be implemented/overridden by a child object. Specifically, the functions "init" and "closeApplication" need to be overridden.
        */
        public constructor();


        /**
            * Closes the application and cleans up any mess made by the tests. To avoid erroneous exceptions during test execution, make sure that it is safe to run this method even if the application was never started.
        */
        public closeApplication(): any;

        /**
            * Creates a new subclass of class sap.ui.test.gherkin.StepDefinitions with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.test.gherkin.StepDefinitions.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Registers the step definitions by calling the method "register".
        */
        public init(): any;

        /**
            * Registers a step definition.
        */
        public register(rRegex: RegExp, fnFunc: Function): any;

    }


}
