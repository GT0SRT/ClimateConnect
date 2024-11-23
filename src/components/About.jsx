import React from 'react'

const About = () => {
    return (
        <>
            <div className='p-5 flex flex-col items-center justify-center'>
                <h1 className='text-[36px] rowdies-bold p-3 text-center font-bold text-[#ff7a32]'>About us
                <span className='block mt-2 mx-auto w-[64px] border-t-4 '></span>
                </h1>
                <p className='p-[20px] font-semibold text-[rgb(114,114,114)] text-[16px] md:ml-[10%] md:mr-[10%]'>Welcome to Climate Connect—your personal weather companion, built to provide you with accurate, real-time weather updates wherever you are. Our goal is simple: to keep you connected with the climate around you, so you can plan your day with confidence.</p>
                <div className='md:ml-[10%] md:mr-[10%] md:flex'>
                  <div className='flex flex-col'>
                    <div>
                      <h1 className='text-[36px] rowdies-bold p-3 text-center font-bold text-[#ff7a32]'>Our Mission
                      <span className='block mt-2 mx-auto w-[64px] border-t-4'></span>
                      </h1>
                    </div>
                    <div>
                      <p className='p-[20px] font-semibold text-[#727272] text-[16px]'>At Climate Connect, we believe that understanding the weather shouldn’t be complicated. Whether you’re planning your commute, a weekend getaway, or just deciding what to wear, we provide clear, accurate, and timely weather information at your fingertips.</p>
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <div>
                      <h1 className='text-[36px] rowdies-bold p-3 text-center font-bold text-[#ff7a32]'>Our Vision
                      <span className='block mt-2 mx-auto w-[64px] border-t-4'></span>
                      </h1>
                    </div>
                    <div>
                      <p className='p-[20px] font-semibold text-[#727272] text-[16px]'>We’re continuously working to improve Climate Connect, adding new features and expanding our capabilities. Our goal is to become your trusted source for all things weather-related, empowering you to make informed decisions, every day.</p>
                    </div>
                  </div>
                </div>
                <h1 className='text-[36px] rowdies-bold p-3 text-center font-bold text-[#ff7a32]'>Why Choose Climate Connect?
                <span className='block mt-2 mx-auto w-1/4 border-t-4'></span>
                </h1>
                <p className='p-[30px] text-[16px] text-[#727272] md:ml-[10%] md:mr-[10%]'>
                  <li><span className='font-bold'>Real-Time Weather Updates:</span> Get up-to-the-minute forecasts for your location, no matter where you are.</li>
                  <li><span className='font-bold'>Hourly & Weekly Forecasts:</span> Plan ahead with detailed forecasts, including hourly and weekly predictions for your area.</li>
                  <li><span className='font-bold'>Global Coverage:</span> No matter where you are in the world, Climate Connect provides you with localized, accurate weather data.</li>
                  <li><span className='font-bold'>Air Quality and Pollen Count:</span> Get detailed information on local air quality, pollen levels, and other environmental factors that affect your health, so you can plan your day safely.</li>
                  <li><span className='font-bold'>Clothing & Activity Recommendations:</span> Based on current weather conditions, receive suggestions for the best clothing or outdoor activities to suit the day’s forecast.</li>
                  <li><span className='font-bold'>Climate Insights:</span> Dive deeper into long-term weather trends and access historical weather data to understand patterns and prepare for future weather changes.</li>
                  <li><span className='font-bold'>Sustainability Focus:</span> Stay informed about environmental issues, including climate change, and receive tips on how you can reduce your carbon footprint and live more sustainably.</li>
                  <li><span className='font-bold'>Accuracy:</span> Powered by trusted sources, we provide the most accurate weather forecasts you can rely on, ensuring you're always prepared for whatever weather comes your way.</li>
                  <li><span className='font-bold'>User-Friendly Interface:</span> Designed with simplicity in mind, Climate Connect’s interface is easy to navigate and makes checking the weather quick and hassle-free.</li>
                </p>
            </div>
        </>
    )
}

export default About