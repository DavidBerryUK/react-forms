import AssertPostCodeUK from "../../assertions/string/AssertPostCodeUk";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - Add Assertion - shouldBeUkPostCode", () => {
  test("Assertion - shouldBeUkPostCode", () => {
    // ACT
    //
    var field = FieldBuilder.string().postCodeUK().build();

    //
    // ASSERT
    //
    const item = field.assertGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertPostCodeUK);
  });
});
