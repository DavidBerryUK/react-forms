import DummyFormSetup from "../../__tests__/testSupport/DummyFormSetup";
import AssertValueIsInteger from "../AssertValueIsInteger";

describe("Assert Value Is Integer", () => {
  test("text - fail", () => {
    // Arrange
    const rule = new AssertValueIsInteger();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = rule.isValid(dummyForm, dummyField, "one two three");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be a whole number");
  });

  test("fraction", () => {
    // Arrange
    const rule = new AssertValueIsInteger();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = rule.isValid(dummyForm, dummyField, "1.5");

    // Assert
    expect(result.pass).toBeFalsy();
  });

  test("empty string - valid", () => {
    // Arrange
    const rule = new AssertValueIsInteger();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = rule.isValid(dummyForm, dummyField, "");

    // Assert
    expect(result.pass).toBeTruthy();
  });

  test("0 - valid", () => {
    // Arrange
    const rule = new AssertValueIsInteger();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = rule.isValid(dummyForm, dummyField, "0");

    // Assert
    expect(result.pass).toBeTruthy();
  });

  test("5 - valid", () => {
    // Arrange
    const rule = new AssertValueIsInteger();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = rule.isValid(dummyForm, dummyField, "5");

    // Assert
    expect(result.pass).toBeTruthy();
  });

  test("900 - valid", () => {
    // Arrange
    const rule = new AssertValueIsInteger();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = rule.isValid(dummyForm, dummyField, "900");

    // Assert
    expect(result.pass).toBeTruthy();
  });
});
