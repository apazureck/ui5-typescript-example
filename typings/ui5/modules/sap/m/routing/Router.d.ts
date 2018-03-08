declare module "sap/m/routing/Router" {
    import TargetHandler from "sap/m/routing/TargetHandler";

    export = Router;




    class Router extends sap.ui.core.routing.Router {

        /**
            * Instantiates a SAPUI5 mobile Router see {@link sap.ui.core.routing.Router} for the constructor arguments The difference to the {@link sap.ui.core.routing.Router} are the properties viewLevel, transition and transitionParameters you can specify in every Route or Target created by this router.
        */
        public constructor(oRoutes?: any | any[], oConfig?: { async?: boolean, }, oOwner?: sap.ui.core.UIComponent, oTargetsConfig?: any);


        /**
            * Creates a new subclass of class sap.m.routing.Router with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.routing.Router.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.m.routing.Router.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the TargetHandler instance.
        */
        public getTargetHandler(): TargetHandler;

    }


}
