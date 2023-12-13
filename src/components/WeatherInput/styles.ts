import styled from "styled-components";
import { colors } from "styles/colors";

export const InputStyle = styled.input`
  display: flex;
  width: 550px;
  height: 48px;
  padding: 20px;
  cursor: auto;
  border-radius: 40px;
  outline: none;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  color: white;
  &::placeholder {
    color: ${colors.white};
  }
`;
