import DummyFormSetup from "../testSupport/DummyFormSetup";
import RuleMinLength from '../../validationRules/simple/RuleMinLength';

describe('MinLength', () => {
	test('under min length - fail', () => {
		// Arrange
		const rule = new RuleMinLength(5);
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '123');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toBe('must be greater or equal to 5 characters');
	});

	test('empty string - pass as rule is not mandatory', () => {
		// Arrange
		const rule = new RuleMinLength(5);
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '');

		// Assert
		expect(result.pass).toBeTruthy();
	});

	test('over min - pass', () => {
		// Arrange
		const rule = new RuleMinLength(5);
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '1234567890');

		// Assert
		expect(result.pass).toBeTruthy();
	});

	test('equal to max - pass', () => {
		// Arrange
		const rule = new RuleMinLength(5);
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '12345');

		// Assert
		expect(result.pass).toBeTruthy();
	});
});
