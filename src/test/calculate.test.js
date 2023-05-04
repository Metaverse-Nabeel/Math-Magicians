import calculate from '../logic/calculate';

let calculatorEvents = { result: 0, next: 0, function: null };

describe('Add Operation', () => {
  test('4 + 3 should be 7)', () => {
    calculatorEvents = calculate(calculatorEvents, '4');
    calculatorEvents = calculate(calculatorEvents, '+');
    calculatorEvents = calculate(calculatorEvents, '3');
    calculatorEvents = calculate(calculatorEvents, '=');
    expect(calculatorEvents.result).toEqual('7');
  });
});

describe('Substraction', () => {
  test('15 - 7 - 3 should be 5', () => {
    calculatorEvents = calculate(calculatorEvents, '15');
    calculatorEvents = calculate(calculatorEvents, '-');
    calculatorEvents = calculate(calculatorEvents, '7');
    calculatorEvents = calculate(calculatorEvents, '-');
    calculatorEvents = calculate(calculatorEvents, '3');
    calculatorEvents = calculate(calculatorEvents, '=');
    expect(calculatorEvents.result).toEqual('5');
  });
});

describe('Multiplication', () => {
  test('2 x 5 x 3 should be 30', () => {
    calculatorEvents = calculate(calculatorEvents, '2');
    calculatorEvents = calculate(calculatorEvents, 'x');
    calculatorEvents = calculate(calculatorEvents, '5');
    calculatorEvents = calculate(calculatorEvents, 'x');
    calculatorEvents = calculate(calculatorEvents, '3');
    calculatorEvents = calculate(calculatorEvents, '=');
    expect(calculatorEvents.result).toEqual('30');
  });
});

describe('All Clear (AC) ', () => {
  test('Should left All Clear', () => {
    calculatorEvents = calculate(calculatorEvents, '10');
    calculatorEvents = calculate(calculatorEvents, 'x');
    calculatorEvents = calculate(calculatorEvents, '4');
    calculatorEvents = calculate(calculatorEvents, 'x');
    calculatorEvents = calculate(calculatorEvents, '8');
    calculatorEvents = calculate(calculatorEvents, 'AC');
    expect(calculatorEvents.result).toEqual(0);
  });
});

describe('Calculating the module', () => {
  test('10 % 2 = 0', () => {
    calculatorEvents = calculate(calculatorEvents, '10');
    calculatorEvents = calculate(calculatorEvents, '%');
    calculatorEvents = calculate(calculatorEvents, '2');
    calculatorEvents = calculate(calculatorEvents, '=');
    expect(calculatorEvents.result).toEqual('0');
  });
});

describe('Division', () => {
  test('12 ÷ 3 ÷ 2 = 2', () => {
    calculatorEvents = calculate(calculatorEvents, '12');
    calculatorEvents = calculate(calculatorEvents, '÷');
    calculatorEvents = calculate(calculatorEvents, '3');
    calculatorEvents = calculate(calculatorEvents, '÷');
    calculatorEvents = calculate(calculatorEvents, '2');
    calculatorEvents = calculate(calculatorEvents, '=');
    expect(calculatorEvents.result).toEqual('2');
  });
});

describe('Invert the value', () => {
  test('8 to be -8', () => {
    const number = { next: '8' };
    const buttonName = '+/-';
    const operation = calculate(number, buttonName);
    const result = { next: '-8' };
    expect(operation).toEqual(result);
  });
});

describe('Return nothing when the input is not completed', () => {
  test('Only 10 as input then press = -> Returns Undefined', () => {
    calculatorEvents = calculate(calculatorEvents, '10');
    calculatorEvents = calculate(calculatorEvents, '=');
    expect(calculatorEvents.result).toEqual(undefined);
  });
});
