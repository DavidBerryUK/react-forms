import DummyFormSetup from "../testSupport/DummyFormSetup";
import RuleConditionIsPopulated from "../../validationRules/simple/RuleConditionIsPopulated";


describe('Populated', () => {
	test('empty string', () => {
		// Arrange
		const rule = new RuleConditionIsPopulated();
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toEqual('must be populated');
	});

	test('single character', () => {
		// Arrange
		const rule = new RuleConditionIsPopulated();
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, 'a');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toEqual('');
	});
});
