import AssertIsEmpty from "../../assertions/generic/AssertIsEmpty";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - Add Assertion - shouldBeEmpty", () => {
  test("Assertion - shouldBeEmpty", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldBeEmpty().build();

    //
    // ASSERT
    //
    const item = field.assertGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertIsEmpty);
  });
});
