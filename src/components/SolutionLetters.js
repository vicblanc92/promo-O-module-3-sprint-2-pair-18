const SolutionLetters = (props) => {
  const renderSolutionLetters = () => {
    const wordLetters = props.word.split(""); //para convertir el string en array [k,a,t,a...]
    const htmlArray = wordLetters.map((eachLetter, index) => (
      <li className="letter" key={index}>
        {props.userLetters.includes(eachLetter) ? eachLetter : " "}
      </li>
    ));
  };
  return (
    <div className="solution">
      <h2 className="title">Solución:</h2>

      <ul className="letters">{props.renderSolutionLetters()}</ul>
    </div>
  );
};

export default SolutionLetters;
