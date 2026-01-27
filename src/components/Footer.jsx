
const Footer = ({data, isHomePage}) => {

  return (
    <>
      {data.slice(1).map((item) => {
        return (
          <header className="App-header">
            {isHomePage ? <h1>home</h1> : <></> }
            <img src={""} className="App-logo" alt="logo" />
            <p>{`${item.name}`}</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              ""
            </a>
          </header>
        );
      })}
    </>
  );
};

export default Footer;
