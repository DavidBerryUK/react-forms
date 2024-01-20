import IFormInstance from "../../../forms/interfaces/form/IFormInstance";
import IFormSchema from "../../../forms/interfaces/form/IFormSchema";
import ISchemaField from "../../../forms/interfaces/schema/ISchemaField";
import FormInstance from "../../../forms/models/FormInstance";

interface IInputPropertiesBase {
  form: IFormInstance<IFormSchema>;

  field: ISchemaField;

  rowId?: string | number | null | undefined;

  allowBlankNumbers?: boolean;

  hideTitle?: boolean;

  disabled?: boolean;

  // Events - form has been updated
  onUpdate?: (form: FormInstance<any>) => void;
}

export type IInputProperties = IInputPropertiesBase;
