import DummyFormSetup from "../testSupport/DummyFormSetup";
import RuleMinDate from '../../validationRules/simple/RuleMinDate';

describe('Rule Min Date', () => {
	test('Invalid Constant', () => {
		// Arrange
		const rule = new RuleMinDate('orange apples and pears');
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '01/05/1995');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toEqual('MinDate validation rule has invalid constant date of orange apples and pears');
	});

	test('Pass - Date dd/mm/yyyy - equal to constant', () => {
		// Arrange
		const rule = new RuleMinDate('01/05/2000');
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '01/05/2000');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toEqual('');
	});

	test('Pass - Date dd/mm/yyyy - greater than constant', () => {
		// Arrange
		const rule = new RuleMinDate('01/05/2000');
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '02/05/2000');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toEqual('');
	});

	test('Fail - Date dd/mm/yyyy - less than constant', () => {
		// Arrange
		const rule = new RuleMinDate('01/05/2000');
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '25/04/2000');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toEqual('must not be a date before 01/05/2000');
	});

	test('Pass - Date yyyy-MM-dd - equal to constant', () => {
		// Arrange
		const rule = new RuleMinDate('2000-05-01');
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '2000-05-01');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toEqual('');
	});

	test('Pass - Date yyyy-MM-dd - greater than constant', () => {
		// Arrange
		const rule = new RuleMinDate('2000-05-01');
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '2000-05-02');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toEqual('');
	});

	test('Fail - Date yyyy-MM-dd - less than constant', () => {
		// Arrange
		const rule = new RuleMinDate('2000-05-01');

		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '2000-04-25');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toEqual('must not be a date before 2000-05-01');
	});
});
