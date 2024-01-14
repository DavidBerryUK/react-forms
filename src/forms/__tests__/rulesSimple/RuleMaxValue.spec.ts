import DummyFormSetup from "../testSupport/DummyFormSetup";
import RuleMaxValue from '../../validationRules/simple/RuleMaxValue';

describe('Rule Max Value', () => {
	test('Invalid Number', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleMaxValue(10);

		// Act
		const result = rule.isValid(dummyForm, dummyField, 'ancd');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toEqual('must be a valid number');
	});

	test('Valid Integer Number below range', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleMaxValue(10);

		// Act
		const result = rule.isValid(dummyForm, dummyField, '8');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toEqual('');
	});

	test('Invalid Number above range', () => {
		// Arrange
		const { dummyForm, dummyField } = DummyFormSetup.get();
		const rule = new RuleMaxValue(10);

		// Act
		const result = rule.isValid(dummyForm, dummyField, '100');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toEqual('must be equal or less than 10');
	});
});
