import SchemaFieldBuilder from "../forms/models/SchemaFieldBuilder";

export default class SchemaAddress {
    addressLine1 = new SchemaFieldBuilder().caption("Address Line 1").string().minLength(20).maxLength(100).mandatory().build();
    addressLine2 = new SchemaFieldBuilder().caption("Address Line 2").string().minLength(20).maxLength(100).build();
    addressLine3 = new SchemaFieldBuilder().caption("Address Line 3").string().minLength(20).maxLength(100).build();
    addressLine4 = new SchemaFieldBuilder().caption("Address Line 4").string().minLength(20).maxLength(100).build();
    postCode = new SchemaFieldBuilder().caption("Post Code").string().minLength(6).maxLength(10).isUkPostCode().build();
}