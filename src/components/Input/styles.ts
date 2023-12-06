import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  gap: 8px;
`;

export const LabelComponent = styled.label`
  color: grey;
`;

export const InputStyle = styled.input`
  display: flex;
  height: 48px;
  padding: 12px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};
`;
