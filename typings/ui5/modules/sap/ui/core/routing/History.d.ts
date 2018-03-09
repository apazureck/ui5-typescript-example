declare module "sap/ui/core/routing/History" {
    import HashChanger from "sap/ui/core/routing/HashChanger";

    export default class History {


        /**
            * Used to determine the {@link sap.ui.core.routing.HistoryDirection} of the current or a future navigation, done with a {@link sap.ui.core.routing.Router} or {@link sap.ui.core.routing.HashChanger}.
         * 
         * ** ATTENTION: ** this class will not be accurate if someone does hash-replacement without the named classes above If you are manipulating the hash directly this class is not supported anymore.
        */
        public constructor(oHashChanger: HashChanger);


        /**
            * Determines what the navigation direction for a newly given hash would be It will say Unknown if there is a history foo - bar (current history) - foo If you now ask for the direction of the hash "foo" you get Unknown because it might be backwards or forwards. For hash replacements, the history stack will be replaced at this position for the history.
        */
        public getDirection(sNewHash?: string): sap.ui.core.routing.HistoryDirection;

        /**
            
        */
        public static getInstance(): History;

        /**
            * gets the previous hash in the history - if the last direction was Unknown or there was no navigation yet, undefined will be returned
        */
        public getPreviousHash(): string;

    }

}
