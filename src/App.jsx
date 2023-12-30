import { useState,useEffect } from 'react'
import './App.css'
import Search from './components/Search'
import WeatherCard from './components/WeatherCard'
function App() {
  const [search,setSearch] = useState();
  const [weatherData, setWeatherData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  
  const fetchWeatherData = async () => {
    
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=12dcb6a71c15f72048c29784b269d3b8`);
      const data = await response.json()
      if(data.cod === "404"){
        setLoading(false);
        setError(data.message)
        setSearch("");
      }else{
        setLoading(false);
        setError("");
        setWeatherData(data);
        setSearch("");
      }
    
  }
  // useEffect(() => {
  //   const fetchWeatherData = async () => {
  //     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=12dcb6a71c15f72048c29784b269d3b8`);
  //     const data = await response.json()
  //     console.log("data", data);
  //     setWeatherData(data);
  //   }
  // },[search])
  
  const searchPressed = async() =>{
    fetchWeatherData();
  }

  return (
    
    <div className='h-screen bg-weather bg-no-repeat bg-opacity-75" relative'>
      <div className='absolute inset-0 w-full h-full bg-gray-700 bg-opacity-75'>
      {/* <Search search={search} setSearch={setSearch}/> */}
      {
        loading && <h2>Loading</h2>
      }
      {
        !loading &&
        <WeatherCard
          weatherData={weatherData} 
          search={search} 
          setSearch={setSearch} 
          searchPressed={searchPressed}
          error={error}
          loading={loading}
        />
      }
      </div>
    </div>
  )
}

export default App
