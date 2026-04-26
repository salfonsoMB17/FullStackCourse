import axios from 'axios'

const api_key = import.meta.env.VITE_WEATHER_API_KEY
const baseUrl = 'https://api.openweathermap.org/data/2.5'

const getWeatherByCity = (city) => {
  const request = axios.get(`${baseUrl}/weather`, {
    params: {
      q: city,
      appid: api_key,
      units: 'metric'
    }
  })
  return request.then(response => response.data)
}

export default { getWeatherByCity }
