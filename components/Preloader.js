import Loader from "react-loader-spinner";
function Preloader(props) {
    return (
        <div className={`loading-container ${props.dark ? "dark" : ""}`}>
            <Loader
                type="Hearts"
                color={props.dark ? "#ED64A6" : "#F687B3"}
                height={50}
                width={50}
                timeout={10000}
            />
            <code className={`${props.dark ? "dark-code" : ""}`}>project ur-a-cutie</code>
            <style jsx>{`
      .dark {
        background: #212121;
        color: white;
      }

      .dark-code {
        color: black;
      }
      .loading-container {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }
    `}</style>
        </div>
    );
}

export default Preloader;