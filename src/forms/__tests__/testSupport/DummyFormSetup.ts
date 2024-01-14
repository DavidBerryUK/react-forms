import FormInstance from '../../models/FormInstance';
import DummySchema from './DummySchema';

export default class DummyFormSetup {
	static get() {
		const dummySchema = new DummySchema();
		const dummyForm = new FormInstance(dummySchema);
		const dummyField = dummyForm.getField(dummySchema.fields.dummyField, null)!;
		return {
			dummySchema,
			dummyForm,
			dummyField,
		};
	}
}
