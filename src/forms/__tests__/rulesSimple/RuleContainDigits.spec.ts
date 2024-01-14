import DummyFormSetup from "../testSupport/DummyFormSetup";
import RuleContainDigits from '../../validationRules/simple/RuleContainDigits';

describe('Rule Contain Digits', () => {
	test('Pass - empty', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleContainDigits(0, 100);
		// Act

		const result = rule.isValid(dummyForm, dummyField, '');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toEqual('');
	});

	test('Fail - must contain 2-4 digits - actual 1', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleContainDigits(2, 4);
		// Act

		const result = rule.isValid(dummyForm, dummyField, '1');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toEqual('must contain at least 2 digits');
	});

	test('Pass - must contain 2-4 digits - actual 2', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleContainDigits(2, 4);
		// Act

		const result = rule.isValid(dummyForm, dummyField, '12');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toEqual('');
	});

	test('Pass - must contain 2-4 digits - actual 3', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleContainDigits(2, 4);
		// Act

		const result = rule.isValid(dummyForm, dummyField, '123');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toEqual('');
	});

	test('Pass - must contain 2-4 digits - actual 4', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleContainDigits(2, 4);
		// Act

		const result = rule.isValid(dummyForm, dummyField, '1234');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toEqual('');
	});

	test('Fail - must contain 2-4 digits - actual 5', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleContainDigits(2, 4);
		// Act

		const result = rule.isValid(dummyForm, dummyField, '12345');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toEqual('must contain no more than 4 digits');
	});

	test('Fail - must contain 1 digits - actual - none', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleContainDigits(1, 1);
		// Act

		const result = rule.isValid(dummyForm, dummyField, 'abc');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toEqual('must contain 1 digit');
	});

	test('Fail - must contain 1-10 digits - actual - none', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleContainDigits(1, 10);
		// Act

		const result = rule.isValid(dummyForm, dummyField, 'abc');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toEqual('must contain at least 1 digit');
	});

	test('Fail - must contain 0-1 digits - actual - 5', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleContainDigits(0, 1);
		// Act

		const result = rule.isValid(dummyForm, dummyField, 'abc12345bdbd');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toEqual('must contain a maximum 1 digit');
	});
});
