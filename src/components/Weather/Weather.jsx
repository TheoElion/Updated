import axios from 'axios'

// icons
import { BsFillDropletFill } from 'react-icons/bs'
import { TbWind } from 'react-icons/tb'

import { useState, useEffect } from 'react'

const Weather = () => {

    const [location, setLocation] = useState(false)
    const [weather, setWeather] = useState(false)

    const getWeather = async (lat, long) => {
        const res = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                lat: lat,
                lon: long,
                appid: import.meta.env.VITE_OPEN_WEATHER_KEY,
                lang: 'pt_br',
                units: 'metric'
            }
        })
        setWeather(res.data)
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeather(position.coords.latitude, position.coords.longitude)
            setLocation(true)
        })
    }, [])

    if (location == false) {
        return (
            <>
                Nescessario permitir a localizacao
            </>
        )
    } else if (weather === false) {
        return (
            <>
                Carregando dados meteorológicos...
            </>
        )
    } else {

        return (
            <div className='weather-main'>
                <h2>
                    <span>{weather.name}</span>
                    <img src={`https://flagsapi.com/${weather.sys.country}/flat/48.png`} />
                </h2>
                <p id='temperature'>{parseInt(weather.main.temp)}&deg;C</p>
                <div className='weather-description'>
                    <p>{weather.weather[0].description}</p>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
                </div>
                <div className='weather-details'>
                    <p id='humidity'>
                        <BsFillDropletFill />
                        <span>{weather.main.humidity}%</span>
                    </p>
                    <p>
                        <TbWind />
                        <span>{weather.wind.speed}km/h</span>
                    </p>
                </div>

            </div>
        )
    }

}

export default Weather