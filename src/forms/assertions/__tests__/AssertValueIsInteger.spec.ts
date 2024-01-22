import DummyFormSetup from "../../__tests__/testSupport/DummyFormSetup";
import AssertValueIsInteger from "../number/AssertValueIsInteger";

describe("Assert Value Is Integer", () => {
  test("text - fail", () => {
    // Arrange
    const assertion = new AssertValueIsInteger();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "one two three");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be a whole number");
  });

  test("fraction", () => {
    // Arrange
    const assertion = new AssertValueIsInteger();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "1.5");

    // Assert
    expect(result.pass).toBeFalsy();
  });

  test("empty string - valid", () => {
    // Arrange
    const assertion = new AssertValueIsInteger();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "");

    // Assert
    expect(result.pass).toBeTruthy();
  });

  test("0 - valid", () => {
    // Arrange
    const assertion = new AssertValueIsInteger();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "0");

    // Assert
    expect(result.pass).toBeTruthy();
  });

  test("5 - valid", () => {
    // Arrange
    const assertion = new AssertValueIsInteger();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "5");

    // Assert
    expect(result.pass).toBeTruthy();
  });

  test("900 - valid", () => {
    // Arrange
    const assertion = new AssertValueIsInteger();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "900");

    // Assert
    expect(result.pass).toBeTruthy();
  });
});
