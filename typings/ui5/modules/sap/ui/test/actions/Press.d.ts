declare module "sap/ui/test/actions/Press" {
    import Action from "sap/ui/test/actions/Action";

    export = Press;




    class Press extends Action {

        /**
            * The Press action is used to simulate a press interaction on a Control's dom ref. This will work out of the box for most of the controls (even custom controls).
         * 
         * Here is a List of supported controls (some controls will trigger the press on a specific region):
         * 
         *  * sap.m.Button * sap.m.Link * sap.m.StandardListItem * sap.m.IconTabFilter * sap.m.Input - Value help * sap.m.SearchField - Search Button * sap.m.Page - Back Button * sap.m.semantic.FullscreenPage - Back Button * sap.m.semantic.DetailPage - Back Button * sap.m.List - More Button * sap.m.Table - More Button * sap.m.StandardTile * sap.m.ComboBox * sap.m.ObjectIdentifier * sap.ui.comp.smartfilterbar.SmartFilterBar - Go Button 
        */
        public constructor();


        /**
            * Sets focus on given control and triggers a 'tap' event on it (which is internally translated into a 'press' event). Logs an error if control is not visible (i.e. has no dom representation)
        */
        protected executeOn(oControl: sap.ui.core.Control): any;

        /**
            * Checks if the matcher is matching - will get an instance of sap.ui.core.Control as parameter Should be overwritten by subclasses
        */
        protected executeOn(element: sap.ui.core.Control): any;

        /**
            * Creates a new subclass of class sap.ui.test.actions.Press with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.test.actions.Action.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Returns a metadata object for class sap.ui.test.actions.Press.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

    }


}
