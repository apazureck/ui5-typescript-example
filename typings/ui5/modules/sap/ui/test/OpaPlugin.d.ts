declare module "sap/ui/test/OpaPlugin" {

    /**
    
    */
    export default class OpaPlugin {


        /**
            
        */
        public constructor();


        /**
            * Creates a new subclass of class sap.ui.test.OpaPlugin with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets all the controls of a certain type that are currently instantiated. If the control type is omitted, nothing is returned.
        */
        public getAllControls(fnConstructorType?: Function): any[];

        /**
            * Returns a control by its id accepts an object with an ID property the ID can be will check a control type also, if defined  * a single string - function will return the control instance or undefined * an array of strings - function will return an array of found controls or an empty array * a regexp - function will return an array of found controls or an empty array 
        */
        public getControlByGlobalId(oOptions: any): any[];

        /**
            * Gets the constructor function of a certain controlType
        */
        public getControlConstructor(sControlType: string): any | Function;

        /**
            * Gets a control inside of the view (same as calling oView.byId) If no ID is provided, it will return all the controls inside of a view (also nested views and their children).
         *  eg : { id : "foo" } will search globally for a control with the ID foo
         *  eg : { id : "foo" , viewName : "bar" } will search for a control with the ID foo inside the view with the name bar
         *  eg : { viewName : "bar" } will return all the controls inside the view with the name bar
         *  eg : { viewName : "bar", controlType : sap.m.Button } will return all the Buttons inside a view with the name bar
         *  eg : { viewName : "bar", viewNamespace : "baz." } will return all the Controls in the view with the name baz.bar
         * 
        */
        public getControlInView(oOptions: any): sap.ui.core.Element | any[] | any;

        /**
            * Tries to find a control depending on the options provided.
        */
        public getMatchingControls(oOptions?: { viewName?: string, id?: string | any[], visible?: boolean, interactable?: boolean, searchOpenDialogs?: boolean, controlType?: string | Function, }): sap.ui.core.Element | any[] | any;

        /**
            * Returns a metadata object for class sap.ui.test.OpaPlugin.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Returns the view with a specific name - if there are multiple views with that name only the first one is returned.
        */
        public getView(sViewName: string): sap.ui.core.mvc.View;

    }

}
