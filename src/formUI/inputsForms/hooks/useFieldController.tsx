import { IInputProperties } from "../interfaces/IInputProperties";
import FormField from "../../../forms/models/FormField";

const useFieldController = (props: IInputProperties) => {
  const field = props.form.fieldCollection.addOrUpdate(props.field, props.rowId);

  const handleSwitchChange = (value: boolean) => {
    // update field value
    field.value = `${value}`;

    // publish a change has taken place
    if (props.onUpdate) {
      props.onUpdate(props.form.clone());
    }
  };

  //
  // Event Handlers
  //

  const updateField = (field: FormField) => {
    if (props.onUpdate) {
      props.onUpdate(props.form.clone());
    }
  };

  // // Handle a segment value being updated
  // //
  // const handleSegmentChange = (item: ControlItemMode<any>) => {
  // 	// update field value
  // 	field.value = item.id;

  // 	// run validation
  // 	//field.rules.evaluateRules(field);

  // 	// publish a change has taken place
  // 	if ( props.onUpdate) {
  // 		props.onUpdate(props.form.clone());
  // 	}
  // };

  // Handle a text (or numeric) value being updated
  //
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // update field value
    field.value = event.target.value;

    // run validation
    field.schemaField.assertGroups.evaluateAssertions(props.form, field);

    // publish a change has taken place
    if (props.onUpdate) {
      props.onUpdate(props.form.clone());
    }
  };

  return {
    field,
    updateField,
    handleTextChange,
    // handleSegmentChange,
    handleSwitchChange,
  };
};

export default useFieldController;
