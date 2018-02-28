declare namespace sap.ui.core.anySupport {

    // Methods
    /**
        * Appends a generic success, warning or error message to the given tooltip text if the given Element has a property "valueState" with one of these three states.
        */
    export function enrichTooltip(oElement: Element, sTooltipText: string): string;/**
    * Returns a any object based on the given integer value
 * 
 * 0 : any.None 1 : any.Warning 2 : any.Success 3 : any.Error
    */
    export function formatany(iState: number): any;/**
    * Returns a generic success, warning or error message if the given Element has a property "valueState" with one of these three states or the given any represents one of these states.
    */
    export function getAdditionalText(vValue: Element | any): string;
}