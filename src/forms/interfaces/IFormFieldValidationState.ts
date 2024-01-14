import { EnumMessageType } from '../enums/EnumMessageType';
import IValidationMessageCollection from './IValidationMessageCollection';

export default interface IFormFieldValidationState {
	hasBeenValidated: boolean;
	isValid: boolean;	
	fieldTitle: string;
	transactionId: string;
	validationMessages: IValidationMessageCollection;
	validationMessage: string;
	addMessage(messageType: EnumMessageType, message: string): void;
}
