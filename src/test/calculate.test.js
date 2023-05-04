import calculate from '../logic/calculate';

let calculateEvents = { result: 0, next: 0, function: null };

describe('Add Operation', () => {
  test('4 + 3 should be 7)', () => {
    calculateEvents = calculate(calculateEvents, '4');
    calculateEvents = calculate(calculateEvents, '+');
    calculateEvents = calculate(calculateEvents, '3');
    calculateEvents = calculate(calculateEvents, '=');
    expect(calculateEvents.result).toEqual('7');
  });
});

describe('Substraction', () => {
  test('15 - 7 - 3 should be 5', () => {
    calculateEvents = calculate(calculateEvents, '15');
    calculateEvents = calculate(calculateEvents, '-');
    calculateEvents = calculate(calculateEvents, '7');
    calculateEvents = calculate(calculateEvents, '-');
    calculateEvents = calculate(calculateEvents, '3');
    calculateEvents = calculate(calculateEvents, '=');
    expect(calculateEvents.result).toEqual('5');
  });
});

describe('Multiplication', () => {
  test('2 x 5 x 3 should be 30', () => {
    calculateEvents = calculate(calculateEvents, '2');
    calculateEvents = calculate(calculateEvents, 'x');
    calculateEvents = calculate(calculateEvents, '5');
    calculateEvents = calculate(calculateEvents, 'x');
    calculateEvents = calculate(calculateEvents, '3');
    calculateEvents = calculate(calculateEvents, '=');
    expect(calculateEvents.result).toEqual('30');
  });
});

describe('All Clear (AC) ', () => {
  test('Should left All Clear', () => {
    calculateEvents = calculate(calculateEvents, '10');
    calculateEvents = calculate(calculateEvents, 'x');
    calculateEvents = calculate(calculateEvents, '4');
    calculateEvents = calculate(calculateEvents, 'x');
    calculateEvents = calculate(calculateEvents, '8');
    calculateEvents = calculate(calculateEvents, 'AC');
    expect(calculateEvents.result).toEqual(0);
  });
});

describe('Calculating the module', () => {
  test('10 % 2 = 0', () => {
    calculateEvents = calculate(calculateEvents, '10');
    calculateEvents = calculate(calculateEvents, '%');
    calculateEvents = calculate(calculateEvents, '2');
    calculateEvents = calculate(calculateEvents, '=');
    expect(calculateEvents.result).toEqual('0');
  });
});

describe('Division', () => {
  test('12 ÷ 3 ÷ 2 = 2', () => {
    calculateEvents = calculate(calculateEvents, '12');
    calculateEvents = calculate(calculateEvents, '÷');
    calculateEvents = calculate(calculateEvents, '3');
    calculateEvents = calculate(calculateEvents, '÷');
    calculateEvents = calculate(calculateEvents, '2');
    calculateEvents = calculate(calculateEvents, '=');
    expect(calculateEvents.result).toEqual('2');
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
    calculateEvents = calculate(calculateEvents, '10');
    calculateEvents = calculate(calculateEvents, '=');
    expect(calculateEvents.result).toEqual(undefined);
  });
});
