import DummyFormSetup from "../../__tests__/testSupport/DummyFormSetup";
import AssertValueIsDateTimeLocal from "../date/AssertValueIsDateTimeLocal";

describe("Assert Value Is DateTime Local", () => {
  test("valid date time dd/MM/yyyy HH:mm", () => {
    // Arrange
    const assertion = new AssertValueIsDateTimeLocal();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "01/05/2010 15:30");

    // Assert
    expect(result.pass).toBeTruthy();
    expect(result.message).toBe("");
  });

  test("invalid date time dd/MM/yyyy HH:mm - date out of range", () => {
    // Arrange
    const assertion = new AssertValueIsDateTimeLocal();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "34/05/2010 15:30");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toBe("must be a valid date time in the format dd/MM/yyyy HH:mm or yyyy-MM-dd HH:mm");
  });

  test("invalid date time dd/MM/yyyy HH:mm - Month out of range", () => {
    // Arrange
    const assertion = new AssertValueIsDateTimeLocal();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "05/25/2010 15:30");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toBe("must be a valid date time in the format dd/MM/yyyy HH:mm or yyyy-MM-dd HH:mm");
  });

  test("invalid date time dd/MM/yyyy HH:mm - Year invalid", () => {
    // Arrange
    const assertion = new AssertValueIsDateTimeLocal();
    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "05/11/201x 15:30");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toBe("must be a valid date time in the format dd/MM/yyyy HH:mm or yyyy-MM-dd HH:mm");
  });

  test("invalid date time dd/MM/yyyy HH:mm - Hour invalid", () => {
    // Arrange
    const assertion = new AssertValueIsDateTimeLocal();

    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "05/11/2011 24:30");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toBe("must be a valid date time in the format dd/MM/yyyy HH:mm or yyyy-MM-dd HH:mm");
  });

  test("invalid date time dd/MM/yyyy HH:mm - Minute invalid", () => {
    // Arrange
    const assertion = new AssertValueIsDateTimeLocal();

    const { dummyForm, dummyField } = DummyFormSetup.get();

    // Act
    const result = assertion.isValid(dummyForm, dummyField, "05/11/2011 23:61");

    // Assert
    expect(result.pass).toBeFalsy();
    expect(result.message).toBe("must be a valid date time in the format dd/MM/yyyy HH:mm or yyyy-MM-dd HH:mm");
  });
});
