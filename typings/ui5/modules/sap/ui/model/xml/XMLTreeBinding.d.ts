declare module "sap/ui/model/xml/XMLTreeBinding" {
    import XMLModel from "sap/ui/model/xml/XMLModel";

    export = XMLTreeBinding;




    /**
    
    */
    class XMLTreeBinding {

        /**
            
        */
        public constructor(Path: string, oContext?: any, aFilters?: any[], mParameters?: any);

        /**
            
        */
        public constructor(oModel: XMLModel, Path: string, oContext?: any, aFilters?: any[], mParameters?: any);


        /**
            * Return node contexts for the tree
        */
        protected getNodeContexts(oContext: any, iStartIndex: number, iLength: number): any[];

    }


}
