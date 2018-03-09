declare module "sap/ui/model/TreeBindingUtils" {
    /**

*/
    export default TreeBindingUtils;
    namespace TreeBindingUtils {

        // Methods
        /**
            * Merges together oNewSection into a set of other sections (aSections) The array/objects are not modified, the function returns a new section array.
            */
        export function mergeSections(aSections: any[], oNewSection: any): any[];
    }
}
