declare module 'sap/ui/model/analytics/odata4analytics' {



    export interface IRecursiveHierarchySettings {
    }

    /**
    
    */
    export class RecursiveHierarchy {

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
}