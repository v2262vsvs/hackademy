import React, { FC, useState } from "react";
//import './App.css';
import { LocationSearch } from "../weather/LocationSearch";
import { LocationTable } from "../weather/LocationTable";
import { WeatherLocation } from "../weather/Weather";
import { searchLocation } from "../weather/WeatherService";
import { ErrorAlert, WarningAlert } from "../weather/Alert";
import { WeatherSummary } from "../weather/WeatherSummaty";

const Forecast: FC = () => {
  const [locations, setLocations] = useState<WeatherLocation[]>([]);
  const [error, setError] = useState("");
  const [warning, setWarning] = useState("");
  const [currentLocation, setCurrentLocation] =
    useState<WeatherLocation | null>(null);

  const resetAlerts = () => {
    setError("");
    setWarning("");
  };

  let addLocation = async (term: string) => {
    resetAlerts();
    const location = await searchLocation(term);

    if (!location) {
      setError(`No location found called '${term}'`);
    } else if (locations.find((item) => item.id === location.id)) {
      setWarning(`Location '${term}' is already in the list.`);
    } else {
      setLocations([location, ...locations]);
    }
  };

  return (
    <div className="container">
      <h1>Weather by your city</h1>
      <LocationSearch onSearch={addLocation} />
      <ErrorAlert message={error} />
      <WarningAlert message={warning} />
      <LocationTable
        locations={locations}
        current={currentLocation}
        onSelect={(location) => setCurrentLocation(location)}
      />

      <WeatherSummary location={currentLocation} />
    </div>
  );
};
export default Forecast;
