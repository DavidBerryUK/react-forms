import { RuleDateLocal } from '../../validationRules/simple/RuleDateLocal';
import DummyFormSetup from "../testSupport/DummyFormSetup";

describe('RuleDateLocal', () => {
	test('valid date dd/mm/yyyy', () => {
		// Arrange
		const rule = new RuleDateLocal();
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '01/05/2010');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toBe('');
	})

	test('invalid date dd/mm/yyyy - date out of range', () => {
		// Arrange
		const rule = new RuleDateLocal();
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '34/05/2010');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toBe('must be a valid date in the format dd/MM/yyyy or yyyy-MM-dd');
	})

	test('invalid date dd/mm/yyyy - month out of range', () => {
		// Arrange
		const rule = new RuleDateLocal();
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '4/15/2010');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toBe('must be a valid date in the format dd/MM/yyyy or yyyy-MM-dd');
	})

	test('invalid date dd/mm/yyyy - year has characters', () => {
		// Arrange
		const rule = new RuleDateLocal();
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '4/05/xxxx');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toBe('must be a valid date in the format dd/MM/yyyy or yyyy-MM-dd');
	})

	test('valid date yyyy-MM-dd', () => {
		// Arrange
		const rule = new RuleDateLocal();
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '2010-05-01');

		// Assert
		expect(result.pass).toBeTruthy();
		expect(result.message).toBe('');
	})

	test('invalid date yyyy-MM-dd - date out of range', () => {
		// Arrange
		const rule = new RuleDateLocal();
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '2010-05-91');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toBe('must be a valid date in the format dd/MM/yyyy or yyyy-MM-dd');
	})

	test('invalid date yyyy-MM-dd - month out of range', () => {
		// Arrange
		const rule = new RuleDateLocal();
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '2010-15-01');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toBe('must be a valid date in the format dd/MM/yyyy or yyyy-MM-dd');
	})

	test('invalid date yyyy-MM-dd - year has characters', () => {
		// Arrange
		const rule = new RuleDateLocal();
		const { dummyForm, dummyField } = DummyFormSetup.get();

		// Act
		const result = rule.isValid(dummyForm, dummyField, '20xx-05-01');

		// Assert
		expect(result.pass).toBeFalsy();
		expect(result.message).toBe('must be a valid date in the format dd/MM/yyyy or yyyy-MM-dd');
	});
});
