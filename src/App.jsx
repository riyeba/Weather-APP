import { useState, useEffect } from "react";
import WeatherInfo from "./pages/WeatherInfo";

import WeatherMap from "./pages/WeatherMap";
import Info from "./pages/Info";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Day1 from "./pages/Day1";
import Spinner from "./pages/Spinner";

const KEY = "5b92b17720314379950103540230708";
//const query = "Ibadan";

function App() {
  const [dataa, setData] = useState({});
  const [query, setQuery] = useState();
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState({});
  // const [locate, setLocation] = useState({});
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  console.log(forecast);

  useEffect(() => {
    const handleLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        console.log(lat);
        console.log(long);
      });
    };

    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log(result.state);
            handleLocation();
          } else if (result.state === "prompt") {
            console.log("prompt");
          } else if (result.state === "denied") {
            console.log("Denied");
          }
        });
    }
    handleLocation();
  }, [lat, long]);

  useEffect(
    function () {
      async function fetchWeather() {
        try {
          setLoading(true);
          const res = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${lat},${long}&aqi=no`
          );

          if (!res.ok)
            throw new Error("something went wrong with your internet");
          const data = await res.json();
          if (data.Response === "False") throw new Error("data not found");

          setData(data);
          console.log(data.location);
        } catch (err) {
          console.error(err.message);
        }
        setLoading(false);
      }

      fetchWeather();
    },
    [lat, long]
  );

  useEffect(
    function () {
      async function fetchforecast() {
        try {
          const res = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${lat},${long}&days=${3}&aqi=no`
          );

          if (!res.ok)
            throw new Error("something went wrong with your internet");
          const data = await res.json();
          if (data.Response === "False") throw new Error("data not found");

          setForecast(data);
        } catch (err) {
          console.error(err.message);
        }
      }

      fetchforecast();
    },
    [lat, long]
  );

  return (
    <div>
      {isLoading ? (
        <div className="absolute inset-0 bg-blue-600/20 backdrop-blur-sm flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="p-2">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <WeatherInfo
                      dataa={dataa}
                      setQuery={setQuery}
                      lat={lat}
                      long={long}
                      forecast={forecast}
                    />
                  </>
                }
              />

              <Route path="/day0" element={<Day1 data={forecast} />} />
              <Route path="/day1" element={<Day1 data={forecast} day={1} />} />
              <Route path="/day2" element={<Day1 data={forecast} day={2} />} />
              {/* <Route path="/day3" element={<Day1 data={forecast} day={3} />} />
              <Route path="/day4" element={<Day1 data={forecast} day={4} />} />
              <Route path="/day5" element={<Day1 data={forecast} day={5} />} />
              <Route path="/day6" element={<Day1 data={forecast} day={6} />} /> */}

              {/* <Route path="/" element={<WeatherMap lat={lat} long={long} />} /> */}
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
