import AssertIsMandatory from "../../assertions/AssertIsMandatory";
import FieldBuilder from "../../syntaxSugar/FieldBuilder";

describe("Field Builder - Add Assertion - Mandatory", () => {
  test("Assertion - mandatory", () => {
    // ACT
    //
    var field = FieldBuilder.string().mandatory().build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertIsMandatory);
  });
});
