declare module "sap/ui/test/gherkin/qUnitTestHarness" {

    export = qUnitTestHarness;



    namespace qUnitTestHarness {

        // Methods
        /**
            * Dynamically generates and executes QUnit tests
            */
        export function test(args: { featurePath: string, steps: Function, }): any;
    }

}
