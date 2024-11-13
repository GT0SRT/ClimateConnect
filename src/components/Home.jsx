import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  fetchWeatherRequest,
  fetchWeatherSuccess,
  fetchWeatherFailure,
} from "../Store";
import "../App.css";
import { RxCaretDown } from "react-icons/rx";

const WeatherApp = ({ weatherData, loading, error, fetchWeather }) => {
  const [city, setCity] = useState("");

  const findHandle = async () => {
    await fetchWeather(city);
  };

  console.log(weatherData);
  return (
    <>
    <div className="h-[100vh] lg:h-[50vh] mt-3">
          <h1 className='text-center permanent-marker-regular font-bold m-[100px] text-[60px] text-[#ff7a32] mb-0'>Stay <span className='text-[100px] text-[black]'>Ahead</span> of the Storm</h1>
          <h5 className='text-center text-[32px] text-[#b2b2b2] mb-[180px]'>Get up-to-the-minute forecasts and live weather alerts</h5>
          <div className="flex inline text-[#ff7a32] items-center justify-center font-extrabold">
            <h5 className='text-center text-[22px]'>Scroll Down</h5>
            <RxCaretDown size={50}/>
          </div>
      </div>
      <div className="mt-[50vh]">
        <h1 className='text-center rowdies-regular font-bold text-white m-[100px] text-[36px] mb-0'>Know Weather Details about Any City</h1>
        <div className="flex items-center justify-center">
          <input
              type="text"
              placeholder="Enter a City Name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="h-7 p-3 m-3 rounded-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7a32]"
          />
          <button onClick={findHandle} className="bg-[#ff7a32] text-white h-7 w-[64px] rounded-lg hover:bg-[White] hover:border-2 hover:border-[#ff7a32] hover:text-black focus:outline-none">
            Search
          </button>
        </div>
        <div className="flex items-center justify-center">
        <div className="bg-[#ff7a32] rounded-xl w-[320px] m-7 p-7">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {weatherData && (
            <div>
              <div>
                <img src={weatherData?.current?.condition.icon} alt="" />
                <p>{weatherData?.current?.condition.text}</p>
              </div>
              <div>
                <p>
                  Temperature : <span>{weatherData?.current?.temp_c}c</span>
                </p>
                <p>
                  Humidity : <span>{weatherData?.current?.humidity}</span>
                </p>
                <p>
                  Wind Speed : <span>{weatherData?.current.wind_kph}kph</span>
                </p>
              </div>
              <div>
                {Object.keys(weatherData?.location).map((key) => (
                  <p key={key}>
                    {key} : <span>{weatherData.location[key]}</span>
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  weatherData: state.weather.weatherData,
  loading: state.weather.loading,
  error: state.weather.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchWeather: (city) => {
    dispatch(fetchWeatherRequest());
    fetchWeatherData(city)
      .then((data) => dispatch(fetchWeatherSuccess(data)))
      .catch((err) => dispatch(fetchWeatherFailure(err.message)));
  },
});

// feathermatch function

async function fetchWeatherData(city = "Delhi") {
  const API_KEY = "a32a47acdf464b23bc6153029241311";
  const response = await axios.get(
    `https://api.weatherapi.com/v1/current.json?q=${city}&key=${API_KEY}`
  );
  console.log(response);
  if (response.status !== 200) {
    throw new Error("Failed to fetch weather data");
  }
  return response.data;
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);