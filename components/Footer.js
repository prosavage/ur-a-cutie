function Footer(props) {
    return <>
        <footer>
            <a
                href="https://github.com/ProSavage/ur-a-cutie"
                target="_blank"
                rel="noopener noreferrer"
            >
                <code className={`${props.dark ? "dark-code" : ""}`}>
                    project ur-a-cutie
                </code>
            </a>
        </footer>
        <style jsx>{`
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

            code {
                color: black;
                background: #fafafa;
                border-radius: 5px;
                padding: 0.75rem;
                font-size: 1.1rem;
                font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        `}</style>
    </>
}

export default Footer;