// Add weather API key below
const key = '';

const getWeather = async (city) => {

  console.log(city);
  const base = "https://api.openweathermap.org/data/2.5/weather";
  //const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?q=${city}&appid=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  console.log(data);

  return data;

};
