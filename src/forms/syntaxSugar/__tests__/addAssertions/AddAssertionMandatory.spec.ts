import AssertIsMandatory from "../../../assertions/AssertIsMandatory";
import FieldBuilder from "../../FieldBuilder";

describe("Field Builder - Add Assertion - Mandatory", () => {
  test("Assertion - mandatory", () => {
    // ACT
    //
    var field = FieldBuilder.string().mandatory().build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.groups[0].items[0];
    expect(item).toBeInstanceOf(AssertIsMandatory);
  });
});
