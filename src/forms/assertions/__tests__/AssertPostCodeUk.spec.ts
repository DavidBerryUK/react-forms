import DummyFormSetup from "../../__tests__/testSupport/DummyFormSetup";
import AssertPostCodeUk from "../AssertPostCodeUk";

describe("Assert Post Code Uk", () => {
  test("pass - empty", () => {
    // Arrange
    const rule = new AssertPostCodeUk();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = rule.isValid(dummyForm, dummyField, "");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toBe("");
  });

  test("pass - BBC - W1A 1AA", () => {
    // Arrange
    const rule = new AssertPostCodeUk();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = rule.isValid(dummyForm, dummyField, "W1A 1AA");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toBe("");
  });

  test("fail - random", () => {
    // Arrange
    const rule = new AssertPostCodeUk();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = rule.isValid(dummyForm, dummyField, "W1X4A 1A3A");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toBe("must be a valid UK Post Code");
  });
});
