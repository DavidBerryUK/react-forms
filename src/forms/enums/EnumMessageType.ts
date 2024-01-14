// EnumMessageType type messages can be evaluated locally, so a form must not post to the server if the validation fails,
//
// serverSide messages can not be evaluated locally, so they should not prevent posting to the server
export enum EnumMessageType {
    none,
    realtime,
    serverSide
}