declare module "sap/m/routing/TargetHandler" {

    export = TargetHandler;




    class TargetHandler {

        /**
            * Instantiates a TargetHandler, a class used for closing dialogs and showing transitions in NavContainers when targets are displayed.
         *  ** You should not create an own instance of this class. ** It will be created when using {@link sap.m.routing.Router} or {@link sap.m.routing.Targets}. You may use the {@link #setCloseDialogs} function to specify if dialogs should be closed on displaying other views.
        */
        public constructor(closeDialogs: boolean);


        /**
            * Creates a new subclass of class sap.m.routing.TargetHandler with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets if a navigation should close dialogs
        */
        public getCloseDialogs(): boolean;

        /**
            * Returns a metadata object for class sap.m.routing.TargetHandler.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Sets if a navigation should close dialogs
        */
        public setCloseDialogs(bCloseDialogs: boolean): this;

    }


}
