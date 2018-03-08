declare module "sap/ui/model/analytics/odata4analytics" {
    import sapuimodelanalyticsodata4analytics from "sap/ui/model/analytics/odata4analytics";
    type QueryResult = sapuimodelanalyticsodata4analytics.QueryResult;
    type EntitySet = sapuimodelanalyticsodata4analytics.EntitySet;
    type Dimension = sapuimodelanalyticsodata4analytics.Dimension;
    type FilterExpression = sapuimodelanalyticsodata4analytics.FilterExpression;
    type SortExpression = sapuimodelanalyticsodata4analytics.SortExpression;
    type ParameterizationRequest = sapuimodelanalyticsodata4analytics.ParameterizationRequest;
    type RecursiveHierarchy = sapuimodelanalyticsodata4analytics.RecursiveHierarchy;
    type EntityType = sapuimodelanalyticsodata4analytics.EntityType;
    type Parameterization = sapuimodelanalyticsodata4analytics.Parameterization;
    type Parameter = sapuimodelanalyticsodata4analytics.Parameter;
    type Measure = sapuimodelanalyticsodata4analytics.Measure;
    type Model = sapuimodelanalyticsodata4analytics.Model;
    type SortOrder = sapuimodelanalyticsodata4analytics.SortOrder;

    export = odata4analytics;

    namespace odata4analytics {

        // Methods
        /**
            * Specify which components of the dimension shall be included in the value set.
            */
        export function includeDimensionTextAttributes(bIncludeText: boolean, bIncludeAttributes: boolean): any;
    }

    namespace odata4analytics {


        /**
        
        */
        class Dimension {

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


        /**
        
        */
        class DimensionAttribute {

            /**
                * Create a representation of a dimension attribute provided by an analytic query. Do not create your own instances.
            */
            public constructor(oQueryResult: QueryResult, oProperty: any);


            /**
                * Get dimension
            */
            public getDimension(): Dimension;

            /**
                * Get the key property
            */
            public getKeyProperty(): any;

            /**
                * Get label
            */
            public getLabelText(): string;

            /**
                * Get the name of the dimension attribute
            */
            public getName(): string;

            /**
                * Get text property related to this dimension attribute
            */
            public getTextProperty(): any;

        }


        /**
        
        */
        class DimensionMemberSetRequest {

            /**
                * Create a request object for interaction with a dimension value help. Such a value help is served by either the query result entity set, in which case the returned dimension members are limited to those also used in the query result data. Or, the value help is populated by a master data entity set, if made available by the service. In this case, the result will include all valid members for that dimension.
            */
            public constructor(oDimension: Dimension, oParameterizationRequest: ParameterizationRequest, bUseMasterData: boolean);


            /**
                * Get the filter expression for this request.
             * 
             * Expressions are represented by separate objects. If none exists so far, a new expression object gets created.
            */
            public getFilterExpression(): FilterExpression;

            /**
                * Returns the current page boundaries as object with properties `start` and `end`. If the end of the page is unbounded, `end` is null.
            */
            public getResultPageBoundaries(): any;

            /**
                * Get the sort expression for this request.
             * 
             * Expressions are represented by separate objects. If none exists so far, a new expression object gets created.
            */
            public getSortExpression(): SortExpression;

            /**
                * Get the value of a query option for the OData request URI corresponding to this request.
            */
            public getURIQueryOptionValue(sQueryOptionName: string): string;

            /**
                * Get the URI to locate the entity set for the dimension memebers.
            */
            public getURIToDimensionMemberEntitySet(sServiceRootURI: string): string;

            /**
                * Get the unescaped URI to fetch the dimension members, optionally augmented by text and attributes.
            */
            public getURIToDimensionMemberEntries(sServiceRootURI: string): string;

            /**
                * Set the filter expression for this request.
             * 
             * Expressions are represented by separate objects. Calling this method replaces the filter object maintained by this request.
            */
            public setFilterExpression(oFilter: FilterExpression): any;

            /**
                * Set the parameterization request required for retrieving dimension members directly from the query result, if it is parameterized.
            */
            public setParameterizationRequest(oParameterizationRequest: any): any;

            /**
                * Set further options to be applied for the OData request
            */
            public setRequestOptions(bIncludeCount: boolean): any;

            /**
                * Specify that only a page of the query result shall be returned. A page is described by its boundaries, that are row numbers for the first and last rows in the query result to be returned.
            */
            public setResultPageBoundaries(start: number, end: number): any;

            /**
                * Set the sort expression for this request.
             * 
             * Expressions are represented by separate objects. Calling this method replaces the sort object maintained by this request.
            */
            public setSortExpression(oSorter: SortExpression): any;

        }


        /**
        
        */
        class EntitySet {

            /**
                * Create a representation of an OData entity set in the context of an analytic query. Do not create your own instances.
            */
            public constructor(oModel: any, oSchema: any, oContainer: any, oEntitySet: any, oEntityType: any);


            /**
                * Get entity type used for this entity set
            */
            public getEntityType(): any;

            /**
                * Get the fully qualified name for this entity type
            */
            public getQName(): string;

            /**
                * Get full description for this entity set
            */
            public getSetDescription(): any;

            /**
                * Get names of properties in this entity set that can be updated
            */
            public getUpdatablePropertyNameSet(): any;

        }


        /**
        
        */
        class EntityType {

            /**
                * Create a representation of an OData entity type in the context of an analytic query. Do not create your own instances.
            */
            public constructor(oModel: any, oSchema: any, oEntityType: any);


            /**
                * Find property by name
            */
            public findPropertyByName(sPropertyName: string): any;

            /**
                * Get the names of all properties with an associated hierarchy
            */
            public getAllHierarchyPropertyNames(): any[];

            /**
                * Get names of properties that can be filtered, that is they can be used in $filter expressions
            */
            public getFilterablePropertyNames(): any[];

            /**
                * Get heading of the property with specified name (identified by property metadata annotation sap:heading)
            */
            public getHeadingOfProperty(sPropertyName: string): string;

            /**
                * Get the hierarchy associated to a given property Based on the current specification, hierarchies are always recursive. TODO: Extend behavior when leveled hierarchies get in scope
            */
            public getHierarchy(sName: string): RecursiveHierarchy;

            /**
                * Get key properties of this type
            */
            public getKeyProperties(): any[];

            /**
                * Get label of the property with specified name (identified by property metadata annotation sap:label)
            */
            public getLabelOfProperty(sPropertyName: string): string;

            /**
                * Get all properties
            */
            public getProperties(): any;

            /**
                * Get properties for which filter restrictions have been specified
            */
            public getPropertiesWithFilterRestrictions(): any;

            /**
                * Get the fully qualified name for this entity type
            */
            public getQName(): string;

            /**
                * Get quick info of the property with specified name (identified by property metadata annotation sap:quickinfo)
            */
            public getQuickInfoOfProperty(sPropertyName: string): string;

            /**
                * Get names of properties that must be filtered, that is they must appear in every $filter expression
            */
            public getRequiredFilterPropertyNames(): any[];

            /**
                * Get names of properties that can be sorted, that is they can be used in $orderby expressions
            */
            public getSortablePropertyNames(): any[];

            /**
                * Get the super-ordinate property related to the property with specified name (identified by property metadata annotation sap:super-ordinate)
            */
            public getSuperOrdinatePropertyOfProperty(sPropertyName: string): any;

            /**
                * Get the text property related to the property with specified name (identified by property metadata annotation sap:text)
            */
            public getTextPropertyOfProperty(sPropertyName: string): any;

            /**
                * Get full description for this entity type
            */
            public getTypeDescription(): any;

        }


        /**
        
        */
        class FilterExpression {

            /**
                * Create a representation of a filter expression for a given entity type. It can be rendered as value for the $filter system query option.
            */
            public constructor(oModel: any, oSchema: any, oEntityType: EntityType);


            /**
                * Add a condition to the filter expression.
             * 
             * Multiple conditions on the same property are combined with a logical OR first, and in a second step conditions for different properties are combined with a logical AND.
            */
            public addCondition(sPropertyName: string, sOperator: sap.ui.model.FilterOperator, oValue: any, oValue2: any): this;

            /**
                * Add a set condition to the filter expression.
             * 
             * A set condition tests if the value of a property is included in a set of given values. It is a convenience method for this particular use case eliminating the need for multiple API calls.
            */
            public addSetCondition(sPropertyName: string, aValues: any[]): this;

            /**
                * Add an array of UI5 filter conditions to the filter expression.
             * 
             * The UI5 filter condition is combined with the other given conditions using a logical AND. This method is particularly useful for passing forward already created UI5 filter arrays.
            */
            public addUI5FilterConditions(aUI5Filter: any[]): this;

            /**
                * Check if request is compliant with basic filter constraints expressed in metadata:
             * 
             * (a) all properties required in the filter expression have been referenced (b) the single-value filter restrictions have been obeyed
            */
            public checkValidity(): boolean;

            /**
                * Clear expression from any conditions that may have been set previously
            */
            public clear(): any;

            /**
                * Get description for this entity type
            */
            public getEntityType(): EntityType;

            /**
                * Get an array of SAPUI5 Filter objects corresponding to this expression.
            */
            public getExpressionAsUI5FilterArray(): any[];

            /**
                * Get the value for the OData system query option $filter corresponding to this expression.
            */
            public getURIFilterOptionValue(): string;

            /**
                * Remove all conditions for some property from the filter expression.
             * 
             * All previously set conditions for some property are removed from the filter expression.
            */
            public removeConditions(sPropertyName: string): this;

        }


        /**
        
        */
        class Measure {

            /**
                * Create a representation of a measure provided by an analytic query. Do not create your own instances.
            */
            public constructor(oQueryResult: QueryResult, oProperty: any);


            /**
                * Get the text property associated to the raw value property holding the formatted value related to this measure
            */
            public getFormattedValueProperty(): any;

            /**
                * Get label
            */
            public getLabelText(): string;

            /**
                * Get the name of the measure
            */
            public getName(): string;

            /**
                * Get the raw value property
            */
            public getRawValueProperty(): any;

            /**
                * Get the unit property related to this measure
            */
            public getUnitProperty(): any;

            /**
                * Get indicator whether or not the measure is updatable
            */
            public isUpdatable(): boolean;

        }


        /**
        
        */
        class Model {

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


        /**
        
        */
        namespace Model {
            class ReferenceByModel {

                /**
                    * Create a reference to an OData model already loaded elsewhere with the help of SAPUI5.
                */
                public constructor(oModel: any);


            }
        }


        /**
        
        */
        namespace Model {
            class ReferenceByURI {

                /**
                    * Create a reference to an OData model by the URI of the related OData service.
                */
                public constructor(sURI: string);


            }
        }


        /**
        
        */
        namespace Model {
            class ReferenceWithWorkaround {

                /**
                    * Create a reference to an OData model having certain workarounds activated. A workaround is an implementation that changes the standard behavior of the API to overcome some gap or limitation in the OData provider. The workaround implementation can be conditionally activated by passing the identifier in the constructor.
                 * 
                 * Known workaround identifiers are:
                 * 
                 * <li>"CreateLabelsFromTechnicalNames" - If a property has no label text, it gets generated from the property name.</li>
                 * 
                 * <li>"IdentifyTextPropertiesByName" -If a dimension property has no text and another property with the same name and an appended "Name", "Text" etc. exists, they are linked via annotation.</li>
                */
                public constructor(oModel: any, aWorkaroundID: any[]);


            }
        }


        /**
        
        */
        class Parameter {

            /**
                * Create a representation of a single parameter contained in a parameterization. Do not create your own instances.
            */
            public constructor(oParameterization: Parameterization, oProperty: any);


            /**
                * Get parameterization containing this parameter
            */
            public getContainingParameterization(): Parameterization;

            /**
                * Get label
            */
            public getLabelText(): string;

            /**
                * Get the name of the parameter
            */
            public getName(): string;

            /**
                * Get property for the parameter representing the peer boundary of the same interval
            */
            public getPeerIntervalBoundaryParameter(): this;

            /**
                * Get property
            */
            public getProperty(): any;

            /**
                * Get text property related to this parameter
            */
            public getTextProperty(): any;

            /**
                * Get the URI to locate the entity set holding the value set, if it is available.
            */
            public getURIToValueEntitySet(sServiceRootURI: string): any;

            /**
                * Get indicator if the parameter represents an interval boundary
            */
            public isIntervalBoundary(): boolean;

            /**
                * Get indicator if the parameter represents the lower boundary of an interval
            */
            public isLowerIntervalBoundary(): boolean;

            /**
                * Get indicator whether or not the parameter is optional
            */
            public isOptional(): boolean;

            /**
                * Get indicator if a set of values is available for this parameter. Typically, this is true for parameters with a finite set of known values such as products, business partners in different roles, organization units, and false for integer or date parameters
            */
            public isValueSetAvailable(): boolean;

        }


        /**
        
        */
        class Parameterization {

            /**
                * Create a representation of a parameterization for an analytic query. Do not create your own instances.
            */
            public constructor(oEntityType: EntityType, oEntitySet: EntitySet);


            /**
                * Find parameter by name
            */
            public findParameterByName(sName: string): Parameter;

            /**
                * Get the names of all parameters part of the parameterization
            */
            public getAllParameterNames(): any[];

            /**
                * Get all parameters included in this parameterization
            */
            public getAllParameters(): any;

            /**
                * Get the entity set representing this query result in the OData model
            */
            public getEntitySet(): EntitySet;

            /**
                * Get the entity type defining the type of this query result in the OData model
            */
            public getEntityType(): EntityType;

            /**
                * Get the name of the parameter
            */
            public getName(): string;

            /**
                * Get navigation property to query result
            */
            public getNavigationPropertyToQueryResult(): QueryResult;

        }


        /**
        
        */
        class ParameterizationRequest {

            /**
                * Create a request object for interaction with a query parameterization.
            */
            public constructor(oParameterization: Parameterization);


            /**
                * Get the description of the parameterization on which this request operates on
            */
            public getParameterization(): Parameterization;

            /**
                * Get the URI to locate the entity set for the query parameterization.
            */
            public getURIToParameterizationEntitySet(sServiceRootURI: string): any;

            /**
                * Get the URI to locate the parameterization entity for the values assigned to all parameters beforehand. Notice that a value must be supplied for every parameter including those marked as optional. For optional parameters, assign the special value that the service provider uses as an "omitted" value. For example, for services based on BW Easy Queries, this would be an empty string.
            */
            public getURIToParameterizationEntry(sServiceRootURI: string): any;

            /**
                * Assign a value to a parameter
            */
            public setParameterValue(sParameterName: string, sValue: string, sToValue: string): any;

        }


        /**
        
        */
        class ParameterValueSetRequest {

            /**
                * Create a request object for interaction with a query parameter value help.
            */
            public constructor(oParameter: Parameter);


            /**
                * Get the filter expression for this request.
             * 
             * Expressions are represented by separate objects. If none exists so far, a new expression object gets created.
            */
            public getFilterExpression(): FilterExpression;

            /**
                * Get the sort expression for this request.
             * 
             * Expressions are represented by separate objects. If none exists so far, a new expression object gets created.
            */
            public getSortExpression(): SortExpression;

            /**
                * Get the value of a query option for the OData request URI corresponding to this request.
            */
            public getURIQueryOptionValue(sQueryOptionName: string): string;

            /**
                * Get the unescaped URI to fetch the parameter value set.
            */
            public getURIToParameterValueSetEntries(sServiceRootURI: string): string;

            /**
                * Specify which components of the parameter shall be included in the value set.
            */
            public includeParameterText(bIncludeText: boolean): any;

            /**
                * Set the filter expression for this request.
             * 
             * Expressions are represented by separate objects. Calling this method replaces the filter object maintained by this request.
            */
            public setFilterExpression(oFilter: FilterExpression): any;

            /**
                * Set the sort expression for this request.
             * 
             * Expressions are represented by separate objects. Calling this method replaces the sort object maintained by this request.
            */
            public setSortExpression(oSorter: SortExpression): any;

        }


        /**
        
        */
        class QueryResult {

            /**
                * Create a representation of an analytic query. Do not create your own instances.
            */
            public constructor(oModel: Model, oEntityType: EntityType, oEntitySet: EntitySet, oParameterization: Parameterization);


            /**
                * Find dimension by name
            */
            public findDimensionByName(sName: string): Dimension;

            /**
                * Find dimension by property name
            */
            public findDimensionByPropertyName(sName: string): Dimension;

            /**
                * Find measure by name
            */
            public findMeasureByName(sName: string): Measure;

            /**
                * Find measure by property name
            */
            public findMeasureByPropertyName(sName: string): Measure;

            /**
                * Get the names of all dimensions included in the query result
            */
            public getAllDimensionNames(): any[];

            /**
                * Get all dimensions included in this query result
            */
            public getAllDimensions(): any;

            /**
                * Get the names of all measures included in the query result
            */
            public getAllMeasureNames(): any[];

            /**
                * Get all measures included in this query result
            */
            public getAllMeasures(): any;

            /**
                * Get the entity set representing this query result in the OData model
            */
            public getEntitySet(): EntitySet;

            /**
                * Get the entity type defining the type of this query result in the OData model
            */
            public getEntityType(): EntityType;

            /**
                * Get the analytical model containing the entity set for this query result
            */
            public getModel(): any;

            /**
                * Get the name of the query result
            */
            public getName(): string;

            /**
                * Get the parameterization of this query result
            */
            public getParameterization(): Parameterization;

            /**
                * Get property holding the totaled property list
            */
            public getTotaledPropertiesListProperty(): any;

        }


        /**
        
        */
        class QueryResultRequest {

            /**
                * Create a request object for interaction with a query result.
            */
            public constructor(oQueryResult: QueryResult, oParameterizationRequest?: ParameterizationRequest);


            /**
                * Add one or more dimensions to the aggregation level
            */
            public addToAggregationLevel(aDimensionName: any): any;

            /**
                * Get the names of the dimensions included in the aggregation level
            */
            public getAggregationLevel(): any[];

            /**
                * Get details about a dimensions included in the aggregation level
            */
            public getAggregationLevelDetails(sDImensionName: any): any;

            /**
                * Get the filter expression for this request.
             * 
             * Expressions are represented by separate objects. If none exists so far, a new expression object gets created.
            */
            public getFilterExpression(): FilterExpression;

            /**
                * Get the names of the measures included in the query result request
            */
            public getMeasureNames(): any[];

            /**
                * Retrieves the current parametrization request
            */
            public getParameterizationRequest(): ParameterizationRequest;

            /**
                * Get the description of the query result on which this request operates on
            */
            public getQueryResult(): QueryResult;

            /**
                * Returns the current page boundaries as object with properties `start` and `end`. If the end of the page is unbounded, `end` is null.
            */
            public getResultPageBoundaries(): any;

            /**
                * Get the sort expression for this request.
             * 
             * Expressions are represented by separate objects. If none exists so far, a new expression object gets created.
            */
            public getSortExpression(): SortExpression;

            /**
                * Get the value of a query option for the OData request URI corresponding to this request.
            */
            public getURIQueryOptionValue(sQueryOptionName: string): string;

            /**
                * Get the URI to locate the entity set for the query result.
            */
            public getURIToQueryResultEntitySet(sServiceRootURI: string): string;

            /**
                * Get the unescaped URI to fetch the query result.
            */
            public getURIToQueryResultEntries(sServiceRootURI: string, sResourcePath: string): string;

            /**
                * Specify which dimension components shall be included in the query result. The settings get applied to the currently defined aggregation level.
            */
            public includeDimensionKeyTextAttributes(sDimensionName: string, bIncludeKey: boolean, bIncludeText: boolean, aAttributeName: any): any;

            /**
                * Specify which measure components shall be included in the query result. The settings get applied to the currently set measures.
            */
            public includeMeasureRawFormattedValueUnit(sMeasureName: string, bIncludeRawValue: boolean, bIncludeFormattedValue: boolean, bIncludeUnit: boolean): any;

            /**
                * Remove one or more dimensions from the aggregation level. The method also removed a potential sort expression on the dimension.
            */
            public removeFromAggregationLevel(aDimensionName: any): any;

            /**
                * Set the aggregation level for the query result request. By default, the query result will include the properties holding the keys of the given dimensions. This setting can be changed using includeDimensionKeyTextAttributes.
            */
            public setAggregationLevel(aDimensionName: any): any;

            /**
                * Set the filter expression for this request.
             * 
             * Expressions are represented by separate objects. Calling this method replaces the filter object maintained by this request.
            */
            public setFilterExpression(oFilter: FilterExpression): any;

            /**
                * Set the measures to be included in the query result request. By default, the query result will include the properties holding the raw values of the given measures. This setting can be changed using includeMeasureRawFormattedValueUnit.
            */
            public setMeasures(aMeasureName: any): any;

            /**
                * Set the parameterization request required for interactions with the query result of parameterized queries. This method provides an alternative way to assign a parameterization request to a query result request.
            */
            public setParameterizationRequest(oParameterizationRequest: any): any;

            /**
                * Set further options to be applied for the OData request to fetch the query result
            */
            public setRequestOptions(bIncludeEntityKey: boolean, bIncludeCount: boolean, bReturnNoEntities: boolean): any;

            /**
                * Set the resource path to be considered for the OData request URI of this query request object. This method provides an alternative way to assign a path comprising a parameterization. If a path is provided, it overwrites any parameterization object that might have been specified separately.
            */
            public setResourcePath(sResourcePath: string): any;

            /**
                * Specify that only a page of the query result shall be returned. A page is described by its boundaries, that are row numbers for the first and last rows in the query result to be returned.
            */
            public setResultPageBoundaries(start: number, end: number): any;

            /**
                * Set the sort expression for this request.
             * 
             * Expressions are represented by separate objects. Calling this method replaces the sort object maintained by this request.
            */
            public setSortExpression(oSorter: SortExpression): any;

        }


        /**
        
        */
        class RecursiveHierarchy {

            /**
                * Create a representation of a recursive hierarchy defined on one multiple properties in an OData entity type query. Do not create your own instances.
            */
            public constructor(oEntityType: EntityType, oNodeIDProperty: any, oParentNodeIDProperty: any, oNodeLevelProperty: any, oNodeValueProperty: any);


            /**
                * Get the property holding the node ID of the hierarchy node
            */
            public getNodeIDProperty(): any;

            /**
                * Get the property holding the level of the hierarchy node
            */
            public getNodeLevelProperty(): any;

            /**
                * Get the property holding the value that is structurally organized by the hierarchy
            */
            public getNodeValueProperty(): any;

            /**
                * Get the property holding the parent node ID of the hierarchy node
            */
            public getParentNodeIDProperty(): any;

            /**
                * Get indicator if this is a leveled hierarchy
            */
            public isLeveledHierarchy(): boolean;

            /**
                * Get indicator if this is a recursive hierarchy
            */
            public isRecursiveHierarchy(): boolean;

        }


        /**
        
        */
        class SortExpression {

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
            public getExpressionAsUI5Sorter(): sap.ui.model.Sorter;

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

        /** 
    * Sort order of a property. 
    */
        enum SortOrder {
            Ascending = "Ascending",
            Descending = "Descending",
        }


    }
}
