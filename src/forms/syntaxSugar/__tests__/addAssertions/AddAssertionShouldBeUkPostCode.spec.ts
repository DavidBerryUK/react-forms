import AssertPostCodeUK from "../../../assertions/AssertPostCodeUk";
import FieldBuilder from "../../FieldBuilder";

describe("Field Builder - Add Assertion - shouldBeUkPostCode", () => {
  test("Assertion - shouldBeUkPostCode", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldBePostCodeUK().build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.groups[0].items[0];
    expect(item).toBeInstanceOf(AssertPostCodeUK);
  });
});
