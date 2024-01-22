import DummyFormSetup from "../../__tests__/testSupport/DummyFormSetup";
import AssertLengthMax from "../string/AssertLengthMax";

describe("Assert Length Max", () => {
  test("over max length - fail", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertLengthMax(5);

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "123456");
    expect(result.message).toBe("must be less or equal to 5 characters");

    // Assert
    expect(result.pass).toBeFalsy();
  });

  test("over max length by a lot- fail", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertLengthMax(10);

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "123456789012345");

    // Assert
    expect(result.pass).toBeFalsy();
  });

  test("empty string - pass", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertLengthMax(5);

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "");

    // Assert
    expect(result.pass).toBeTruthy();
  });

  test("less than max - pass", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertLengthMax(5);

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "123");

    // Assert
    expect(result.pass).toBeTruthy();
  });

  test("equal to max - pass", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertLengthMax(5);

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "12345");

    // Assert
    expect(result.pass).toBeTruthy();
  });
});
