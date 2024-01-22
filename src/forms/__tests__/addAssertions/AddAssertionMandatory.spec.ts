import AssertIsMandatory from "../../assertions/generic/AssertIsMandatory";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - Add Assertion - Mandatory", () => {
  test("Assertion - mandatory", () => {
    // ACT
    //
    var field = FieldBuilder.string().mandatory().build();

    //
    // ASSERT
    //
    const item = field.assertGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertIsMandatory);
  });
});
