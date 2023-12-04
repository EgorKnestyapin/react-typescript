import { ButtonComponent } from "./styles";
import { ButtonProps } from "./types";

function Button({
  disabled = false,
  name = "Send",
  type = "submit",
  onClick,
  isRedFont,
}: ButtonProps) {
  return (
    <ButtonComponent
      disabled={disabled}
      type={type}
      onClick={onClick}
      $isRedFont={isRedFont}
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;
