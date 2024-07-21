import { useState } from "react";
import Loader from "../components/Loader";

export default function NextDaysBoard() {
  const [weather, setWeather] = useState({
    latitude: 52.52,
    longitude: 13.419998,
    generationtime_ms: 0.5640983581542969,
    utc_offset_seconds: 7200,
    timezone: "Europe/Berlin",
    timezone_abbreviation: "CEST",
    elevation: 38,
    daily_units: {
      time: "iso8601",
      weather_code: "wmo code",
      temperature_2m_max: "°C",
      temperature_2m_min: "°C",
      apparent_temperature_max: "°C",
      apparent_temperature_min: "°C",
      sunrise: "iso8601",
      sunset: "iso8601",
      daylight_duration: "s",
      sunshine_duration: "s",
      uv_index_max: "",
      uv_index_clear_sky_max: "",
      precipitation_sum: "mm",
      rain_sum: "mm",
      showers_sum: "mm",
      snowfall_sum: "cm",
      precipitation_hours: "h",
      precipitation_probability_max: "%",
      wind_speed_10m_max: "km/h",
      wind_gusts_10m_max: "km/h",
      wind_direction_10m_dominant: "°",
      shortwave_radiation_sum: "MJ/m²",
      et0_fao_evapotranspiration: "mm",
    },
    daily: {
      time: [
        "2024-07-21",
        "2024-07-22",
        "2024-07-23",
        "2024-07-24",
        "2024-07-25",
        "2024-07-26",
        "2024-07-27",
      ],
      weather_code: [61, 80, 80, 3, 3, 3, 61],
      temperature_2m_max: [32.5, 25.4, 26.3, 22.8, 23.6, 23.1, 25],
      temperature_2m_min: [18.8, 19.5, 16.1, 15.3, 12.6, 15.5, 17.6],
      apparent_temperature_max: [33, 25.3, 24.8, 20.1, 22.4, 22.5, 25.6],
      apparent_temperature_min: [18.8, 19.8, 16.5, 14.5, 11.5, 15.1, 18.4],
      sunrise: [
        "2024-07-21T05:10",
        "2024-07-22T05:11",
        "2024-07-23T05:13",
        "2024-07-24T05:14",
        "2024-07-25T05:16",
        "2024-07-26T05:17",
        "2024-07-27T05:19",
      ],
      sunset: [
        "2024-07-21T21:14",
        "2024-07-22T21:13",
        "2024-07-23T21:12",
        "2024-07-24T21:10",
        "2024-07-25T21:09",
        "2024-07-26T21:07",
        "2024-07-27T21:06",
      ],
      daylight_duration: [
        57872.45, 57704.96, 57534.13, 57360.21, 57183.38, 57003.87, 56821.88,
      ],
      sunshine_duration: [
        45342.83, 30004.97, 20617.88, 47833.43, 52560.59, 22096.67, 39071.11,
      ],
      uv_index_max: [6.6, 6.25, 5.95, 6.35, 6.25, 5.7, 5.4],
      uv_index_clear_sky_max: [6.6, 6.35, 6.45, 6.35, 6.4, 6.25, 6.2],
      precipitation_sum: [1, 0.1, 0.8, 0, 0, 0, 1.5],
      rain_sum: [1, 0.1, 0.1, 0, 0, 0, 0.6],
      showers_sum: [0, 0, 0.7, 0, 0, 0, 0.9],
      snowfall_sum: [0, 0, 0, 0, 0, 0, 0],
      precipitation_hours: [2, 1, 3, 0, 0, 0, 9],
      precipitation_probability_max: [74, 84, 71, 63, 19, 6, 16],
      wind_speed_10m_max: [14.1, 17.9, 13.5, 16.3, 11, 9.4, 9.8],
      wind_gusts_10m_max: [55.1, 43.2, 35.6, 41.4, 30.2, 24.1, 31],
      wind_direction_10m_dominant: [120, 280, 226, 292, 293, 165, 240],
      shortwave_radiation_sum: [
        24.35, 14.09, 14.03, 20.58, 25.79, 13.92, 15.66,
      ],
      et0_fao_evapotranspiration: [5.54, 3.43, 3.19, 4.29, 4.56, 2.98, 3.21],
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&timezone=auto"
  //     )
  //     .then((response) => {
  //       setWeather(response.data);
  //       console.log(response.data);
  //       setIsLoading(false);
  //     });
  // }, []);

  console.log(weather.daily);

  return (
    <div>
      <div>
        {!isLoading ? (
          <ul className="flex gap-4 overflow-x-auto">
            {weather.daily.time.map((day, index) => (
              <li key={index} className="bg-base-200 rounded-box w-fit">
                <div className="bg-base-300 p-4 rounded-box">
                  <p>{day}</p>
                </div>
                <div className="flex p-4 gap-2">
                  <p className="text-2xl font-bold">
                    {weather.daily.temperature_2m_max[index]}°C
                  </p>
                  {weather.daily.weather_code[index]}
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-3">
                  <div>
                    <p>
                      sunrise :{" "}
                      {new Date(
                        weather.daily.sunrise[index]
                      ).toLocaleTimeString()}
                    </p>{" "}
                  </div>
                  <div>
                    <p>
                      sunset :{" "}
                      {new Date(
                        weather.daily.sunset[index]
                      ).toLocaleTimeString()}
                    </p>{" "}
                  </div>
                  <div>
                    <p>
                      daylight duration :{" "}
                      {new Date(
                        weather.daily.daylight_duration[index]
                      ).toLocaleTimeString()}
                    </p>{" "} 
                  </div>
                    <div>
                      <p>
                        sunshine duration :{" "}
                        {new Date(
                          weather.daily.sunshine_duration[index]
                        ).toLocaleTimeString()}
                      </p>{" "} 
                    </div>
                    <div>
                      <p>
                        uv index max :{" "}
                        {new Date(
                          weather.daily.uv_index_max[index]
                        ).toLocaleTimeString()}
                      </p>{" "} 
                    </div>
                    <div>
                      <p>
                        uv index clear sky max :{" "}
                        {new Date(
                          weather.daily.uv_index_clear_sky_max[index]
                        ).toLocaleTimeString()}
                      </p>{" "} 
                    </div>
                    <div>
                      <p>
                        precipitation sum :{" "}
                        {new Date(
                          weather.daily.precipitation_sum[index]
                        ).toLocaleTimeString()}
                      </p>{" "} 
                    </div>
                    <div>
                      <p>
                        rain sum :{" "}
                        {new Date(
                          weather.daily.rain_sum[index]
                        ).toLocaleTimeString()}
                      </p>{" "} 
                    </div>
                    <div>
                      <p>
                        showers sum :{" "}
                        {new Date(
                          weather.daily.showers_sum[index]
                        ).toLocaleTimeString()}
                      </p>{" "} 
                    </div>
                    <div>
                      <p>
                        snowfall sum :{" "}
                        {new Date(
                          weather.daily.snowfall_sum[index]
                        ).toLocaleTimeString()}
                      </p>{" "} 
                    </div>
                    <div>
                      <p>
                        precipitation hours :{" "}
                        {new Date(
                          weather.daily.precipitation_hours[index]
                        ).toLocaleTimeString()}
                      </p>{" "} 
                    </div>
                    <div>
                      <p>
                        precipitation probability max :{" "}
                        {new Date(
                          weather.daily.precipitation_probability_max[index]
                        ).toLocaleTimeString()}
                      </p>{" "} 
                    </div>
                    <div>
                      <p>
                        wind speed 10m max :{" "}
                        {new Date(
                          weather.daily.wind_speed_10m_max[index]
                        ).toLocaleTimeString()}
                      </p>{" "} 
                    </div>
                    <div>
                      <p>
                        wind gusts 10m max :{" "}
                        {new Date(
                          weather.daily.wind_gusts_10m_max[index]
                        ).toLocaleTimeString()}
                      </p>{" "} 
                    </div>
                    <div>
                      <p>
                        wind direction 10m dominant :{" "}
                        {new Date(
                          weather.daily.wind_direction_10m_dominant[index]
                        ).toLocaleTimeString()}
                      </p>{" "} 
                    </div>
                    <div>
                      <p>
                        shortwave radiation sum :{" "}
                        {new Date(
                          weather.daily.shortwave_radiation_sum[index]
                        ).toLocaleTimeString()}
                      </p>{" "} 
                    </div>
                    <div>
                      <p>
                        et0_fao_evapotranspiration :{" "}
                        {new Date(
                          weather.daily.et0_fao_evapotranspiration[index]
                        ).toLocaleTimeString()} 
                      </p>{" "} 
                    </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
