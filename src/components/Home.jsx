import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import aqiImage from '../assets/aqi.png';
import humidity from '../assets/humidity.png';
import pressure from '../assets/pressure.png';
import windspeed from '../assets/windspeed.png';
import {
  fetchWeatherRequest,
  fetchWeatherSuccess,
  fetchWeatherFailure,
} from "../Store";
import "../App.css";
import { FaArrowDown } from "react-icons/fa6";
import Testimonials from './Testimonials'
import Weekcards from "./Weekcards";

const WeatherApp = ({ weatherData, loading, error, fetchWeather }) => {
  const [city, setCity] = useState("");

  const findHandle = async () => {
    await fetchWeather(city);
  };
  console.log(weatherData);

  const weekData = [
    {"day": "Day 1", "temp": 19, "real_feel": 17, "humidity": 65, "wind_speed": 12, "dew_point": 12, "precipitation": 0.2, "status": "Cold and Misty", "imgIcon": "50d.png"},
    {"day": "Day 2", "temp": 18, "real_feel": 16, "humidity": 68, "wind_speed": 14, "dew_point": 11, "precipitation": 0, "status": "Clear and Sunny", "imgIcon": "01d.png"},
    {"day": "Day 3", "temp": 17, "real_feel": 15, "humidity": 70, "wind_speed": 10, "dew_point": 10, "precipitation": 0.1, "status": "Foggy and Cool", "imgIcon": "50d.png"},
    {"day": "Day 4", "temp": 18, "real_feel": 17, "humidity": 67, "wind_speed": 13, "dew_point": 11, "precipitation": 0, "status": "Partly Cloudy", "imgIcon": "02d.png"},
    {"day": "Day 5", "temp": 19, "real_feel": 18, "humidity": 66, "wind_speed": 12, "dew_point": 13, "precipitation": 0.3, "status": "Cold with Light Rain", "imgIcon": "09d.png"},
    {"day": "Day 6", "temp": 20, "real_feel": 19, "humidity": 63, "wind_speed": 15, "dew_point": 14, "precipitation": 0.1, "status": "Sunny and Breezy", "imgIcon": "01d.png"},
    {"day": "Day 7", "temp": 21, "real_feel": 20, "humidity": 60, "wind_speed": 14, "dew_point": 15, "precipitation": 0, "status": "Warm and Clear", "imgIcon": "01d.png"}
]


  const today = new Date();
  const currentDay = today.getDay();
  const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let nextDays =[];
  for (let i = 1; i <= 7; i++) {
    nextDays[i-1] = Days[(currentDay + i) % 7];
  }

  return (
    <>

        <div className="m-0 flex p-0">
          <div className="w-1/3 flex flex-col items-center justify-center m-12 p-5">
            <h1 className='text-[#ff7a32] libre-baskerville-bold text-[1.5rem] md:text-4xl font-bold flex flex-col text-center'>WELCOME TO ClimateConnect</h1>
            <p className="font-semibold text-[#727272] text-center text-[1.2rem] pt-3 pb-3">Stay Ahead of the Storm</p>
            <button onClick={findHandle} className="hover:bg-[#ff7a32] hover:text-white h-10 w-[80px] rounded-3xl bg-[White] border-2 border-[#ff7a32] text-black focus:outline-none">
               Search
            </button>
          </div>
          <div className="md:w-1/2 mt-32 md:mt-0" to="search">
            <img src="https://img.freepik.com/premium-vector/clouds-sun-cartoon-white-background-vector_566661-19137.jpg?w=826" alt="" />
          </div>
        </div>
        <div className="flex items-center justify-center mt-7 text-[#ff7a32] animate-bounce">
          <FaArrowDown size={50} className="hover:cursor-pointer border-2 border-[#e9e8e8d7] rounded-full p-2"/>
        </div>

        <div className="flex items-center justify-center mt-12 mb-12" id="search">
          <input
              type="text"
              placeholder="Enter a City Name" 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="h-12 w-1/2 p-5 m-3 rounded-3xl bg-[#e3e2e281] focus:outline-none focus:ring-2 focus:ring-[#ff7a32]"
          />
          <button onClick={findHandle}
            onKeyDown={(e) => { if (e.key === 13) findHandle(); }}
            className="bg-[#ff7a32] text-white h-12 w-[80px] rounded-3xl hover:bg-[White] hover:border-2 hover:border-[#ff7a32] hover:text-black focus:outline-none">
            Search
          </button>
        </div>
        <div>
          {loading && <p className='text-center ml-[40%]'>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {weatherData && (
            <>
            <h1 className='text-[36px] rowdies-bold p-3 text-center font-bold text-[#ff7a32]'>{weatherData.location.name}
              <span className='block mt-2 mx-auto w-[64px] border-t-4 '></span>
            </h1>
            <div className="mt-6 mb-6 w-1/2 max-w-sm mx-auto hover:scale-105">
            <div className="bg-[#e3e2e281] p-2 rounded-lg hover:bg-[#ff7a3244] flex items-center justify-center">
              <div className="flex">
                <div className="flex flex-col text-center">
                  <img src={weatherData.current.condition.icon} className="w-[40px] md:w-[50px]" alt=""/>
                  <p className="font-semibold text-[#727272] text-[1.2vw]">{weatherData.current.condition.text}</p>
                </div>
                <div className="flex flex-col p-2">
                  <h1 className='text-[#ff7a32] libre-baskerville-bold text-xl md:text-4xl font-bold flex flex-col'>{weatherData.current.temp_c}°C</h1>
                  <p className="font-semibold p-1 text-[#727272] text-[0.4rem] md:text-[0.8rem]">Real Feel: {weatherData.current.feelslike_c}°C</p>
                </div>
              </div>
              <div className="pl-1">
                <p className="font-semibold p-0 text-[#727272] text-[0.4rem] md:text-[0.7rem]">Humidity : <span>{weatherData.current.humidity}</span></p>
                <p className="font-semibold p-0 text-[#727272] text-[0.4rem] md:text-[0.7rem]">Wind Speed : <span>{weatherData.current.wind_kph}kph</span></p>
                <p className="font-semibold p-0 text-[#727272] text-[0.4rem] md:text-[0.7rem]">Dew Point : <span>{weatherData.current.dewpoint_c}</span></p>
                <p className="font-semibold p-0 text-[#727272] text-[0.4rem] md:text-[0.7rem]">Precipitation : <span>{weatherData.current.precip_mm}</span></p>
              </div>
            </div>
            </div>
            <div className="md:flex md-flex-wrap">
              {
                nextDays.map((day, index) => (
                    <Weekcards
                      key={index}
                      day={day}
                      imgIcon={weekData[index].imgIcon}
                      status={weekData[index].status}
                      temp={weekData[index].temp}
                      realTemp={weekData[index].real_feel}
                      humid={weekData[index].humidity}
                      dew={weekData[index].dew_point}
                      prep={weekData[index].precipitation}
                    />
                ))
              }
            </div>
            </>
          )}
        </div>

        <h1 className='text-[36px] mb-5 rowdies-bold p-3 text-center font-bold text-[#ff7a32]'>Maps
          <span className='block mt-2 mx-auto w-[64px] border-t-4 '></span>
        </h1>
        {/* <h1 className='text-[black] libre-baskerville-bold text-4xl md:text-4xl font-bold flex flex-col text-center p-7 m-5'>Maps</h1> */}
        <div className="m-0 flex p-0">
          <div className="w-1/2">
            <img src="https://www.flightradar24.com/blog/wp-content/uploads/2016/06/Clouds.jpg" alt="" />
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center">
            <h1 className='text-[#ff7a32] libre-baskerville-bold text-3xl md:text-4xl font-bold flex flex-col'>Clouds</h1>
            <p className="ml-7 mr-7 p-3 font-semibold text-[#727272] text-[1.2vw]">This map displays the current cloud coverage across the region, giving us insight into weather patterns and potential for precipitation.</p>
          </div>
        </div>

        <div className="m-0 flex p-0">
          <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="w-1/2 flex flex-col items-center justify-center">
            <h1 className='text-[#ff7a32] libre-baskerville-bold text-3xl md:text-4xl font-bold flex flex-col text-center'>Humidity</h1>
            <p className="ml-1 mr-1 p-2 font-semibold text-[#727272] text-[1.2vw]">This map shows the distribution of moisture in the air, which influences everything from precipitation to how hot the temperature feels.</p>
          </div>
          </div>
          <div className="w-1/2">
            <img src={humidity} alt=""/>
          </div>
        </div>

        <div className="m-0 flex p-0">
          <div className="w-1/2">
            <img src={pressure} alt="" />
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center">
            <h1 className='text-[#ff7a32] libre-baskerville-bold text-3xl md:text-4xl font-bold flex flex-col'>Pressure</h1>
            <p className="ml-7 mr-7 p-3 font-semibold text-[#727272] text-[1.2vw]">This map highlights changes in atmospheric pressure across the region.</p>
            <div className="flex text-[1.2vw] text-[#ffffff] font-extrabold">
              <div className="bg-gradient-to-r from-[#12126c] to-[#1212d3] ... pr-3 pl-3 rounded-s-3xl">hPa</div>
              <div className="bg-gradient-to-r from-[#1212d3] to-[#82cceb] ... pr-3 pl-3">970</div>
              <div className="bg-gradient-to-r from-[#82cceb] to-[#f9fafa] ... pr-3 pl-3">1000</div>
              <div className="bg-gradient-to-r from-[white] to-[#b86464] ... pr-3 pl-3">1030</div>
              <div className="bg-gradient-to-r from-[#b86464] to-[#861515] ... pr-3 pl-3 rounded-e-3xl">1030</div>
            </div>
          </div>
        </div>

        <div className="m-0 flex p-0">
          <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="w-1/2 flex flex-col items-center justify-center">
            <h1 className='text-[#ff7a32] libre-baskerville-bold text-3xl md:text-4xl font-bold flex flex-col text-center'>AQI<span className="text-[1.2vw] text-[#727272]"> ( Air Quality Index )</span></h1>
            <div className="ml-7 mr-7 font-semibold text-[#727272] text-[1.2vw]">
              <div className="flex items-center justify-center">
                <div>Excellent</div>
                <div className="w-10 h-1 bg-[skyblue] ml-2 mt-1"></div>
              </div>
              <div className="flex items-center justify-center">
                <div>Fair</div>
                <div className="w-10 h-1 bg-[#4ce64c] ml-2 mt-1"></div>
              </div>
              <div className="flex items-center justify-center">
                <div>Poor</div>
                <div className="w-10 h-1 bg-[#d7d017] ml-2 mt-1"></div>
              </div>
              <div className="flex items-center justify-center">
                <div>Unhealthy</div>
                <div className="w-10 h-1 bg-[#c42222] ml-2 mt-1"></div>
              </div>
              <div className="flex items-center justify-center">
                <div>Very Unhealthy</div>
                <div className="w-10 h-1 bg-[#b920b9] ml-2 mt-1"></div>
              </div>
              <div className="flex items-center justify-center">
                <div>Dangerous</div>
                <div className="w-10 h-1 bg-[#1616a3] ml-2 mt-1"></div>
              </div>
            </div>
          </div>
          </div>
          <div className="w-1/2">
            <img src={aqiImage} alt="" />
          </div>
        </div>

        <div className="m-0 flex p-0">
          <div className="w-1/2">
            <img src="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/precipitation_forecast.png" alt="" />
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center">
            <h1 className='text-[#ff7a32] libre-baskerville-bold text-2xl md:text-4xl font-bold flex flex-col'>Precipitation</h1>
            <p className="ml-7 mr-7 p-3 font-semibold text-[#727272] text-[1.2vw]">The precipitation map highlights areas experiencing rainfall or snowfall.</p>
            <div className="ml-7 mr-7 font-semibold text-[#727272] text-[1.2vw]">
              <div className="flex items-center justify-center">
                <div>Snowfall</div>
                <div className="w-10 h-1 bg-[skyblue] ml-2 mt-1"></div>
              </div>
              <div className="flex items-center justify-center">
                <div>Rainfall</div>
                <div className="w-10 h-1 bg-[#4ce64c] ml-2 mt-1"></div>
              </div>
              <div className="flex items-center justify-center">
                <div>Heavy Rainfall</div>
                <div className="w-10 h-1 bg-[#166d16] ml-2 mt-1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="m-0 flex p-0">
          <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="w-1/2 flex flex-col items-center justify-center">
            <h1 className='text-[#ff7a32] libre-baskerville-bold text-xl md:text-4xl font-bold flex flex-col text-center'>Wind Speed</h1>
            <div className="flex text-[1.2vw] text-[#ffffff] m-5 font-extrabold">
              <div className="bg-gradient-to-r from-[#493e0a] to-[#836f14] ... pr-3 pl-3 rounded-s-3xl">%</div>
              <div className="bg-gradient-to-r from-[#836f14] to-[#bea32a] ... pr-3 pl-3">0</div>
              <div className="bg-gradient-to-r from-[#bea32a] to-[#ece9db] ... pr-3 pl-3">25</div>
              <div className="bg-gradient-to-r from-[#ece9db] to-[#badcea] ... pr-3 pl-3">50</div>
              <div className="bg-gradient-to-r from-[#badcea] to-[#237c9f] ... pr-3 pl-3">75</div>
              <div className="bg-gradient-to-r from-[#237c9f] to-[#00668f] ... pr-3 pl-3 rounded-e-3xl">100</div>
            </div>
          </div>
          </div>
          <div className="w-1/2">
            <img src={windspeed} alt=""/>
          </div>
        </div>

        <Testimonials />
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
