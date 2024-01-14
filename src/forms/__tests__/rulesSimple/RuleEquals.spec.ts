import DummyFormSetup from "../testSupport/DummyFormSetup";
import RuleEquals from '../../validationRules/simple/RuleEquals';

describe('Rule Equals', () => {
	test('Pass - Case Sensitive', () => {
		// Arrange

		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleEquals('Orange', false);

		// Act
		const result = rule.isValid(dummyForm, dummyField, 'Orange');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toEqual('');
	});

	test('Fail - Case Sensitive', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleEquals('Orange', false);

		// Act
		const result = rule.isValid(dummyForm, dummyField, 'orange');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toEqual("must be equal to 'Orange'");
	});

	test('Pass - Case Insensitive - same case', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleEquals('Orange', true);

		// Act
		const result = rule.isValid(dummyForm, dummyField, 'Orange');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toEqual('');
	});

	test('Pass - Case Insensitive - diff case', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleEquals('Orange', true);

		// Act
		const result = rule.isValid(dummyForm, dummyField, 'orange');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toEqual('');
	});
});
