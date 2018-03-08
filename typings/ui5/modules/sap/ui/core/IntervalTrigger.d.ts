declare module "sap/ui/core/IntervalTrigger" {

    export = IntervalTrigger;




    /**
    
    */
    class IntervalTrigger extends sap.ui.base.Object {

        /**
            * Creates an instance of EventBus.
        */
        public constructor(iInterval: number);


        /**
            * Adds a listener to the list that should be triggered.
        */
        public addListener(fnFunction: Function, oListener?: any): any;

        /**
            * Destructor method for objects.
        */
        public destroy(): any;

        /**
            * Creates a new subclass of class sap.ui.core.IntervalTrigger with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            
        */
        public getInterface(): any | sap.ui.base.Interface;

        /**
            * Returns the public interface of the object.
        */
        public getInterface(): sap.ui.base.Interface;

        /**
            * Returns a metadata object for class sap.ui.core.IntervalTrigger.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Removes corresponding listener from list.
        */
        public removeListener(fnFunction: Function, oListener?: any): any;

        /**
            * Sets the trigger interval. If the value is >0 triggering will start if there are any registered listeners. If the interval is set to <=0 triggering will stop.
        */
        public setInterval(iInterval: number): any;

    }


}
