declare module "sap/ui/model/json/JSONTreeBinding" {
    import JSONModel from "sap/ui/model/json/JSONModel";

    export = JSONTreeBinding;




    /**
    
    */
    class JSONTreeBinding {

        /**
            
        */
        public constructor(sPath: string, oContext?: any, aFilters?: any[], mParameters?: { arrayNames?: any[], });

        /**
            
        */
        public constructor(oModel: JSONModel, sPath: string, oContext?: any, aFilters?: any[], mParameters?: { arrayNames?: any[], });


    }


}
