import {
  CloudLightning,
  CloudRain,
  CloudDrizzle,
  CloudSnow,
  Cloud,
  Sun,
  Circle,
  Moon,
  Sunrise,
} from "react-feather";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailedDay from "./DetailedDay";

export default function Weather(props) {
  const [selectedDay, setSelectedDay] = useState(undefined);

  return (
    <div className="weather-wrapper">
      <h3>Weather</h3>
      <div className="weather-container">
        {!selectedDay &&
          props.days.map((day) => {
            return (
              <Day
                onSelectEvent={() => {
                  setSelectedDay(day);
                }}
                info={day}
              />
            );
          })}
        {selectedDay && <Day detailed info={selectedDay} />}
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
    <div
      onClick={props.onSelectEvent}
      className={`day-container`}
    >
      {!props.detailed && <div className={"mini-data-container minimal"}>
        <p>{props.info.date.toString()}</p>
        {getIcon(props.info.icon)}
        <p>{props.info.temp.day}&#176;</p>
        <p>{props.info.desc}</p>
      </div>}

      {props.detailed && (
        <DetailedDay info={props.info}/>
      )}

      <style jsx>{`
        .minimal {
          min-width: 100px;
          max-height: 200px;
        }


        .day-container {
          
          display: flex;
          text-align: center;
          flex-direction: row;
          justify-content: center;
          padding: 1.5rem;
          border: 2px solid #eaeaea;
          margin-right: 10px;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .mini-data-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 600px) {
          .mini-data-container {
            flex-direction: row;
            justify-content: space-between;
          }

          .minimal {
            width: 300px;
          }

          .day-container {
            margin-bottom: 15px;
          }
        }

        .day-container :hover,
        .day-container :active,
        .day-container :focus {
          color: #023e8a;
          border-color: #023e8a;
        }
      `}</style>
    </div>
  );
}
