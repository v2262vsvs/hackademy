import { Weather, WeatherLocation } from "./Weather";

const key: string = (process.env.REACT_APP_OPEN_WEATHER_API_KEY =
  "f6d524e34ab1296ef965fa0c2ff7dc15" as string);
//REACT_APP_OPEN_WEATHER_API_KEY = "f6d524e34ab1296ef965fa0c2ff7dc15";
//key="f6d524e34ab1296ef965fa0c2ff7dc15";
if (key === undefined) {
  throw new Error(
    "No Open Weather API Key defined - ensure you set a variable called REACT_APP_OPEN_WEATHER_API_KEY"
  );
}

const keyQuery = `appid=${key}`;
const server = "http://api.openweathermap.org/data/2.5";

export async function searchLocation(
  term: string
): Promise<WeatherLocation | undefined> {
  const result = await fetch(`${server}/weather?q=${term}&${keyQuery}`);

  if (result.status === 404) return undefined;
  if (result.status !== 200) throw new Error("Failed to read location data");

  return await result.json();
}

export async function readWeather(locationId: number): Promise<Weather> {
  const current = await fetch(
    `${server}/weather?id=${locationId}&${keyQuery}&units=metric`
  );

  if (current.status !== 200) throw new Error("Failed to read location data");

  return await current.json();
}

export function getIconUrl(code: string): string {
  return `http://openweathermap.org/img/wn/${code}.png`;
}
