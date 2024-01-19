import UIInputText from "../../formUI/inputRules/InputText/UIInputText";
import UILabel from "../../formUI/UILabel";
import UIValidationMessage from "../../formUI/UIValidationMessage";
import useViewController from "./UseViewController";

const UIDemoForenameSurname = () => {
  const {
    forename,
    surname,
    forenameRules,
    surnameRules,
    forenameValidationMessage,
    surnameValidationMessage,
    handleForenameChanged,
    handleSurnameChanged,
  } = useViewController();

  return (
    <div>
      <div>
        <UILabel caption="Forename">
          <UIInputText value={forename} onChange={handleForenameChanged} rules={forenameRules.current} />
        </UILabel>
        <UIValidationMessage name="name" message={forenameValidationMessage} />
      </div>
      <div>
        <UILabel caption="Surname">
          <UIInputText value={surname} onChange={handleSurnameChanged} rules={surnameRules.current} />
        </UILabel>
        <UIValidationMessage name="name" message={surnameValidationMessage} />
      </div>
    </div>
  );
};

export default UIDemoForenameSurname;
