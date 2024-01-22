import DummyFormSetup from "../../__tests__/testSupport/DummyFormSetup";
import AssertIsEmpty from "../generic/AssertIsEmpty";

describe("Assert Is Empty", () => {
  test("pass - assert is empty", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertIsEmpty();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toBe("");
  });

  test("fail - characters exist", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertIsEmpty();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "xxx");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toBe("must be empty");
  });
});
