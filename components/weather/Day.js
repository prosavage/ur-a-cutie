import { getIcon } from "./Weather";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import DetailedDay from "./DetailedDay";

function Day(props) {

    return (
        <>
        <div
            whileHover={{scale: 1.1}}
            transition={{ duration: 0.5 }}
            onClick={props.onSelectEvent}
            className={`day-container ${props.dark ? "dark-day-container" : ""}`}
        >
            {!props.detailed && (
                <SkeletonTheme color="#BEBDBD" highlightColor={props.dark ? "#ED64A6" : "#eaeaea"}>
                    <div className={"mini-data-container minimal"}>
                        <p>{props.info?.date?.toString() || <Skeleton width={"100px"} />}</p>
                        {getIcon(props?.info?.icon) || <Skeleton circle={true} height={35} width={35} />}

                        {props?.info?.temp?.day ? <p>{props?.info?.temp?.day}</p> : <p><Skeleton width={"100px"} /></p>}
                        <p>{props?.info?.desc || <Skeleton width={"100px"} />}</p>
                    </div>
                </SkeletonTheme>
            )}

            {props.detailed && <DetailedDay info={props.info} />}

           
        </div>
        <style jsx>{`
        .minimal {
          width: 100px;
          height: 200px;
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
            height: auto;
          }

          .day-container {
            margin-bottom: 15px;
          }
        }

        .day-container :hover,
        .day-container :active,
        .day-container :focus {
          color: #F687B3;
          border-color: #F687B3;
        }

        .dark-day-container:hover,
        .dark-day-container:active,
        .dark-day-container:focus {
          color: #ED64A6;
          border-color: #ED64A6;
        }
      `}</style>
        </>
    );
}




export default Day;