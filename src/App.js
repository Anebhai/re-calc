import "./styles.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState("");

  // handle click
  const handleClick = (e) => {
    setNumber(number.concat(e.target.value));
  };

  // handle clear
  const handleClear = () => {
    setNumber("");
  };

  // handle slice
  const handleClearLastDigit = () => {
    setNumber(number.slice(0, -1));
  };

  // handle answer
  const handleAnswer = () => {
    try {
      setNumber(eval(number).toString());
    } catch (error) {
      setNumber("Invalid");
    }
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="current-operand">{number}</div>
      </div>

      <button className="span-two" onClick={handleClear}>
        AC
      </button>
      <button onClick={handleClearLastDigit}>Del</button>
      <button value="/" onClick={handleClick}>
        ÷
      </button>
      <button value="1" onClick={handleClick}>
        1
      </button>
      <button value="2" onClick={handleClick}>
        2
      </button>
      <button value="3" onClick={handleClick}>
        3
      </button>
      <button value="*" onClick={handleClick}>
        *
      </button>
      <button value="4" onClick={handleClick}>
        4
      </button>
      <button value="5" onClick={handleClick}>
        5
      </button>
      <button value="6" onClick={handleClick}>
        6
      </button>
      <button value="+" onClick={handleClick}>
        +
      </button>
      <button value="7" onClick={handleClick}>
        7
      </button>
      <button value="8" onClick={handleClick}>
        8
      </button>
      <button value="9" onClick={handleClick}>
        9
      </button>
      <button value="-" onClick={handleClick}>
        -
      </button>
      <button value="." onClick={handleClick}>
        .
      </button>
      <button value="0" onClick={handleClick}>
        0
      </button>
      <button onClick={handleAnswer} className="span-two">
        =
      </button>
    </div>
  );
}

export default App;
