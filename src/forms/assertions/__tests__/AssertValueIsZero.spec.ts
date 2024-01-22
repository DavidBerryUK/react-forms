import DummyFormSetup from "../../__tests__/testSupport/DummyFormSetup";
import AssertValueIsZero from "../number/AssertValueIsZero";

describe("Assert Value Is Zero", () => {
  test("Expect Pass - empty string", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsZero();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Expect Pass - 0", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsZero();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "0");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Expect Fail - 1", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsZero();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "1");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be zero");
  });

  test("Expect Fail - -1", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsZero();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "-1");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be zero");
  });

  test("Expect Fail - invalid number", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsZero();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "0.0.1");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be zero");
  });

  test("Expect Fail - Random Word", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsZero();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "Purple");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be zero");
  });
});
