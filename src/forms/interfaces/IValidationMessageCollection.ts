import EnumMessageType from "../enums/EnumMessageType";

export default interface IValidationMessageCollection {
  get countAll(): number;
  get countOfRealtime(): number;
  get countOfServerSide(): number;
  get asSummary(): string;
  add(messageType: EnumMessageType, message: string): void;
  clear(): void;
}
