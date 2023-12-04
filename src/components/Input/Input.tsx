import { InputContainer, InputStyle } from "./styles";
import { InputProps } from "./types";

function Input({
  labelName,
  placeholder = "Enter",
  disabled = false,
}: InputProps) {
  return (
    <InputContainer>
      <label htmlFor={labelName + "Input"}>{labelName}</label>
      <InputStyle
        type="text"
        placeholder={placeholder}
        id={labelName + "Input"}
        disabled={disabled}
      />
    </InputContainer>
  );
}

export default Input;
