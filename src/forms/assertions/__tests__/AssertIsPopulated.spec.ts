import DummyFormSetup from "../../__tests__/testSupport/DummyFormSetup";
import AssertIsPopulated from "../AssertIsPopulated";

describe("Assert Is Populated", () => {
  test("empty string", () => {
    // Arrange
    const rule = new AssertIsPopulated();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = rule.isValid(dummyForm, dummyField, "");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be populated");
  });

  test("single character", () => {
    // Arrange
    const rule = new AssertIsPopulated();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = rule.isValid(dummyForm, dummyField, "a");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });
});
