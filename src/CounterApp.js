import { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {

  const [counter, setCounter] = useState(value); // []

  const handleAdd = (e) =>{
    // console.log(e)
    setCounter (counter +1);
    //setCounter( (c) => c+1);
  }

  const handleMinus = (e) =>{
    // console.log(e)
    setCounter (counter -1);
    //setCounter( (c) => c-1);
  }

  const handleReset = (e) =>{
    // console.log(e)
    setCounter (value);
    //setCounter( (c) => c-1);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <p>{counter}</p>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleMinus}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
