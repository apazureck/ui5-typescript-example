declare module 'sap/ui/model/analytics/odata4analytics' {



    export interface IEntityTypeSettings {
    }

    /**
    
    */
    export class EntityType {

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
}