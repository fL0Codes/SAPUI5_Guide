sap.ui.define([
	"sap/ui/base/Object",
	"sap/ui/core/message/Message",
	"sap/ui/core/MessageType",
	"sap/ui/core/ValueState",
	"sap/base/Log"
], function (Object, Message, MessageType, ValueState, Log) {
	"use strict";

	return Object.extend("de.mindsquare.utils.Validator", {

		/**
		 * Constructor for validator object 
		 * 
		 * @param {(sap.base.i18n.ResourceBundle)} oResourceBundle - The control or element to be validated.
		 */

		constructor: function (oResourceBundle = null) {
			// Call super constructor of parent class
			Object.call(this);

			if (oResourceBundle) {
				this.oResourceBundle = oResourceBundle;
			}
		},

		// Basic object fields
		_isValid: false,
		_isValidationPerformed: false,

		// All possible aggregations that should be included in validation
		_aPossibleAggregations: [
			"items",
			"content",
			"pages",
			"form",
			"formContainers",
			"formElements",
			"fields",
			"sections",
			"subSections",
			"_grid",
			"cells",
			"_page"
		],

		_aValidateProperties: ["value", "selectedKey", "text"],

		/**
		 * Main function to validate control data 
		 * 
		 * @param {(sap.ui.core.Control|sap.ui.layout.form.FormContainer|sap.ui.layout.form.FormElement)} oControl - Control to be validated
		 */

		validateControl: function (oControl) {
			this._isValid = true;
			sap.ui.getCore().getMessageManager().removeAllMessages();
			this._validate(oControl);
			return this.isValid();
		},

		/**
		 * Returns validation status
		 * 
		 * @return {bool} - Overall validation status of Validator
		 */

		isValid: function () {
			return this._isValidationPerformed && this._isValid;
		},

		/**
		 * Recursively validates the given oControl and all its aggregations
		 *
		 * @param {(sap.ui.core.Control|sap.ui.layout.form.FormContainer|sap.ui.layout.form.FormElement)} oControl - The control or element to be validated
		 */

		_validate: function (oControl) {
			let i;
			let isValidatedControl = true;
			let isValid = true;

			// Only validate controls and elements which have a 'visible' property and are visible
			if (!((
						oControl instanceof sap.ui.core.Control ||
						oControl instanceof sap.ui.layout.form.FormContainer ||
						oControl instanceof sap.ui.layout.form.FormElement ||
						oControl instanceof sap.m.IconTabFilter) &&
					oControl.getVisible()
				)) {
				return;
			}

			// Check if the control is required
			if (
				oControl.getRequired &&
				oControl.getRequired() === true &&
				oControl.getEnabled &&
				oControl.getEnabled() === true
			) {
				// Control required
				isValid = this._validateRequired(oControl);
			} else if (
				(i = this._hasType(oControl)) !== -1 &&
				oControl.getEnabled &&
				oControl.getEnabled() === true
			) {
				// Control constraints
				isValid = this._validateConstraint(oControl, i);
			} else if (
				oControl.getValueState &&
				oControl.getValueState() === ValueState.Error
			) {
				// Control custom validation
				isValid = false;
				this._setValueState(oControl, ValueState.Error, "Wrong input");
			} else {
				isValidatedControl = false;
			}

			if (!isValid) {
				this._isValid = false;
				this._addMessage(oControl);
			}

			// if the control could not be validated, it may have aggregations
			if (!isValidatedControl) {
				this._recursiveCall(oControl, this._validate);
			}
			this._isValidationPerformed = true;
		},

		/**
		 * Check control for any properties worth validating
		 * 
		 * @param {(sap.ui.core.Control|sap.ui.layout.form.FormContainer|sap.ui.layout.form.FormElement)} oControl - Required control, that should be validated
		 */

		_validateRequired: function (oControl) {
			let isValid = true;
			let sMessage;

			for (let i = 0; i < this._aValidateProperties.length; i += 1) {
				try {
					oControl.getBinding(this._aValidateProperties[i]);
					let oExternalValue = oControl.getProperty(
						this._aValidateProperties[i]
					);

					if (!oExternalValue || oExternalValue === "") { // Input fields
						if (this.oResourceBundle) {
							sMessage = this.oResourceBundle.getText("validator_input_required");
						} else {
							sMessage = "Please fill in this mandatoy field!";
						}
						this._setValueState(oControl, ValueState.Error, sMessage);
						isValid = false;

					} else if ( // Selects & ComboBoxes 
						oControl.getAggregation("picker") &&
						oControl.getProperty("selectedKey").length === 0
					) {

						if (this.oResourceBundle) {
							sMessage = this.oResourceBundle.getText("validator_select_required");
						} else {
							sMessage = "Please choose an entry!";
						}

						this._setValueState(oControl, ValueState.Error, sMessage);
						isValid = false;
					} else {
						oControl.setValueState(ValueState.None);
						isValid = true;
						break;
					}
				} catch (ex) {
					// Validation failes somehow, log error to console
					// Log.error(ex);
				}
			}
			return isValid;
		},

		/**
		 * Check the contraints of the control
		 *
		 * @param {(sap.ui.core.Control|sap.ui.layout.form.FormContainer|sap.ui.layout.form.FormElement)} oControl - The control or element to be validated.
		 * @param {int} i - The index of the property
		 * @return {bool} this._isValid - If the property is valid
		 */
		_validateConstraint: function (oControl, i) {
			let isValid = true;
			let editable;

			try {
				editable = oControl.getProperty("editable");
			} catch (ex) {
				editable = true;
			}

			if (editable) {
				try {
					let oControlBinding = oControl.getBinding(
						this._aValidateProperties[i]
					);
					let oExternalValue = oControl.getProperty(
						this._aValidateProperties[i]
					);
					let oInternalValue = oControlBinding
						.getType()
						.parseValue(oExternalValue, oControlBinding.sInternalType);
					oControlBinding.getType().validateValue(oInternalValue);
					oControl.setValueState(ValueState.None);
				} catch (ex) {
					// Catch any validation error
					isValid = false;
					this._setValueState(oControl, ValueState.Error, ex.message);
				}
			}
			return isValid;
		},

		/**
		 * Recursively calls the function on all the children of the aggregation
		 *
		 * @param {(sap.ui.core.Control|sap.ui.layout.form.FormContainer|sap.ui.layout.form.FormElement)} oControl - The control or element to be validated.
		 * @param {function} fFunction - Function to be called recursively
		 */
		_recursiveCall: function (oControl, fFunction) {
			for (var i = 0; i < this._aPossibleAggregations.length; i += 1) {
				var aControlAggregation = oControl.getAggregation(
					this._aPossibleAggregations[i]
				);

				if (!aControlAggregation) {
					continue;
				}

				// Based on aggregation we have to differentiate between Array and ManagegObject
				if (aControlAggregation instanceof Array) {
					for (var j = 0; j < aControlAggregation.length; j += 1) {
						fFunction.call(this, aControlAggregation[j]);
					}
				} else {
					fFunction.call(this, aControlAggregation);
				}
			}
		},

		/**
		 * Function for recursive call to clear set value state of all controls
		 *
		 * @param {(sap.ui.core.Control|sap.ui.layout.form.FormContainer|sap.ui.layout.form.FormElement)} oControl - The control or element to be validated.
		 */

		clearValueState: function (oControl) {
			if (!oControl) {
				return;
			}

			if (oControl.setValueState) {
				oControl.setValueState(ValueState.None);
			}

			this._recursiveCall(oControl, this.clearValueState);
		},

		/**
		 * Set ValueState and ValueStateText of the control
		 *
		 * @param {sap.ui.core.ValueState} eValueState - The ValueState to be set
		 * @param {string} sText - The ValueStateText to be set
		 */

		_setValueState: function (oControl, eValueState, sText) {
			oControl.setValueState(eValueState);

			if (oControl.getValueStateText && !oControl.getValueStateText()) {
				oControl.setValueStateText(sText);
			}
		},

		/**
		 * Check if the control has a data type, then returns the index of the property to validate
		 *
		 * @param {(sap.ui.core.Control|sap.ui.layout.form.FormContainer|sap.ui.layout.form.FormElement)} oControl - The control or element to be validated
		 * @return {int} i - The index of the property to validate
		 */
		_hasType: function (oControl) {
			// check if a data type exists (which may have validation constraints)
			for (var i = 0; i < this._aValidateProperties.length; i += 1) {
				if (
					oControl.getBinding(this._aValidateProperties[i]) &&
					oControl.getBinding(this._aValidateProperties[i]).getType()
				) {
					return i;
				}
			}
			return -1;
		},

		/**
		 * Add the message to the MessageManager
		 *
		 * @param {(sap.ui.core.Control|sap.ui.layout.form.FormContainer|sap.ui.layout.form.FormElement)} oControl - Control for which error message will be set
		 * @param {string} sMessage - Customize the message
		 */
		_addMessage: function (oControl, sMessage) {
			let sLabel,
				eMessageType = MessageType.Error;

			if (sMessage === undefined) {
				sMessage = "Wrong input"; // Default message
			}

			switch (oControl.getMetadata().getName()) {
			case "sap.m.CheckBox":
				sLabel = oControl.getParent().getLabel();
				break;
			case "sap.m.Input":
				sLabel = oControl.getParent().getLabel();
				break;
			case "sap.m.Select":
				sLabel = oControl.getParent().getLabel();
				break;
			case "sap.m.ComboBox":
				sLabel = oControl.getParent().getLabel();
				break;
			default:
				sLabel = oControl.getParent().getLabel();
				break;
			}

			if (oControl.getValueState) {
				eMessageType = this._convertValueStateToMessageType(oControl.getValueState());
			}

			sap.ui.getCore().getMessageManager().addMessages(
				new Message({
					message: oControl.getValueStateText ? oControl.getValueStateText() : sMessage, // Get Message from ValueStateText if available
					type: eMessageType,
					additionalText: sLabel // Get label from the form element
				})
			);
		},

		/**
		 * Return the MessageType based on the ValueState
		 *
		 * @param {sap.ui.core.ValueState} eValueState
		 * @return {sap.ui.core.MessageType} eMessageType
		 */
		_convertValueStateToMessageType: function (eValueState) {
			let eMessageType;

			switch (eValueState) {
			case ValueState.Error:
				eMessageType = MessageType.Error;
				break;
			case ValueState.Information:
				eMessageType = MessageType.Information;
				break;
			case ValueState.None:
				eMessageType = MessageType.None;
				break;
			case ValueState.Success:
				eMessageType = MessageType.Success;
				break;
			case ValueState.Warning:
				eMessageType = MessageType.Warning;
				break;
			default:
				eMessageType = MessageType.Error;
			}

			return eMessageType;
		}

	});
});