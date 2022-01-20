import "../styles/App.scss";
import { useState } from "react";
import Header from "./Header";
import HangmanError from "./HangmanError";
import SolutionLetters from "./SolutionLetters";

function App() {
  //Variables de estado
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [word, setWord] = useState("katakroker");
  const [lastLetter, setLastLetter] = useState("");
  const [userLetters, setUserLetters] = useState([]);

  const increment = () => {
    setNumberOfErrors(numberOfErrors + 1);
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split(""); //para convertir el string en array [k,a,t,a...]
    const htmlArray = wordLetters.map((eachLetter, index) => (
      <li className="letter" key={index}>
        {userLetters.includes(eachLetter) ? eachLetter : " "}
      </li>
    ));
    return htmlArray;
  };

  const renderErrorLetters = () => {
    const wordLetters = word.split(""); //para convertir el string en array [k,a,t,a...]
    const htmlArray = userLetters.filter(
      (eachLetter) => word.includes(eachLetter) === false
    );
    return htmlArray.map((eachLetter, index) => {
      return (
        <li className="letter" key={index}>
          {eachLetter}
        </li>
      );
    });
  };

  // return htmlArray;

  const handleInput = (ev) => {
    const letterToCompare = ev.currentTarget.value;
    const patternSpanish = /^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ]?$/;

    if (letterToCompare.match(patternSpanish)) {
      setLastLetter(letterToCompare);
      setUserLetters([...userLetters, letterToCompare]);
    } else alert("Letra no válida");
    increment();
    //setLastLetter('');
  };

  return (
    <div className="App">
      <div className="page">
        <Header> </Header>
        <main className="main">
          <section>
            <SolutionLetters
              word={word}
              userLetters={userLetters}
              renderSolutionLetters={renderSolutionLetters}
            ></SolutionLetters>
            <div className="error">
              <h2 className="title">Letras falladas:</h2>
              <ul className="letters">{renderErrorLetters()}</ul>
            </div>

            <form className="form">
              <label className="title" htmlFor="last-letter">
                Escribe una letra:
              </label>
              <input
                onChange={handleInput}
                value={lastLetter}
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
              />
            </form>
          </section>
          <HangmanError numberOfErrors={numberOfErrors}></HangmanError>
        </main>
      </div>
    </div>
  );
}

export default App;
