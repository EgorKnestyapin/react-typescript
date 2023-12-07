import styled from "styled-components";

interface InputComponentsProps {
  $error: string | undefined;
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  gap: 8px;
`;

export const LabelComponent = styled.label`
  color: grey;
`;

export const InputStyle = styled.input<InputComponentsProps>`
  display: flex;
  height: 48px;
  padding: 12px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};
  border: ${({ $error }) => (!!$error ? "1px solid red" : "1px solid black")};
`;

export const ErrorContainer = styled.div`
  width: 100%;
  height: fit-content;
  color: red;
`;
