// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React from 'react';

const Calculator = (props) => {
  const { calcState, handleClick } = props;
  return (
    <>
      <div className="calcResult">
        {calcState.result}
        {calcState.function}
        {calcState.next}
      </div>
      <div className="calcKeypad">
        <div>
          <button type="button" className="calcBtns" onClick={handleClick}>AC</button>
          <button type="button" className="calcBtns" onClick={handleClick}>+/-</button>
          <button type="button" className="calcBtns" onClick={handleClick}>%</button>
          <button type="button" className="calcBtns calcFunc" onClick={handleClick}>÷</button>
        </div>
        <div>
          <button type="button" className="calcBtns" onClick={handleClick}>7</button>
          <button type="button" className="calcBtns" onClick={handleClick}>8</button>
          <button type="button" className="calcBtns" onClick={handleClick}>9</button>
          <button type="button" className="calcBtns calcFunc" onClick={handleClick}>x</button>
        </div>
        <div>
          <button type="button" className="calcBtns" onClick={handleClick}>4</button>
          <button type="button" className="calcBtns" onClick={handleClick}>5</button>
          <button type="button" className="calcBtns" onClick={handleClick}>6</button>
          <button type="button" className="calcBtns calcFunc" onClick={handleClick}>-</button>
        </div>
        <div>
          <button type="button" className="calcBtns" onClick={handleClick}>1</button>
          <button type="button" className="calcBtns" onClick={handleClick}>2</button>
          <button type="button" className="calcBtns" onClick={handleClick}>3</button>
          <button type="button" className="calcBtns calcFunc" onClick={handleClick}>+</button>
        </div>
        <div>
          <button type="button" className="calcBtns calcZero" onClick={handleClick}>0</button>
          <button type="button" className="calcBtns" onClick={handleClick}>.</button>
          <button type="button" className="calcBtns calcFunc" onClick={handleClick}>=</button>
        </div>
      </div>
    </>
  );
};

Calculator.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  calcState: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Calculator;
