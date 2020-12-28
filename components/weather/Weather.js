import {Circle, Cloud, CloudDrizzle, CloudLightning, CloudRain, CloudSnow, Sun,} from "react-feather";
import {useState} from "react";
import DetailedDay from "./DetailedDay";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import Day from "./Day";

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
                            dark={props.dark}
                        />
                    );
                })}
                {selectedDay && (
                    <Day
                        onSelectEvent={() => {
                            setSelectedDay(undefined);
                        }}
                        detailed
                        info={selectedDay}
                        dark={props.dark}
                    />
                )}
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

export const getIcon = (iconString) => {
  switch (iconString) {
      case "Thunderstorm":
          return <CloudLightning/>;
          break;
      case "Rain":
          return <CloudRain/>;
          break;
      case "Drizzle":
          return <CloudDrizzle/>;
          break;
      case "Snow":
          return <CloudSnow/>;
          break;
      case "Atmosphere":
          return <Circle/>;
          break;
      case "Clear":
          return <Sun/>;
          break;
      case "Clouds":
          return <Cloud/>;
          break;
  }
};