import LinkGridCard from "./LinkGridCard";

function LinkGrid() {

  const links = [
    {
      title: "MTG List",
      description: "Useful list of mtg cards.",
      link: "https://gatherer.wizards.com/Pages/Default.aspx",
    },
    {
      title: "Pics of Archie",
      description: "Feeling Down? Check these.",
      link: "https://www.icloud.com/sharedalbum/#B0OGWZuqDJpPvsa",
    },
    {
      title: "Doordash",
      description: "Hungry? Feeling Lazy? Check this.",
      link: "https://doordash.com"
    }
  ]


  return <><div className="grid">
    {links.map(link => <LinkGridCard title={link.title} description={link.description} link={link.link} />)}
  </div>
    <style jsx>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        `}</style>
  </>
}

export default LinkGrid;