import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { GET_WEATHER_QUERRY } from "../Querry/querris";
import "./Panel.css";

export function Panel() {
  const [citySearched, setCitySearched] = useState("");
  const [getWeather, { data, error, loading }] = useLazyQuery(
    GET_WEATHER_QUERRY,
    {
      variables: { name: citySearched },
    }
  );

  if (error) return <h1> Error found</h1>;
  if (loading) return <h1>loading...</h1>;

  if (data) {
    console.log(data);
  }

  return (
    <div className="home">
      <h1>Search For Weather</h1>
      <input
        type="text"
        placeholder="City name..."
        onChange={(event) => {
          setCitySearched(event.target.value);
        }}
      />
      <button onClick={() => getWeather()}> Search</button>
      <div className="weather">
        {data && (
          <>
            <h1> {data.getCityByName.name} </h1>
            <h1>
              {" "}
              Temperature: {data.getCityByName.weather.temperature.actual}
            </h1>
            <h1>
              Description: {data.getCityByName.weather.summary.description}
            </h1>
            <h1>Wind Speed: {data.getCityByName.weather.wind.speed}</h1>
          </>
        )}
      </div>
    </div>
  );
}
