import DummyFormSetup from "../../__tests__/testSupport/DummyFormSetup";
import AssertValueIsDecimal from "../number/AssertValueIsDecimal";

describe("Assert Value Is Decimal", () => {
  test("text - fail", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsDecimal();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "one two three");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be a decimal");
  });

  test("fraction", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsDecimal();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "1.5");

    // Assert
    expect(result.pass).toBeTruthy();
  });

  test("empty string - valid", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsDecimal();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "");

    // Assert
    expect(result.pass).toBeTruthy();
  });

  test("0 - valid", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsDecimal();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "0");

    // Assert
    expect(result.pass).toBeTruthy();
  });

  test("5 - valid", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsDecimal();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "5");

    // Assert
    expect(result.pass).toBeTruthy();
  });

  test("900 - valid", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsDecimal();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "900");

    // Assert
    expect(result.pass).toBeTruthy();
  });
});
