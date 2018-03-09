declare module "sap/ui/test/PageObjectFactory" {

    /**
    
    */
    export default class PageObjectFactory extends sap.ui.base.Object {


        /**
            
        */
        public constructor();


        /**
            * Create a page object configured as arrangement, action and assertion to the Opa.config. Use it to structure your arrangement, action and assertion based on parts of the screen to avoid name clashes and help structuring your tests.
        */
        protected static create(): any;

    }

}
