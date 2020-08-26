import {
  CloudLightning,
  CloudRain,
  CloudDrizzle,
  CloudSnow,
  Cloud,
  Sun,
  Circle,
} from "react-feather";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Weather() {
  const [days, setDays] = useState([]);

  useEffect(() => {
    axios.get(`/api/weather`)
      .then((res) => {
        setDays(res.data.days)
      });
  }, []);

  return (
    <div className="weather-wrapper">
      <h3>Weather</h3>
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
          padding-top: 15px;
        }

        .weather-wrapper h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .weather-container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;

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
          width: 100px;
          text-align: center;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1.5rem;
          border: 2px solid #eaeaea;
          margin-right: 10px;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .day-container :hover,
        .day-container :active,
        .day-container :focus {
          color: #0070f3;
          border-color: #0070f3;
        }
      `}</style>
    </div>
  );
}
