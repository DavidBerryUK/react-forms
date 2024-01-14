import DummyFormSetup from "../testSupport/DummyFormSetup";
import RuleMaxLength from '../../validationRules/simple/RuleMaxLength';

describe('MaxLength', () => {
	test('over max length - fail', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleMaxLength(5);

		// Act
		const result = rule.isValid(dummyForm, dummyField, '123456');
		expect(result.message).toBe('must be less or equal to 5 characters');

		// Assert
		expect(result.pass).toBeFalsy();
	});

	test('over max length by a lot- fail', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleMaxLength(10);

		// Act
		const result = rule.isValid(dummyForm, dummyField, '123456789012345');

		// Assert
		expect(result.pass).toBeFalsy();
	});

	test('empty string - pass', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleMaxLength(5);

		// Act
		const result = rule.isValid(dummyForm, dummyField, '');

		// Assert
		expect(result.pass).toBeTruthy();
	});

	test('less than max - pass', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleMaxLength(5);

		// Act
		const result = rule.isValid(dummyForm, dummyField, '123');

		// Assert
		expect(result.pass).toBeTruthy();
	});

	test('equal to max - pass', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleMaxLength(5);

		// Act
		const result = rule.isValid(dummyForm, dummyField, '12345');

		// Assert
		expect(result.pass).toBeTruthy();
	});
});
