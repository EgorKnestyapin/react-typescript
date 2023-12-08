import {
  ErrorContainer,
  InputContainer,
  InputStyle,
  LabelComponent,
} from "./styles";
import { InputProps } from "./types";

function Input({
  labelName,
  placeholder = "Enter",
  disabled = false,
  value,
  name,
  onChange,
  error = undefined,
  type,
}: InputProps) {
  return (
    <InputContainer>
      <LabelComponent htmlFor={labelName + "Input"}>{labelName}</LabelComponent>
      <InputStyle
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
        id={labelName + "Input"}
        disabled={disabled}
        $error={error}
      />
      <ErrorContainer>{error}</ErrorContainer>
    </InputContainer>
  );
}

export default Input;
