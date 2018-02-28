declare module 'sap/ui/commons/MenuItemBase' {
    import * as base from 'sap/ui/unified/MenuItemBase'

    export interface IMenuItemBaseSettings extends base.IMenuItemBaseSettings {
    }

    /**
    
    */
    export default class MenuItemBase extends
        base.default {

        /**
            * Abstract base class `MenuItemBase` for menu item elements. Please use concrete subclasses.
        */
        public constructor(sId?: string, mSettings?: IMenuItemBaseSettings);


    }
}