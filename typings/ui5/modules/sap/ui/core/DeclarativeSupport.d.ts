declare module "sap/ui/core/DeclarativeSupport" {

    export = DeclarativeSupport;




    /**
    
    */
    class DeclarativeSupport {

        /**
            
        */
        public constructor();


        /**
            * Enhances the given DOM element by parsing the Control and Elements info and creating the SAPUI5 controls for them.
        */
        public static compile(oElement: any, oView?: sap.ui.core.mvc.HTMLView, isRecursive?: boolean): any;

    }


}
