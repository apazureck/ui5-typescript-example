declare namespace jQuery {

    /**
    
    */
    export class Event {


        /**
            * Constructor for a jQuery.Event object.
         *  See "http://www.jquery.com" and "http://api.jquery.com/category/events/event-object/".
        */
        public constructor();


        /**
            * Returns OffsetX of Event. In jQuery there is a bug. In IE the value is in offsetX, in FF in layerX
        */
        public getOffsetX(): number;

        /**
            * Returns OffsetY of Event. In jQuery there is a bug. in IE the value is in offsetY, in FF in layerY.
        */
        public getOffsetY(): number;

        /**
            * Returns an array of names (as strings) identifying {@link jQuery.sap.PseudoEvents} that are fulfilled by this very Event instance.
        */
        public getPseudoTypes(): any[];

        /**
            * Checks whether this instance of {@link jQuery.Event} is of the given `sType` pseudo type.
        */
        public isPseudoType(sType: string): boolean;

    }
}