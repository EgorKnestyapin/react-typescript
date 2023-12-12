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
  const APP_ID = "339eefdb8be5d321edc00550315211c1";
  const [city, setCity] = useState<string>("");
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfoData>({
    temp: "",
    feelsLike: "",
    icon: "",
    cityName: "",
  });
  const [weatherError, setWeatherError] = useState<string>("");

  const onChangeCity = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const getWeatherInfo = async (CITY_NAME: string) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${APP_ID}`
    );
    if (response.ok) {
      setWeatherError("");
      const data = await response.json();
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
      setWeatherError("Something went wrong with API data");
    }
  };

  return (
    <WeatherWrapper>
      <HeaderWrapper>Weather App</HeaderWrapper>
      <InputButtonWrapper>
        <WeatherInput placeholder="Enter city name" onChange={onChangeCity} />
        <WeatherButton name="Search" onClick={() => getWeatherInfo(city)} />
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
