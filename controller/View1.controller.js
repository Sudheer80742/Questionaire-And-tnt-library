sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/comp/smartform/SmartForm",
    "sap/ui/comp/smartform/Group",
    "sap/ui/comp/smartform/GroupElement",
    "sap/ui/comp/smartfield/SmartField",
	"sap/ui/model/json/JSONModel"
], (Controller,
	SmartForm,
	Group,
	GroupElement,
	SmartField,
	JSONModel) => {
    "use strict";

    return Controller.extend("rbx.107.stuexe.controller.View1", {
        onInit() {
            // var oData=new JSONModel({
            //     iKey:'data',
            //     iText:"You are in the home."
            // });
            // this.getView().setModel(oData,"data");

            var oModel = this.getOwnerComponent().getModel();
            // var oVBox = this.byId("store");
            
            // oModel.read("/QuestionResponse", {
            //     success: (oData) => {
            //         oData.results.forEach((ele) => {
            //             var UUIDs = ele.UUID;
            //             var Response = ele.ResponseType; 
            //             var oSmartForm = new SmartForm({
            //                 editable: true,
            //                 visible: true
            //             });

                        
            //             var oSmartField;

            //             switch (Response) {
            //                 case 'V':
            //                     oSmartField = new SmartField({
            //                         value: "{Response}",
            //                         textLabel: "{Question}",
            //                         editable: true
            //                     });
            //                     break;
            //                 case 't':
            //                     oSmartField = new SmartField({
            //                         value: "{ResTime}",
            //                         textLabel: "{Question}",
            //                         editable: true
            //                     });
            //                     break;
            //                 case 'D':
            //                     oSmartField = new SmartField({
            //                         value: "{Date1}",
            //                         textLabel: "{Question}",
            //                         editable: true
            //                     });
            //                     break;
            //                 case 'F':
            //                     oSmartField = new SmartField({
            //                         value: "{Response}",
            //                         textLabel: "{Question}",
            //                         showValueHelp: false,
            //                         editable: true
            //                     });
            //                     break;
            //                 default:
            //                     oSmartField = new SmartField({
            //                         value: "{Response}",
            //                         textLabel: "{Question}",
            //                         editable: true
            //                     });
            //             }

            //             var oGroupElement = new GroupElement({
            //                 elements: [oSmartField]
            //             });

                       
            //             var oGroup = new Group({
            //                 groupElements: [oGroupElement]
            //             });

                       
            //             oSmartForm.addGroup(oGroup);

                       
            //             oVBox.addItem(oSmartForm);

                     
            //             oSmartForm.bindElement({
            //                 path: `/QuestionResponse(guid'${UUIDs}')`
            //             });
            //         });
            //     }
            // });

            var oToolPage = this.byId("toolPage");
            oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
            this.selectedKey = "home";

        },
        formatResponse: function (ResponseType) {
            if (ResponseType === 'D') {
                return "{Response}";
            } else {
               
                return "{Date1}";
            }
        },
        onHomeNavigationListItemSelect(oEvent){
            var oKey=oEvent.getSource().getKey();
            switch(oKey){
                case 'home':
                    this.getView().getModel("data").setProperty("/iText", "It is in the Home")
                    break;
                    case 'data':
                        this.getView().getModel("data").setProperty("/iText", "It is in the Data.")
                        break;
            }

        },

        onItemSelect: function (oEvent) {
            var oItem = oEvent.getParameter("item");
            if (oItem.getKey() === 'toggle') {
                this.onSideNavButtonPress();
                this.getView().byId("idSideNav").setSelectedKey(this.selectedKey)

            } else {
                this.selectedKey = oItem.getKey();
                this.byId("pageContainer").to(this.getView().createId(oItem.getKey()));
            }
        },
        onSideNavButtonPress: function () {
            var oToolPage = this.byId("toolPage");
            var bSideExpanded = oToolPage.getSideExpanded();
            this._setToggleButtonTooltip(bSideExpanded);
            oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
        },
        _setToggleButtonTooltip: function (bLarge) {
            // var oToggleButton = this.byId('sideNavigationToggleButton');
            if (bLarge) {
                this.getView().byId('MenuId').setIcon("sap-icon://open-command-field");
                // oToggleButton.setTooltip('Expand');
            } else {
                this.getView().byId('MenuId').setIcon("sap-icon://close-command-field");
                // oToggleButton.setTooltip('Collapse');
            }
        }


    });
});
