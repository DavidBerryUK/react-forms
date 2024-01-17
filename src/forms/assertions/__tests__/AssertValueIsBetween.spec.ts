import DummyFormSetup from "../../__tests__/testSupport/DummyFormSetup";
import AssertValueIsBetween from "../AssertValueIsBetween";

describe("Assert Value Is Between", () => {
  test("Invalid Number", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const rule = new AssertValueIsBetween(10, 20);

    // Act
    const result = rule.isValid(dummyForm, dummyField, "ancd");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be a valid number");
  });

  test("Valid Integer Number in range", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const rule = new AssertValueIsBetween(10, 20);

    // Act
    const result = rule.isValid(dummyForm, dummyField, "15");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Valid Decimal Number in range", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const rule = new AssertValueIsBetween(10, 20);

    // Act
    const result = rule.isValid(dummyForm, dummyField, "15.5");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Valid Decimal Number below range", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const rule = new AssertValueIsBetween(10, 20);

    // Act
    const result = rule.isValid(dummyForm, dummyField, "9.5");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be between 10 and 20");
  });

  test("Valid Decimal Number above range", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const rule = new AssertValueIsBetween(10, 20);

    // Act
    const result = rule.isValid(dummyForm, dummyField, "20.1");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be between 10 and 20");
  });
});
