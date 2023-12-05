import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  gap: 8px;
  margin: 8px;
`;

export const InputStyle = styled.input`
  display: flex;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};
`;
