import styled from "styled-components";
import { colors } from "styles/colors";

export const Homework25Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 70px;
  width: 100%;
  height: 100%;
  gap: 100px;
  background-color: ${colors.primary};
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-width: 500px;
  min-height: 500px;
  padding: 40px;
  border-radius: 8px;
  background-color: white;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: rgb(123, 54, 247);
`;

export const ProductParSmall = styled.p`
  font-size: 16px;
  color: grey;
`;

export const ProductParBig = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
