import DummyFormSetup from "../../__tests__/testSupport/DummyFormSetup";
import AssertContainsLowerCase from "../AssertContainsLowerCase";

describe("Contains lowercase characters", () => {
  test("Pass - empty", () => {
    // Arrange

    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertContainsLowerCase(0, 100);
    // Act

    const result = assertion.isValid(dummyForm, dummyField, "");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Fail - must contain 2-4 lowercase characters - actual 1", () => {
    // Arrange

    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertContainsLowerCase(2, 4);
    // Act

    const result = assertion.isValid(dummyForm, dummyField, "a");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must contain at least 2 lowercase characters");
  });

  test("Pass - must contain 2-4 lowercase characters - actual 3", () => {
    // Arrange

    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertContainsLowerCase(2, 4);
    // Act

    const result = assertion.isValid(dummyForm, dummyField, "1234567890 abc 1234567890");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Pass - must contain 2-4 lowercase characters - actual 4", () => {
    // Arrange

    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertContainsLowerCase(2, 4);
    // Act

    const result = assertion.isValid(dummyForm, dummyField, "12345  abcd 12345 ABCDEF");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Fail - must contain 2-4 lowercase characters - actual 5", () => {
    // Arrange

    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertContainsLowerCase(2, 4);
    // Act

    const result = assertion.isValid(dummyForm, dummyField, "ab cd e ONE TWO THREE FOUR FIVE 123456");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must contain no more than 4 lowercase characters");
  });

  test("Fail - must contain 1 lowercase characters - actual - none", () => {
    // Arrange

    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertContainsLowerCase(1, 1);
    // Act

    const result = assertion.isValid(dummyForm, dummyField, "ONE TWO THREE FOUR");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must contain 1 lowercase character");
  });

  test("Fail - must contain 1-10 lowercase characters - actual - none", () => {
    // Arrange

    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertContainsLowerCase(1, 10);
    // Act

    const result = assertion.isValid(dummyForm, dummyField, "ABCDEFG");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must contain at least 1 lowercase character");
  });

  test("Fail - must contain 0-1 lowercase characters - actual - 5", () => {
    // Arrange

    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertContainsLowerCase(0, 1);
    // Act

    const result = assertion.isValid(dummyForm, dummyField, "ab cd e");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must contain a maximum 1 lowercase character");
  });
});
