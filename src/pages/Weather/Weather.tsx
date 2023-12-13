import { useState, ChangeEvent } from "react";
import WeatherInput from "components/WeatherInput";
import { HeaderWrapper, InputButtonWrapper, WeatherWrapper } from "./styles";
import WeatherButton from "components/WeatherButton";
import WeatherInfo from "./components/WeatherInfo";
import WeatherError from "./components/WeatherError";

interface WeatherInfoData {
  temp: string;
  feelsLike: string;
  icon: string;
  cityName: string;
}

function Weather() {
  const [city, setCity] = useState<string>("");
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfoData>({
    temp: "",
    feelsLike: "",
    icon: "",
    cityName: "",
  });
  const [weatherError, setWeatherError] = useState<string>("");
  const APP_ID: string = "339eefdb8be5d321edc00550315211c1";
  const URL_WEATHER: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`;

  const onChangeCity = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const getWeatherInfo = async () => {
    const response = await fetch(URL_WEATHER);
    const data = await response.json();
    if (response.ok) {
      setWeatherError("");
      const tempFromData = data.main.temp;
      const feelsLikeTempFromData = data.main.feels_like;
      setWeatherInfo({
        temp: `${Math.round(tempFromData - 273.15)}°`,
        icon: `${data.weather[0].icon}`,
        cityName: `${data.name}`,
        feelsLike: `${Math.round(feelsLikeTempFromData - 273.15)}°`,
      });
    } else {
      setWeatherInfo({ temp: "", icon: "", cityName: "", feelsLike: "" });
      setWeatherError(data.message);
    }
  };

  return (
    <WeatherWrapper>
      <HeaderWrapper>Weather App</HeaderWrapper>
      <InputButtonWrapper>
        <WeatherInput placeholder="Enter city name" onChange={onChangeCity} />
        <WeatherButton name="Search" onClick={getWeatherInfo} />
      </InputButtonWrapper>
      {weatherInfo.cityName && (
        <WeatherInfo
          temp={weatherInfo.temp}
          icon={weatherInfo.icon}
          cityName={weatherInfo.cityName}
          feelsLike={weatherInfo.feelsLike}
        />
      )}
      {weatherError && <WeatherError error={weatherError} />}
    </WeatherWrapper>
  );
}

export default Weather;
