import axios from 'axios'

const API_KEY = 'ae5421bb91f1ec14ba8ff82dcbb6b079'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},de`
    const request = axios.get(url).catch(function(err){console.log(err)})
    return {type: FETCH_WEATHER, payload: request}
}