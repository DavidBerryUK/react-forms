import UIInputPassword from "../../forms/ui/inputs/uiInputPassword/UIInputPassword";
import UIInputText from "../../forms/ui/inputs/uiInputText/UIInputText";
import UILabel from "../../forms/ui/UILabel";
import UIValidationMessage from "../../forms/ui/UIValidationMessage";
import useViewController from "./UseViewController";

const UIDemoLogin = () => {
  const {
    username,
    password,
    usernameRules,
    passwordRules,
    usernameValidationMessage,
    passwordValidationMessage,
    handleUsernameChanged,
    handlePasswordChanged,
  } = useViewController();

  return (
    <div>
      <div>
        <UILabel caption="username">
          <UIInputText
            value={username}
            onChange={handleUsernameChanged}
            rules={usernameRules.current}
          />
        </UILabel>
        <UIValidationMessage
          name="username"
          message={usernameValidationMessage}
        />
      </div>
      <div>
        <UILabel caption="password">
          <UIInputPassword
            value={password}
            onChange={handlePasswordChanged}
            rules={passwordRules.current}
          />
        </UILabel>
        <UIValidationMessage
          name="Password"
          message={passwordValidationMessage}
        />
      </div>
    </div>
  );
};

export default UIDemoLogin;
