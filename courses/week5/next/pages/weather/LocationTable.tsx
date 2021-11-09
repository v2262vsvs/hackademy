import React, { FC } from "react";
import { WeatherLocation } from "./Weather";

interface LocationTableProps {
  locations: WeatherLocation[];
  current: WeatherLocation | null;
  onSelect: (location: WeatherLocation) => void;
}

export const LocationTable: FC<LocationTableProps> = ({
  locations,
  onSelect,
  current,
}) => (
  <div className="rounded-md">
    <h2 className="mt-10">Locations</h2>
    <table className="mt-1 text-center inline-block  ">
      <thead>
        <tr>
          <th className="">Name</th>
        </tr>
      </thead>
      <tbody>
        {locations.map((location) => (
          <tr
            key={location.id}
            className={current?.id === location.id ? "table-primary" : ""}
            onClick={() => onSelect(location)}
          >
            <td>{location.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
