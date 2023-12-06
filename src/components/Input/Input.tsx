import { InputContainer, InputStyle, LabelComponent } from "./styles";
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
      <LabelComponent htmlFor={labelName + "Input"}>{labelName}</LabelComponent>
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
