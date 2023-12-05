import Input from "components/Input";
import { ButtonContainer, Homework22Wrapper, LoginCard } from "./styles";
import Button from "components/Button";

function Homework22() {
  return (
    <Homework22Wrapper>
      <LoginCard>
        <Input labelName="Email" />
        <Input labelName="Password" />
        <ButtonContainer>
          <Button name="Login" onClick={() => console.log("Login Action")} />
        </ButtonContainer>
      </LoginCard>
    </Homework22Wrapper>
  );
}
export default Homework22;
