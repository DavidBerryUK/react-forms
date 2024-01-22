import DummyFormSetup from "../../../__tests__/testSupport/DummyFormSetup";
import AssertValueIsNonZero from "../../number/AssertValueIsNonZero";

describe("Assert Value Is Non Zero", () => {
  test("Expect Pass - empty string", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsNonZero();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Expect False - 0", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsNonZero();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "0");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be none zero");
  });

  test("Expect Pass - 1", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsNonZero();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "1");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Expect Pass - -1", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsNonZero();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "-1");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Expect Pass - invalid number", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsNonZero();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "0.0.1");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Expect Pass - Random Word", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsNonZero();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "Purple");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });
});
