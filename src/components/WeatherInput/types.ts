import { ChangeEventHandler } from "react";

export interface InputProps {
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  type?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  name?: string;
}
