sap.ui.define([
	"sap/ui/base/Object",
	"sap/ui/model/Sorter"
], function(BaseObject, Sorter) {
	"use strict";

	return BaseObject.extend("femonitor.model.GroupSortState", {

		/**
		 * Creates sorters and groupers for the master list.
		 * Since grouping also means sorting, this class modifies the viewmodel.
		 * If a user groups by a field, and there is a corresponding sort option, the option will be chosen.
		 * If a user ungroups, the sorting will be reset to the default sorting.
		 * @class
		 * @public
		 * @param {sap.ui.model.json.JSONModel} oViewModel the model of the current view
		 * @param {function} fnGroupFunction the grouping function to be applied
		 * @alias femonitor.model.GroupSortState
		 */
		constructor: function(oViewModel, fnGroupFunction) {
			this._oViewModel = oViewModel;
			this._fnGroupFunction = fnGroupFunction;
		},

		/**
		 * Sorts by Factura, or by Importe
		 *
		 * @param {string} sKey - the key of the field used for grouping
		 * @returns {sap.ui.model.Sorter[]} an array of sorters
		 */
		sort: function(sKey) {
			// var sGroupedBy = this._oViewModel.getProperty("/groupBy");

			// if (sGroupedBy !== "None") {
			// 	// If the list is grouped, remove the grouping since the user wants to sort by something different
			// 	// Grouping only works if the list is primary sorted by the grouping - the first sorten contains a grouper function
			// 	this._oViewModel.setProperty("/groupBy", "None");
			// }

			return [new Sorter(sKey, false)];
		},

		/**
		 * Groups by Importe, or resets the grouping for the key "None"
		 *
		 * @param {string} sKey - the key of the field used for grouping
		 * @returns {sap.ui.model.Sorter[]} an array of sorters
		 */
		group: function(sKey) {
			var aSorters = [];
			switch (sKey) {
				case "Group":

					aSorters.push(
						new Sorter("Group", false,
							this._fnGroupFunction.bind(this))
					);
					aSorters.push(
						new Sorter("index", false,
							this._fnGroupFunction.bind(this))
					);
					break;

			}

			return aSorters;
		}

	});
});