declare module "sap/m/StandardTile" {
    import Tile from "sap/m/Tile";
    import { StandardTileType } from "sap/m/library";

    /**
    
    */
    export default class StandardTile extends Tile {


        /**
            * Constructor for a new StandardTile.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control): this;

        /**
            * Creates a new subclass of class sap.m.StandardTile with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Tile.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getActiveIcon activeIcon}.
         * 
         * Defines the active icon of the StandardTile.
        */
        public getActiveIcon(): sap.ui.core.URI;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): any[];

        /**
            * Gets the icon of the `StandardTile` control.
        */
        public getIcon(): any;

        /**
            * Gets current value of property {@link #getIconDensityAware iconDensityAware}.
         * 
         * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
         * 
         * If bandwidth is key for the application, set this value to false.
         * 
         * Default value is `true`.
        */
        public getIconDensityAware(): boolean;

        /**
            * Gets current value of property {@link #getInfo info}.
         * 
         * Defines the description of the StandardTile.
        */
        public getInfo(): string;

        /**
            * Gets current value of property {@link #getInfoState infoState}.
         * 
         * Defines the color of the info text. Possible values are Error, Warning, Success and so on.
         * 
         * Default value is `None`.
        */
        public getInfoState(): sap.ui.core.ValueState;

        /**
            * Returns a metadata object for class sap.m.StandardTile.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Gets current value of property {@link #getNumber number}.
         * 
         * Defines the number field of the StandardTile.
        */
        public getNumber(): string;

        /**
            * Gets current value of property {@link #getNumberUnit numberUnit}.
         * 
         * Defines the number units qualifier of the StandardTile.
        */
        public getNumberUnit(): string;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Defines the title of the StandardTile.
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * Defines the type of the StandardTile.
         * 
         * Default value is `None`.
        */
        public getType(): StandardTileType;

        /**
            * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAllAriaDescribedBy(): any[];

        /**
            * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;

        /**
            * Sets a new value for property {@link #getActiveIcon activeIcon}.
         * 
         * Defines the active icon of the StandardTile.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setActiveIcon(sActiveIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Defines the icon of the StandardTile.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconDensityAware iconDensityAware}.
         * 
         * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
         * 
         * If bandwidth is key for the application, set this value to false.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setIconDensityAware(bIconDensityAware: boolean): this;

        /**
            * Sets a new value for property {@link #getInfo info}.
         * 
         * Defines the description of the StandardTile.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setInfo(sInfo: string): this;

        /**
            * Sets a new value for property {@link #getInfoState infoState}.
         * 
         * Defines the color of the info text. Possible values are Error, Warning, Success and so on.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setInfoState(sInfoState: sap.ui.core.ValueState): this;

        /**
            * Sets a new value for property {@link #getNumber number}.
         * 
         * Defines the number field of the StandardTile.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setNumber(sNumber: string): this;

        /**
            * Sets a new value for property {@link #getNumberUnit numberUnit}.
         * 
         * Defines the number units qualifier of the StandardTile.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setNumberUnit(sNumberUnit: string): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Defines the title of the StandardTile.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * Defines the type of the StandardTile.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setType(sType: StandardTileType): this;

    }

}
