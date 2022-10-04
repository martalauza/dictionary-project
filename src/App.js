import logo from "./Logo.png";
import flowers from "./flowers.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={flowers}
            className="App-small-flowers img fluid"
            alt="flowers"
          />
          <img src={flowers} className="App-flowers img fluid" alt="flowers" />
          <img src={logo} className="App-logo img fluid" alt="logo" />
          <img src={flowers} className="App-flowers img fluid" alt="flowers" />
          <img
            src={flowers}
            className="App-small-flowers img fluid"
            alt="flowers"
          />
        </header>
        <main>
          <Dictionary defaultKeyword="travel" />
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            This project was coded by Marta Lauza and is{" "}
            <a href="https://github.com/martalauza/dictionary-project/commits/main">
              open sourced
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
