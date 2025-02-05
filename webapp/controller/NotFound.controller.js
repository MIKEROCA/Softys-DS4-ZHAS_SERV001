sap.ui.define([
		"cmpc/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("cmpc.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);