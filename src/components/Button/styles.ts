import styled from "styled-components";

interface ButtonComponentProps {
  $isRedFont?: boolean | undefined;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  height: fit-content;
  margin: 0;
  padding: 18px;
  outline: none;
  cursor: pointer;
  background-color: ${(props) => (props.disabled ? "grey" : "blue")};
  color: ${(props) => (props.$isRedFont ? "red" : "white")};
  font-size: 18px;
`;
