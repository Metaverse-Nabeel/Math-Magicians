import React from 'react';

export default function CalculatorBtns() {
  return (
    <>
      <div className="calcResult">0</div>
      <div className="calcKeypad">
        <div>
          <button type="button" className="calcBtns">AC</button>
          <button type="button" className="calcBtns">+/-</button>
          <button type="button" className="calcBtns">%</button>
          <button type="button" className="calcBtns calcFunc">÷</button>
        </div>
        <div>
          <button type="button" className="calcBtns">7</button>
          <button type="button" className="calcBtns">8</button>
          <button type="button" className="calcBtns">9</button>
          <button type="button" className="calcBtns calcFunc">x</button>
        </div>
        <div>
          <button type="button" className="calcBtns">4</button>
          <button type="button" className="calcBtns">5</button>
          <button type="button" className="calcBtns">6</button>
          <button type="button" className="calcBtns calcFunc">-</button>
        </div>
        <div>
          <button type="button" className="calcBtns">1</button>
          <button type="button" className="calcBtns">2</button>
          <button type="button" className="calcBtns">3</button>
          <button type="button" className="calcBtns calcFunc">+</button>
        </div>
        <div>
          <button type="button" className="calcBtns calcZero">0</button>
          <button type="button" className="calcBtns">.</button>
          <button type="button" className="calcBtns calcFunc"> =</button>
        </div>
      </div>
    </>
  );
}
