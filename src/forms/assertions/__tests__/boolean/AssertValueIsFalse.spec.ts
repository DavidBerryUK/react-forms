import DummyFormSetup from "../../../__tests__/testSupport/DummyFormSetup";
import AssertValueIsFalse from "../../boolean/AssertValueIsFalse";

describe("Assert Value Is False", () => {
  test("Expect Pass: value = Empty", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsFalse();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Expect Pass: value = true", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsFalse();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "true");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be false");
  });

  test("Expect Pass: value = TRUE", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsFalse();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "TRUE");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be false");
  });

  test("Expect Pass: value = 1", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsFalse();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "1");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be false");
  });

  test("Expect Pass: value = yes", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsFalse();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "yes");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be false");
  });

  test("Expect Pass: value = YES", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsFalse();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "YES");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be false");
  });

  test("Expect Fail: value = false", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsFalse();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "false");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Expect Fail: value = FALSE", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsFalse();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "FALSE");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Expect Fail: value = Random Words", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertValueIsFalse();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "Orange");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be false");
  });
});
