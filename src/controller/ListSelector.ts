import BaseObject from "sap/ui/base/Object";
import List from "sap/m/List";
import ListItemBase from "sap/m/ListItemBase";
import Event from "sap/ui/base/Event";
import ListMode from "sap/m/library";

@UI5("typescript.example.ui5app.model.ListSelector")
export default class ListSelector extends BaseObject {
    private _oList: List | undefined = undefined;
    private _fnResolveListHasBeenSet: ((oList: List) => void) | undefined = undefined;
    private _oWhenListHasBeenSet: Promise<List>;
    private oWhenListLoadingIsDone: Promise<{ list: List, firstListitem: ListItemBase }>;

    /**
     * Provides a convenience API for selecting list items. All the functions will wait until the initial load of the a List passed to the instance by the setBoundMasterList
     * function.
     * @class
     * @public
     * @alias typescript.example.ui5app.model.ListSelector
     */
    constructor() {
        super();
        this._oWhenListHasBeenSet = new Promise((fnResolveListHasBeenSet: (oList: List) => void) => {
            this._fnResolveListHasBeenSet = fnResolveListHasBeenSet;
        });
        // This promise needs to be created in the constructor, since it is allowed to
        // invoke selectItem functions before calling setBoundMasterList
        this.oWhenListLoadingIsDone = new Promise((fnResolve, fnReject) => {
            // Used to wait until the setBound masterList function is invoked
            this._oWhenListHasBeenSet
                .then((oList: List) => {
                    oList.getBinding("items").attachEventOnce("dataReceived",
                        (oEvent: Event) => {
                            if (!oEvent.getParameter("data")) {
                                fnReject({
                                    list: oList,
                                    error: true
                                });
                            }
                            var oFirstListItem = oList.getItems()[0];
                            if (oFirstListItem) {
                                // Have to make sure that first list Item is selected
                                // and a select event is triggered. Like that, the corresponding
                                // detail page is loaded automatically
                                fnResolve({
                                    list: oList,
                                    firstListitem: oFirstListItem
                                });
                            } else {
                                // No items in the list
                                fnReject({
                                    list: oList,
                                    error: false
                                });
                            }
                        }
                    );
                });
        });
    }

    /**
     * A bound list should be passed in here. Should be done, before the list has received its initial data from the server.
     * May only be invoked once per ListSelector instance.
     * @param {List} oList The list all the select functions will be invoked on.
     * @public
     */
    public setBoundMasterList(oList: List): void {
        this._oList = oList;
        if (this._fnResolveListHasBeenSet) { this._fnResolveListHasBeenSet(oList); }
    }


    /**
     * Tries to select and scroll to a list item with a matching binding context. If there are no items matching the binding context or the ListMode is none,
     * no selection/scrolling will happen
     * @param {string} sBindingPath the binding path matching the binding path of a list item
     * @public
     */
    public selectAListItem(sBindingPath: string): void {

        this.oWhenListLoadingIsDone.then(
            () => {
                var oList = this._oList,
                    oSelectedItem: ListItemBase | undefined;

                oSelectedItem = oList ? oList.getSelectedItem() : undefined;

                //TODO|openui5: getPath's argument must be optional
                // skip update if the current selection is already matching the object path
                if (oSelectedItem && oSelectedItem.getBindingContext().getPath("") === sBindingPath) {
                    return;
                }

                if (oList) {
                    oList.getItems().some((oItem: ListItemBase) => {
                        //TODO|openui5: getPath's argument must be optional
                        if (oItem.getBindingContext() && oItem.getBindingContext().getPath("") === sBindingPath) {
                            if (oList) { oList.setSelectedItem(oItem, true); }
                            return true;
                        }
                        return false;
                    });
                }
            },
            () => jQuery.sap.log.warning("Could not select the list item with the path" + sBindingPath + " because the list encountered an error or had no items")
        );
    }

    /* =========================================================== */
    /* Convenience Functions for List Selection Change Event       */
    /* =========================================================== */

    /**
     * Attaches a listener and listener function to the ListSelector's bound master list. By using
     * a promise, the listener is added, even if the list is not available when 'attachListSelectionChange'
     * is called.
     * @param {function} fnFunction the function to be executed when the list fires a selection change event
     * @param {function} oListener the listener object
     * @return {typescript.example.ui5app.model.ListSelector} the list selector object for method chaining
     * @public
     */
    public attachListSelectionChange(fnFunction: Function, oListener: any): ListSelector {
        this._oWhenListHasBeenSet.then(() => {
            if (this._oList) { this._oList.attachSelectionChange(fnFunction, oListener); }
        });
        return this;
    }

    /**
     * Detaches a listener and listener function from the ListSelector's bound master list. By using
     * a promise, the listener is removed, even if the list is not available when 'detachListSelectionChange'
     * is called.
     * @param {function} fnFunction the function to be executed when the list fires a selection change event
     * @param {function} oListener the listener object
     * @return {typescript.example.ui5app.model.ListSelector} the list selector object for method chaining
     * @public
     */
    public detachListSelectionChange(fnFunction: Function, oListener: any): ListSelector {
        this._oWhenListHasBeenSet.then(() => {
            if (this._oList) { this._oList.detachSelectionChange(fnFunction as any, oListener); }
        });
        return this;
    }

    /**
     * Removes all selections from master list.
     * Does not trigger 'selectionChange' event on master list, though.
     * @public
     */
    public clearMasterListSelection(): void {
        //use promise to make sure that 'this._oList' is available
        this._oWhenListHasBeenSet.then(() => {
            if (this._oList) { this._oList.removeSelections(true); }
        });
    }
}
