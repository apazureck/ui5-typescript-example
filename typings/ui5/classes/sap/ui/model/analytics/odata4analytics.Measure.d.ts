declare module 'sap/ui/model/analytics/odata4analytics' {



    export interface IMeasureSettings {
    }

    /**
    
    */
    export class Measure {

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
}