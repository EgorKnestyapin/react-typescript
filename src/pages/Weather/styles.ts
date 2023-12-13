import styled from "styled-components";
import { colors } from "styles/colors";
import WeatherIcon from "assets/weather.png";

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 30px;
  background-image: url(${WeatherIcon});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  color: ${colors.white};
  border-bottom: 1px solid #d2d2d2;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 100%
    ),
    rgba(18, 45, 77, 0.5);
  backdrop-filter: blur(8.899999618530273px);
`;

export const InputButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 120px;
  gap: 12px;
`;
