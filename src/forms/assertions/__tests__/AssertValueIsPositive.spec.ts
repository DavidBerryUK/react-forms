import DummyFormSetup from "../../__tests__/testSupport/DummyFormSetup";
import AssertValueIsPositive from "../number/AssertValueIsPositive";

describe("Assert Value Is Positive", () => {
  test("Fail - Invalid Number", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsPositive(false);

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "ancd");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be positive");
  });

  test("Pass - (allow zero = false ) positive number : 10", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsPositive(false);

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "10");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Pass - (allow zero = true ) positive number : 10", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsPositive(true);

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "10");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Fail - (allow zero = false ) positive number : -20", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsPositive(false);

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "-20");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be positive");
  });

  test("Fail - (allow zero = true ) positive number : -20", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsPositive(true);

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "-20");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be positive or zero");
  });

  test("Fail - (allow zero = false ) positive number : 0", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsPositive(false);

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "0");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be positive");
  });

  test("Pass - (allow zero = true ) positive number : 0", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsPositive(true);

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "0");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });
});
