import Input from "components/Input";
import { ButtonContainer, Homework22Wrapper, LoginCard } from "./styles";
import Button from "components/Button";
import { useState, ChangeEvent } from "react";

function Homework22() {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const onChangeEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const onChangePasswordValue = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  return (
    <Homework22Wrapper>
      <LoginCard>
        <Input
          labelName="Email"
          value={emailValue}
          onChange={onChangeEmailInput}
          placeholder="Enter"
        />
        <Input
          labelName="Password"
          value={passwordValue}
          onChange={onChangePasswordValue}
          placeholder="Enter"
        />
        <ButtonContainer>
          <Button name="Login" onClick={() => console.log("Login Action")} />
        </ButtonContainer>
      </LoginCard>
    </Homework22Wrapper>
  );
}
export default Homework22;
