import DummyFormSetup from "../testSupport/DummyFormSetup";
import RuleEmpty from '../../validationRules/simple/RuleEmpty';

describe('Empty', () => {
	test('pass - rule is empty', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleEmpty();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toBe('');
	});

	test('fail - characters exist', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleEmpty();

		// Act
		const result = rule.isValid(dummyForm, dummyField, 'xxx');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toBe('must be empty');
	});
});
