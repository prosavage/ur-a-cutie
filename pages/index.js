import Head from "next/head";
import { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";
import Weather from "../components/weather/Weather";
import axios from "axios";
import Preloader from "../components/Preloader";
import LinkGrid from "../components/links/LinkGrid";
import Footer from "../components/Footer";

export default function Home() {
  const [dark, setDark] = useState(false);
  const [days, setDays] = useState([undefined, undefined, undefined, undefined, undefined]);
  const [compliment, setCompliment] = useState("")


  useEffect(() => {
    setDark(window.localStorage.getItem("theme") === "dark");
    axios.get("/api/compliment").then((res) => {
      setCompliment(res.data.compliment)
    })
    axios.get(`/api/weather`).then((res) => {
      setDays(res.data.days);
    });
  }, []);

  if (compliment.length === 0) {
    return <Preloader dark={dark} />
  }

  return (
    <div className={`container ${dark ? "dark" : ""}`}>
      <Head>
        <title>Hey Cutie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Hi, Naman.</h1>

        <p className="description">I hope you're having a great day.</p>
        <div className="toggle-container">
          {dark ?
            <Sun
              onClick={() => {
                window.localStorage.setItem("theme", "light");
                setDark(false);
              }}
            />
            : <Moon
              onClick={() => {
                window.localStorage.setItem("theme", "dark");
                setDark(true);
              }}
            />
          }
        </div>
        <code className={`${dark ? "dark-code" : ""} compliment`}>
          Always Remember: {compliment}
        </code>

        <Weather days={days} dark={dark} />
        <LinkGrid dark={dark}/>
      </main>
      <Footer dark={dark}/>
      <style jsx>{`
        .dark {
          background: #212121;
          color: white;
        }

        .dark-code {
          color: black;
        }
        
        code:hover,
        code:active,
        code:focus {
          color: #023e8a;
          border-color: #023e8a;
        }

        .dark-code:hover,
        .dark-code:active,
        .dark-code:focus {
          background: #7cffcb;
          border-color: #7cffcb;
          color: black;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .compliment {
          cursor: pointer;
        }

        .toggle-container {
          padding-bottom: 25px;
        }

        main {
          padding: 2.5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .logo {
          height: 1em;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}
      </style>
    </div>
  );
}

