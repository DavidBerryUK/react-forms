export default class FormUtility {
	// create a field key from its name and rowId.
	// name     - name of the field
	// rowId    - optional, if the form has repeating rows then this
	//            will identify the field on the row
	//
	static createKey(name: string, rowId: string | number | undefined | null): string {
		if (rowId === undefined || rowId === null || rowId === '') {
			return name;
		} else {
			return `${name}-${rowId}`;
		}
	}
}
