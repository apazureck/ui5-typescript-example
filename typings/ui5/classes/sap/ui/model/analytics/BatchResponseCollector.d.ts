declare module 'sap/ui/model/analytics/BatchResponseCollector' {


    export interface IBatchResponseCollectorSettings {
    }

    /**
    
    */
    export default class BatchResponseCollector {


        /**
            * Collects responses of type BatchResponseCollector.TYPE_SUCCESS and BatchResponseCollector.TYPE_ERROR.
         * 
         * Keeps track of all collected responses and fires the necessary events after all responses for the requests, given in the constructor, have returned.
        */
        public collect(oResponse: any, sResponseType?: string): any;

        /**
            * Convenience function to collect an error response.
         * 
         * Internally BatchResponseCollector#collect is called, the second parameter is set to BatchResponseCollector.TYPE_ERROR
        */
        public error(oResponse: any): any;

        /**
            * Setup-Function to initialize/reset the BatchResponseCollector.
        */
        public setup(mParams?: { executedRequests: any[], binding: any, lastAnalyticalInfoVersion: number, }): any;

        /**
            * Convenience function to collect a success response.
         * 
         * Internally BatchResponseCollector#collect is called with second parameter BatchResponseCollector.TYPE_SUCCESS
        */
        public success(oResponse: any): any;

    }
}