import AssertValueIsDateTimeLocal from "../../../assertions/AssertValueIsDateTimeLocal";
import FieldBuilder from "../../FieldBuilder";

describe("Field Builder - Add Assertion - shouldBeDateTimeLocal", () => {
  test("Assertion - shouldBeDateTimeLocal", () => {
    // ACT
    //
    var field = FieldBuilder.date().shouldBeDateTimeLocal().build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.groups[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsDateTimeLocal);
  });
});
