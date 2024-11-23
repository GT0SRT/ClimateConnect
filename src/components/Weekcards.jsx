import React from 'react'

    const Weekcards = ( {day, imgIcon, status, temp, realTemp, humid, wind, dew, prep} ) => {
    
  return (
    <>
        <div className="mt-6 mb-6 w-[150px] max-w-sm mx-auto hover:scale-105">
            <div className="bg-[#e3e2e281] p-2 rounded-lg hover:bg-[#ff7a3244] items-center justify-center">
            <h1 className='text-[0.5rem] rowdies-bold p-3 text-center font-bold text-[#ff7a32]'>{day}</h1>
                <div className="flex flex-col text-center items-center justify-center p-3">
                    <img src={` https://openweathermap.org/img/wn/${imgIcon}`} className="w-[40px] md:w-[50px]" alt=""/>
                    <p className="font-semibold text-[#727272] text-[0.4rem] md:text-[0.7rem]">{status}</p>
                    <h1 className='text-[#ff7a32] libre-baskerville-bold text-xl md:text-4xl font-bold flex flex-col p-2'>{temp}°C</h1>
                    <p className="font-semibold p-0 text-[#727272] text-[0.4rem] md:text-[0.7rem]">Real Feel: {realTemp}°C</p>
                    <p className="font-semibold p-0 text-[#727272] text-[0.4rem] md:text-[0.7rem]">Humidity : <span>{humid}</span></p>
                    <p className="font-semibold p-0 text-[#727272] text-[0.4rem] md:text-[0.7rem]">Wind Speed : <span>{wind}kph</span></p>
                    <p className="font-semibold p-0 text-[#727272] text-[0.4rem] md:text-[0.7rem]">Dew Point : <span>{dew}</span></p>
                    <p className="font-semibold p-0 text-[#727272] text-[0.4rem] md:text-[0.7rem]">Precipitation : <span>{prep}</span></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Weekcards