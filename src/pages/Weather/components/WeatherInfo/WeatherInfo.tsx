import {
  CityName,
  FeelsLikeIcon,
  FeelsLikeIconWrapper,
  FeelsLikeTemp,
  FeelsLikeWrapper,
  IconWrapper,
  MainWeatherWrapper,
  Temp,
  TempWrapper,
  WeatherInfoWrapper,
} from "./styles";
import { WeatherInfoProps } from "./types";
import TempIcon from "assets/temp.png";

function WeatherInfo({ temp, icon, cityName, feelsLike }: WeatherInfoProps) {
  return (
    <MainWeatherWrapper>
      <WeatherInfoWrapper>
        <TempWrapper>
          <Temp>{temp}</Temp>
          <CityName>{cityName}</CityName>
        </TempWrapper>
        <IconWrapper>
          <img
            src={`https://openweathermap.org/img/w/${icon}.png`}
            alt="weatherIcon"
          />
        </IconWrapper>
      </WeatherInfoWrapper>
      <FeelsLikeWrapper>
        <FeelsLikeIconWrapper>
          <FeelsLikeIcon src={TempIcon} alt="tempIcon" />
          <span style={{ color: "grey" }}>Feels like</span>
        </FeelsLikeIconWrapper>
        <FeelsLikeTemp>{feelsLike}</FeelsLikeTemp>
      </FeelsLikeWrapper>
    </MainWeatherWrapper>
  );
}

export default WeatherInfo;
