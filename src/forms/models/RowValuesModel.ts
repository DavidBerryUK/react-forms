import IRowValuesModel from "../interfaces/IRowValuesModel";

export default class RowValuesModel implements IRowValuesModel {
    rowId: string;
    data: any;

    constructor(rowId: string) {
        this.rowId = rowId;
        this.data = {};
    }
}