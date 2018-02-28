declare module 'sap/ui/model/analytics/odata4analytics' {


    import Sorter from "sap/ui/model/Sorter";


    export interface ISortExpressionSettings {
    }

    /**
    
    */
    export class SortExpression {

        /**
            * Create a representation of an order by expression for a given entity type. It can be rendered as value for the $orderby system query option.
        */
        public constructor(oModel: any, oSchema: any, oEntityType: EntityType);


        /**
            * Add a condition to the order by expression. It replaces any previously specified sort order for the property.
        */
        public addSorter(sPropertyName: string, sSortOrder: SortOrder): this;

        /**
            * Clear expression from any sort conditions that may have been set previously
        */
        public clear(): any;

        /**
            * Get description for this entity type
        */
        public getEntityType(): EntityType;

        /**
            * Get the first SAPUI5 Sorter object.
        */
        public getExpressionAsUI5Sorter(): Sorter;

        /**
            * Get an array of SAPUI5 Sorter objects corresponding to this expression.
        */
        public getExpressionsAsUI5SorterArray(): any[];

        /**
            * Get the value for the OData system query option $orderby corresponding to this expression.
        */
        public getURIOrderByOptionValue(oSelectedPropertyNames: any): string;

        /**
            * Removes the order by expression for the given property name from the list of order by expression. If no order by expression with this property name exists the method does nothing.
        */
        public removeSorter(sPropertyName: string): any;

    }
}