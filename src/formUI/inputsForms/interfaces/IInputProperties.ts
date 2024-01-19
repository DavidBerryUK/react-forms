import IFormInstance from "../../../forms/interfaces/IFormInstance";
import IFormSchema from "../../../forms/interfaces/IFormSchema";
import ISchemaField from "../../../forms/interfaces/ISchemaField";
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
