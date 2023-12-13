import styled from "styled-components";
import { colors } from "styles/colors";

interface ButtonComponentProps {
  $isRedFont?: boolean | undefined;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 146px;
  height: fit-content;
  margin: 0;
  padding: 12px 40px;
  outline: none;
  cursor: pointer;
  border-radius: 50px;
  border: 2px solid black;
  outline: none;
  background: linear-gradient(0deg, #3678b4 0%, #3678b4 100%),
    linear-gradient(270deg, #362a84 0.23%, #5936b4 94.2%), #4a319f;
  color: ${colors.white};
  font-size: 18px;
`;
