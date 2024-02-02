// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"

],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.ui.core.mvc.MessageToast} MessageToast
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */

    function (Controller, MessageToast, Models, ResourceModel) {
        "use strict";

        return Controller.extend("logaligroup.SAPUI5.controller.App", {

            onInit: function () {
                    // set data model view
                    //this.getView().setModel(Models.createRecipient());

                    //set i18n model on the view
                    //var i18nModel = new ResourceModel({ bundleName : "logaligroup.SAPUI5.i18n.i18n"});
                 // ** this.getView().setModel(i18nModel, "i18n");
            },

            onShowHello: function () {
                //  MessageToast.show("Hello world controller");
                // read propierty from data model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            }
        });

    });