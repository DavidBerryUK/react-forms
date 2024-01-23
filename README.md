# Form Validation

Provide an acessable way of tracking the state of web forms via data schemas that include validation.

## Example

The Form Schema component is designed to facilitate the creation of structured schemas for various data types. To ensure the correct formation of the schema during development, each field is constructed using chainable methods. This guide provides an example for an order line, outlining the usage of these chainable methods and emphasizing the importance of starting each line with the appropriate data type.

```typescript
export default class OrderLineSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    name: FieldBuilder.string("Name").mandatory().maxLength(100).build(),
    itemCost: FieldBuilder.number("Cost").decimal().positive().build(),
    quantity: FieldBuilder.number("Quantity").integer().positive().build(),
    labourCost: FieldBuilder.number("Total Labour").decimal().build(),
    total: FieldBuilder.number("Total ").build(),
  };
  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
```

# Cross Validation

Once the fields have been defined with their own assertions, cross validation can also be easily specified.

Again this uses all typesafe chainable commands.

```typescript
class PersonSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    score: FieldBuilder.number("Score").mandatory().between(1, 4).build(),
    notes1: FieldBuilder.string("Notes 1").maxLength(20).build(),
    notes2: FieldBuilder.string("Notes 2").maxLength(20).build(),
    notes3: FieldBuilder.string("Notes 3").maxLength(20).build(),
    notes4: FieldBuilder.string("Notes 4").maxLength(20).build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);

    // Cross Validation
    const { score, notes1, notes2, notes3, notes4 } = this.fields;
    notes1.when(score.state().equals(1)).mandatory("Notes must be entered when score is 1").minLength(10);
    notes2.when(score.state().equals(2)).mandatory("Notes must be entered when score is 2").minLength(20);
    notes3.when(score.state().equals(3)).mandatory("Notes must be entered when score is 3").minLength(30);
    notes4.when(score.state().equals(4)).mandatory("Notes must be entered when score is 4").minLength(40);
  }
}
```

# Data Types and Assertions

Each data type has its own set of validation assertions that are available to it. The assertions can be chained together in any order.
The assertions will be tested in the order they are specified, so if a field is mandatory, it would be most common for this to be placed as the first assertion in the sequence.

## String

| assertion         | developed | tested | notes           |
| ----------------- | --------- | ------ | --------------- |
| mandatory         | yes       | yes    |                 |
| empty             | yes       | yes    |                 |
| populated         | yes       | yes    |                 |
| equal             | yes       | yes    |                 |
| notEqual          | yes       | yes    |                 |
| lengthBetween     | yes       |        |                 |
| lengthMin         | yes       |        |                 |
| lengthMax         | yes       |        |                 |
| noWhiteSpaces     | yes       |        |                 |
| containsDigits    | yes       |        |                 |
| containsLowerCase | yes       |        |                 |
| containsUpperCase | yes       |        |                 |
| containsSymbols   | yes       |        |                 |
| postCodeUk        | yes       |        |                 |
| uuid              |           |        | to be developed |
| email             |           |        | to be developed |
| url               |           |        | to be developed |
| regex             |           |        | to be developed |
| inList            |           |        | to be developed |
| notInList         |           |        | to be developed |
| contains          |           |        | to be developed |
| startsWith        |           |        | to be developed |
| endsWith          |           |        | to be developed |
| idAddress         |           |        |                 |
| addAssertion      | yes       |        |                 |
| addAssertions     | yes       |        |                 |

## Number

| assertion     | developed | tested | notes           |
| ------------- | --------- | ------ | --------------- |
| mandatory     | yes       | yes    |                 |
| empty         | yes       | yes    |                 |
| populated     | yes       | yes    |                 |
| equal         | yes       | yes    |                 |
| notEqual      | yes       | yes    |                 |
| zero          | yes       | yes    |                 |
| notZero       | yes       | yes    |                 |
| positive      | yes       | yes    |                 |
| negative      | yes       | yes    |                 |
| between       | yes       | yes    |                 |
| min           | yes       | yes    |                 |
| max           | yes       | yes    |                 |
| decimal       | yes       | yes    |                 |
| integer       | yes       | yes    |                 |
| inList        |           |        | to be developed |
| notInList     |           |        | to be developed |
| multipleOf    |           |        | to be developed |
| addAssertion  | yes       |        |                 |
| addAssertions | yes       |        |                 |

## Boolean

| assertion     | developed | tested | notes           |
| ------------- | --------- | ------ | --------------- |
| mandatory     | yes       | yes    |                 |
| empty         | yes       | yes    |                 |
| populated     | yes       | yes    |                 |
| equal         | yes       | yes    |                 |
| true          | yes       | yes    |                 |
| false         | yes       | yes    |                 |
| notEqual      |           |        | to be developed |
| addAssertion  | yes       |        |                 |
| addAssertions | yes       |        |                 |

## Date

| assertion     | developed | tested | notes           |
| ------------- | --------- | ------ | --------------- |
| mandatory     | yes       |        |                 |
| empty         | yes       |        |                 |
| populated     | yes       |        |                 |
| dateLocal     | yes       |        |                 |
| timeLocal     | yes       |        |                 |
| utc           | yes       |        |                 |
| datetimeLocal | yes       |        |                 |
| min           | yes       |        |                 |
| max           | yes       |        |                 |
| between       |           |        | to be developed |
| addAssertion  | yes       |        |                 |
| addAssertions | yes       |        |                 |

# Cross Validation When Conditions

## String

| assertion | developed | tested | notes |
| --------- | --------- | ------ | ----- |
| empty     |           |        |       |
| populated |           |        |       |

## Integer

| assertion | developed | tested | notes |
| --------- | --------- | ------ | ----- |
| empty     |           |        |       |
| populated |           |        |       |

## Number

| assertion | developed | tested | notes |
| --------- | --------- | ------ | ----- |
| empty     |           |        |       |
| populated |           |        |       |

## Date

| assertion | developed | tested | notes |
| --------- | --------- | ------ | ----- |
| empty     |           |        |       |
| populated |           |        |       |
