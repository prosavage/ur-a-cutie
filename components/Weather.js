import {
  CloudLightning,
  CloudRain,
  CloudDrizzle,
  CloudSnow,
  Cloud,
  Sun,
  Circle,
} from "react-feather";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Weather() {
  const [days, setDays] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=32.609856&lon=-85.480782&appid=${process.env.WEATHER_API_KEY}&part=daily&units=Imperial`
      )
      .then((res) => {
        setDays(
          res.data.daily.map((day) => {
            return {
              icon: day.weather[0].main,
              desc: day.weather[0].description.replace(" intensity", ""),
              date: format(new Date(day.dt * 1000), "MM/dd"),
              temp: { day: day.temp.day, night: day.temp.night },
            };
          })
        );
      });
  }, []);

  return (
    <div className="weather-wrapper">
      <p>Weather</p>
      <div className="weather-container">
        {days.map((day) => {
          return <Day info={day} />;
        })}
      </div>

      <style jsx>{`
        .weather-wrapper {
          display: flex;
          flex-direction: column;

          justify-content: center;
          align-items: center;
        }

        .weather-wrapper p {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .weather-container {
          display: flex;
          flex-direction: row;

          padding-top: 15px;
        }
      `}</style>
    </div>
  );
}

function Day(props) {
  const getIcon = (iconString) => {
    switch (iconString) {
      case "Thunderstorm":
        return <CloudLightning />;
        break;
      case "Rain":
        return <CloudRain />;
        break;
      case "Drizzle":
        return <CloudDrizzle />;
        break;
      case "Snow":
        return <CloudSnow />;
        break;
      case "Atmosphere":
        return <Circle />;
        break;
      case "Clear":
        return <Sun />;
        break;
      case "Clouds":
        return <Cloud />;
        break;
    }
  };

  return (
    <div className="day-container">
      <p>{props.info.date.toString()}</p>
      {getIcon(props.info.icon)}
      <p>{props.info.temp.day}&#176;</p>
      <p>{props.info.desc}</p>

      <style jsx>{`
        .day-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1.5rem;
          border: 2px solid #eaeaea;
         margin: 0 10px;
         border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
