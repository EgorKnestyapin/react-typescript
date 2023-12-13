import { InputStyle } from "./styles";
import { InputProps } from "./types";

function WeatherInput({
  placeholder = "Enter",
  disabled = false,
  value,
  name,
  onChange,
  type,
}: InputProps) {
  return (
    <InputStyle
      value={value}
      onChange={onChange}
      type={type}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}

export default WeatherInput;
