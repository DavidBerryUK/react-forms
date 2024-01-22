import AssertIsEqualTo from "../../assertions/string/AssertIsEqualTo";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - Add Assertion - shouldEqual", () => {
  test("Assertion - shouldEqual", () => {
    // ACT
    //
    var field = FieldBuilder.string().equal("23", false).build();

    //
    // ASSERT
    //
    const item = field.assertGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertIsEqualTo);
  });
});
