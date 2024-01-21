import ConditionalValidationBuilderBoolean from "../syntaxSugar/conditionalValidationBuilders/ConditionalValidationBuilderBoolean";
import ConditionalValidationBuilderDate from "../syntaxSugar/conditionalValidationBuilders/ConditionalValidationBuilderDate";
import ConditionalValidationBuilderNumber from "../syntaxSugar/conditionalValidationBuilders/ConditionalValidationBuilderNumber";
import ConditionalValidationBuilderString from "../syntaxSugar/conditionalValidationBuilders/ConditionalValidationBuilderString";
import QueryBuilderBoolean from "../syntaxSugar/queryBuilders/QueryBuilderBoolean";
import QueryBuilderDate from "../syntaxSugar/queryBuilders/QueryBuilderDate";
import QueryBuilderNumber from "../syntaxSugar/queryBuilders/QueryBuilderNumber";
import QueryBuilderString from "../syntaxSugar/queryBuilders/QueryBuilderString";

export type QueryBuilderTypes = QueryBuilderString | QueryBuilderBoolean | QueryBuilderDate | QueryBuilderNumber;
export type ConditionalBuilderTypes =
  | ConditionalValidationBuilderString
  | ConditionalValidationBuilderBoolean
  | ConditionalValidationBuilderDate
  | ConditionalValidationBuilderNumber;
