import { ChangeEventHandler } from "react";

export interface InputProps {
  labelName: string;
  placeholder: string;
  disabled?: boolean;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  name?: string;
  error?: string | undefined;
}
