import styled from "styled-components";
import { colors } from "styles/colors";

export const MainWeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const WeatherInfoWrapper = styled.div`
  display: flex;
  width: 709px;
  height: 129px;
  background: linear-gradient(
    134deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  backdrop-filter: blur(4px);
  border-radius: 20px;
`;

export const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
  margin-left: 30px;
  color: ${colors.white};
`;

export const Temp = styled.p`
  font-size: 57px;
`;

export const CityName = styled.p`
  font-size: 18px;
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const FeelsLikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 223px;
  height: 141px;
  padding: 10px 30px;
  gap: 6px;
  background: linear-gradient(
    134deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  backdrop-filter: blur(4px);
  border-radius: 18px;
`;

export const FeelsLikeIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 30px;
`;

export const FeelsLikeIcon = styled.img`
  height: 100%;
`;

export const FeelsLikeTemp = styled.p`
  font-size: 42px;
  color: ${colors.white};
`;
