/* eslint-disable react/prop-types */
import React from 'react'
import sunImage from '../assets/sun.png'
const WeatherCard = ({weatherData, search, setSearch,searchPressed,error}) => {
    console.log("wd",weatherData)
    const convertToTime = (input) =>{
        var date = new Date(input * 1000);

    // Hours part from the timestamp
    var hours = date.getHours();

    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();

    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
    console.log(formattedTime);
    
    return formattedTime
}
  return (
    <div className='rounded-br-3xl w-3/4 m-auto mt-40 shadow-2xl p-8'>
        <div className='text-3xl font-bold text-center mb-4 text-white'> Weather Finder</div>
        <div className='flex flex-row gap-2'>
            <input
                className='h-12 bg-transparent border-2 border-slate-500 px-2 py-0 flex-1 text-white' 
                type="text"
                value={search}
                onChange={(e)=> setSearch(e.target.value)} 
                placeholder="Which City? (ex: London)"/>
            <button
                onClick={searchPressed}
                type="button" 
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-3.5 text-center me-2 mb-2">
                Search City
            </button>
        </div>
        <div className='text-xl text-red-500'>{error}</div>
        {
            weatherData.name &&
            <div className='flex flex-row gap-8 mt-6'>
            <div className='bg-transparent'>
                <img src={sunImage} className='size-36'/>
                <div className='text-3xl text-slate-200 font-bold'>{weatherData?.name}, {weatherData?.sys?.country}</div>
                <div className='text-md text-slate-400'>{weatherData?.coord?.lat}, {weatherData?.coord?.lon}</div>
                {/* <div className='text-md text-slate-400'>{dateTime}</div> */}
            </div>
            <div className='flex-1 text-center flex flex-row flex-wrap gap-8 bg-transparent'>
                <div>
                    <img src={sunImage} className='size-24'/>
                    <div className='text-md text-slate-400'>temp</div>
                    <div className='text-lg text-slate-300 font-semibold'>{(weatherData?.main?.temp - 273.15).toFixed(2)} °C</div>
                </div>
                <div>
                    <img src={sunImage} className='size-24'/>
                    <div className='text-md text-slate-400'>Feels like</div>
                    <div className='text-lg text-slate-300 font-semibold'>{(weatherData?.main?.feels_like - 273.15).toFixed(2)} °C</div>
                </div>
                <div>
                    <img src={sunImage} className='size-24'/>
                    <div className='text-md text-slate-400'>Humidity</div>
                    <div className='text-lg text-slate-300 font-semibold'>{weatherData?.main?.humidity} %</div>
                </div>
                <div>
                    <img src={sunImage} className='size-24'/>
                    <div className='text-md text-slate-400'>Temp Max</div>
                    <div className='text-lg text-slate-300 font-semibold'>{(weatherData?.main?.temp_max - 273.15).toFixed(2)} °C</div>
                </div>
                <div>
                    <img src={sunImage} className='size-24'/>
                    <div className='text-md text-slate-400'>Temp Min</div>
                    <div className='text-lg text-slate-300 font-semibold'>{(weatherData?.main?.temp_min - 273.15).toFixed(2)} °C</div>
                </div>
                {
                    weatherData?.weather &&
                    <div>
                        <img src={sunImage} className='size-24'/>
                        <div className='text-md text-slate-400'>Description</div>
                        {
                            weatherData.weather.map((item)=>(
                                <div key={item.id} className='text-lg text-slate-300 font-semibold'>{item.description}</div>
                            ))
                        }
                            
                    </div>
                }
                
                <div>
                    <img src={sunImage} className='size-24'/>
                    <div className='text-md text-slate-400'>Sunrise</div>
                    <div className='text-lg text-slate-300 font-semibold'>{convertToTime(weatherData?.sys?.sunrise)}</div>
                </div>
                <div>
                    <img src={sunImage} className='size-24'/>
                    <div className='text-md text-slate-400'>Sunset</div>
                    <div className='text-lg text-slate-300 font-semibold'>{convertToTime(weatherData?.sys?.sunset)}</div>
                </div>
                <div>
                    <img src={sunImage} className='size-24'/>
                    <div className='text-md text-slate-400'>Sunset</div>
                    <div className='text-lg text-slate-300 font-semibold'>{weatherData?.wind?.speed} km/h</div>
                </div>
            </div>
        </div>
        }
        
    </div>
  )
}
export default WeatherCard