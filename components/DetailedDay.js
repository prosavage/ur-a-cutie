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
  Droplet,
  Umbrella,
  Wind,
  Sunset,
} from "react-feather";
import { getIcon } from "./Weather";

export default function DetailedDay(props) {
  return (
    <div className={"detailed-content-row"}>
      <div className={"detailed-content-container"}>
        <div className={"detailed-content-row"}>
          {getIcon(props.info.icon)}
          <div className={"detailed-content-column"}>
            <div className={"spacer"}>
              <p>{props.info.date_full}</p>
            </div>
            <div className={"spacer"}>
              <p>{props.info.desc}</p>
            </div>
          </div>
        </div>

        <div className={"detailed-content-container"}>
          <div className={"detailed-content-row"}>
            <div className={"spacer"}>
              <Droplet />
            </div>
            <div className={"spacer"}>
              <p>Humidity: {props.info.details.humidity}%</p>
            </div>
          </div>
        </div>

        <div className={"detailed-content-container"}>
          <div className={"detailed-content-row"}>
            <div className={"spacer"}>
              <Umbrella />
            </div>
            <div className={"spacer"}>
              <p>
                {props.info.details.rain
                  ? "Rain: " + props.info.details.rain + "mm"
                  : "No rain!"}
              </p>
            </div>
          </div>
        </div>

        <div className={"detailed-content-container"}>
          <div className={"detailed-content-row"}>
            <div className={"spacer"}>
              <Wind />
            </div>
            <div className={"spacer"}>
              <p>Wind: {props.info.details.wind}mph</p>
            </div>
          </div>
        </div>
      </div>

      <div className={"detailed-content-row"}>
        <TempBreakdown header={"Feels Like"} temps={props.info.feels} />
        <TempBreakdown header={"Actual Temp"} temps={props.info.temp} />
      </div>
      <style jsx>{`
        .detailed-content-container {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .detailed-content-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          padding-top: 2px;
        }

        .spacer p {
          margin: 0px;
        }

        .spacer {
          padding: 2px 5px;
          text-align: left;
        }

        .detailed-content-column {
          display: flex;
          flex-direction: column;
          padding: 0px 5px;
        }
      `}</style>
    </div>
  );
}

function TempBreakdown(props) {
  return (
    <div>
      <div className={"detailed-content-column"}>
        <p className={"no-margin"}>{props.header}</p>
        <div className={"detailed-content-row"}>
          <div className={"spacer"}>
            <Sunrise />
          </div>
          <div className={"spacer"}>
            <p>{props.temps.morn} &#176;</p>
          </div>
        </div>
        <div className={"detailed-content-row"}>
          <div className={"spacer"}>
            <Sun />
          </div>
          <div className={"spacer"}>
            <p>{props.temps.day} &#176;</p>
          </div>
        </div>
        <div className={"detailed-content-row"}>
          <div className={"spacer"}>
            <Sunset />
          </div>
          <div className={"spacer"}>
            <p>{props.temps.even} &#176;</p>
          </div>
        </div>
        <div className="detailed-content-row">
          <div className={"spacer"}>
            <Moon />
          </div>
          <div className={"spacer"}>
            <p>{props.temps.night} &#176;</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .no-margin-bottom {
          margin-top: 5px;
        }

        .no-margin {
          margin: 0px;
        }

        .detailed-content-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          padding-top: 2px;
        }

        .spacer p {
          margin: 0px;
        }

        .spacer {
          padding: 2px 5px;
          text-align: left;
        }

        .detailed-content-column {
          display: flex;
          flex-direction: column;
          padding: 0px 5px;
        }
      `}</style>
    </div>
  );
}
