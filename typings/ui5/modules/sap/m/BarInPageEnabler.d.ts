declare module "sap/m/BarInPageEnabler" {

    /**
    
    */
    export class IBarInPageEnabler {


        /**
            
        */
        public constructor();


        /**
            * Adds the sapMBarChildClass to a control.
        */
        protected addChildClassTo(oControl: sap.ui.core.Control): any;

        /**
            * Renders the tooltip for the given control
        */
        protected renderTooltip(oRM: sap.ui.core.RenderManager, oControl: sap.ui.core.Control): any;

    }

}
