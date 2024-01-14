import DummyFormSetup from "../testSupport/DummyFormSetup";
import RuleIsNonZero from '../../validationRules/simple/RuleIsNonZero';

describe('Rule Is None Zero', () => {
	test('Expect Pass - empty string', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleIsNonZero();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toEqual('');
	});

	test('Expect False - 0', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleIsNonZero();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '0');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toEqual('must be none zero');
	});

	test('Expect Pass - 1', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleIsNonZero();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '1');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toEqual('');
	});

	test('Expect Pass - -1', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleIsNonZero();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '-1');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toEqual('');
	});

	test('Expect Pass - invalid number', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleIsNonZero();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '0.0.1');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toEqual('');
	});

	test('Expect Pass - Random Word', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleIsNonZero();

		// Act
		const result = rule.isValid(dummyForm, dummyField, 'Purple');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toEqual('');
	});
});
