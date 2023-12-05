import { InputContainer, InputStyle } from "./styles";
import { InputProps } from "./types";

function Input({
  labelName,
  placeholder = "Enter",
  disabled = false,
  value,
  onChange,
}: InputProps) {
  return (
    <InputContainer>
      <label htmlFor={labelName + "Input"}>{labelName}</label>
      <InputStyle
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        id={labelName + "Input"}
        disabled={disabled}
      />
    </InputContainer>
  );
}

export default Input;
