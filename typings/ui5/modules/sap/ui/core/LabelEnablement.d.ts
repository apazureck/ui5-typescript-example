declare module "sap/ui/core/LabelEnablement" {
    /**

*/
    export default LabelEnablement;
    namespace LabelEnablement {

        // Methods
        /**
            * Returns an array of IDs of the labels referencing the given element.
            */
        export function getReferencingLabels(oElement: sap.ui.core.Element): any[];/**
    * Returns `true` when the given control is required (property 'required') or one of its referencing labels, `false` otherwise.
    */
        export function isRequired(oElement: sap.ui.core.Element): boolean;
    }
}
