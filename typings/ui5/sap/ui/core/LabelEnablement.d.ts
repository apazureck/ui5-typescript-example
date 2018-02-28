declare module "sap/ui/core/LabelEnablement" {

    import Element from "sap/ui/core/Element";



    // Methods
    /**
        * Returns an array of IDs of the labels referencing the given element.
        */
    export function getReferencingLabels(oElement: Element): any[];/**
    * Returns `true` when the given control is required (property 'required') or one of its referencing labels, `false` otherwise.
    */
    export function isRequired(oElement: Element): boolean;
}