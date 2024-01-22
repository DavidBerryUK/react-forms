import DummyFormSetup from "../../../__tests__/testSupport/DummyFormSetup";
import AssertContainsUpperCase from "../../string/AssertContainsUpperCase";

describe("Assert Contains uppercase characters", () => {
  test("Pass - empty", () => {
    // Arrange

    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertContainsUpperCase(0, 100);
    // Act

    const result = assertion.isValid(dummyForm, dummyField, "");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Fail - must contain 2-4 uppercase characters - actual 1", () => {
    // Arrange

    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertContainsUpperCase(2, 4);
    // Act

    const result = assertion.isValid(dummyForm, dummyField, "aAaaaa2222");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must contain at least 2 uppercase characters");
  });

  test("Pass - must contain 2-4 uppercase characters - actual 2", () => {
    // Arrange

    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertContainsUpperCase(2, 4);
    // Act

    const result = assertion.isValid(dummyForm, dummyField, "absbsABabcd");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Pass - must contain 2-4 uppercase characters - actual 3", () => {
    // Arrange

    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertContainsUpperCase(2, 4);
    // Act

    const result = assertion.isValid(dummyForm, dummyField, "123ABC12922929one two three four");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Pass - must contain 2-4 uppercase characters - actual 4", () => {
    // Arrange

    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertContainsUpperCase(2, 4);
    // Act

    const result = assertion.isValid(dummyForm, dummyField, "1234ABCDababab29292");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toEqual("");
  });

  test("Fail - must contain 2-4 uppercase characters - actual 5", () => {
    // Arrange

    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertContainsUpperCase(2, 4);
    // Act

    const result = assertion.isValid(dummyForm, dummyField, "One Two Three Four Five");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must contain no more than 4 uppercase characters");
  });

  test("Fail - must contain 1 uppercase characters - actual - none", () => {
    // Arrange

    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertContainsUpperCase(1, 1);
    // Act

    const result = assertion.isValid(dummyForm, dummyField, "abc");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must contain 1 uppercase character");
  });

  test("Fail - must contain 1-10 uppercase characters - actual - none", () => {
    // Arrange

    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertContainsUpperCase(1, 10);
    // Act

    const result = assertion.isValid(dummyForm, dummyField, "abc");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must contain at least 1 uppercase character");
  });

  test("Fail - must contain 0-1 uppercase characters - actual - 5", () => {
    // Arrange

    const { dummyForm, dummyField } = DummyFormSetup.get();
    const assertion = new AssertContainsUpperCase(0, 1);
    // Act

    const result = assertion.isValid(dummyForm, dummyField, "abc12345bdbd One Two Three Four Five");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toEqual("must contain a maximum 1 uppercase character");
  });
});
