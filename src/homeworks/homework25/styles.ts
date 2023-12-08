import styled from "styled-components";
import { colors } from "styles/colors";

export const Homework25Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 70px;
  width: 100%;
  height: 100%;
  gap: 100px;
  background-color: ${colors.primary};
`;

export const ShopForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 500px;
  min-height: 500px;
  max-width: fit-content;
  max-height: fit-content;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  min-width: 300px;
  min-height: 300px;
  max-height: fit-content;
  max-width: fit-content;
  padding: 20px;
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

export const ErrorContainer = styled.div`
  min-height: 20px;
  font-size: 20px;
  color: red;
`;
