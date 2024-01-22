import DummyFormSetup from "../../../__tests__/testSupport/DummyFormSetup";
import AssertIsEqualTo from "../../string/AssertIsEqualTo";

describe("Assert Is Equal To", () => {
  test("Pass - Case Sensitive", () => {
    // Arrange

    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertIsEqualTo("Orange", false);

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "Orange");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Fail - Case Sensitive", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertIsEqualTo("Orange", false);

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "orange");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be equal to 'Orange'");
  });

  test("Pass - Case Insensitive - same case", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertIsEqualTo("Orange", true);

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "Orange");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Pass - Case Insensitive - diff case", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertIsEqualTo("Orange", true);

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "orange");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });
});
