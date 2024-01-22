import SchemaFieldString from "../../schemaField/SchemaFieldString";

//
// tests for linking fields together
//

//  (Used when validation used conditions )
describe("SchemaFieldsJoin.spec", () => {
  test("join 2 fields", () => {
    // Arrange
    const fieldA = SchemaFieldString.create("FieldA", "Field A");
    const fieldB = SchemaFieldString.create("FieldB", "Field B");

    // Act
    fieldA.relatedFields.join(fieldB);

    // Assert
    expect(fieldA.relatedFields.count).toEqual(1);
    expect(fieldB.relatedFields.count).toEqual(1);
  });

  test("disconnect 2 fields", () => {
    // Arrange
    const fieldA = SchemaFieldString.create("FieldA", "Field A");
    const fieldB = SchemaFieldString.create("FieldB", "Field B");

    // Act
    fieldA.relatedFields.join(fieldB);

    // Assert
    expect(fieldA.relatedFields.count).toEqual(1);
    expect(fieldB.relatedFields.count).toEqual(1);

    // Act
    fieldA.relatedFields.disconnect(fieldB);

    expect(fieldA.relatedFields.count).toEqual(0);
    expect(fieldB.relatedFields.count).toEqual(0);
  });

  // test with joining multiple times
  //
  test("join 2 fields - join multiple times", () => {
    // Arrange
    const fieldA = SchemaFieldString.create("FieldA", "Field A");
    const fieldB = SchemaFieldString.create("FieldB", "Field B");

    // Act
    fieldA.relatedFields.join(fieldB);
    fieldA.relatedFields.join(fieldA);
    fieldB.relatedFields.join(fieldA);
    fieldB.relatedFields.join(fieldB);

    // Assert
    expect(fieldA.relatedFields.count).toEqual(1);
    expect(fieldB.relatedFields.count).toEqual(1);
  });

  test("join 2 fields - removing multiple times", () => {
    // Arrange
    const fieldA = SchemaFieldString.create("FieldA", "Field A");
    const fieldB = SchemaFieldString.create("FieldB", "Field B");

    // Act
    fieldA.relatedFields.join(fieldB);

    fieldA.relatedFields.disconnect(fieldB);
    fieldA.relatedFields.disconnect(fieldB);
    fieldB.relatedFields.disconnect(fieldA);
    fieldB.relatedFields.disconnect(fieldA);
    fieldA.relatedFields.disconnect(fieldA);
    fieldB.relatedFields.disconnect(fieldB);

    // Assert
    expect(fieldA.relatedFields.count).toEqual(0);
    expect(fieldB.relatedFields.count).toEqual(0);
  });

  test("connect chain", () => {
    // Arrange
    const fieldA = SchemaFieldString.create("FieldA", "Field A");
    const fieldB = SchemaFieldString.create("FieldB", "Field B");
    const fieldC = SchemaFieldString.create("FieldC", "Field C");
    const fieldD = SchemaFieldString.create("FieldD", "Field D");

    // Act
    fieldA.relatedFields.join(fieldB);
    fieldB.relatedFields.join(fieldC);
    fieldC.relatedFields.join(fieldD);
    fieldD.relatedFields.join(fieldA);

    // Assert
    expect(fieldA.relatedFields.count).toEqual(2);
    expect(fieldB.relatedFields.count).toEqual(2);
    expect(fieldC.relatedFields.count).toEqual(2);
    expect(fieldD.relatedFields.count).toEqual(2);

    expect(fieldA.relatedFields.isJoinedTo(fieldB)).toBeTruthy();
    expect(fieldA.relatedFields.isJoinedTo(fieldD)).toBeTruthy();
    expect(fieldB.relatedFields.isJoinedTo(fieldA)).toBeTruthy();
    expect(fieldB.relatedFields.isJoinedTo(fieldC)).toBeTruthy();
    expect(fieldC.relatedFields.isJoinedTo(fieldB)).toBeTruthy();
    expect(fieldC.relatedFields.isJoinedTo(fieldD)).toBeTruthy();
    expect(fieldD.relatedFields.isJoinedTo(fieldC)).toBeTruthy();
    expect(fieldD.relatedFields.isJoinedTo(fieldA)).toBeTruthy();

    expect(fieldA.relatedFields.isJoinedTo(fieldC)).toBeFalsy();
    expect(fieldB.relatedFields.isJoinedTo(fieldD)).toBeFalsy();
    expect(fieldC.relatedFields.isJoinedTo(fieldA)).toBeFalsy();
    expect(fieldD.relatedFields.isJoinedTo(fieldB)).toBeFalsy();
  });
});
