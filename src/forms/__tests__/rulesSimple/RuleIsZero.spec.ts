import DummyFormSetup from "../testSupport/DummyFormSetup";
import RuleIsZero from '../../validationRules/simple/RuleIsZero';

describe('Rule Is Zero', () => {
	test('Expect Pass - empty string', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleIsZero();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toEqual('');
	});

	test('Expect Pass - 0', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleIsZero();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '0');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toEqual('');
	});

	test('Expect Fail - 1', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleIsZero();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '1');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toEqual('must be zero');
	});

	test('Expect Fail - -1', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleIsZero();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '-1');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toEqual('must be zero');
	});

	test('Expect Fail - invalid number', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleIsZero();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '0.0.1');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toEqual('must be zero');
	});

	test('Expect Fail - Random Word', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleIsZero();

		// Act
		const result = rule.isValid(dummyForm, dummyField, 'Purple');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toEqual('must be zero');
	});
});
