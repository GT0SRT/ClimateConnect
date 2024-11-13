import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../components/Cards';

const titles = [
  "Current Weather",
  "Hourly Forecast",
  "7-Day Forecast",
  "Weather Alerts",
  "Radar",
  "Air Quality Index (AQI)",
  "UV Index",
  "Wind Speed and Direction",
  "Precipitation Forecast",
  "Sunrise and Sunset Times",
  "Weather Maps",
  "Weather Widgets",
  "Satellite Imagery",
  "Historical Weather Data",
  "Weather News",
  "Tide and Moon Phases",
  "Global Weather Data",
  "Storm Tracking",
  "Weather Maps and Charts",
  "Seasonal Weather Forecasts",
  "Location-based Custom Weather Updates",
  "Emergency Preparedness Resources",
  "Weather in Your Area",
  "Climate Change Awareness",
  "Weather-Based Travel Advisories"
];

const descriptions = [
  "Provides the current temperature, weather conditions, and other immediate weather details.",
  "An hour-by-hour forecast for the upcoming day to help users plan activities in the near future.",
  "A detailed 7-day weather forecast, including temperature ranges and predicted conditions for each day.",
  "Alerts users about extreme weather conditions such as storms, hurricanes, blizzards, and heatwaves.",
  "Interactive radar maps showing precipitation patterns, storm locations, and weather fronts in real-time.",
  "Provides real-time data on air pollution levels and air quality.",
  "Shows the forecast of ultraviolet radiation levels and recommendations on sun safety.",
  "Current wind conditions, including speed and direction, along with future forecasts.",
  "Details about expected rain, snow, or other precipitation over the next few days.",
  "Shows the times for sunrise and sunset, useful for outdoor activities and planning.",
  "Interactive maps visualizing weather patterns like temperature, pressure, and cloud cover.",
  "Pre-configured weather widgets for embedding on personal or business websites showing live weather data.",
  "Satellite images showing cloud cover, storms, and other weather events globally.",
  "Provides past weather data for specific locations, like temperature and condition history.",
  "Latest news about weather, climate change, and extreme weather events.",
  "Information about tide schedules and lunar phases for coastal areas.",
  "Weather data for multiple locations around the world with global forecasts.",
  "Real-time tracking of major storms like hurricanes or typhoons with projected paths.",
  "Graphical representation of weather patterns, including temperature, pressure, and more.",
  "Long-term weather forecasts for different seasons, helping users plan ahead.",
  "Personalized weather updates based on the user's location.",
  "Tips and resources for preparing for extreme weather events like hurricanes and floods.",
  "Localized, real-time weather data for specific cities or zip codes.",
  "Educational resources about climate change and its environmental impact.",
  "Alerts and recommendations for travelers based on weather conditions."
];

const User = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const fetchedImages = [];
        for (let title of titles) {
          const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${title}&per_page=1`,
            {
              headers: {
                Authorization: 'Client-ID wFxie94suFFqw5nHyZelsOhjKODnVod-tBNIFQ3xsgw',
              },
            }
          );
          const data = await response.json();
          const imageUrl = data.results[0] ? data.results[0].urls.small : 'https://via.placeholder.com/150'; // Fallback image
          fetchedImages.push(imageUrl);
        }
        setImages(fetchedImages);
      } catch (error) {
        console.error('Error fetching images from Unsplash', error);
      }
    };

    fetchImages();
  }, []); // Empty dependency array to run only once after component mount

  return (
    <>
      <div className="flex-wrap flex">
        {titles.map((title, index) => (
          <Cards 
            title={title}
            des={descriptions[index]}
            imgSrc={images[index]}
          />
        ))}
      </div>
    </>
  );
};

export default User;