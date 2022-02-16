import { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [temperature, setTemperature] = useState(0);
  const [desc, setDesc] = useState("");
  const [city, setCity] = useState("");
  const getWeatherData = (city: any) => {
    axios({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5ab35f5d7c9d25e7bff2036e981b6264`,
    })
      .then((response) => {
        setTemperature(response.data.main.temp - 273.15);
        setDesc(response.data.weather[0].main);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <table>
      <tr>
        <th>
          <h3>Weather Forecast</h3>
        </th>
      </tr>
      <tr>
        <td><p className="weather">{new Date().toLocaleString()}</p></td>
      </tr>
      <tr>
        <td><p className="weather">{city}</p></td>
      </tr>
      <tr>
        <td><p className="weather">{Math.round(temperature * 100) / 100} ℃ - {desc}</p></td>
      </tr>
      <tr>
        <td><input className="input_city" type="text" value={city} placeholder="Enter your city" onChange={(e) => setCity(e.target.value)}/>
        <button className="buttons" onClick={() => {
            getWeatherData(city);
          }}>check</button></td>
      </tr>
    </table>
  );
};

export default Weather;