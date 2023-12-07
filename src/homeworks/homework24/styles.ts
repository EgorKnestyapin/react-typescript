import { styled } from "styled-components";
import { colors } from "styles/colors";

export const Homework24Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 70px;
  width: 100%;
  height: 100%;
  gap: 100px;
  background-color: ${colors.primary};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  height: 400px;
  padding: 30px;
  gap: 10px;
  background-color: white;
`;

export const TextSmall = styled.p`
  font-size: 20px;
`;

export const TextBig = styled.p`
  font-size: 30px;
  color: red;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`;
