sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {

    "use strict";

    return Controller.extend("de.hcm.axelspringer.PA.controller.Master", {

        // General method to apply filters
        onApplyFilter: function () {
            // Read fields which are required for filtering
            let sQueryString = this.getView().byId("search_field").getValue();
            let bCheckBoxSelected = this.getView().byId("check_active").getSelected();

            // Get list element and its binding
            let oList = this.byId("masterList");
            let oBinding = oList.getBinding("items");
            
            // Now build the filter object which should be applied
            let aFilters = new sap.ui.model.Filter({
                filters: [
                    this.buildFiltersForSearch(sQueryString),
                    this.buildFiltersActiveRequests(bCheckBoxSelected)
                ],
                // Propertie says that filters from above should be used with "AND"
                and: true
            });

            // In case one of the above filters is empty it must be removed so we still get values back after filtering
            if (sQueryString.length < 1) {
                aFilters.aFilters.shift();
            } else if (!bCheckBoxSelected) {
                aFilters.aFilters.pop();
            }

            // Apply filters to binding
            oBinding.filter(aFilters, "Application");
        },

        buildFiltersForSearch: function (sQueryString) {
            let aSearchFilter = new sap.ui.model.Filter({
                filters: [],
                and: false
            });

            if (sQueryString.length >= 1) {
                // Define the properties which should be considered for search term
                let aFilterProperties = ["Title", "StatusLong", "ProcrName"];

                aFilterProperties.forEach((property) => {
                    aSearchFilter.aFilters.push(...this.genericSearchFilter(property, sQueryString));
                });
            }

            return aSearchFilter;
        },

        genericSearchFilter: function (sProperty, sQueryString) {
            let aFilters = [];
            let filter;

            filter = new sap.ui.model.Filter(sProperty, FilterOperator.Contains, sQueryString);
            aFilters.push(filter);

            filter = new sap.ui.model.Filter(sProperty, FilterOperator.Contains, sQueryString.toLowerCase());
            aFilters.push(filter);

            filter = new sap.ui.model.Filter(sProperty, FilterOperator.Contains, sQueryString.toUpperCase());
            aFilters.push(filter);

            filter = new sap.ui.model.Filter(sProperty, FilterOperator.Contains, sQueryString[0].toUpperCase() + sQueryString.substr(1).toLowerCase());
            aFilters.push(filter);

            return aFilters;

        },

        buildFiltersActiveRequests: function (bCheckboxSelected) {
            let aActiveFilter = new sap.ui.model.Filter({
                filters: [],
                and: true
            });

            if (bCheckboxSelected) {
                let filter;

                filter = new sap.ui.model.Filter("ProcessId", sap.ui.model.FilterOperator.NotContains, "PS_ORDER_1");
                aActiveFilter.aFilters.push(filter);

                filter = new sap.ui.model.Filter("ProcessId", sap.ui.model.FilterOperator.NotContains, "PS_ORDER_2");
                aActiveFilter.aFilters.push(filter);

                filter = new sap.ui.model.Filter("ProcessId", sap.ui.model.FilterOperator.NotContains, "RC_RECR_1");
                aActiveFilter.aFilters.push(filter);

                filter = new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.NotContains, "REJECTED");
                aActiveFilter.aFilters.push(filter);

                filter = new sap.ui.model.Filter("IsProcessor", sap.ui.model.FilterOperator.EQ, true);
                aActiveFilter.aFilters.push(filter);
            }
            return aActiveFilter;
        },

        onListItemPressed: function (oEvent) {
            this.getView().getModel().resetChanges();
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            var sPath = oEvent.getSource().getSelectedItem().getBindingContext().getPath().substring(11);
            var sProcessId = oEvent.getSource().getSelectedItem().getBindingContext().getObject().ProcessId;

            if (sProcessId === "RC_RECR_1" || sProcessId === "PS_ORDER_1" || sProcessId === "PS_ORDER_2") {
                oRouter.navTo("RecruitingList", {
                    path: sPath
                });
            } else {
                oRouter.navTo("Detail", {
                    path: sPath
                });
            }
        }
    });

});