declare module "sap/ui/app/MockServer" {

    /**
    
    */
    export default abstract class MockServer extends sap.ui.base.ManagedObject {


        /**
            * Creates a mocked server. This helps to mock all or some backend calls, e.g. for OData/JSON Models or simple XHR calls, without changing the application code. This class can also be used for qunit tests.
        */
        public constructor(sId?: string, mSettings?: any, oScope?: any);


    }

}
