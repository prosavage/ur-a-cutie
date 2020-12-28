import LinkGridCard from "./LinkGridCard";

function LinkGrid() {

  const links = [
    {
      title: "Canvas",
      description: "School is important!",
      link: "https://auburn.instructure.com"
    },
    {
      title: "AUAccess",
      description: "You're amazing.",
      link: "https://auaccess.auburn.edu"
    },
    {
      title: "Outlook",
      description: "Check yo' email",
      link: "https://outlook.office.com"
    },
    {
      title: "Amazon",
      description: "Shoppin!",
      link: "https://amazon.com"
    },
    {
      title: "Youtube",
      description: "Try guys st00pid!",
      link: "https://youtube.com"
    },
    {
      title: "Instagram",
      description: "May I interest you in a meme?",
      link: "https://instagram.com"
    },
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