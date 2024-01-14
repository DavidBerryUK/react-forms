import { EnumMessageType } from "../enums/EnumMessageType";
import IValidationMessage from "../interfaces/IValidationMessage";
import IValidationMessageCollection from "../interfaces/IValidationMessageCollection";
import ValidationMessage from './ValidationMessage';

export default class ValidationMessageCollection implements IValidationMessageCollection {
    messages: Array<IValidationMessage>;    

    constructor() {
        this.messages = new Array<IValidationMessage>();
    }

    get countAll() : number {
        return this.messages.length;
    }

    get countOfRealtime() : number {
        return this.messages.filter((item) => item.messageType === EnumMessageType.realtime).length;
    }

    get countOfServerSide() : number {
        return this.messages.filter((item) => item.messageType === EnumMessageType.serverSide).length;
    }

    get asSummary() : string {
        if ( this.messages.length === 0){
            return "";
        }
        let count = 0;
        let msg = "";
        this.messages.forEach((message) => {
            if ( count > 0){
                msg = `${msg} and `;
            }
            count++;
            msg = `${msg}${message.message}`;
        })
        return msg;
    }

    add(messageType: EnumMessageType, message: string ) {
        this.messages.push(new ValidationMessage(messageType, message));
    }

    clear() {
        this.messages = new Array<IValidationMessage>();
    }    
}