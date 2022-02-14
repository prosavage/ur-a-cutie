function LinkGridCard(props) {
    return <>
        <a key={props.link} href={props.link} className={"card"}>
            <h3>{props.title} &rarr;</h3>
            <p>{props.description}</p>
        </a>
        <style jsx>{`
        .dark .card:hover,
        .dark .card:active,
        .dark .card:focus {
          color: #ED64A6;
          border-color: #ED64A6;
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

        @media(max-width: 850px) {
          .card {
            width: 300px;
          }
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #F687B3;
          border-color: #F687B3;
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
            `}
            </style>
    </>
}

export default LinkGridCard;