declare module 'sap/ui/model/analytics/odata4analytics' {




    export interface IDimensionSettings {
    }

    /**
    
    */
    export class Dimension {

        /**
            * Create a representation of a dimension provided by an analytic query. Do not create your own instances.
        */
        public constructor(oQueryResult: QueryResult, oProperty: any);


        /**
            * Find attribute by name
        */
        public findAttributeByName(sName: string): this;

        /**
            * Get the names of all attributes included in this dimension
        */
        public getAllAttributeNames(): any[];

        /**
            * Get all attributes of this dimension
        */
        public getAllAttributes(): any;

        /**
            * Get query result containing this dimension
        */
        public getContainingQueryResult(): QueryResult;

        /**
            * Get associated hierarchy
        */
        public getHierarchy(): any;

        /**
            * Get the key property
        */
        public getKeyProperty(): any;

        /**
            * Get label
        */
        public getLabelText(): string;

        /**
            * Get master data entity set for this dimension
        */
        public getMasterDataEntitySet(): EntitySet;

        /**
            * Get the name of the dimension
        */
        public getName(): string;

        /**
            * Get super-ordinate dimension
        */
        public getSuperOrdinateDimension(): any;

        /**
            * Get text property related to this dimension
        */
        public getTextProperty(): any;

        /**
            * Get indicator whether or not master data is available for this dimension
        */
        public hasMasterData(): boolean;

    }
}