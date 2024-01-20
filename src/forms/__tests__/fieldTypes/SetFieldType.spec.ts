import EnumFieldType from "../../enums/EnumFieldType";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - test specifying field types", () => {
  test("Field type is string (no caption)", () => {
    // ACT
    //
    var field = FieldBuilder.string().build();

    //
    // ASSERT
    //
    expect(field.fieldType).toBe(EnumFieldType.string);
    expect(field.caption).toBe("");
  });

  test("Field type is string (with caption)", () => {
    // ACT
    //
    var field = FieldBuilder.string("Forename").build();

    //
    // ASSERT
    //
    expect(field.fieldType).toBe(EnumFieldType.string);
    expect(field.caption).toBe("Forename");
  });

  test("Field type is number  (no caption)", () => {
    // ACT
    //
    var field = FieldBuilder.number().build();

    //
    // ASSERT
    //
    expect(field.fieldType).toBe(EnumFieldType.number);
    expect(field.caption).toBe("");
  });

  test("Field type is number  (with caption)", () => {
    // ACT
    //
    var field = FieldBuilder.number("age").build();

    //
    // ASSERT
    //
    expect(field.fieldType).toBe(EnumFieldType.number);
    expect(field.caption).toBe("age");
  });

  test("Field type is boolean (no caption)", () => {
    // ACT
    //
    var field = FieldBuilder.boolean().build();

    //
    // ASSERT
    //
    expect(field.fieldType).toBe(EnumFieldType.boolean);
    expect(field.caption).toBe("");
  });

  test("Field type is boolean (with caption)", () => {
    // ACT
    //
    var field = FieldBuilder.boolean("Is Available").build();

    //
    // ASSERT
    //
    expect(field.fieldType).toBe(EnumFieldType.boolean);
    expect(field.caption).toBe("Is Available");
  });

  test("Field type is date  (no caption)", () => {
    // ACT
    //
    var field = FieldBuilder.date().build();

    //
    // ASSERT
    //
    expect(field.fieldType).toBe(EnumFieldType.date);
    expect(field.caption).toBe("");
  });

  test("Field type is date  (with caption)", () => {
    // ACT
    //
    var field = FieldBuilder.date("Date Transfered").build();

    //
    // ASSERT
    //
    expect(field.fieldType).toBe(EnumFieldType.date);
    expect(field.caption).toBe("Date Transfered");
  });
});
