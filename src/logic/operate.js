// eslint-disable-next-line import/no-extraneous-dependencies
import Big from 'big.js';

const operate = (firstNumber, secondNumber, funct) => {
  const first = Big(firstNumber);
  const second = Big(secondNumber);
  if (funct === '+') {
    return first.plus(second).toString();
  }
  if (funct === '-') {
    return first.minus(second).toString();
  }
  if (funct === 'x') {
    return first.times(second).toString();
  }
  if (funct === '÷') {
    try {
      return first.div(second).toString();
    } catch (error) {
      return 'Division by 0 is not allowed';
    }
  }
  if (funct === '%') {
    try {
      return first.mod(second).toString();
    } catch (error) {
      return 'Modulus not possible as division by 0';
    }
  }
  return true;
};

export default operate;
