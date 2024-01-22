import AssertValueIsTime from "../../assertions/AssertValueIsTime";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - Add Assertion - ", () => {
  test("Assertion - shouldBeTimeLocal", () => {
    // ACT
    //
    var field = FieldBuilder.date().shouldBeTimeLocal().build();

    //
    // ASSERT
    //
    const item = field.assertGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsTime);
  });
});
