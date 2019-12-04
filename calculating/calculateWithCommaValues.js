"use strict";

/**
 * Function to handle calculation of combination of comma and non comma values properly
 */

let iCalcValue = function () {
    // Read viewdata directly (could also be done with params)
    let oView = this.getView();
    let oModel = oView.getModel();
    let oCtx = oView.getBindingContext();
    let vWklhrAgrd = parseFloat(oView.byId("wklhr_agrd").getValue().replace(",", "."));
    let vWklhrFull = parseFloat(oView.byId("wklhr_full").getValue());
    let vValue;

    if (vWklhrFull < vWklhrAgrd) {
        MessageToast.show(this.i18n.getText("message_wklhrs_calc_error"));
        oView.byId("wklhr_agrd").setValue(vWklhrFull);
        vValue = 100;
    } else {
        vValue = ((vWklhrAgrd / vWklhrFull) * 100).toFixed(2);
    }

    oModel.setProperty("EmpLvl", vValue, oCtx);

    // Value could be returned as well
    //return vValue;
}