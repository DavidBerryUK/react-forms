import DummyFormSetup from "../../../__tests__/testSupport/DummyFormSetup";
import AssertIsMandatory from "../../generic/AssertIsMandatory";

describe("Assert Is Mandatory", () => {
  test("empty string", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertIsMandatory();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("is mandatory");
  });

  test("single character", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertIsMandatory();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "a");

    // Assert
    expect(result.pass).toBeTruthy();
  });

  test("full string", () => {
    // Arrange
    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertIsMandatory();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "one two three");

    // Assert
    expect(result.pass).toBeTruthy();
  });
});
