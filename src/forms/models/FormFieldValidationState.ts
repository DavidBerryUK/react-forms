import EnumMessageType from "../enums/EnumMessageType";
import IFormFieldValidationState from "../interfaces/form/IFormFieldValidationState";
import IValidationMessageCollection from "../interfaces/messages/IValidationMessageCollection";
import ValidationMessageCollection from "./ValidationMessageCollection";

export default class FormFieldValidationState implements IFormFieldValidationState {
  hasBeenValidated: boolean;
  isValid: boolean;
  fieldTitle: string;
  transactionId: string;
  validationMessages: IValidationMessageCollection;

  constructor(fieldTitle: string) {
    this.fieldTitle = fieldTitle;
    this.isValid = true;
    this.hasBeenValidated = true;
    this.transactionId = "";
    this.validationMessages = new ValidationMessageCollection();
  }

  static get default(): IFormFieldValidationState {
    var model = new FormFieldValidationState("");
    model.hasBeenValidated = false;
    return model;
  }

  get validationMessage(): string {
    if (this.validationMessages.countAll === 0) {
      return "";
    }

    return `${this.fieldTitle} ${this.validationMessages.asSummary}`;
  }

  addMessage(messageType: EnumMessageType, message: string) {
    this.validationMessages.add(messageType, message);
    this.isValid = false;
  }
}
