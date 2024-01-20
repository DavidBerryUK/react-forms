import AddressSchema from "../testSupport/AddressSchema";

describe("Form Schema - with parse Fields", () => {
  test("parsing for fields", () => {
    // ACT
    const addressSchema = new AddressSchema();

    // ASSERT
    expect(addressSchema.fieldCollection.count).toBe(6);

    // get fields from schema collection
    var company = addressSchema.fieldCollection.get(addressSchema.fields.company);
    var building = addressSchema.fieldCollection.get(addressSchema.fields.building);
    var street = addressSchema.fieldCollection.get(addressSchema.fields.street);
    var locality = addressSchema.fieldCollection.get(addressSchema.fields.locality);
    var town = addressSchema.fieldCollection.get(addressSchema.fields.town);
    var postCode = addressSchema.fieldCollection.get(addressSchema.fields.postCode);

    // assert fields from collection are same as the input fields
    expect(company === addressSchema.fields.company).toBeTruthy();
    expect(building === addressSchema.fields.building).toBeTruthy();
    expect(street === addressSchema.fields.street).toBeTruthy();
    expect(locality === addressSchema.fields.locality).toBeTruthy();
    expect(town === addressSchema.fields.town).toBeTruthy();
    expect(postCode === addressSchema.fields.postCode).toBeTruthy();
  });
});
