import { ReactNode, useState } from "react";

class FormData {
  private data: Record<string, string> = {
    one: "1",
    two: "2",
    three: "3",
  };

  clone(): FormData {
    const copy = new FormData();
    copy.data = this.data;
    return copy;
  }

  getValue(fieldName: string): string | undefined {
    return this.data[fieldName];
  }

  setValue(fieldName: string, value: string): void {
    this.data[fieldName] = value;
  }
}

export const UIDemoFormPerson = () => {
  const [formData, setFormData] = useState(new FormData());

  const onFormUpdated = (form: FormData) => {
    setFormData(form);
  };

  return (
    <div>
      <h1>test</h1>
      <UIForm>
        <UIField form={formData} fieldName="one" onUpdated={onFormUpdated} />
        <UIField form={formData} fieldName="two" onUpdated={onFormUpdated} />
        <UIField form={formData} fieldName="three" onUpdated={onFormUpdated} />
      </UIForm>
    </div>
  );
};

interface IFormProperties {
  children?: ReactNode;
}
const UIForm: React.FC<IFormProperties> = (props) => {
  return <div>{props.children}</div>;
};

interface IFieldProperties {
  form: FormData;
  fieldName: string;
  onUpdated: (form: FormData) => void;
}
const UIField: React.FC<IFieldProperties> = (props) => {
  const handleOnChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const clone = props.form.clone();
    clone.setValue(props.fieldName, value);
    props.onUpdated(clone);
  };

  return <input value={props.form.getValue(props.fieldName)} onChange={handleOnChangeEvent} />;
};
