declare module 'sap/ui/model/analytics/odata4analytics' {



    export interface IModelSettings {
    }

    /**
    
    */
    export class Model {

        /**
            * Create a representation of the analytical semantics of OData service metadata
        */
        public constructor(oModelReference: any, mParameter?: any);


        /**
            * Find analytic query result by name
        */
        public findQueryResultByName(sName: string): QueryResult;

        /**
            * Get the names of all query results (entity sets) offered by the model
        */
        public getAllQueryResultNames(): any[];

        /**
            * Get all query results offered by the model
        */
        public getAllQueryResults(): any;

        /**
            * Get underlying OData model provided by SAPUI5
        */
        public getODataModel(): any;

    }
}