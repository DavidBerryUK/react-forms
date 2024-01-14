import DummyFormSetup from "../testSupport/DummyFormSetup";
import RuleMinValue from '../../validationRules/simple/RuleMinValue';

describe('Rule Min Value', () => {
	test('Invalid Number', () => {
		// Arrange
		const rule = new RuleMinValue(10);
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, 'ancd');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toEqual('must be a valid number');
	});

	test('Valid Integer Number above range', () => {
		// Arrange
		const rule = new RuleMinValue(10);
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '15');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toEqual('');
	});

	test('Invalid Number below range', () => {
		// Arrange
		const rule = new RuleMinValue(10);
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '9.5');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toEqual('must be equal or greater than 10');
	});
});
