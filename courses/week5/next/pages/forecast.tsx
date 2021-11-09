import Link from "next/link";
import React, { FC, useState } from "react";
//import './App.css';
import { LocationSearch } from "./weather/LocationSearch";
import { LocationTable } from "./weather/LocationTable";
import { WeatherLocation } from "./weather/Weather";
import { searchLocation } from "./weather/WeatherService";
import { ErrorAlert, WarningAlert } from "./weather/Alert";
import { WeatherSummary } from "./weather/WeatherSummaty";
export default function Forecast() {
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
    <>
      <div>
        <div className="text-right p-3">
          <Link href="/">
            <a className="inline-block p-1 text-green-600 bg-white ring-2 ring-green-600 hover:text-green-800 hover:color-green600 rounded shadow-xl">
              Back to main page
            </a>
          </Link>
        </div>

        <div className="container text-center items-center rouded shadow-xl">
          <h1 className="py-2">Weather by your city</h1>
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
      </div>
    </>
  );
}
