sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {
		oFacet: {},
		_VariantJSON: [],
		_VariantModel: {},

		init: function(oFacet) {
			//debugger;
			this.oFacet = oFacet;
			var aLists = this.oFacet.getLists();

			for (var i = 0; i < aLists.length; i++) {
				if (aLists[i].getKey() === "hoja" || aLists[i].getKey() === "usuario" ||
				    aLists[i].getKey() === "fecha_crea" || aLists[i].getKey() === "monto" ||
				    aLists[i].getKey() === "moneda" || aLists[i].getKey() === "po_n" ||
				    aLists[i].getKey() === "po_i" || aLists[i].getKey() === "cuenta" ||
				    aLists[i].getKey() === "nombre" || aLists[i].getKey() === "cod"  || 
				    aLists[i].getKey() === "rel_strat" || aLists[i].getKey() === "frgxt") {
					this._VariantJSON.push({
						Key: aLists[i].getKey(),
						Text: aLists[i].getTitle(),
						Selected: false //true
					});
				}

			}

			this._VariantModel = new JSONModel(this._VariantJSON);
			this._VariantModel.setDefaultBindingMode("TwoWay");
		},
		getVariantJSON: function() {
			return this._VariantJSON;
		},
		getVariantModel: function(oModel) {
			return this._VariantModel;

		},
	};
});