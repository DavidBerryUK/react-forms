import AssertIsPopulated from "../../assertions/generic/AssertIsPopulated";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - Add Assertion - ", () => {
  test("Assertion - shouldBePopulated", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldBePopulated().build();

    //
    // ASSERT
    //
    const item = field.assertGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertIsPopulated);
  });
});
