import EnumMessageType from "../../enums/EnumMessageType";

export default interface IValidationMessage {
  messageType: EnumMessageType;
  message: string;
}
