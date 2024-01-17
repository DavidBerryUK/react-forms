import DummyFormSetup from "../../__tests__/testSupport/DummyFormSetup";
import AssertValueMin from "../AssertValueMin";

describe("Assert Value Min", () => {
  test("Invalid Number", () => {
    // Arrange
    const rule = new AssertValueMin(10);
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = rule.isValid(dummyForm, dummyField, "ancd");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be a valid number");
  });

  test("Valid Integer Number above range", () => {
    // Arrange
    const rule = new AssertValueMin(10);
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = rule.isValid(dummyForm, dummyField, "15");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Invalid Number below range", () => {
    // Arrange
    const rule = new AssertValueMin(10);
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = rule.isValid(dummyForm, dummyField, "9.5");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must be equal or greater than 10");
  });
});
