declare module "sap/m/routing/Targets" {
    import TargetHandler from "sap/m/routing/TargetHandler";

    export default class Targets extends sap.ui.core.routing.Targets {


        /**
            * Provides a convenient way for placing views into the correct containers of your application. The mobile extension of Targets also handles the triggering of page navigation when the target control is a {@link sap.m.SplitContainer}, a {@link sap.m.NavContainer} or a control which extends one of these. Other controls are also allowed, but the extra parameters viewLevel, transition and transitionParameters are ignored and it will behave like {@link sap.ui.core.routing.Targets}. When a target is displayed, dialogs will be closed. To change this use {@link #getTargetHandler} and {@link sap.m.routing.TargetHandler#setCloseDialogs}.
        */
        public constructor(oOptions: { views: sap.ui.core.routing.Views, config?: any, targets: any, });


        /**
            * Creates a new subclass of class sap.m.routing.Targets with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.routing.Targets.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.m.routing.Targets.
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
