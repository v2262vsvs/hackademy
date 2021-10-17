import React, { FC, useEffect, useState } from "react";
import { WeatherEntry } from "./WeatherEntry";
import { Weather, WeatherLocation } from "./Weather";
import { readWeather } from "./WeatherService";

interface WeatherSummaryProps {
  location: WeatherLocation | null;
}

export const WeatherSummary: FC<WeatherSummaryProps> = ({ location }) => {
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    if (location) {
      readWeather(location.id).then((weather) => setWeather(weather));
    }
  }, [location]);

  if (!location || !weather) return null;

  return (
    <div className="flex items-center justify-items-center ">
      <hr />

      <h2 className="inline-block ml-80">{location.name}</h2>
      <p className="inline-block text-center ">-{">"}</p>
      <div className="inline-block ml-36 mr-4">
        <WeatherEntry weather={weather} />
      </div>
    </div>
  );
};
