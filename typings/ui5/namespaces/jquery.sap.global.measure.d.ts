declare namespace jQuery.sap.measure {

    // Methods
    /**
        * Adds a performance measurement with all data This is useful to add external measurements (e.g. from a backend) to the common measurement UI
        */
    export function add(sId: string, sInfo: string, iStart: number, iEnd: number, iTime: number, iDuration: number, aCategories?: string | any[]): any;/**
    * Starts an average performance measure. The duration of this measure is an avarage of durations measured for each call. Optionally a category or list of categories can be passed to allow filtering of measurements.
    */
    export function average(sId: string, sInfo: string, aCategories?: string | any[]): any;/**
    * Clears all performance measurements
    */
    export function clear(): any;/**
    * Clears all interaction measurements
    */
    export function clearInteractionMeasurements(): any;/**
    * Clears all request timings safely
    */
    export function clearRequestTimings(): any;/**
    * Ends a performance measure
    */
    export function end(sId: string): any;/**
    * End an interaction measurements
    */
    export function endInteraction(bForce: boolean): any;/**
    * Gets all interaction measurements for which a provided filter function returns a truthy value. To filter for certain categories of measurements a fnFilter can be implemented like this ` function(oInteractionMeasurement) { return oInteractionMeasurement.duration > 0 }`
    */
    export function filterInteractionMeasurements(fnFilter: Function): any[];/**
    * Gets all performance measurements where a provided filter function returns a truthy value. If neither a filter function nor a category is provided an empty array is returned. To filter for certain properties of measurements a fnFilter can be implemented like this ` function(oMeasurement) { return oMeasurement.duration > 50; }`
    */
    export function filterMeasurements(fnFilter?: Function, bCompleted?: boolean | any, aCategories?: any[]): any;/**
    * Gets the current state of the perfomance measurement functionality
    */
    export function getActive(): boolean;/**
    * Gets all interaction measurements
    */
    export function getAllInteractionMeasurements(bFinalize: boolean): any[];/**
    * Gets all performance measurements
    */
    export function getAllMeasurements(bCompleted?: boolean): any[];/**
    * Gets a performance measure
    */
    export function getMeasurement(sId: string): any;/**
    * Gets the current request timings array for type 'resource' safely
    */
    export function getRequestTimings(): any[];/**
    * Pauses a performance measure
    */
    export function pause(sId: string): any;/**
    * Registers an average measurement for a given objects method
    */
    export function registerMethod(sId: string, oObject: any, sMethod: string, aCategories?: any[]): boolean;/**
    * Removes a performance measure
    */
    export function remove(sId: string): any;/**
    * Resumes a performance measure
    */
    export function resume(sId: string): any;/**
    * Activates or deactivates the performance measure functionality Optionally a category or list of categories can be passed to restrict measurements to certain categories like "javascript", "require", "xmlhttprequest", "render"
    */
    export function setActive(bOn: boolean, aCategories: string | any[]): boolean;/**
    * Sets the request buffer size for the measurement safely
    */
    export function setRequestBufferSize(iSize: number): any;/**
    * Starts a performance measure. Optionally a category or list of categories can be passed to allow filtering of measurements.
    */
    export function start(sId: string, sInfo: string, aCategories?: string | any[]): any;/**
    * Start an interaction measurements
    */
    export function startInteraction(sType: string, oSrcElement: any): any;/**
    * Unregisters all average measurements
    */
    export function unregisterAllMethods(): any;/**
    * Unregisters an average measurement for a given objects method
    */
    export function unregisterMethod(sId: string, oObject: any, sMethod: string): boolean;
}