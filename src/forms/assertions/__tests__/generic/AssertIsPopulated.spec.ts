import DummyFormSetup from "../../../__tests__/testSupport/DummyFormSetup";
import AssertIsPopulated from "../../generic/AssertIsPopulated";

describe("Assert Is Populated", () => {
  test("empty string", () => {
    // Arrange
    const assertion = new AssertIsPopulated();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be populated");
  });

  test("single character", () => {
    // Arrange
    const rulassertion = new AssertIsPopulated();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = rulassertion.isValid(dummyForm, dummyField, "a");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });
});
