import React, { FC } from "react";
import { Weather } from "./Weather";
import { getIconUrl } from "./WeatherService";
import { convertUnixTimeToDate } from "./TimeUtilities";

interface WeatherEntryProps {
  weather: Weather;
}

export const WeatherEntry: FC<WeatherEntryProps> = ({ weather }) => (
  <div className="inline-block justify-center content-center items-center">
    <div>------------------------------------</div>
    <div>{convertUnixTimeToDate(weather.dt).toLocaleTimeString()}</div>
    <div>
      <strong>{weather.main.temp}°C</strong>
      <div>
        ({weather.main.temp_min}°C / {weather.main.temp_max}°C)
      </div>
    </div>
    <div>Humidity: {weather.main.humidity}%</div>
    {weather.weather.map((condition) => (
      <div
        className="items-center text-center content-center "
        key={condition.id}
      >
        <img src={getIconUrl(condition.icon)} alt={condition.main} />{" "}
        {condition.main} {condition.description}
      </div>
    ))}
  </div>
);
