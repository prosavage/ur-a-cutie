import Head from 'next/head'
import { useEffect, useState } from "react";
import { Sun, Moon } from "react-feather"
import Weather from '../components/Weather';
import axios from "axios";
import Loader from 'react-loader-spinner'

export default function Home() {

  const [dark, setDark] = useState(false);
  const [compliment, setCompliment] = useState("");
  const [days, setDays] = useState([]);

  useEffect(() => {
    setDark(window.localStorage.getItem("theme") === "dark")
    axios.get("/api/compliment").then(res => setCompliment(res.data.compliment))
  }, [])

  useEffect(() => {
    axios.get(`/api/weather`)
      .then((res) => {
        setDays(res.data.days)
      });
  }, []);

  if (compliment.length === 0 || days.length === 0) {
    return <div className={`loading-container ${dark ? "dark" : ""}`}>
      <Loader
        type="Hearts"
        color="#023e8a"
        height={50}
        width={50}
        timeout={10000}
      />
      <code className={`${dark ? "dark-code" : ""}`}>project ur-a-cutie</code>

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
  }

  return (
    <div className={`container ${dark ? "dark" : ""}`} >
      <Head>
        <title>Hey Cutie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Hi, Megan.
        </h1>

        <p className="description">
          I hope you're having a great day.
        </p>

        <div className="toggle-container">
          {dark && <Sun onClick={() => {
            window.localStorage.setItem("theme", "light")
            setDark(false)
          }} />}
          {!dark && <Moon onClick={() => {
            window.localStorage.setItem("theme", "dark")
            setDark(true)
          }} />}
        </div>

        <code className={`${dark ? "dark-code" : ""}`}>
          Always Remember: {compliment}</code>

        <Weather days={days} />

        <div className="grid">


          <a href="https://auburn.instructure.com" className="card">
            <h3>Canvas &rarr;</h3>
            <p>School is important!</p>
          </a>

          <a
            href="https://auaccess.auburn.edu"
            className="card"
          >
            <h3>AUAccess &rarr;</h3>
            <p>You're amazing.</p>
          </a>

          <a
            href="https://outlook.office.com"
            className="card"
          >
            <h3>Outlook &rarr;</h3>
            <p>Check yo' email.</p>
          </a>

          <a href="https://amazon.com" className="card">
            <h3>Amazon &rarr;</h3>
            <p>Shoppin'.</p>
          </a>

          <a
            href="https://youtube.com"
            className="card"
          >
            <h3>Youtube &rarr;</h3>
            <p>
              Try Guys & more.
            </p>
          </a>

          <a
            href="https://www.google.com/search?q=cute+dog+pics&sxsrf=ALeKk02j6LDqo0A0nBh_6_NvSNw6S3Rksg:1598465971025&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiQso3jvbnrAhVwplkKHZ5qAk0Q_AUoAXoECA0QAw&biw=896&bih=984"
            className="card"
          >
            <h3>Cute Dog Pics &rarr;</h3>
            <p>
              In case you are feeling sad.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://github.com/ProSavage/ur-a-cutie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code className={`${dark ? "dark-code" : ""}`}>project ur-a-cutie</code>
        </a>
        
      </footer>

      <style jsx>{`

        .dark {
          background: #212121;
          color: white;
        }

        .dark-code {
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

        .toggle-container {
          padding-bottom: 25px;

          color: p
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
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

        code:hover,
        code:active,
        code:focus {
          color: #023e8a;
          border-color: #023e8a;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 2px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #023e8a;
          border-color: #023e8a;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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
      `}</style>
    </div>

  )
}
