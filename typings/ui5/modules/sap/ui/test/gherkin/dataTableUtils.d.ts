declare module "sap/ui/test/gherkin/dataTableUtils" {

    export = dataTableUtils;

    namespace dataTableUtils {

        // Methods
        /**
            * Takes the inputed 2D array "aData" and returns an equivalent object. Each row of data is expected to be a property-value pair. To create nested objects, add extra columns to the data. E.g. `[
         *    ["Name", "Alice"],
         *    ["Mass", "135 lbs"],
         *    ["Telephone Number", "Home", "123-456-7890"],
         *    ["Telephone Number", "Work", "123-456-0987"]
         *  ]` For each data row, the right-most element becomes a property value, and everything else is a property name. The property names get normalized according to the strategy defined by the parameter "vNorm". E.g. using camelCase strategy `{
         *     name: "Alice",
         *     mass: "135 lbs",
         *     telephoneNumber: {
         *       home: "123-456-7890",
         *       work: "123-456-0987"
         *     }
         *   }`
            */
        export function toObject(aData: any[], vNorm?: string | Function): any;/**
    * Takes the inputed 2D array "aData" and returns an equivalent array of objects. The data is expected to have a header row, with each subsequent row being an entity, and each column being a property of that entity. E.g. `[
 *     ["Their Name",  "Their Age"],
 *     ["Alice",       "16"],
 *     ["Bob",         "22"]
 *   ]`
 * 
 * The data's column headers become the returned objects' property names. The property names get normalized according to the strategy defined by the parameter "vNorm". E.g. using hyphenation strategy this is returned: `[
 *     {their-name: "Alice", their-age: "16"},
 *     {their-name: "Bob", their-age: "22"}
 *   ]`
    */
        export function toTable(aData: any[], vNorm?: string | Function): any[];
    }

    namespace dataTableUtils {

        namespace normalization {

            // Methods
            /**
                * For example: "First Name" -> "firstName"
                */
            export function camelCase(sString: string): string;/**
    * For example: "First Name" -> "first-name"
    */
            export function hyphenated(sString: string): string;/**
    * For example: "First Name" -> "First Name"
    */
            export function none(sString: string): string;/**
    * For example: "first name" -> "FirstName"
    */
            export function pascalCase(sString: string): string;/**
    * For example: "first name" -> "First Name"
    */
            export function titleCase(sString: string): string;
        }

    }
}
