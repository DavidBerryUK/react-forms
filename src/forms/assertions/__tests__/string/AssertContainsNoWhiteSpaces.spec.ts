import DummyFormSetup from "../../../__tests__/testSupport/DummyFormSetup";
import AssertContainsNoWhiteSpaces from "../../string/AssertContainsNoWhiteSpaces";

describe("Assert Contains No White Spaces", () => {
  test.each([
    { value: null, name: "null" },
    { value: null, name: "undefined" },
    { value: "", name: "empty string" },
    { value: "    ", name: "white space" },
    { value: "test string ", name: "string with space" },
  ])("invalid string of $name should fail", ({ value, name }) => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertContainsNoWhiteSpaces();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, value as string);

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("cannot contain spaces");
  });

  test("string without space should pass", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertContainsNoWhiteSpaces();
    const value = "test-string-no-space";

    // Act
    const result = assertion.isValid(dummyForm, dummyField, value);

    // Assert
    expect(result.pass).toBeTruthy();
  });
});
