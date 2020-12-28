import {Circle, Cloud, CloudDrizzle, CloudLightning, CloudRain, CloudSnow, Sun,} from "react-feather";
import {useState} from "react";
import DetailedDay from "./DetailedDay";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

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

function Day(props) {


    return (
        <div
            onClick={props.onSelectEvent}
            className={`day-container ${props.dark ? "dark-day-container" : ""}`}
        >
            {!props.detailed && (
                <SkeletonTheme color="#BEBDBD" highlightColor={props.dark ? "#7CFFCB" : "#eaeaea"}>
                    <div className={"mini-data-container minimal"}>
                        <p>{props.info?.date?.toString() || <Skeleton width={"100px"}/>}</p>
                        {getIcon(props?.info?.icon) || <Skeleton circle={true} height={35} width={35}/>}

                        {props?.info?.temp?.day ? <p>{props?.info?.temp?.day}</p> : <p><Skeleton width={"100px"}/></p>}
                        <p>{props?.info?.desc || <Skeleton width={"100px"}/>}</p>
                    </div>
                </SkeletonTheme>
            )}

            {props.detailed && <DetailedDay info={props.info}/>}

            <style jsx>{`
        .minimal {
          width: 100px;
          max-height: 200px;
          cursor: pointer;
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

        @media (max-width: 850px) {
          .mini-data-container {
            flex-direction: row;
            justify-content: space-between;
          }

          .minimal {
            width: 300px;
            min-height: auto;
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

        .dark-day-container:hover,
        .dark-day-container:active,
        .dark-day-container:focus {
          color: #7cffcb;
          border-color: #7cffcb;
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