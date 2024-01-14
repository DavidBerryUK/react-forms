import { EnumMessageType } from "../enums/EnumMessageType";
import IValidationMessage from "../interfaces/IValidationMessage";

export default class  ValidationMessage implements IValidationMessage {
	messageType: EnumMessageType;
	message: string;	

	constructor(messageType: EnumMessageType,		message: string	) {
		this.messageType = messageType;
		this.message = message;
	}
}
