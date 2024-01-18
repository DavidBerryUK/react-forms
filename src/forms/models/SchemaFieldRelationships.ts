import ISchemaField from "../interfaces/ISchemaField";

export default class SchemaFieldRelationships {
  field: ISchemaField;
  items: Array<ISchemaField>;

  constructor(field: ISchemaField) {
    this.items = new Array<ISchemaField>();
    this.field = field;
  }

  get count(): number {
    return this.items.length;
  }

  // check to see if field is already in relationship collection
  isJoinedTo(field: ISchemaField): boolean {
    const existing = this.items.find((item) => item.keyEquals(field));
    return existing !== undefined;
  }

  // join two fields together
  join(relatedField: ISchemaField) {
    if (this.field.keyEquals(relatedField)) {
      return;
    }

    if (this.isJoinedTo(relatedField) === false) {
      this.items.push(relatedField);
    }
    if (relatedField.relatedFields.isJoinedTo(this.field) === false) {
      relatedField.relatedFields.join(this.field);
    }
  }

  // unlink fields
  disconnect(relatedField: ISchemaField) {
    this.items = this.items.filter((item) => !item.keyEquals(relatedField));
    if (relatedField.relatedFields.isJoinedTo(this.field)) {
      relatedField.relatedFields.disconnect(this.field);
    }
  }

  // examine rule groups to see if fields should be linked
  processRuleGroupsForRelatedFields() {
    this.field.ruleGroups.groups.forEach((group) => {
      group.conditions.items.forEach((condition) => {
        this.join(condition.schemaField);
      });
    });
  }
}
