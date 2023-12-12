import { ApiError, ErrorMessage, WeatherErrorWrapper } from "./styles";
import { WeatherErrorProps } from "./types";

function WeatherError({ error }: WeatherErrorProps) {
  return (
    <WeatherErrorWrapper>
      <ApiError>API Error</ApiError>
      <ErrorMessage>{error}</ErrorMessage>
    </WeatherErrorWrapper>
  );
}

export default WeatherError;
